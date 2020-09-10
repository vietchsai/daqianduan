<template>
  <div class="fly-header layui-bg-black">
    <div class="layui-container">
      <a class="fly-logo" href="/">
        <img src="../assets/img/logo-2.png" alt="layui"/>
      </a>
      <ul class="layui-nav fly-nav layui-hide-xs">
        <li class="layui-nav-item layui-this">
          <a href="/">
            <i class="iconfont icon-jiaoliu"></i>交流
          </a>
        </li>
        <li class="layui-nav-item">
          <a href="case/case.html">
            <i class="iconfont icon-iconmingxinganli"></i>案例
          </a>
        </li>
        <li class="layui-nav-item">
          <a href="http://www.layui.com/" target="_blank">
            <i class="iconfont icon-ui"></i>框架
          </a>
        </li>
      </ul>

      <ul class="layui-nav fly-nav-user">
        <!-- 未登入的状态 -->
        <template>
          <li class="layui-nav-item">
            <router-link class="iconfont icon-touxiang layui-hide-xs" to="/user123123"></router-link>
          </li>
          <li class="layui-nav-item">
            <router-link :to="{name: 'login'}">登入</router-link>
          </li>
          <li class="layui-nav-item">
            <router-link :to="{name: 'reg'}">注册</router-link>
          </li>
          <li class="layui-nav-item layui-hide-xs">
            <a
              href
              title="QQ登入"
              class="iconfont icon-qq"
            ></a>
          </li>
          <li class="layui-nav-item layui-hide-xs">
            <a
              href
              title="微博登入"
              class="iconfont icon-weibo"
            ></a>
          </li>
        </template>

      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
};
</script>

<style scoped>
.fly-logo {
  left: -15px;
  top: -10px;
  margin-left: 15px;
}

.layui-layer-tips {
  position: absolute;
  white-space: nowrap;
  right: 0;
  top: 60px;
  z-index: 2000;
}
</style>
