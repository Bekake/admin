<template>
<div class="bars">
    <div class="logo">
        <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M-3.05176e-05 1.45455C-3.05176e-05 0.651222 0.651192 0 1.45451 0H9.45452C10.2578 0 10.9091 0.651222 10.9091 1.45455C10.9091 2.25787 10.2578 2.90909 9.45452 2.90909H1.45451C0.651192 2.90909 -3.05176e-05 2.25787 -3.05176e-05 1.45455Z" fill="#51459E"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M-3.05176e-05 7.99999C-3.05176e-05 7.19666 0.651192 6.54544 1.45451 6.54544H19.6363C20.4397 6.54544 21.0909 7.19666 21.0909 7.99999C21.0909 8.80331 20.4397 9.45453 19.6363 9.45453H1.45451C0.651192 9.45453 -3.05176e-05 8.80331 -3.05176e-05 7.99999Z" fill="#51459E"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M-3.05176e-05 14.5455C-3.05176e-05 13.7421 0.651192 13.0909 1.45451 13.0909H16.7272C17.5306 13.0909 18.1818 13.7421 18.1818 14.5455C18.1818 15.3488 17.5306 16 16.7272 16H1.45451C0.651192 16 -3.05176e-05 15.3488 -3.05176e-05 14.5455Z" fill="#51459E"/>
        </svg>
    </div>
    <div class="buttons">
        <div :class="['mybutton', {active: activeindex == 1}]" @click="getactive(1)">
            <router-link to="/admin">
                <img v-if="activeindex == 1" src="@/assets/home.png" alt="home">
                <img v-else src="@/assets/homec.png" alt="homec">
            </router-link>
        </div>
        <router-link to="/groups">
          <div :class="['mybutton', {active: activeindex == 2}]" @click="getactive(2)">
            <img v-if="activeindex == 2" src="@/assets/group.png" alt="group">
            <img v-else src="@/assets/groupc.png" alt="groupc">
          </div>
        </router-link>
        <router-link to="/student">
          <div :class="['mybutton', {active: activeindex == 3}]" @click="getactive(3)">
            <img v-if="activeindex == 3" src="@/assets/student.png" alt="student">
            <img v-else src="@/assets/studentc.png" alt="studentc">
          </div>
        </router-link>

        <router-link to="/moliya">
          <div :class="['mybutton', {active: activeindex == 4}]" @click="getactive(4)">
            <img v-if="activeindex == 4" src="@/assets/finance.png" alt="finance">
            <img v-else src="@/assets/financec.png" alt="financec">
          </div>
        </router-link>

        <router-link to="/rejalar">
          <div :class="['mybutton', {active: activeindex == 5}]" @click="getactive(5)">
            <img v-if="activeindex == 5" src="@/assets/book.png" alt="book">
            <img v-else src="@/assets/bookc.png" alt="bookc">
          </div>
        </router-link>

        <router-link to="/jadval">
          <div :class="['mybutton', {active: activeindex == 6}]" @click="getactive(6)">
            <img v-if="activeindex == 6" src="@/assets/jadval.png" alt="jadval">
            <img v-else src="@/assets/jadvalc.png" alt="jadvalc">
          </div>
        </router-link>
        
        <div :class="['mybutton', {active: activeindex == 7}]" @click="getactive(7)">
            <img v-if="activeindex == 7" src="@/assets/advert.png" alt="advert">
            <img v-else src="@/assets/advertc.png" alt="advertc">
        </div>
        <div :class="['mybutton', {active: activeindex == 8}]" @click="getactive(8)">
            <img v-if="activeindex == 8" src="@/assets/defend.png" alt="defend">
            <img v-else src="@/assets/defendc.png" alt="defendc">
        </div>
        <div :class="['mybutton', {active: activeindex == 9}]" @click="getactive(9)">
            <img v-if="activeindex == 9" src="@/assets/education.png" alt="education">
            <img v-else src="@/assets/educationc.png" alt="educationc">
        </div>
        <div :class="['mybutton', {active: activeindex == 10}]" @click="getactive(10)">
            <img v-if="activeindex == 10" src="@/assets/task.png" alt="task">
            <img v-else src="@/assets/taskc.png" alt="taskc">
        </div>
        <div :class="['mybutton', {active: activeindex == 11}]" @click="getactive(11)">
            <img v-if="activeindex == 11" src="@/assets/setting.png" alt="setting">
            <img v-else src="@/assets/settingc.png" alt="settingc">
        </div>  
        <router-view/>
    </div>
</div>
</template>
<script>
export default {
  props: ['mynumber'],
    data(){
        return {
            activeindex: this.mynumber,
        }
    },
    methods:{
        getactive(index){
          console.log(this.mynumber)
            this.activeindex = index;
        }
    }
}
</script>
<style scoped>
.logo{
  height: 20%;
  display: flex;
  justify-content: center;
}
.mybutton{
  width: 66px;
  height: 53px;
  cursor: pointer;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto auto;
}
.mybutton img{
  width: 24px;
  cursor: pointer;
}
.logo > svg{
  margin: 44px auto;
}
@keyframes animate{
  0%{
    transform: rotate(-15deg);
  }
  50%{
    transform: rotate(15deg);
  }
  100%{
    transform: rotate(0);
  }
}
.active{
  background-color: #563bFF;
}
.active  img{
  animation: animate 0.2s linear;
  animation-iteration-count: 1;

}
.active::before{
  content: "";
  position: absolute;
  width: 3px;
  height: 35px;
  left: 0;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background-color: #3734A9;
}
.bars{
  width: 100px;
  height: 100vh;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
}
</style>