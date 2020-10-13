<template>
  <div id="app">
    <router-view
    v-on:closeNotif="closeNotif($event)"
    v-on:openNotif="openNotif($event)"/>
    <Notif
    v-show="notifActive"
    v-on:closeNotif="closeNotif($event)"/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Notif from './components/_base/Notif'

export default {
  name: 'App',
  components: {
    Notif
  },
  computed: {
    ...mapGetters({
      token: 'token'
      // notifActive: 'notifActive'
    })
  },
  data () {
    return {
      notifActive: false
    }
  },
  methods: {
    ...mapActions(['interceptorsRequest', 'interceptorsResponse']),

    closeNotif () {
      this.notifActive = false
    },
    openNotif () {
      this.notifActive = true
    }
  },
  created () {
    this.interceptorsRequest()
    this.interceptorsResponse()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
