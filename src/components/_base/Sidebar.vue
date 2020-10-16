<template>
<div>
  <div class="menu">
    <router-link to="/home">
        <div class="home"></div>
    </router-link>
    <router-link to="/History">
        <div class="history"></div>
    </router-link>
        <div class="add">
          <button class="btn" @click="handleLogout">-</button>
        </div>
  </div>
</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Sidebar',
  data: () => ({
    ModalActive: false,
    dataModal: {
      id: null,
      name: '',
      image: null,
      price: '',
      idCategory: ''
    }
  }),
  methods: {
    // ...mapActions(['dataModal']),
    ...mapActions(['logout']),
    toggleModal () {
      this.modalActive = !this.modalActive
      // if (!this.modalActive) {
      //   this.clearModal()
      // }
    },
    handleLogout () {
      this.$router.go(0)
      this.$router.push('/')
      this.logout()
    }
  }
}
</script>

<style scoped>
.menu {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 50px;
    height: 520px;
    margin-top: 3px;
    padding-top: 30px;

    background: #FFFFFF;
}
.home {
    display: flex;
    width: 40px;
    height: 40px;
    margin-left: 5px;

    background-image: url('../../assets/icon/fork.png');
    background-repeat: no-repeat;
    background-size: 100%;
}
.history {
    display: flex;
    height: 40px;
    margin-top: 30px;
    margin-left: 5px;

    background-image: url('../../assets/icon/clipboard.png');
    background-repeat: no-repeat;
    background-size: 100%;
}
.add {
    display: flex;
    width: 30px;
    height: 30px;
    margin-top: 30px;
    margin-left: 10px;

    background-image: url('../../assets/icon/logout.png');
    background-repeat: no-repeat;
    background-size: 100%;
}
</style>
