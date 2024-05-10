<script setup>
import {ref} from "vue";
import {useToast} from "vue-toastification";
import router from "../../router.js";
import AuthService from "../../services/AuthService.js";
import {useDisableAutocomplete} from "../../utils/diableAutocompleteTrait.js";

const username = ref('admin');
const password = ref('admin');

useDisableAutocomplete();
const toast = useToast();

const login = () => {
  AuthService.login(username.value, password.value).then(response => {
    localStorage.setItem('token', response.access_token);
    router.push('/home')
  }).catch(() => {
    toast.error('Přihlášení se nezdařilo');
  });
}

</script>

<template>
  <div class="min-h-full flex items-center justify-center">
    <div class="min-w-96 bg-base-300/50 p-8 rounded shadow-md text-base-content">
      <div class="text-2xl font-semibold mb-6">Administrace</div>

      <!-- Form -->
      <form @submit.prevent="login">
        <!-- Username Input -->
        <div class="mb-4 w-full">
          <label class="block mb-1" for="username">Přihlašovací jméno:</label>

          <input id="username" class="input input-bordered w-full"
                 type="text" autofocus placeholder="" autocomplete="off"
                 v-model="username" required/>
        </div>

        <div class="mb-4 w-full">
          <label class="block mb-1" for="username">Heslo:</label>

          <input id="password" class="input input-bordered w-full"
                 type="password" placeholder="" autocomplete="off"
                 v-model="password" required/>
        </div>

        <!-- Submit Button -->
        <button type="submit" class="btn btn-primary w-full">
          Přihlásit
        </button>
      </form>
    </div>
  </div>
</template>