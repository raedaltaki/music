<template>

  <app-header />

  <router-view></router-view>

  <app-player />

  <AuthModal />

</template>

<script>
import AppPlayer from '@/components/AppPlayer.vue';
import AppHeader from './components/AppHeader.vue';
import AuthModal from './components/AuthModal.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AuthModal,
    AppPlayer,
  },
  created() {
    this.$store.dispatch('init_login');
  },
};
</script>
