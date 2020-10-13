<template>
  <div class="container-fluid">
    <div class="content">
      <div class="banner"><h1>Dicey Cafe</h1></div>
      <div class="text"><h3>Coffee you love without the wait</h3></div>
    </div>
    <div class="login">
    <div><h2>LOGIN</h2></div>
  <form @submit.prevent="handleLogin">
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control is-valid" :class="{'form-contol': true, 'is-invalid': valEmail }" v-model="email" id="inputEmail4" required>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control is-valid" :class="{'form-control': true, 'is-invalid': valPass }" id="inputPassword4" v-model="password" required>
  </div>
  <router-link to="/register">
  <div class="form-group">
    <label class="form-check-label" for="exampleCheck1">Create account</label>
  </div>
  </router-link>
  <button type="submit" class="btn btn-primary" @click="handleLogin">Submit</button>
</form>
</div>
<Notif v-show="showNotif" />
</div>
</template>

<script>
import { mapActions } from 'vuex'
import Notif from '../../../components/_base/Notif'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      showNotif: false
    }
  },
  components: {
    Notif
  },
  methods: {
    ...mapActions(['login']),
    ...mapActions(['getNotif']),
    ...mapActions(['getNotifActive']),
    handleLogin (e) {
      e.preventDefault()
      const data = {
        email: this.email,
        password: this.password
      }
      this.login(data)
        .then((res) => {
          // console.log(res)
          this.$router.push('/home')
          this.$emit('closeNotif', false)
        })
      this.$emit('openNotif', true)
    }
  },
  computed: {
    valEmail () {
      var re = /(.+)@(.+){2,}\.(.+){2,}/
      if (re.test(this.email)) {
        return false
      }
      return true
    },
    valPass () {
      if (this.password.length < 6) {
        return true
      }
      return false
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Leckerli+One&display=swap');
/* .bg {
  width: 1440;
  height: 1000;
  border: 1px solid black;

   background: url('../../../assets/images/van-thanh-ZySumdV9rpw-unsplash.jpg');
  background-repeat: no-repeat;
  background-size: 1400px 800px;
} */
[class*="content"] {
  width: 100%;
}
@media screen and (min-width: 768px) {
.container-fluid {
   background-image: url('../../../assets/images/kari-shea-pJn9WhMqFIs-unsplash.jpg');
   background-position: right 0px bottom -200px;
  background-repeat: no-repeat;
  background-size: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.login {
  width: 300px;
  height: 625px;
  margin-right: 10px;
  padding: 10px;
  padding-bottom: 100px;
  background-color: rgba(230, 107, 107, 0.219);
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-content: center;
  align-self: center; */

  color: white;
  /* border: 1px solid black; */
}
.content {
  width: 600px;
  height: 625px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: brown;
}
.banner {
  font-family: 'Leckerli One', cursive;
}
h1 {
  font-size: 100px;
}
}
</style>
