<template>
<div>
  <div class="layui-container fly-marginTop">
    <div class="fly-panel fly-panel-user" pad20>
      <div class="layui-tab layui-tab-brief" lay-filter="user">
        <ul class="layui-tab-title">
          <li class="layui-this">登入</li>
          <li>
            <router-link :to="{name: 'reg'}">注册</router-link>
          </li>
        </ul>
        <div class="layui-form layui-tab-content" id="LAY_ucm" style="padding: 20px 0;">
          <div class="layui-tab-item layui-show">
            <form class="layui-form layui-form-pane" action="">
              <div class="layui-form-item">
                <label class="layui-form-label">用户名</label>
                <ValidationProvider name="用户名" rules="required|email" v-slot="{errors}">
                  <div class="layui-input-inline">
                    <input type="text"
                           name="name"
                           placeholder="请输入用户名"
                           autocomplete="off"
                           class="layui-input"
                           v-model.trim="name"
                    />
                  </div>
                  <span class="error layui-form-mid">{{errors[0]}}</span>
                </ValidationProvider>
              </div>
              <div class="layui-form-item">
                <label class="layui-form-label">密码</label>
                <div class="layui-input-inline">
                  <input type="password"
                         name="title"
                         autocomplete="off"
                         placeholder="请输入密码"
                         class="layui-input"
                         v-model="password">
                </div>
              </div>
              <div class="layui-form-item">
                <label class="layui-form-label">验证码</label>
                <div class="layui-input-inline">
                  <input type="text"
                         name="code"
                         placeholder="请输入验证码"
                         autocomplete="off"
                         class="layui-input"
                         v-model="code">
                </div>
                <div class="layui-form-mid svg" v-html="svg" @click="_getCode">图片</div>
              </div>
              <button type="button" class="layui-btn" @click="checkForm">点击登陆</button>
              <router-link :to="{name: 'forget'}" class="imc-link">忘记密码</router-link>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { getCode } from '@/api/login.js';
import { ValidationProvider, extend } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import zh from 'vee-validate/dist/locale/zh_CN.json';

for (const rule in rules) {
  extend(rule, {
    ...rules[rule],
    message: zh.messages[rule]
  });
}

export default {
  name: 'Login',
  components: {
    ValidationProvider
  },
  data () {
    return {
      svg: '',
      name: '',
      password: '',
      code: '',
      errorMessage: ''
    };
  },
  mounted () {
    this._getCode();
  },
  methods: {
    _getCode () {
      getCode().then(res => {
        if (res.code === 200) {
          this.svg = res.data;
        }
      });
    },
    // getCaptcha () {
    //   axios.get('http://localhost:3000/getCaptcha')
    //     .then((res) => {
    //       if (res.status === 200) {
    //         const obj = res.data;
    //         if (obj.code === 200) {
    //           this.svg = obj.data;
    //         }
    //       }
    //     });
    // },
    checkForm () {
      this.errorMessage = [];
      if (!this.name) {
        this.errorMessage.push('姓名为空!');
      }
      if (!this.password) {
        this.errorMessage.push('密码为空!');
      }
      if (!this.code) {
        this.errorMessage.push('验证码为空!');
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#app{
  background-color: #f2f2f2;
}
.layui-form{
  background-color: #fff;
  padding: 0 20px;
}
input{
  width: 190px;
}
.imc-link{
  margin-left: 20px;
  &:hover{
    color: #009688;
  }
}

.svg{
  position: relative;
  padding: 0!important;
}
.error{
  color: red;
}

</style>
