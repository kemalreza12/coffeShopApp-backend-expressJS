<template id="comment-form">
  <div class="containerq">
    <div class="content">
      <div class="banner"><h1>Dicey Cafe</h1></div>
      <div class="text"><h3>Coffee you love without the wait</h3></div>
    </div>
    <div class="reg">
    <div><h2>REGISTER</h2></div>
    <form @submit.prevent="handleReg">
      <div class="form-group form-row">
        <div class="col">
          <input type="text" class="form-control is-valid" :class="{'form-control': true, 'is-invalid': valFirstName }" v-model="firstName" placeholder="First name" required>
        </div>
        <div class="col">
          <input type="text" class="form-control is-valid" :class="{'form-control': true, 'is-invalid': valLastName }"  v-model="lastName" placeholder="Last name" required>
        </div>
        </div>
        <div class="form-group">
          <input type="email" class="form-control is-valid" :class="{'form-contol': true, 'is-invalid': valEmail }" v-model="email" id="inputEmail4" placeholder="Email" required>
        </div>
        <div class="form-group">
          <input type="password" class="form-control is-valid" :class="{'form-control': true, 'is-invalid': valPass }" id="inputPassword4" v-model="password" placeholder="Password" required>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Register',
  template: '#comment-form',
  data () {
    return {
      email: '',
      password: '',
      roleId: 1,
      firstName: '',
      lastName: ''
    }
  },
  methods: {
    handleReg (e) {
      e.preventDefault()
      const data = {
        email: this.email,
        password: this.password,
        roleId: this.roleId,
        firstName: this.firstName,
        lastName: this.lastName
      }
      this.register(data)
        .then(() => {
          this.$router.push('/')
        })
    },
    ...mapActions(['register'])
  },
  computed: {
    valFirstName () {
      if (this.firstName.length === 0 || this.firstName.length > 50) {
        return true
      }
      return false
    },
    valLastName () {
      if (this.lastName.length === 0 || this.lastName.length > 50) {
        return true
      }
      return false
    },
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

<style>
@import url('https://fonts.googleapis.com/css2?family=Leckerli+One&display=swap');
.containerq {
  width: 1365px;
  height: 625px;
  background-image: url('../../../assets/images/kari-shea-pJn9WhMqFIs-unsplash.jpg');
  /* background-position: right 0px bottom -200px; */
  background-repeat: no-repeat;
  background-size: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.reg {
  width: 350px;
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
</style>
