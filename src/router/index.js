// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import ContactList from '@/components/ContactList.vue';
import ContactDetails from '@/components/ContactDetails.vue';
import ContactForm from '@/components/ContactForm.vue';

// Define routes
const routes = [
  {
    path: '/',
    name: 'ContactList',
    component: ContactList,
  },
  {
    path: '/contact/:id',
    name: 'ContactDetails',
    component: ContactDetails,
    props: true,
  },
  {
    path: '/edit/:id?',
    name: 'ContactForm',
    component: ContactForm,
    props: true,
  },
  {
    path: '/update/:id',
    name: 'ContactUpdate',
    component: () => import('@/components/ContactUpdateForm.vue'),
    props: true
  }
  
];

// Create router instance
const router = createRouter({
  // Use Web History API
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
