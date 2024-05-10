<script setup>
const frontendPackages = [
  {
    name: 'Tailwind CSS', url: 'https://tailwindcss.com/docs', link: 'tailwindcss.com',
    description: 'Tailwind CSS je moderní CSS framework, který umožňuje rychle a jednoduše vytvářet responzivní webové stránky pomocí utility tříd.'
  }, {
    name: 'Daisy UI', url: 'https://daisyui.com/docs', link: 'daisyui.com',
    description: 'DaisyUI je doplněk pro Tailwind CSS, který poskytuje sadu estetických komponent pro rychlé vytváření uživatelského rozhraní.'
  }, {
    name: 'Headless UI', url: 'https://headlessui.com/v1/vue', link: 'headlessui.com',
    description: 'Headless UI je soubor nepředstavených komponent pro React, Vue a Angular navržených pro vývojáře, kteří chtějí plnou kontrolu nad designem a interakcí svých uživatelských rozhraní.'
  }, {
    name: 'Material Design Icons', url: 'https://pictogrammers.com/library/mdi/', link: 'pictogrammers.com',
    description: 'Material Design Icons jsou sada více než 5000 ikon vycházejících z designového jazyka Material Design od Google, které mohou být použity pro obohacení uživatelských rozhraní aplikací a webových stránek.'
  }, {
    name: '@vuepic/vue-datepicker', url: 'https://vue3datepicker.com/', link: 'vue3datepicker.com',
    description: 'Vue Datepicker je komponenta pro výběr data ve frameworku Vue.js, umožňující uživatelům snadno vybírat datumy pomocí kalendáře nebo jiných interaktivních prvků.'
  }, {
    name: 'jwt-decode', url: 'https://github.com/auth0/jwt-decode', link: 'github.com',
    description: 'jwt-decode je knihovna pro dekódování JSON Web Tokenů (JWT) v prohlížeči, která umožňuje získat informace o uživateli uložené v JWT.'
  }, {
    name: 'lodash.debounce', url: 'https://github.com/lodash/lodash', link: 'github.com',
    description: 'lodash.debounce je funkce z knihovny Lodash, která umožňuje omezit počet volání funkce na základě času mezi jednotlivými voláními. Vhodné pro vyhledávání, filtrování a jiné interaktivní prvky.'
  }, {
    name: 'mitt', url: 'https://github.com/developit/mitt', link: 'github.com',
    description: 'mitt je malá knihovna pro správu událostí v JavaScriptu, která poskytuje jednoduché API pro publikování a odběr událostí v aplikacích.'
  }, {
    name: 'pinia', url: 'https://pinia.vuejs.org/', link: 'pinia.vuejs.org',
    description: 'Pinia je nový stavový management pro Vue 3, který poskytuje jednoduché a výkonné API pro správu stavu aplikace pomocí Vue Composition API.'
  }, {
    name: 'pinia-plugin-persistedstate', url: 'https://prazdevs.github.io/pinia-plugin-persistedstate/', link: 'prazdevs.github.io',
    description: 'pinia-plugin-persistedstate je oficiální plugin pro Pinia, který umožňuje ukládat stav aplikace do lokálního úložiště pro zachování stavu mezi obnoveními stránky.'
  }, {
    name: 'vue-multiselect', url: 'https://vue-multiselect.js.org/#sub-getting-started', link: 'vue-multiselect.js.org',
    description: 'Vue Multiselect je komponenta pro výběr více hodnot ve Vue.js aplikacích, která poskytuje mnoho možností pro nastavení a konfiguraci.'
  }, {
    name: 'vue-router', url: 'https://github.com/vuejs/router', link: 'github.com',
    description: 'Vue Router je oficiální knihovna pro routování ve Vue.js aplikacích, která poskytuje jednoduché API pro vytváření a správu navigace mezi jednotlivými stránkami.'
  }, {
    name: 'vue-toastification', url: 'https://vue-toastification.maronato.dev/', link: 'vue-toastification.maronato.dev',
    description: 'Vue Toastification je knihovna pro zobrazování notifikací ve Vue.js aplikacích, která poskytuje mnoho možností pro nastavení vzhledu a chování notifikací.'
  }, {
    name: 'vue3-slide-up-down', url: 'https://github.com/evo-mark/vue3-slide-up-down', link: 'github.com',
    description: 'Vue3 Slide Up Down je komponenta pro animované zobrazování a skrývání obsahu ve Vue 3 aplikacích, která poskytuje jednoduché API pro ovládání animací.'
  }, {
    name: 'vuejs-confirm-dialog', url: 'https://www.npmjs.com/package/vuejs-confirm-dialog', link: 'npmjs.com',
    description: 'Vuejs Confirm Dialog je knihovna pro zobrazování potvrzovacích dialogů ve Vue.js aplikacích, která poskytuje jednoduché API pro zobrazení dialogů s možností potvrzení nebo zrušení.'
  }
];

const backendPackages = [
  {
    name: 'elegantweb/sanitizer', url: 'https://github.com/elegantweb/sanitizer', link: 'github.com',
    description: 'Sanitizer je PHP knihovna pro filtrování a validaci vstupních dat, která poskytuje jednoduché API pro ošetření vstupních dat před uložením do databáze.'
  }, {
    name: 'tymon/jwt-auth', url: 'https://github.com/tymondesigns/jwt-auth', link: 'github.com',
    description: 'JWT Auth je oficiální knihovna pro autentizaci pomocí JSON Web Tokenů (JWT) v Laravel aplikacích, která poskytuje jednoduché API pro správu uživatelů a přihlašování.'
  }, {
    name: 'barryvdh/laravel-debugbar', url: 'https://github.com/barryvdh/laravel-debugbar', link: 'github.com',
    description: 'Laravel Debugbar je knihovna pro zobrazování debugovacích informací v Laravel aplikacích, která poskytuje informace o dotazech na databázi, výkonu aplikace a dalších užitečných informacích.'
  }
];
</script>

<template>
  <div class="px-5 py-5">
    <h1 class="text-3xl mb-3">O aplikaci</h1>
    <p>
      Laravel - Vue boilerplate s předinstalovanými základními knihovnami a komponentami pro rychlý vývoj webových aplikací.
    </p>
    <h3 class="text-xl my-3 font-bold">Předinstalované balíčky (frontend):</h3>
    <table class="table">
      <tr v-for="frontendPackage of frontendPackages" :key="frontendPackage.name">
        <td>
          <span class="font-bold">{{ frontendPackage.name }}:</span><br/>
          <a :href="frontendPackage.url" class="text-primary hover:underline" target="_blank">{{ frontendPackage.link }}</a>
        </td>
        <td>{{ frontendPackage.description }}</td>
      </tr>
    </table>
    <h3 class="text-xl my-3 font-bold">Předinstalované balíčky (backend):</h3>
    <table class="table">
      <tr v-for="backendPackage of backendPackages" :key="backendPackage.name">
        <td>
          <span class="font-bold">{{ backendPackage.name }}:</span><br/>
          <a :href="backendPackage.url" class="text-primary hover:underline" target="_blank">{{ backendPackage.link }}</a>
        </td>
        <td>{{ backendPackage.description }}</td>
      </tr>
    </table>
  </div>
</template>