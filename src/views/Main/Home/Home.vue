<template>
  <div id='myapp'>
    <div class="container-fluid">
      <nav>
        <Navbar/>
        <div class="cart">
          <div class="title">
            <h3>Cart</h3>
          </div>
          <div class="numbering">
            <h5>0</h5>
          </div>
        </div>
      </nav>
      <content>
        <Sidebar/>
        <div class="box-content">
          <div class="row">
            <div class="col-md-4">
              <Card v-for="item in products" :key="item.id" :data="item" :name="item.name"/>
            </div>
          </div>
        </div>
        <div class="box-cart">
          <div class="content-cart">
            <div class="img-cart"></div>
            <div class="text1"><p>Your cart is empty</p></div>
            <div class="text2"><p>Please add some item from the menu</p></div>
          </div>
        </div>
      </content>
    </div>
  </div>
</template>

<script>
import Navbar from '../../../components/_base/Navbar'
import Sidebar from '../../../components/_base/Sidebar'
import Card from '../../../components/_base/Card'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    Navbar,
    Sidebar,
    Card
  },
  data () {
    return {
      products: []
    }
  },
  methods: {
    clikBtn (val) {
      this.products = this.products.filter((item) => {
        return item.id !== val
      })
    },
    getData () {
      axios.get('http://localhost:8000/api/v1/products/')
        .then((res) => {
          this.products = res.data.result
          console.log(res.data.result)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.getData()
  }
}
</script>

<style scoped>
.container-fluid {
  padding: 0;
  background-color: rgba(190, 195, 202, 0.3);
}
nav {
  display: flex;
  flex-direction: row;
}
.cart {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-left: 3px;
  padding: 5px;
  width: 500px;
  height: 50px;

  background: #FFFFFF;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  /* border: 1px solid black; */
}
.title {
  display: flex;

  /* border: 2px solid black; */
}
.numbering {
  display: flex;
  align-items: center;
  width: 17px;
  height: 20px;
  margin: 5px;
  padding-top: 5px;
  padding-left: 2px;
  border-radius: 100%;

  align-self: center;
  align-content: center;
  color: white;
  background: cornflowerblue;
  /* border: 2px solid black; */
}
content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 1365px;
  height: 565px;

  /* border: 1px solid black; */
}
.box-content {
  display: flex;
  width: 870px;
  height: 550px;
  margin: 5px;

  /* border: 1px solid black; */
}
.box-cart {
  display: flex;
  width: 390px;
  height: 550px;
  margin-top: 3px;

  background: #FFFFFF;
  /* border: 1px solid black; */
}
.content-cart {
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 260px;
  margin-left: 80px;

  /* border: 1px solid black; */
}
.img-cart {
  width: 150px;
  height: 100px;
  display: flex;
  align-self: center;
  margin-left: 20px;

  background-image: url('../../../assets/icon/food-and-restaurant.png');
  background-size: 130px;
  background-repeat: no-repeat;
  /* border: 1px solid black; */
}
.text1 {
    display: flex;
    align-self: center;
    margin: 1px;
    width: 180px;
    height: 40px;
    font-size: 22px;

    /* border: 1px solid black; */
}
.text2 {
  display: flex;
  align-content: center;
  width: 300px;
  height: 40px;
  color: gray;
}
</style>
