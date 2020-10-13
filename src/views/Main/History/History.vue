/* eslint-disable no-unused-vars */
<template>
  <div class="container-fluid">
    <div class="history">
      <div class="navi"></div>
      <div class="title">
        <h4>History</h4>
      </div>
      <div class="blank"></div>
    </div>
    <body>
      <Sidebar/>
      <content>
        <div class="cardList">
          <div class="card lf">
              <div class="textIn"><p>Today's Income</p></div>
              <div class="num"><p>Rp. 1.000.000</p></div>
              <div class="day"><p>+2% Yesterday</p></div>
          </div>
          <div class="card cn">
              <div class="textIn"><p>Today's Income</p></div>
              <div class="num"><p>Rp. 1.000.000</p></div>
              <div class="day"><p>+2% Yesterday</p></div>
          </div>
          <div class="card rg">
              <div class="textIn"><p>Today's Income</p></div>
              <div class="num"><p>Rp. 1.000.000</p></div>
              <div class="day"><p>+2% Yesterday</p></div>
          </div>
        </div>
        <div class="chart">
          <StatisticHistory />
        </div>
        <div class="recent-box">
          <RecentOrder />
        </div>
      </content>
    </body>
  </div>
</template>

<script>
import Sidebar from '../../../components/_base/Sidebar'
import StatisticHistory from '../../../components/_base/Statistichistory'
import RecentOrder from '../../../components/_base/TableRecentOrder'

export default {
  name: 'History',
  components: {
    Sidebar,
    StatisticHistory,
    RecentOrder
  }
}

</script>

<style scoped>
.container-fluid {
  padding: 0;
  background-color: rgba(190, 195, 202, 0.3);
}
.history {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 1350px;
  height: 50px;

  background-color: white;
  /* border: 1px solid black; */
}
.navi {
    display: flex;
    width: 30px;
    height: 50px;
    margin: 5px;

    background-image: url('../../../assets/icon/menu.png');
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
.blank {
    display: flex;
    width: 35px;
    height: 40px;
    margin: 5px;
}
body {
  display: flex;
  flex-direction: row;

  background-color: rgba(190, 195, 202, 0.3);
  /* border: 2px solid black; */
}
content {
  display: flex;
  flex-direction: column;
  width: 1440px;
  height: 530px;
  margin: 20px;
  overflow: auto;
  /* border: 1px solid black; */
}
.cardList {
    width: 1240px;
    height: 200px;
    margin: 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    /* border: 2px solid black; */
}
.card {
    width: 380px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}
.textIn {
    width: 200px;
    height: 10px;
    margin: 5px;
    margin-left: 30px;
}
.num {
  width: 200px;
    height: 30px;
    margin: 5px;
    margin-left: 30px;

    font-size: 25px;
}
.day {
  width: 200px;
    height: 70px;
    margin: 5px;
    margin-left: 30px;
}
.lf {
    background: linear-gradient(285.38deg, #FBB2B4 30.05%, rgba(255, 143, 178, 0) 133.19%);
    filter: drop-shadow(10px 15px 10px rgba(255, 143, 178, 0.25));
    border-radius: 10px;
}

.cn {
    background: linear-gradient(285.38deg, #29DFFF 30.05%, rgba(41, 223, 255, 0) 133.19%);
    filter: drop-shadow(10px 15px 10px rgba(41, 223, 255, 0.25));

}
.rg {
    background: linear-gradient(285.38deg, #AB84C8 30.05%, rgba(241, 201, 236, 0) 133.19%);
    filter: drop-shadow(10px 15px 10px rgba(241, 201, 236, 0.25));

}

.chart {
    width: 1240px;
    height: 500px;
    margin: 0px;
    display: flex;
    flex-direction: row;
    /* border: 1px solid black; */
}

.recent-box {
  width: 1230px;
  margin-top: 30px;
}
</style>
