<template>
  <v-container class="fill-height">
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="4">
        <v-card>
          <v-card-title class="headline grey lighten-2">
            Login
          </v-card-title>
          <v-card-text>
            <v-form @submit.prevent="login">
              <v-text-field v-model="form.email" label="Email" outlined></v-text-field>
              <v-text-field v-model="form.password" label="Password" outlined type="password"></v-text-field>
              <v-btn type="submit" color="primary" block>Login</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const form = ref({
      email: '',
      password: ''
    });

    const login = () => {
      console.log('Email:', form.value.email);
      console.log('Password:', form.value.password);
      // You can send login request to your backend here
    };

    return {
      form,
      login
    };
  }
}
</script>

<style>
.fill-height {
  height: 100%;
}
</style>
