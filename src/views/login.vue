<template>
<div class="container">
  <form @submit.prevent="login">
    <h1>Login</h1>
    <div>
      <input type="text" v-model="username" placeholder="Username">
      <img src="@/assets/user.png" alt="user">
    </div>
    <div>
      <input type="password" v-model="password" placeholder="Password">
      <img src="@/assets/lock.png" alt="lock">
    </div>
    <button type="submit">Login</button>
  </form>
</div>
  
</template>
<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      if (this.username === 'admin' && this.password === 'kod123') {
        localStorage.setItem('isAuthenticated', 'true');
        this.$router.push('/admin');
      } else {

        alert('Invalid username or password');
      }
    }
  }
};
</script>
<style  scoped>
.container{
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('@/assets/login.webp') no-repeat;
  background-size: cover;
  background-position: center;
}
input::placeholder{
  color: black;
  font-weight: 600;
}
h1{
  text-align: center;
}
img{
  transform: translate(-30px,11px);
  width: 20px;

  position: absolute;
}
input{
  background: transparent;
  margin: auto;
  width: 280px;
  height: 26px;
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
  background-color: transparent;
}
form{
  margin: auto;
  border: 2px solid black;
  width: 320px;
  height: 360px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 15px;
  backdrop-filter: blur(5px);
}
button{
  width: 91%;
  font-weight: 560;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid black;
  background: transparent;
  color: black;
  font-size: 16px
}
</style>