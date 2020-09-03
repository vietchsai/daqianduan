<template>
  <div id="app">
    <div class="layui-container">
      <form class="layui-form layui-form-pane" action="">
        <div class="layui-form-item">
          <label class="layui-form-label">用户名</label>
          <div class="layui-input-inline">
            <input type="text" name="title" placeholder="" autocomplete="off"
                   class="layui-input" v-model="name" required >
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">密码</label>
          <div class="layui-input-inline">
            <input type="password" name="title" autocomplete="off" class="layui-input"
                   v-model="password" required >
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">验证码</label>
          <div class="layui-input-inline">
            <input type="text" name="code" placeholder=""
                   autocomplete="off" class="layui-input" v-model="code" required>
          </div>
          <div class="layui-form-mid svg" v-html="svg" @click="getCaptcha">图片</div>
        </div>
        <button class="layui-btn">点击登陆</button>
        <a href="./forget.html" class="imc-link">忘记密码</a>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'app',
  data () {
    return {
      svg: '',
      name: '',
      password: '',
      code: ''
    };
  },
  mounted () {
    this.getCaptcha();
  },
  methods: {
    getCaptcha () {
      axios.get('http://localhost:3000/getCaptcha')
        .then((res) => {
          if (res.status === 200) {
            const obj = res.data;
            if (obj.code === 200) {
              this.svg = obj.data;
            }
          }
        });
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
  top: -15px;
}
</style>
