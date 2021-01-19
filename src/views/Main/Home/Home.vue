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
            <h5>{{countCart}}</h5>
          </div>
        </div>
      </nav>
      <content>
        <Sidebar/>
        <div class="box-content">
          <div class="toggle-box">
            <div class="row">
              <div class="col-sm-2">
                  <button class="btn btn-primary" @click="toggleModal">add</button>
              </div>
              <Modal v-show="ModalActive" :data="dataModal" @close-modal="toggleModal" @send-event="handleModal"/>
                      <ModalCheckout v-show= "showModalCheckout" @close-modal = "CheckoutOff"/>
            </div>
            <div div class="col-sm-2">
                  <select id="sort" class="form-control" @change="setSort">
                    <option selected disabled>Sort by </option>
                  <option value="name">Name</option>
                  <option value="price">Price</option>
                </select>
          </div>
          <div class="row">
              <Pagination :data="pagination" @send-event="handlePagination"/>
            </div>
            <div class="col-md-5">
              <div class="form-group">
                <div class="col-md-10">
                  <input type="text" class="form-control" id="inputPassword" v-on:keyup.enter="setSearch" placeholder="Search">
                </div>
              </div>
            </div>
          </div>
          <div class="card-box">
          <div class="row">
            <div class="col-md-4" v-for="products in productstate" :key="products.id">
              <Card
              :item="products"
              :active="checkProductActive(products.id)"
              @event-update="setUpdate(products)"
              @del-event="setDelete(products.id)"
              @select-product="addCart(products)" />
            </div>
          </div>
          </div>
        </div>
        <div class="box-cart">
          <div v-if="countCart === 0">
            <div class="content-cart">
              <div class="img-cart"></div>
              <div class="text1"><p>Your cart is empty</p></div>
              <div class="text2"><p>Please add some item from the menu</p></div>
            </div>
          </div>
         <div v-else>
            <div class="row">
              <div class="col-md-12 cart-selected">
                <Cart/>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 cart-total">
                <CartTotal @launch-modalcheckout = "CheckoutOn"/>
              </div>
            </div>
         </div>
        </div>
      </content>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import Navbar from '../../../components/_base/Navbar'
import Sidebar from '../../../components/_base/Sidebar'
import Card from '../../../components/_base/Card'
import Modal from '../../../components/_base/Modal'
import Pagination from '../../../components/_base/Pagination'
import Cart from '../../../components/_base/CartList'
import CartTotal from '../../../components/_base/CartTotal'
import ModalCheckout from '../../../components/_base/ModalCheckout'

export default {
  name: 'Home',
  components: {
    Navbar,
    Sidebar,
    Card,
    Modal,
    Pagination,
    Cart,
    CartTotal,
    ModalCheckout
  },
  data: () => ({
    ModalActive: false,
    showModalCheckout: false,
    dataModal: {
      id: null,
      name: '',
      image: null,
      price: '',
      idCategory: ''
    }
  }),
  methods: {
    ...mapActions(['getProduct', 'insertProduct', 'editProduct', 'deleteProduct', 'handleSearch']),
    ...mapMutations(['addCart']),
    toggleModal () {
      this.ModalActive = !this.ModalActive
      if (!this.ModalActive) {
        this.clearModal()
      }
    },
    CheckoutOn () {
      this.showModalCheckout = true
    },
    CheckoutOff () {
      this.showModalCheckout = false
    },
    setSort (e) {
      const url = `?sort=${e.target.value}`
      this.getProduct(url)
    },
    setSearch (e) {
      this.handleSearch(e.target.value)
      // const url = `?search=${e.target.value}`
      // this.getProduct(url)
    },
    handlePagination (number) {
      const url = `?page=${number}`
      this.getProduct(url)
    },
    setDelete (id) {
      this.deleteProduct(id)
      alert('Product Deleted')
    },
    handleModal () {
      this.dataModal.id ? this.updateProduct() : this.addProduct()
    },
    checkProductActive (id) {
      return this.getCart.find(item => {
        return item.id === id
      })
    },
    updateProduct () {
      const data = new FormData()
      // data.append('id', this.dataModal.id)
      data.append('name', this.dataModal.name)
      data.append('image', this.dataModal.image)
      data.append('price', this.dataModal.price)
      data.append('idCategory', this.dataModal.idCategory)

      const contain = {
        id: this.dataModal.id,
        data: data
      }
      this.editProduct(contain)
        .then(res => {
          this.clearModal()
          this.getProduct()
          alert('update success')
        })
    },
    setUpdate (data) {
      this.ModalActive = true
      this.dataModal.id = data.id
      this.dataModal.name = data.name
      this.dataModal.image = data.image
      this.dataModal.price = data.price
      this.dataModal.idCategory = data.idCategory
    },
    clearModal () {
      this.dataModal.id = null
      this.dataModal.name = ''
      this.dataModal.image = null
      this.dataModal.price = ''
      this.dataModal.idCategory = ''
      this.ModalActive = false
    },
    addProduct () {
      const data = new FormData()
      data.append('name', this.dataModal.name)
      data.append('image', this.dataModal.image)
      data.append('price', this.dataModal.price)
      data.append('idCategory', this.dataModal.idCategory)
      this.insertProduct(data)
        .then(res => {
          this.clearModal()
          this.getProduct()
          alert('Product Successfully Added')
        })
    }
  },
  computed: {
    ...mapGetters({
      productstate: 'getProducts',
      pagination: 'getPage',
      countCart: 'countCart',
      getCart: 'getCart'
    })
  },
  mounted () {
    this.getProduct()
  }
}
</script>

<style scoped>
@media screen and (min-width: 768px) {
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
  width: 570px;
  height: 50px;

  background: #FFFFFF;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  /* border: 1px solid black; */
}
.title {
  display: flex;
  line-height: 20px;

  /* border: 2px solid black; */
}
.numbering {
  display: flex;
  align-items: center;
  width: 18px;
  height: 20px;
  margin: 5px;
  margin-bottom: 10px;
  padding-top: 5px;
  padding-left: 3px;
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
  width: 1360px;
  height: auto;

  /* border: 1px solid black; */
}
.box-content {
  display: flex;
  flex-direction: column;
  width: 910px;
  height: 550px;
  margin: 10px;
  overflow: auto;

  /* border: 1px solid black; */
}
.toggle-box {
  display: flex;
  justify-content:space-between;
  width: 870px;
  height: 50px;

  /* border: 1px solid black; */
}
.card-box {
  display: flex;
  width: 860px;

  /* border: 1px solid black; */

}
.box-cart {
  display: flex;
  width: 390px;
  height: 550px;
  margin-top: 3px;

  background: #FFFFFF;
  overflow: auto;
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

.cart-selected {
  width: 390px;
  height: 400px;
  overflow: auto;
}

.cart-total {
  width: 370px;
  height: 150px;
}
}
</style>
