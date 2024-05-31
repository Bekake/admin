<template>
<div class="container">
  <mybar mynumber="1"/>
  <div class="mycontainer" :style="change(mycolor[0], mycolor[1])">
    <div class="forinput">
      <div class="inp">
        <button><img src="@/assets/msearch.svg" alt="search"></button>
        <input type="text" placeholder="Search Anything">
      </div>
      <div class="person">
        <div title="Xabarlar">
          <img src="@/assets/mail.png" alt="mailbox">
        </div>
        <div  @click="logout" title="Log Out">
          <img src="@/assets/logout.png" alt="logout">
        </div>
        <div>
          <img src="@/assets/bell.png" alt="bell">
        </div>
        <div >
          <img class="half" src="@/assets/person.jpg" alt="person">
        </div>
      </div>
    </div>
    <div class="firstline">
      <div class="chart">
        <canvas id="myChart"></canvas>
      </div>
      <div class="mygraph">
        <div class="graph">
          <p>Guruh</p>
          <p>Ketgan o'quvchilar(%)</p>
          <p>Foiz</p>
        </div>
        <hr>
        <div class="graph" :style="getgraph('#f62d2d', '128px')">
          <p>1-guruh</p>
          <div>
            <div></div>
            <div></div>
          </div>
          <p>16</p>
        </div>
        <div class="graph" :style="getgraph('#17aa12','96px')">
          <p>2-guruh</p>
          <div>
            <div></div>
            <div></div>
          </div>
          <p>12</p>
        </div>
        <div class="graph" :style="getgraph('#0c56c4', '64px')">
          <p>3-guruh</p>
          <div>
            <div></div>
            <div></div>
          </div>
          <p>8</p>
        </div>
      </div>
    </div>
    <div class="nextline">
      <div class="two">
        <div class="mycircle">
          <p>Aniq Fanlar</p>
          <div class="giveinfo">
            <p>Matematika</p>
            <p>Fizika</p>
            <p>Majburiy Fanlar</p>
          </div>
          <div :style="divstyle(bir, '#A93BFF', '85')">
            <svg>
              <circle :cx="bir" :cy="bir" :r="bir"></circle>
              <circle :cx="bir" :cy="bir" :r="bir"></circle>
            </svg>
          </div>
          <div :style="divstyle(ikki, '#FF7049', '72')">
            <svg>
              <circle :cx="ikki" :cy="ikki" :r="ikki"></circle>
              <circle :cx="ikki" :cy="ikki" :r="ikki"></circle>
            </svg>
          </div>
          <div :style="divstyle(uch, '#20C997', '56')">
            <svg>
              <circle :cx="uch" :cy="uch" :r="uch"></circle>
              <circle :cx="uch" :cy="uch" :r="uch"></circle>
            </svg>
          </div>
        </div>
        <div class="mycircle">
          <p>Tabiiy fanlar</p>
          <div class="giveinfo">
            <p>Biologiya</p>
            <p>Kimyo</p>
            <p>Majburiy Fanlar</p>
          </div>
          <div :style="divstyle(bir, 'rgb(95, 183, 255)', '78')">
            <svg>
              <circle :cx="bir" :cy="bir" :r="bir"></circle>
              <circle :cx="bir" :cy="bir" :r="bir"></circle>
            </svg>
          </div>
          <div :style="divstyle(ikki, 'rgb(239, 216, 64)', '87')">
            <svg>
              <circle :cx="ikki" :cy="ikki" :r="ikki"></circle>
              <circle :cx="ikki" :cy="ikki" :r="ikki"></circle>
            </svg>
          </div>
          <div :style="divstyle(uch, 'rgb(64, 239, 84)', '56')">
            <svg>
              <circle :cx="uch" :cy="uch" :r="uch"></circle>
              <circle :cx="uch" :cy="uch" :r="uch"></circle>
            </svg>
          </div>
        </div>
      </div>
      <div class="one">
        <div class="mylastone">
          <div class="info">
            <div>
              <img src="@/assets/groupone.png" alt="group">
            </div>
            <p>Jami son</p>
            <p>275</p>
            <p>+12%</p>
          </div>
          <div class="info">
            <div>
              <img src="@/assets/studentone.png" alt="group">
            </div>
            <p>Yangilar</p>
            <p>12</p>
            <p>+8%</p>
          </div>
          <div class="info">
            <div>
              <img src="@/assets/teacherone.png" alt="group">
            </div>
            <p>Courselar</p>
            <p>24</p>
            <p>+6%</p>
          </div>
          <div class="info">
            <div>
              <img src="@/assets/educationone.png" alt="group">
            </div>
            <p>O'qituvchilar</p>
            <p>35</p>
            <p>+30%</p>
          </div>
        </div>
        <div class="mylasttwo">
          <p>Umumiy O'quvchilar soni: 265</p>
          <router-link to="/student">
            <button>Ko'rish</button>
          </router-link>
          
        </div>
      </div>
      
    </div>
  </div>
