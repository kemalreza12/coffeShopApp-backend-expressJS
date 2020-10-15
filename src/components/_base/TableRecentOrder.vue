<template>
  <div class="container-table">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">INVOICES</th>
          <th scope="col">CASHIER</th>
          <th scope="col">DATE</th>
          <th scope="col">ORDERS</th>
          <th scope="col">AMOUNT</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in orders" :key="item.id">
         <td>{{item.invoices}}</td>
          <td>{{item.cashier}}</td>
          <td>{{item.date}}</td>
          <td>{{item.orders}}</td>
          <td>{{item.amount}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'RecantOrder',
  props: ['orders', 'get-data']
}
</script>

<style scoped>
.table {
    background-color: #fff;
}
</style>
