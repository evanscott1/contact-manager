<template>
    <div>
      <h1>Contact List</h1>
      <!-- List contacts here -->
      <ul>
        <li v-for="contact in contacts" :key="contact.id">
          {{ contact.name }} - <button @click="viewDetails(contact.id)">View Details</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  // Import the necessary functions from your storage utility
  import { fetchContacts, saveContacts } from '@/utils/storage';
  
  export default {
    name: 'ContactList',
    data() {
      return {
        // Initialize the contacts array to be filled with the fetched contacts
        contacts: []
      };
    },
    created() {
      // Load contacts from local storage when the component is created
      this.contacts = fetchContacts();
    },
    methods: {
      viewDetails(contactId) {
        // Navigate to the ContactDetails view, passing the contact ID as a parameter
        this.$router.push({ name: 'ContactDetails', params: { id: contactId } });
      },
      deleteContact(contactId) {
        // Confirm before deleting
        if (confirm("Are you sure you want to delete this contact?")) {
          // Filter out the contact to delete
          const updatedContacts = this.contacts.filter(contact => contact.id !== contactId);
          // Save the updated contacts list back to local storage
          saveContacts(updatedContacts);
          // Update the local contacts array to reflect the change
          this.contacts = updatedContacts;
        }
      }
    }
  };
  </script>
  
  