<template>
    <div class="index-box">
        <div>
            <ul class="header-svn"> 
                <li v-for="(value,index) in svn" :key="index">
                    <router-link :to="value.path">{{value.name}}</router-link>
                </li>
                <li @click="removeLogin">退出登录</li>
            </ul>
        </div>
         <div>
        <router-view></router-view>
    </div>
    </div>
</template>

<script>
import store from '../store'
export default {
    data(){
        return{
            svn:[]
        }
    },
    methods:{
        removeLogin(){
            sessionStorage.removeItem("user")
            this.$router.push('/')
        }
    },
    created(){
        this.svn=store.state.addRoutes[0].children
    }
}
</script>

<style>
*{
    margin:0;
    padding:0;
}
a{
    color:#fff;
}
ul li{
    list-style: none;

}
.index-box{
    width: 1200px;
    margin:0 auto;
}
.header-svn{
    height: 40px;
    display: flex;
    background:#12a4f5;
    color:#fff;
    line-height: 40px;
}
.header-svn li{
    width: 200px;
    text-align: center;
}
</style>
