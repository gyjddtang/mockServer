<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="form">
      <mu-text-field label="账号" hintText="请输入账号" type="text" labelFloat v-model="phoneNumber" />
      <mu-text-field label="密码" hintText="请输入密码" type="password" labelFloat v-model="password" />
      <mu-raised-button label="登录" primary @click="goLogin" />
    </div>
  </div>
</template>

<script>
  import { signIn } from '../services/login';
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Mili App',
        phoneNumber: void 0,
        password: void 0
      }
    },

    methods: {
      goLogin: function () {
        let bodyData = {};
        bodyData.phoneNumber = this.phoneNumber;
        bodyData.password = this.password;

        signIn(bodyData)
          .then(res => {
            console.log(res);
          }, err => {
            console.log(err);
          });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  h1, h2 {
    font-weight: normal;
    color: #8e4fb9;
  }

  .form {
    width: 200px;
    margin: 0 auto;
  }
</style>
