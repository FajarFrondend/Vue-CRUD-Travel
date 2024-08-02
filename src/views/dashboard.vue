<template>
  <div>
    <h1>Dashboard</h1>
    <p v-if="user">Welcome, {{ user.name }}!</p>
    <button @click="logout">Logout</button>
    <div>
      <h2>Your Bookings</h2>
      <ul>
        <li v-for="booking in bookings" :key="booking._id">
          {{ booking.name }} - {{ booking.tanggal }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Dashboard',

  data() {
    return {
      user: null,
      bookings: []
    };
  },

  async created() {
    await this.fetchUserData();
    await this.fetchBookings();
  },

  methods: {
    async fetchUserData() {
      try {
        const token = localStorage.getItem('token'); // Atau dari mana pun Anda menyimpan token

        const response = await axios.get('http://localhost:3001/api/auth/me', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        this.user = response.data;
        console.log('User data:', response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    },

    async fetchBookings() {
      try {
        const token = localStorage.getItem('token'); // Atau dari mana pun Anda menyimpan token

        const response = await axios.get('http://localhost:3001/api/bookings', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        this.bookings = response.data;
        console.log('Bookings:', response.data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    },

    logout() {
      localStorage.removeItem('token');
      this.$router.push('/login'); // Redirect ke halaman login atau sesuai dengan rute Anda
    }
  }
};
</script>

<style scoped>
/* Gaya CSS Anda */
</style>
