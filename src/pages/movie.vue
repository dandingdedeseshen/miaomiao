<template>
  <div>
    <div id="body">
      <router-link to="/movie/city" tag="div">城市</router-link>
      <router-link to="/movie/willPlay" tag="div">即将上映</router-link>
      <router-link to="/movie/hotPlay" tag="div">热播电影</router-link>
      <router-link to="/movie/serch" tag="div">
        <span class="iconfont icon-sousuo"></span>
      </router-link>
    </div>
    <transition mode="out-in" name="movieRouter">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
#body {
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: hidden;
  div {
    width: 25%;
    text-align: center;
    height: 40px;
    line-height: 40px;
  }
}
.router-link-active{
  border-bottom: 2px red solid;
  color: red;
}
.movieRouter-leave-to {
  margin-left: 80%;
}
.movieRouter-enter {
  margin-left: 80%;
}
.movieRouter-leave-active,
.movieRouter-enter-active {
  transition: all 0.5s ease;
}
</style>