<template>
    <div class="m-user">
        <template v-if="user" >
            欢迎您，<span class="username">{{user}}</span>
            <nuxt-link to="/exit">退出</nuxt-link>
        </template>
        <template v-else>
            <span class="login" to="/login">登录</span>
            <span class="register" to="/register">注册</span>
        </template>
    </div>
</template>


<script>
export default {
    data() {
        return {
            user:''
        }
    }
}
</script>
