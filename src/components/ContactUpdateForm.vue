<template>
    <form @submit.prevent="submitUpdate">
      <!-- Form fields populated with the contact's current details -->
      <div>
      <label for="name">Name:</label>
      <input id="name" v-model="contact.name" type="text">
    </div>
    <div>
      <label for="email">Email:</label>
      <input id="email" v-model="contact.email" type="email">
    </div>
    <div>
      <label for="address">Address:</label>
      <input id="address" v-model="contact.address" type="text">
    </div>
    <div>
      <label for="phone">Phone:</label>
      <input id="phone" v-model="contact.phone" type="text">
    </div>
    <div>
      <label for="category">Category:</label>
      <input id="category" v-model="contact.category" type="text">

    </div>
      <button @click="submitUpdate">Save Changes</button>
    </form>
  </template>
  
  <script>
  import { fetchContacts, saveContacts } from '@/utils/storage';
  
  export default {
    props: ['id'],
    data() {
      return {
    // Ensure contact is initialized to prevent access to undefined properties
    contact: {
      id: '',
      name: '',
      email: '',
      address: '',
      phone: '',
      category: ''
    }
  };
    },
    mounted() {
      this.loadContact();
    },
    methods: {
      loadContact() {
  const contacts = fetchContacts();
  const foundContact = contacts.find(contact => contact.id.toString() === this.id);
  console.log(foundContact); // Debug: Log found contact
  if (foundContact) {
    this.contact = { ...foundContact };
  } else {
    console.error('Contact not found');
    this.$router.push('/');
  }
},

      submitUpdate() {
    // Assuming `contacts` is an array of all contacts and `this.contact` is the updated contact
    const contacts = fetchContacts();
    const index = contacts.findIndex(c => c.id === this.contact.id);
    if (index !== -1) {
      contacts[index] = this.contact; // Update the contact in the array
      saveContacts(contacts); // Persist the updated array to storage
      this.$router.push({ name: 'ContactDetails', params: { id: this.contact.id }}); // Navigate to the updated contact's details view
    } else {
      console.error('Contact not found');
      // Handle the error case
    }
  },
    },
  };
  </script>
  