</div>
</template>

<script>
import { Chart, registerables } from 'chart.js';
import mybar from '@/components/mybar.vue'
export default {
  components: {
    mybar,
  },
  data() {
    return {
      bir: 100,
      ikki:80, 
      uch: 60,
      activeindex: 1,
      mycolor: ['rgb(248, 248, 248)', '#fff'],
      myindex: 0
    };
  },
  mounted() {
    this.startChart();
  },
  methods: {
    divstyle(mylength, mycolor, mypercent){
      return{
        '--len': mylength + 'px',
        '--mycolor': mycolor,
        '--percent': mypercent,
        '--circum' : mylength * 6.28,
      }
    },
    getgraph(first, second){
      return{
        '--gcol': first,
        '--glength': second
      }
    },
    changecolor(){
      if(this.mycolor[1] == '#fff'){
        this.mycolor = ['#0b092b', '#3734A9']
      }
      else{
        this.mycolor = ['rgb(248, 248, 248)', '#fff']
      }
    },
    change(mybac, mycol){
      return{
        '--col': mybac,
        '--element': mycol,
      }
    },
    startChart() {
      Chart.register(...registerables);
      const canvas = document.getElementById('myChart');
      const ctx = canvas.getContext('2d');
      // canvas.style.width = '600px';
      // canvas.style.height = '300px';

      if (ctx) {
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Sentabr', 'Oktabr', 'Noyabr', 'Dekabr', 'Yanvar', 'Fevral', 'Mart', 'Aprel', 'May'],
            datasets: [
              {
              label: "Umumiy O'quvchilar Soni",
              data: [245, 236, 240, 252, 260, 255, 263, 270, 275],
              fill: false,
              borderColor: 'rgb(60, 74, 227)',
              backgroundColor: 'rgba(81, 196, 253, 0.6)',
              borderWidth: 1, 
              tension: 0.5
              },
              {
              label: "Ketgan O'quvchilar Soni",
              data: [0, 9, 4, 6, 5, 11, 3, 7, 6],
              fill: false,
              borderColor: 'rgb(253, 81, 81)',
              backgroundColor: 'rgba(245, 100, 100, 0.7)',
              borderWidth: 1,
              tension: 0.5
              },

            ]
          },
          options: {
            maintainAspectRatio: false,
            scales: {
              x: {
                grid: {
                  display: false, // Remove vertical grid lines
                },
              },
              y: {
                grid: {
                  display: false, // Remove horizontal grid lines
                },
                beginAtZero: true
              }
            }
          }
        });
      } else {
        console.error("Canvas context not found");
      }
    },
    logout() {
      localStorage.removeItem('isAuthenticated');
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>
.mylasttwo{
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  background-color: white;
  border-radius: 12px;
  height: 80px;
}
.mylasttwo button{
  padding: 9px 25px;
  background-color: #A93BFF;
  border: none;
  color: #fff;
  font-size: 16px;
  border-radius: 7px;
}
.nextline{
  margin-top: 15px;
  gap: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.two{
  background-color: white;
  border-radius: 12px;
  flex: 1.3 1.3 520px;
  width: 550px;
  display: flex;
  height: max-content;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
.giveinfo> p::before{
  content: "";
  position: absolute;
  height: 6px;
  transform: translate(-150%, 50%);
  width: 20px;
}
.giveinfo > p:nth-child(1)::before{
  background-color: #A93BFF;
}
.giveinfo > p:nth-child(2)::before{
  background-color: #FF7049;
}
.giveinfo > p:nth-child(3)::before{
  background-color: #20C997;
}
.giveinfo p{
  transform: translateX(10px);
  margin-top: -15px;
}
.giveinfo{
  margin-top: -270px;
}
.mycircle > p{
  font-size: 17px;
  font-weight: 600;
}
.mycircle div{
  position: absolute;
}
.mycircle{
  margin-top: 100px;
  width: 240px;
  height: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.mycircle svg{
  width: calc(var(--len) * 2 + 10px);
  height: calc(var(--len) * 2 + 10px);
  transform: rotate( -90deg);
}
.mycircle svg circle{
  fill: none;
  stroke-width: 10;
  transform: translate(5px, 5px);
  stroke-dasharray: var(--circum);
  stroke-dashoffset: var(--circum);
  stroke-linecap: round;
}
.mycircle svg circle:nth-child(1){
  stroke: #eeeeee;
  stroke-dashoffset: 0;
}
.mycircle svg circle:nth-child(2){
  stroke: var(--mycolor);
  stroke-dashoffset: calc(var(--circum) - (var(--percent) * var(--circum))/100);
}
.mylastone{
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
}
.one{
  width: 260px;
  flex: 1 1 400px;
  height: max-content;
  gap: 20px;
}
.info div{
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}
.info:nth-child(1) > div{
  background-color: rgba(53, 117, 255, 0.3);
}
.info:nth-child(2)> div{
  background-color: rgba(243, 102, 67, .3);
}
.info:nth-child(3)> div{
  background-color: rgba(36, 214, 165, .3);
}
.info:nth-child(4)> div{
  background-color: rgba(53, 117, 255, 0.3);
}
.info{
  flex: 1 1 100px;
  width: 100px;
  padding: 10px;
  background-color: white;
  border-radius: 10px;
}
.nextline img{
  width: 24px;
}
.half{
  border-radius: 50%;
  transform: scale(1.16);
}
.forinput{
  background-color: white;
  border-radius: 12px;
  height: 70px;
  align-items: center;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.person{
  width: 120px;
  display: flex;
  justify-content: space-between;
  margin-right: 15px;
}
.person img{
  width: 20px;
  cursor: pointer;
}
input{
  border: none;
  font-weight: 300;
  color: #5A5881;
  margin-left: 3px;
  width: 100px;
}
.inp button{
  transform: translateY(2px);
  width: 13px;
  height: 13px;
  padding: 0;
  border: none;
  background: transparent;
}
.inp button > img{
  width: 100%;
  object-fit: contain;
}
.inp{
  margin-left: 20px;
}
.firstline{
  margin-top: 15px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
}
.mygraph{
  width: 300px;
  height: 300px;
  flex: 1 1 300px;
  background-color: white;
  border-radius: 12px;
}
.mygraph hr{
  width: 92%;
}
.graph:nth-child(1) p:nth-child(2){
  width: 175px;
}
.graph p:nth-child(1){
  margin-left: 20px;
}
.graph p:nth-child(3){
  margin-right: 20px;
}
.graph{
  width: initial;
  height: max-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.graph>div div:nth-child(1){
  width: 200px;
  background-color: #d2d3da;
  height: 5px;
  border-radius: 7px;
}
.graph>div div:nth-child(2){
  width: var(--glength);
  background-color: var(--gcol);
  position: absolute;
  height: 5px;
  border-radius: 7px;
  transform: translateY(-5px);
}
.mycontainer{
  width: calc(100% - 140px);
  margin-left: 120px;
  height: 100vh;
}
.chart{
  width: 500px;
  height: 300px;
  flex: 1.3 1.3 400px;
  background-color: white;
  border-radius: 12px;
}

.container{
  width: 100%;
  height: max-content;
  display: flex;
  background-color: #f3f3f3;
}

#myChart {
  height: 300px;
  width: 600px;
}
</style>
