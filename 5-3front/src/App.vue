<template>
  <div id="app">
    <div class="layui-container">
      <form class="layui-form layui-form-pane">
        <div class="layui-form-item">
          <label class="layui-form-label">用户名</label>
          <div class="layui-input-block">
            <input type="text" name="username" required  lay-verify="required" placeholder="请输入标题" autocomplete="off" class="layui-input">
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">密码</label>
          <div class="layui-input-block">
            <input type="password" name="password" required  lay-verify="required" placeholder="请输入标题" autocomplete="off" class="layui-input">
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">验证码</label>
          <div class="layui-input-block">
            <input type="text" name="vcode" required  lay-verify="required" placeholder="请输入标题" autocomplete="off" class="layui-input">
          </div>
        </div>
        <button type="button" class="layui-btn">一个标准的按钮</button>
        <a href="http://www.layui.com" class="forget-link ">忘记密码？</a>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#app{
  background-color: #f2f2f2;
}
.layui-container{
  background-color: #fff;
}
input{
  width: 190px;
}
.forget-link{
  margin-left: 10px;
  &:hover{
     color: #009688;
  }
}
</style>
