<template>
    <div>
        <ul class="list-unstyled">
            <li class="media"  v-for="(item, index) in getCart" :key="item.id">
                <div class="container-img">
                    <img :src="item.image" class="mr-3">
                </div>
                <div class="media-body">
                <h6 class="mt-0 mb-1">{{item.name}}</h6>
                <div class="cart-body">
                <div class="count-box">
                    <div class="btn-min" @click="setMinus(index)" :disabled="setMinus === 1"> -</div>
               <div class="number">{{item.count}}</div>
                <div class="btn-plus" @click="setPlus(index)">+</div>
                </div>
                <h5>Rp. {{item.count * item.price}}</h5>
                </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  name: 'Cart',
  data () {
    return {
    }
  },
  methods: {
    ...mapMutations(['addCart', 'setPlus', 'setMinus'])
  },
  computed: {
    ...mapGetters(['getCart', 'total'])
  }
}
</script>

<style scoped>

.cart-body{
    margin: 20px;
    margin-left: 0px;
    display: flex;
    justify-content: space-between;
}
.container-img{
    width: 70px;
    height: 70px;
    margin-right: 10px;
}
.container-img img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.media{
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: white;
}
h6 {
    text-align: start;
    /* border: 1px solid black; */

}
.count-box {
    width: 100px;
    display: flex;
    flex-direction: row;
    font-size: 17px;
}
.number {
  color: #82DE3A;
  height: 25px;
  width: 25px;
  border: 1px solid #82DE3A;
  text-align: center;
  line-height: 25px;
  font-weight: 700;
}
.btn-min, .btn-plus {
  color: #82DE3A;
  height: 25px;
  width: 25px;
  background-color: rgba(130, 222, 58, 0.2);
  border: 1px solid #82DE3A;
  text-align: center;
  line-height: 25px;
  font-weight: 700;
  cursor: pointer;
}
</style>
