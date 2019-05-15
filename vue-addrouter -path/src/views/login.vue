<template>
    <div class="login">
        <p>用户A 账号page1 密码123</p>
        <p>用户B 账号page2 密码123</p>
        <div> 
           <p>账号: <input type="text" v-model="user"></p>
           <br>
           <p>密码: <input type="text" v-model="pass"></p>
        </div>
        <div class="loginBut" @click="loginBut">登录</div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            user:'',
            pass:''
        }
    },
    methods:{
        loginBut(){
            if(this.user=='page1' && this.pass==123 || this.user=='page2' && this.pass==123){
               sessionStorage.setItem('user', this.user)
               this.$router.push('/')
            }else{
                alert('账号密码错误')
            }
        }
    }
}
</script>

<style>
.login{
    width: 200px;
    height: 200px;
    border:1px solid #eee;
    margin:0 auto;
    padding:20px;
}
.loginBut{
    margin-top:30px;
    height: 30px;
    width: 100px;
    line-height: 30px;
    text-align: center;
    background:#12a4f5;
    color:#fff;
    border-radius:5px;
}
</style>
