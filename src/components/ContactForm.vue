<template>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Name:</label>
        <input id="name" v-model="contact.name" type="text" required>
      </div>
      <div>
        <label for="email">Email:</label>
        <input id="email" v-model="contact.email" type="email" required>
      </div>
      <div>
        <label for="address">Address:</label>
        <input id="address" v-model="contact.address" type="address" required>
      </div>
      <div>
        <label for="phone">Phone:</label>
        <input id="phone" v-model="contact.phone" type="phone" required>
      </div>
      <div>
        <label for="category">Category:</label>
        <input id="category" v-model="contact.category" type="category" required>
      </div>
      <!-- Add more fields for address, phone number, and category -->
      <button type="submit">Save Contact</button>
    </form>
  </template>
  
  <script>
  // Import the local storage utility functions
  import { fetchContacts, saveContacts } from '@/utils/storage';
  
  export default {
    name: 'ContactForm',
    // If you're using Vue Router's props feature for passing the ID, declare the prop
    props: ['id'],
    data() {
      return {
        // Initialize your contact object with all necessary fields
        contact: { id: null, name: '', email: '', phone: '', address: '', category: '' },
      };
    },
    mounted() {
      // If an ID is passed, this is an edit operation. Fetch the contact to edit.
      if (this.id) {
        const contacts = fetchContacts();
        // Find the contact by ID and load its data into the form
        this.contact = contacts.find(c => c.id === this.id) || this.contact;
      }
    },
    methods: {
      submitForm() {
        let contacts = fetchContacts();
        if (this.contact.id) {
          // Update operation: find the existing contact by ID and update its details
          contacts = contacts.map(c => c.id === this.contact.id ? this.contact : c);
        } else {
          // Add operation: generate a new ID for the contact and add it to the contacts array
          this.contact.id = Date.now().toString(); // Simple way to generate a unique ID
          contacts.push(this.contact);
        }
        // Persist the updated contacts list to local storage
        saveContacts(contacts);
        // Redirect the user to the contacts list view after saving the contact
        this.$router.push('/');
      }
    }
  };
  </script>
  
  