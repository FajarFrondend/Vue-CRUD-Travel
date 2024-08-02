<template>
  <div>
    <h1>Bookings</h1>
    <form @submit.prevent="editingBookingId ? updateBooking() : createBooking()">
      <input v-model="newBooking.name" type="text" placeholder="Name" required />
      <input v-model="newBooking.tanggal" type="date" placeholder="Tanggal" required />
      <input v-model="newBooking.alamatJemput" type="text" placeholder="Alamat Jemput" required />
      <input v-model="newBooking.alamatTujuan" type="text" placeholder="Alamat Tujuan" required />
      <button type="submit">{{ editingBookingId ? 'Update Booking' : 'Add Booking' }}</button>
    </form>
    <ul>
      <li v-for="booking in bookings" :key="booking._id">
        {{ booking.name }} - {{ booking.tanggal }}
        <button @click="editBooking(booking)">Edit</button>
        <button @click="deleteBooking(booking._id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      bookings: [],
      newBooking: {
        name: '',
        tanggal: '',
        alamatJemput: '',
        alamatTujuan: ''
      },
      editingBookingId: null
    };
  },
  methods: {
    async fetchBookings() {
      try {
        const token = localStorage.getItem('token'); // Dapatkan token dari localStorage
        const response = await axios.get('http://localhost:3001/api/bookings', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        this.bookings = response.data;
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    },
    async createBooking() {
      try {
        const token = localStorage.getItem('token'); // Dapatkan token dari localStorage
        const response = await axios.post('http://localhost:3001/api/bookings', this.newBooking, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        this.bookings.push(response.data);
        this.newBooking = { name: '', tanggal: '', alamatJemput: '', alamatTujuan: '' };
      } catch (error) {
        console.error('Error creating booking:', error);
      }
    },
    editBooking(booking) {
      this.newBooking = { ...booking };
      this.editingBookingId = booking._id;
    },
    async updateBooking() {
      try {
        const token = localStorage.getItem('token'); // Dapatkan token dari localStorage
        const response = await axios.put(`http://localhost:3001/api/bookings/${this.editingBookingId}`, this.newBooking, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const index = this.bookings.findIndex(booking => booking._id === this.editingBookingId);
        this.bookings.splice(index, 1, response.data);
        this.newBooking = { name: '', tanggal: '', alamatJemput: '', alamatTujuan: '' };
        this.editingBookingId = null;
      } catch (error) {
        console.error('Error updating booking:', error);
      }
    },
    async deleteBooking(id) {
      try {
        const token = localStorage.getItem('token'); // Dapatkan token dari localStorage
        await axios.delete(`http://localhost:3001/api/bookings/${id}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        this.bookings = this.bookings.filter(booking => booking._id !== id);
        console.log(`Booking with id: ${id} removed`);
      } catch (error) {
        console.error('Error deleting booking:', error);
      }
    }
  },
  created() {
    this.fetchBookings();
  }
};
</script>

<style scoped>
/* Gaya CSS Anda */
</style>
