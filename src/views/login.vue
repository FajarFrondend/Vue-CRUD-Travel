<template>
    <div>
      <h1>Login</h1>
      <form @submit.prevent="login">
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      async login() {
        try {
          const response = await axios.post('/auth/login', {
            email: this.email,
            password: this.password
          });
          localStorage.setItem('token', response.data.token);
          this.$router.push('/dashboard');
        } catch (error) {
          console.error(error);
        }
      }
    }
  };
  </script>
  