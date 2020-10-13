<template>
  <div class="notif">
    <div class="close" @click="closeNotif">
      <i class="fas fa-window-close"></i>
    </div>
    <div class="message">
      <h4>{{ notif }}</h4>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Notif',
  data () {
    return {}
  },
  computed: {
    ...mapGetters({
      notif: 'notif'
    })
  },
  methods: {
    ...mapActions(['getNotif']),
    ...mapActions(['getNotifActive']),
    closeNotif () {
      this.$emit('closeNotif', false)
    }
  }
}
</script>

<style scoped>
.notif {
  position: absolute;
  top: 15px;
  left: 535px;
  width: 300px;
  height: 70px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 5px 5px 5px grey;
}

.close {
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
}

.close i {
  color: red;
}

.message {
  margin-top: 20px;
}

.message h4 {
  text-align: center;
  font-size: 15px;
}
</style>
