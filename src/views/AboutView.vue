<template>
  <div class="inputcontainer" v-if="myfilt">
    <p>Guruh Malumotlarini Kiriting</p>
    <label for="groupname">Guruh nomi</label>
    <input type="text" id="groupname" v-model="groupname" placeholder="1-guruh" required>

    <label for="yonalish">Guruh yo'nalishi</label>
    <select name="yonalish" id="yonalish" v-model="yonalish">
      <option value="" selected disabled>Tanlang</option>
      <option v-for="(yon, index) in yonalishlar" :value="yon" :key="index">{{ yon }}</option>
    </select>
    
    <label for="tur">Ta'lim turini kiriting</label>
    <select name="tur" id="tur" required v-model="mine">
      <option value="" selected disabled>Tanlang</option>
      <option value="offline">Offline</option>
      <option value="online">Online</option>
    </select>

    <label for="oqituv">O'qituvchini tanlang</label>
    <select name="oqituv" id="oqituv" v-model="getteacher">
      <option value="" selected disabled>Tanlang</option>
      <option v-for="(oqit, index) in oqituvchilar" :key="index" :value="oqit">{{ oqit }}</option>
    </select>
    <label for="bsana">Boshlanish sanani kiriting</label>
    <input type="date" id="bsana"v-model="bsana">
    <div>
      <button @click="qosh">Orqaga</button>
      <button @click="dgroup">Yaratish</button>
    </div>
  </div>
  <mybar mynumber="2" :class="{filt: myfilt}" />
  <div class="container" :class="{filt: myfilt} ">

    <button @click="qosh">Guruh qo'shish</button>
    <p>Umumiy guruhlar sone: {{ guruhlar.length }}</p>
    <div class="fordisplay">
      <table>
        <tr>
          <th>N</th>
          <th>Guruh nomi</th>
          <th>O'qituvchi</th>
          <th>Yo'nalish</th>
          <th>Ta'lim turi</th>
          <th>Guruh ochilgan sana</th>
          <th>Guruh holati</th>
          <th>Dars Xona</th>
        </tr>
        <tr v-for="(item, index) in guruhlar" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ item.gname }}</td>
          <td>{{ item.teacher }}</td>
          <td>{{ item.yonalish }}</td>
          <td>{{ item.turi }}</td>
          <td>{{ item.bsana }}</td>
          <td>{{ item.guruhholati }}</td>
          <td>{{ item.darsxona }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import mybar from '@/components/mybar.vue'
export default{
  components:{
    mybar,
  },
  data(){
    return{
      guruhlar: [
        {gname: "1-guruh", teacher: "Teacher1", turi: "offline", yonalish: "Aniq fanlar", bsana: "2024-06-01", guruhholati: "active", darsxona: "3-xona"},
        {gname: "2-guruh", teacher: "Teacher2", turi: "online", yonalish: "Tabiiy Fanlar", bsana: "2024-06-03", guruhholati: "active", darsxona: "2-xona"},
        {gname: "3-guruh", teacher: "Teacher3", turi: "offline", yonalish: "Iqtisod", bsana: "2024-05-31", guruhholati: "active", darsxona: "4-xona"},
        {gname: "4-guruh", teacher: "Teacher4", turi: "offline", yonalish: "Ijtimoiy Fanlar", bsana: "2024-06-05", guruhholati: "active", darsxona: "1-xona"},
        {gname: "5-guruh", teacher: "Teacher5", turi: "online", yonalish: "Aniq fanlar", bsana: "2024-06-04", guruhholati: "active", darsxona: "5-xona"},
      ],
      myfilt: false,
      getteacher: "",
      bsana: "",
      yonalishlar: ["Aniq fanlar", "Tabiiy Fanlar","Ijtimoiy Fanlar", "Iqtisod"],
      oqituvchilar: ["Teacher1", "Teacher2", "Teacher3"],
      mine: "",
      yonalish: "",
      groupname: "",
      myall: [],
      added: false,
    }
  },
  mounted(){
    this.check()
  },
  methods:{
    mayli(){
      console.log(this.guruhlar)
    },
    check(){
      if(localStorage.length > 0){
        this.added = true;
      }
      console.log(localStorage)
      this.getlocal()
    },
    qosh(){
      this.myfilt =! this.myfilt;
    },
    getlocal(){
      let gotten;
      if(this.added){
        gotten = JSON.parse(localStorage.getItem("bir"))
        this.guruhlar.push(gotten)
      }
      else{
        console.log("Hali Guruh qoshilmadi")
      }
    },
    dgroup(){
      let onegroup = {
        gname: this.groupname,
        teacher: this.getteacher,
        yonalish: this.yonalish,
        turi: this.mine,
        bsana: this.bsana,
        guruhholati: "active",
        darsxona: "10-xona",
      }
      if(onegroup.gname && onegroup.teacher && onegroup.yonalish){
        this.guruhlar.push(onegroup);
        let chan = JSON.stringify(onegroup)
        localStorage.setItem("bir", chan)
      }
      else{
        console.log("Bazi malumotlar kiritilmadi")
      }
      this.added = true;
      this.myfilt =! this.myfilt;
    }
  }
}
</script>
<style scoped>
tr:nth-child(odd) td{
    background-color: rgb(143, 255, 151);
}
tr:nth-child(even) td{
    background-color: rgb(148, 207, 255);
}

.container > p{
  font-size: 12px;
  margin-top: 15px;
}
th:nth-child(1){
  border-top-left-radius: 15px;
}
table p{
  position: absolute;
  margin: auto;
  text-align: center;
}
th, td{
  border: 2px solid rgba(0, 0, 0, 0.503);
  border-collapse: collapse;
  height: 35px;
}
th{
  color: rgb(37, 36, 36);
  background-color: rgb(239, 239, 117);
}

td{
  text-align: center;
}
table{
  width: 100%;
  border-collapse: collapse;
}
button{
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 7px;
  margin-top: 35px;
  background-color: rgb(73, 73, 255);
  padding: 6px 10px;
}
.fordisplay{
  width: 100%;
  min-height: 80vh;
  margin-top: -6px;
  border-radius: 12px;
}
.inputcontainer button:nth-child(1){
  background-color: transparent;
  color: black;
}
.inputcontainer button:nth-child(1):hover{
  background-color: rgb(213, 213, 213);
}
.inputcontainer button:nth-child(2){
  background-color: rgb(28, 190, 28);
}
.filt{
  filter: blur(7px);
}
.inputcontainer > div{
  width: 88%;
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  margin-bottom: 10px;
}
input[type="text"]::placeholder{
  transform: translateX(5px);
  color: black;
}
input[type="date"]{
  padding:0 7px ;
  width: 250px;
}
select{
  padding: 7px;
  width: 88%;
}
.inputcontainer input{
  width: 84%
}
option:not(:checked){
  padding: 15px;
}
option{
  height: 30px;
}
label{
  width: 88%;
  margin: auto;
}
.inputcontainer input, .inputcontainer select{
  margin: auto;
  height: 40px;
  border-radius: 10px;
  background-color: #f2f3f7;
  border: none;
  box-shadow: 0 0 3px rgb(125, 121, 121);

  margin-top: -5px;
}
.inputcontainer p{
  font-size: 20px;
  text-align: center;
  font-weight: 600;
}
.inputcontainer{
  position: fixed;
  margin: 5vh;
  transform: translateX(-50%);
  margin-left: 50%;
  border-radius: 15px;
  width: 400px;
  height: 90vh;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 10;
  backdrop-filter: blur(6px);
  background-color: rgba(255, 255, 255, 0.442);
}
.container{
  width: calc(100% - 160px);
  height: 100vh;
  margin-left: 130px;
}
</style>