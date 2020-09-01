<template>
  <div class="menu">
    <router-link to="/">
        <div class="home"></div>
    </router-link>
    <router-link to="/History">
        <div class="history"></div>
    </router-link>
        <div class="add">
          <button class="btn" @click="openModal"></button>
          <ModalDirection />
        </div>
  </div>
</template>

<script>
import ModalDirection from './ModalProduct'

export default {
  name: 'Sidebar',
  components: {
    ModalDirection
  },
  data () {
    return {
      modalOpen: false
    }
  },
  methods: {
    openModal () {
      this.modalOpen = !this.modalOpen
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
    width: 40px;
    width: 40px;
    height: 40px;
    margin-top: 30px;
    margin-left: 5px;

    background-image: url('../../assets/icon/add.png');
    background-repeat: no-repeat;
    background-size: 100%;
}
</style>
