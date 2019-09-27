<template>
  <div style="width:100%;overflow-x: hidden">
    <mt-header id="tittle" fixed :title="appTittle"></mt-header>

    <mt-tabbar :selected="selected">
      <mt-tab-item id="movie">
        <span slot="icon" class="iconfont icon-yingyuana"></span>
        <router-link to="/movie" tag="div">电影频道</router-link>
      </mt-tab-item>
      <mt-tab-item id="ciema">
        <span slot="icon" class="iconfont icon-dianying"></span>
        <router-link to="/ciema" tag="div">影院频道</router-link>
      </mt-tab-item>
    </mt-tabbar>
    <transition name="appRouter" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "movie",
      appTittle: "电影频道"
    };
  },
  watch: {
    $route:function(newvalue,oldvalue){
      if(newvalue.path === '/ciema'){
        this.appTittle = '影院'
      }else if(newvalue.path === '/movie'){
        this.appTittle = '电影频道'
      }else if(newvalue.path === '/movie/city'){
        this.appTittle = '城市'
      }else if(newvalue.path === '/movie/serch'){
        this.appTittle = '搜索'
      }else if(newvalue.path === '/movie/willPlay'){
        this.appTittle = '即将上映'
      }else if(newvalue.path === '/movie/hotPlay'){
        this.appTittle = '热播电影'
      }
  }
  }
}
</script>  

<style>
#tittle {
  font-size: 30px;
  height: 60px;
}
.div {
  width: 100px;
  height: 100px;
  background: tomato;
}
.appRouter-enter{
  margin-left: 80%
}
.appRouter-enter-active{
  transition: all .5s ease;
}
</style>