<template>
  <div class="container">
    <h2>Register</h2>
    <form>
      <div class="form-group form-row">
        <div class="col">
          <input type="text" class="form-control" placeholder="First name">
        </div>
        <div class="col">
          <input type="text" class="form-control" placeholder="Last name">
        </div>
        </div>
        <div class="form-group">
          <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
        </div>
        <div class="form-group">
          <input type="password" class="form-control" id="inputPassword4" placeholder="Password">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Register'
}
</script>

<style>

</style>
