<template>
  <div id="app">
    <div class="layui-container">
      <form class="layui-form layui-form-pane" action="">
        <div class="layui-form-item">
          <label class="layui-form-label">用户名</label>
          <div class="layui-input-block">
            <input type="text" name="title" required placeholder="请输入标题" autocomplete="off" class="layui-input">
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">密码</label>
          <div class="layui-input-block">
            <input type="password" name="title" required placeholder="请输入标题" autocomplete="off" class="layui-input">
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">验证码</label>
          <div class="layui-input-block">
            <input type="text" name="title" required placeholder="请输入标题" autocomplete="off" class="layui-input">
          </div>
        </div>
        <button class="layui-btn">点击登陆</button>
        <a href="./forget.html" class="imc-link">忘记密码</a>
      </form>
    </div>
  </div>
</template>

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
</style>
