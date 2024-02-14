<template>
  <div>
    <h1>Contact Details</h1>
    <!-- Only display contact details if contact is not null -->
    <div v-if="contact">
      <p>Name: {{ contact.name }}</p>
      <p>Email: {{ contact.email }}</p>
      <p>Address: {{ contact.address }}</p>
      <p>Phone: {{ contact.phone }}</p>
      <p>Category: {{ contact.category }}</p>
      <!-- Display other details like address, phone, category -->
      <h1>Options</h1>
      <button @click="goToUpdateForm">Update Contact</button>
      <br><br>
      <button @click="deleteContact">Delete Contact</button>
    </div>
    <div v-else>
      <p>Contact not found or loading...</p>
    </div>
  </div>
  </template>

  
  <script>
  import { fetchContacts, saveContacts } from '@/utils/storage'; // Adjust the path as necessary
  
  export default {
    name: 'ContactDetails',
    data() {
      return {
        contact: null // Initialize contact as null
      };
    },
    mounted() {
      this.loadContact();
    },
    methods: {
      loadContact() {
        // Fetch the contact ID from the route parameters
        const contactId = this.$route.params.id;
        // Fetch all contacts from local storage
        const contacts = fetchContacts();
        // Find the specific contact by ID
        this.contact = contacts.find(contact => contact.id.toString() === contactId);
        // Handle case where contact is not found
        if (!this.contact) {
          alert('Contact not found!');
          // Optionally, redirect back to the contact list
          this.$router.push('/');
        }
      },
      deleteContact() {
      if (confirm("Are you sure you want to delete this contact?")) {
        let contacts = fetchContacts();
        contacts = contacts.filter(contact => contact.id !== this.contact.id);
        saveContacts(contacts);
        this.$router.push('/'); // Navigate back to the list or a confirmation page
      }
      },
      goToUpdateForm() {
      this.$router.push({ name: 'ContactUpdate', params: { id: this.contact.id } });
    }
    }
  };
  </script>
  
  