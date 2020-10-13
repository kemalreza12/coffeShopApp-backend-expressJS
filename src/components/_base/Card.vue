<template>
    <div class="card" style="width: 16rem;">
      <div class="container-image" @click="$emit('select-product')">
        <img :src="item.image" class="card-img-top" :class="active ? 'active' : ''" alt="...">
      </div>
      <div class="card-body">
        <h5 class="card-title">{{item.name}}</h5>
        <p class="card-text">Rp. {{item.price}}</p>
        <button class="btn btn-warning" @click="$emit('event-update')">Edit</button>
        <span> | </span>
        <button class="btn btn-warning" @click="$emit('del-event')">Delete</button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    item: {
      type: Object
    },
    active: {
      type: Boolean
    }
  }
}
</script>

<style scoped>
.card {
  margin: 10px !important;
  border-radius: 10px !important;
}
.container-image {
  width: 100%;
  height: 180px;
  cursor: pointer;
}
.container-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.card-title {
  text-align: start;
}
.card-text {
  text-align: start;
}
</style>
