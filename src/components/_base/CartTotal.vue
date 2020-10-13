<template>
  <div class="cart-total">
    <div class="total">
        <div class="total-ppn">
        <div class="tot">Total : </div>
        <div class="ppn">*Belum termasuk ppn</div>
    </div>
    <div class="total-price">Rp. {{total()}}**</div>
    </div>
        <Button id="btn-checkout" @click="$emit('launch-modalcheckout')">Checkout</Button>
        <button id="btn-cancel-select" @click="removeCart">Cancel</button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'CartTotal',
  props: ['launch-modalcheckout'],
  methods: {
    ...mapMutations(['setEmptyCart']),
    total () {
      return this.getCart.reduce((a, b) => a + b.count * b.price, 0)
    },
    removeCart () {
      this.setEmptyCart()
    }
  },
  computed: {
    ...mapGetters(['countCart', 'getCart'])
  }
}
</script>

<style scoped>
.cart-total {
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}
.total {
    height: 50px;
    width: 95%;
    margin: 10px auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 14px;
}
.total-ppn {
    height: 50px;
    width: 50%;
    padding-top: 10px;
    box-sizing: border-box;
}
.tot {
    font-size: 20px;
    font-weight: 700;
}
.ppn {
    font-weight: 500;
    margin-top: 5px;
}
.total-price {
    height: 50px;
    width: 50%;
    font-size: 20px;
    font-weight: 700;
    padding-top: 10px;
    box-sizing: border-box;
    text-align: right;
}
#btn-checkout,
#btn-cancel-select {
    height: 50px;
    width: 95%;
    margin: 10px auto;
    border: none;
    font-size: 18px;
}
#btn-checkout {
    color: white;
    background-color: #57CAD5;
    text-align: center;
}
#btn-cancel-select {
    color: white;
    background-color: #F24F8A;
    text-align: center;
}
</style>
