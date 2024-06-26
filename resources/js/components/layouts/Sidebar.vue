<script setup>
import SidebarItem from "./SidebarItem.vue";

import {computed, onMounted, ref} from 'vue';
import {basicStore} from '../../store/basicStore';
import MobileSidebar from "./MobileSidebar.vue";
import {Vue3SlideUpDown} from "vue3-slide-up-down";
import {useRoute} from "vue-router";

const basicStoreInfo = basicStore();
const show = ref(true)
const route = useRoute();

const toggleSidebar = () => {
  basicStoreInfo.showSideBar = !basicStoreInfo.showSideBar;
}

const showSideBar = computed(() => basicStoreInfo.showSideBar)

onMounted(() => {
  show.value = basicStoreInfo.showSideBar;
})
const sidebarItems = ref([
  {
    name: 'Domů',
    icon: 'mdi-home',
    to: 'Home',
    active: 'home'
  }, {
    name: 'Nastavení',
    icon: 'mdi-cog',
    to: 'GeneralSettings',
    active: 'settings',
    submenu: [
      {
        name: 'Nastavení 1',
        icon: 'mdi-numeric-1-circle',
        to: 'SettingsOne',
        active: 'settings/one'
      }, {
        name: 'Nastavení 2',
        icon: 'mdi-numeric-2-circle',
        to: 'SettingsTwo',
        active: 'settings/two'
      }
    ],
    submenuVisible: route.path.match('settings') !== null,
  }, {
    name: 'O aplikaci',
    icon: 'mdi-information',
    to: 'About',
    active: 'about'
  }
]);
</script>

<template>
  <!-- desktop sidebar  -->
  <div
      class="bg-base-300 text-light-grey h-screen hidden w-full md:block md:fixed md:top-0 md:bottom-0 md:z-20 md:pt-[68px]"
      :class="[showSideBar ? 'md:w-64' : 'md:w-16']">
    <div class="flex items-center" :class="{'justify-end mr-2': showSideBar, 'justify-center': !showSideBar}">
      <span class="mdi mdi-chevron-left text-3xl text-gray-500 hover:text-gray-50 cursor-pointer"
            v-if="showSideBar" @click="toggleSidebar"></span>
      <span class="mdi mdi-chevron-right text-3xl text-gray-500 hover:text-gray-50 cursor-pointer"
            v-if="!showSideBar" @click="toggleSidebar"></span>
    </div>

    <div class="w-full h-full no-scrollbar">
      <nav class="relative mb-24">
        <div v-for="item in sidebarItems" :key="item.name">
          <SidebarItem :to="item.to"
                       :class="{['router-link-active router-link-exact-active text-primary-content']: $route.path.match(item.active) !== null, 'dropdown': !showSideBar && item.submenu}">
            <ul v-if="item.submenu" class="dropdown-menu min-w-max absolute right-0 translate-x-full bg-base-300 text-base-content hidden">
              <li v-for="subItem in item.submenu" :key="subItem.name" class="">
                <SidebarItem :to="subItem.to"
                             :class="{['router-link-active router-link-exact-active text-primary-content']: $route.path.match(subItem.active) !== null}">
                  <div class="flex items-center sidebar-item">
                    <div :class="['mdi', subItem.icon, 'text-xl', 'mr-3']"></div>
                    <div>{{ subItem.name }}</div>
                  </div>
                </SidebarItem>
              </li>
            </ul>
            <div class="flex justify-start items-center gap-2 relative">
              <div class="w-10 h-10 flex items-center justify-center">
                <span :class="['mdi', item.icon, 'text-3xl']"></span>
              </div>
              <span class="sidebar-item" :class="[showSideBar ? 'block' : 'hidden']">
                {{ item.name }}
              </span>
            </div>
            <button v-if="item.submenu && showSideBar" @click.prevent="item.submenuVisible = !item.submenuVisible" class="btn btn-ghost btn-square">
              <span :class="item.submenuVisible ? 'mdi-chevron-up' : 'mdi-chevron-down'" class="mdi text-lg"></span>
            </button>
          </SidebarItem>
          <Vue3SlideUpDown v-if="showSideBar" v-model="item.submenuVisible" :duration="250">
            <div v-if="item.submenu && item.submenuVisible" :class="[showSideBar ? 'ml-8 border-l-2 border-slate-600' : '']">
              <div v-for="subItem in item.submenu" :key="subItem.name">
                <SidebarItem :to="subItem.to"
                             :class="{['router-link-active router-link-exact-active text-primary-content']: $route.path.match(subItem.active) !== null}">
                  <div class="flex items-center sidebar-item" :class="[showSideBar ? 'block' : 'hidden']">
                    <div :class="['mdi', subItem.icon, 'text-xl', 'mr-3']"></div>
                    <div>{{ subItem.name }}</div>
                  </div>
                </SidebarItem>
              </div>
            </div>
          </Vue3SlideUpDown>
        </div>
      </nav>
    </div>
  </div>
  <!-- /desktop sidebar -->

  <!-- mobile side bar -->
  <MobileSidebar :sidebar-items="sidebarItems"/>
  <!-- /mobile side bar -->
</template>

<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.dropdown:hover .dropdown-menu {
  display: block;
}
</style>