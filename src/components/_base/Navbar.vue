<template>
    <div>
        <header>
        <div class="navi"></div>
        <div class="title">
            <h3>Food item</h3>
        </div>
        <div class="search"></div>
        </header>
    </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>

header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 970px;
    height: 50px;
    padding: 5px;

    background: #FFFFFF;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);

}
.navi {
    display: flex;
    width: 30px;
    height: 50px;
    margin: 5px;

    background-image: url('../../assets/icon/menu.png');
    background-repeat: no-repeat;
    /* border: 2px solid black; */
}
.title {
    display: flex;
    width: 180px;
    height: 50px;
    align-items: center;
    /* border: 2px solid black; */
}
.search {
    display: flex;
    width: 35px;
    height: 40px;
    margin: 5px;

    background-image: url('../../assets/icon/magnifying-glass.png');
    background-repeat: no-repeat;
    align-items: center;
    /* border: 2px solid black; */
}
</style>
