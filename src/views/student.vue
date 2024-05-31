<template>
<div class="inputc" v-if="myfilter">
    <p>O'quvchi malumotlarini kiriting</p>
    <label for="sname">Ismi</label>
    <input type="text" id="sname" v-model="ism" placeholder="Olim">
    <label for="famil">Familiyasi</label>
    <input type="text" id="famil" v-model="familya" placeholder="Boltayev">
    <label for="onumber">Ota-onasining tel raqami</label>
    <input type="text" id="onumber" v-model="onum" placeholder="(93)1234567">
    <label for="snumber">Shaxsiy tel raqami</label>
    <input type="text" id="snumber" v-model="snum" placeholder="(93)1234567">
    <label for="guruh">Guruhni tanlang</label>
    <select name="guruh" id="guruh" v-model="guruh">
        <option value="" disabled selected>Tanlang</option>
        <option value="1-guruh">1-guruh</option>
        <option value="2-guruh">2-guruh</option>
        <option value="3-guruh">3-guruh</option>
        <option value="4-guruh">4-guruh</option>
    </select>
    <label for="mydate">Dars boshlash sanasi</label>
    <input type="date" id="mydate" v-model="sana">
    <div>
        <button @click="addo">Orqaga</button>
        <button @click="addstudent">Qo'shish</button>
    </div>
</div>
<mybar mynumber="3" :class="{addfilter : myfilter}" />

<div class="container" :class="{addfilter : myfilter}">
    <button @click="addo">O'quvchi qo'shish</button>
    <p>O'quvchilar Soni: {{ oquvchilar.length }}</p>
    <div class="giveinfo">
        <table>
            <tr>
                <th>N</th>
                <th>Ismi</th>
                <th>Familiyasi</th>
                <th>Guruhi</th>
                <th>Ota-onasining tel raqami</th>
                <th>Shaxsiy tel raqami</th>
                <th>Qoshilgan sana</th>
            </tr>
            <tr v-for="(item, index) in oquvchilar" :key="index">
                <td>{{ index+1 }}</td>
                <td>{{ item.mism }}</td>
                <td>{{ item.mfam }}</td>
                <td>{{ item.mguruh }}</td>
                <td>{{ item.monum }}</td>
                <td>{{ item.msnum }}</td>
                <td>{{ item.msana }}</td>
            </tr>
        </table>
    </div>
</div>
</template>
<script>
import mybar from '@/components/mybar.vue'
export default{
    name:'student',
    components: {mybar},
    data(){
        return{
            oquvchilar: [
                {mism: "Olim", mfam: "Boltayev", monum: "(93)1234567", msnum: "(94)1234567", mguruh: "1-guruh", msana: "2024-06-31"},
                {mism: "Sherzod", mfam: "Xayrullayev", monum: "(93)1355548", msnum: "(94)1254667", mguruh: "2-guruh", msana: "2024-03-01"},
                {mism: "Jahongir", mfam: "Ergashev", monum: "(93)1934567", msnum: "(94)1237567", mguruh: "3-guruh", msana: "2024-02-21"},
                {mism: "Javoxir", mfam: "Jorayev", monum: "(93)1285667", msnum: "(94)1732567", mguruh: "4-guruh", msana: "2024-01-14"},
            ],
            guruh: "",
            ism: "",
            familya: "",
            onum: "",
            snum: "",
            myfilter: false,
            sana: "", 
            goon: false,
        }
    },
    mounted() {
        this.check()
    },
    methods:{
        addstudent(){
            let mystudent = {
                mism: this.ism,
                mfam: this.familya,
                monum: this.onum,
                msnum: this.snum,
                mguruh: this.guruh,
                msana: this.sana
            }
            if(mystudent.mism && mystudent.mfam  && mystudent.mguruh){
                this.oquvchilar.push(mystudent)
                let changed = JSON.stringify(mystudent)
                localStorage.setItem("ikki", changed)
                this.myfilter =! this.myfilter
            }
            else{
                alert("To'liq ma'lumotlarni kiriting")
            }
        },
        displayadded(){
            if(this.goon){
                let stud = localStorage.getItem("ikki")
                stud = JSON.parse(stud)
                this.oquvchilar.push(stud)
            }
            
        },
        check(){
            let result = localStorage.getItem("ikki");
            if(result){
                this.goon= true;
                this.displayadded();
            }
        },
        addo(){
            this.myfilter =! this.myfilter
        }
    }
}
</script>
<style scoped>
.container > p{
    font-size: 12px;
    margin-top: 15px;
}
tr:nth-child(odd) td{
    background-color: rgb(143, 255, 151);
}
tr:nth-child(even) td{
    background-color: rgb(148, 207, 255);
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
tr th:nth-child(2), tr th:nth-child(3){
    min-width: 80px;
}
tr th:nth-child(7){
    width: 120px;
}
.container{
    width: calc(100% - 140px);
    margin-left: 120px;
}
.giveinfo{
  width: 100%;
  min-height: 80vh;
  margin-top:10px;
  border-radius: 12px;
}
.container > button{
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 7px;
  margin-top: 35px;
  background-color: rgb(73, 73, 255);
  padding: 6px 10px;
}
.addfilter{
    filter: blur(7px)
}
.inputc{
    position: fixed;
    z-index: 10;
    margin: 5vh;
    left: 50%;
    display: flex;
    flex-direction: column;
    transform: translate(-50%);
    border: 2px solid black;
    width: 400px;
    height: 90vh;
    justify-content: space-between;
    backdrop-filter: blur(6px);
    background-color: rgba(255, 255, 255, 0.442);
}
.inputc label{
    transform: translateY(15px);
}
.inputc select, .inputc input{
    border: none;
    background-color: #f2f3f7;
    border-radius: 8px;
}
input[type="text"]::placeholder{
  transform: translateX(5px);
  color: rgb(41, 41, 41);
}
.inputc input, .inputc label, .inputc select{
    width: 90%;
    margin: auto;
    height: 30px;
}
.inputc div{
    width: 95%;
    height: 30px;
    display: flex;
    justify-content: flex-end;
    gap: 20px;
    margin-bottom: 10px
}
.inputc button{
    padding: 6px 12px;
    border-radius: 6px;
    border: none;
    color: white;
    cursor: pointer;
}
.inputc p{
    text-align: center;
    font-size: 22px;
    height: 30px;
}
.inputc button:nth-child(1){
    background-color: transparent;
    color: black;
}
.inputc button:nth-child(1):hover{
    background-color: rgb(213, 213, 213);
}
.inputc button:nth-child(2){
    background-color: rgb(28, 190, 28);
}
</style>