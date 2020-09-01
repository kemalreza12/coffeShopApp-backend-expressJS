<template>
    <div class="card" style="width: 15rem;">
      <img :data-src="data.image" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{data.name}}</h5>
        <p class="card-text">{{data.price}}</p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    data: {
      type: Object
    }
  }
}
</script>

<style scoped>
.card {
  margin: 10px !important;
}
</style>
