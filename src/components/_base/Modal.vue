<template>
<div class="modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Product</h5>
        <button type="button" class="close" @click="$emit('close-modal')" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
            <div class="form-group row">
                <label for="formGroupExampleInput" class="col-sm-2 control-label">Name</label>
                <div class="col-sm-10 shadow p-0 bg-white rounded">
                  <input type="text" v-model="data.name" class="form-control">
                </div>
            </div>
            <div class="form-group row">
                <label for="formGroupExampleInput2" class="col-sm-2 control-label">Image</label>
                <div class="col-sm-10">
                  <input type="file" name="image" @change="handleFile">
                </div>
            </div>
            <div class="form-group row">
                <label for="formGroupExampleInput2" class="col-sm-2 control-label">Price</label>
                <div class="col-sm-10 shadow p-0 bg-white rounded">
                  <input type="text" v-model="data.price" class="form-control">
                </div>
            </div>
            <div class="form-group row">
                <label for="formGroupExampleInput2" class="col-sm-2 control-label">category</label>
                <div class="col-sm-10 shadow p-0 bg-white rounded" >
                  <select class="custom-select" v-model="data.idCategory">
                    <option value="1">Drink</option>
                    <option value="2">Food</option>
                  </select>
                </div>
            </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" @click="$emit('close-modal')">Close</button>
        <button type="button" class="btn btn-primary" @click="$emit('send-event')">{{data.id ? 'Update' : 'Add'}}</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    data: {
      type: Object
    },
    closeModal: {
      type: Function
    }
  },
  methods: {
    handleFile (e) {
      this.data.image = e.target.files[0]
    }
  }
}
</script>

<style scoped>
    .modal{
        display: block;
        padding: 10px;
    }
    .modal-body {
      padding: 30px;
    }
</style>
