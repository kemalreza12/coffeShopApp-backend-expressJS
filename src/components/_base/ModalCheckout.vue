<template>
  <div class="modal-checkout">
    <div class="checkout font-weight-bolder">
      <table id="table-checkout-header" border="0" cellspacing="0" cellpadding="5">
        <tr>
          <td class="align-baseline text-left">Checkout</td>
          <td class="table-right">Receipt no : #010410919</td>
        </tr>
        <tr>
          <td class="align-baseline text-left" colspan="1">Cashier : Pevita Pearce</td>
        </tr>
      </table>
      <div class="container-table">
        <table id="table-checkout-value" border="0" cellspacing="0" cellpadding="1">
          <tr v-for="item in getCart" :key="item.id">
            <td class="align-baseline text-left">{{item.name}} {{item.count}}x</td>
            <td class="table-right">Rp. {{item.price * item.count}}</td>
          </tr>
        </table>
      </div>
      <table id="table-checkout-total" border="0" cellspacing="0" cellpadding="1">
        <tr>
          <td class="align-baseline text-left">Ppn 10%</td>
          <td class="table-right">Rp. {{ppn()}}</td>
        </tr>
        <tr>
          <td class="table-right" colspan="2">Total : Rp. {{totalPrice()}}</td>
        </tr>
        <tr>
          <td class="align-baseline text-left" colspan="2">Payment : Cash</td>
        </tr>
      </table>
      <div class="button-checkout">
        <div>
          <button id="btn-print" @click="$emit('close-modal')">Print</button>
        </div>
        <div id="or">Or</div>
        <div><Button id="btn-send-email">Send Email</Button></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ModalCheckout',
  props: ['close-modal'],
  data () {
    return {
    }
  },
  methods: {
    totalPrice () {
      return this.getCart.reduce((a, b) => a + b.count * 11 / 10 * b.price, 0)
    },
    ppn () {
      return this.getCart.reduce((a, b) => a + b.count * 1 / 10 * b.price, 0)
    }
  },
  computed: {
    ...mapGetters(['countCart', 'getCart', 'total'])
  }
}
</script>

<style scoped>
.modal-checkout {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 10;
}
.checkout {
    width: 550px;
    height: 550px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: white;
    margin: 5px auto;
    border-radius: 10px;
}
#table-checkout-header {
    padding: 20px;
    width: 100%;
}
.container-table {
  overflow-x: auto;
  height: 150px;
}
#table-checkout-value {
    padding: 0px 20px;
    width: 100%;
    overflow-y: auto;
}
#table-checkout-total {
    width: 100%;
    height: 50px;
}
.table-right {
    text-align: right;
}
.button-checkout {
    padding: 20px;
}
.cashier {
    font-weight: 550;
    font-size: 15px;
    text-align: left;
}
#btn-print,
#btn-send-email {
    color: white;
    border: none;
    border-radius: 7px;
    width: 100%;
    height: 50px;
    font-size: 18px;
}
#btn-print {
    background-color: #F24F8A;
}
#btn-send-email {
    background-color: #57CAD5;
}
#or {
    margin: 5px 0;
    text-align: center;
}
</style>
