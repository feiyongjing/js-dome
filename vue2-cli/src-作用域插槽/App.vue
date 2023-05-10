<template>
  <div id="app">
    <Category :title="电影">
      <!-- 使用template标签可以通过slot-scope或者是scope从作用域插槽中获取数据 -->
      <template scope="{films}">
        <ul>
          <!-- 使用从作用域插槽中获取数据渲染列表 -->
          <li v-for="item in films" :key="item.index">{{ item }}</li>
        </ul>
        <div class="films">
          <a href="/url">经典</a>
          <a href="/url">热门</a>
          <a href="/url">推荐</a>
        </div>
        <h4>欢迎前来观影</h4>
      </template>
    </Category>

    <Category :title="电影">
      <!-- 使用template标签可以通过slot-scope或者是scope从作用域插槽中获取数据 -->
      <template scope="{films}">
        <ol>
          <!-- 使用从作用域插槽中获取数据渲染列表 -->
          <li v-for="item in films" :key="item.index">{{ item }}</li>
        </ol>
        <div class="films">
          <a href="/url">经典</a>
          <a href="/url">热门</a>
          <a href="/url">推荐</a>
        </div>
        <h4>欢迎前来观影</h4>
      </template>
    </Category>

    <Category :title="电影">
      <!-- 使用template标签可以通过slot-scope或者是scope从作用域插槽中获取数据 -->
      <template scope="{films}">
        <!-- 使用从作用域插槽中获取数据渲染列表 -->
        <h4 v-for="item in films" :key="item.index">{{ item }}</h4>
        <div class="films">
          <a href="/url">经典</a>
          <a href="/url">热门</a>
          <a href="/url">推荐</a>
        </div>
        <h4>欢迎前来观影</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category.vue";

export default {
  name: "App",
  components: {
    Category,
  },
  data() {
    return {};
  },
};
</script>

<style>
#app,
.films,
.games {
  display: flex;
  justify-content: space-around;
}

h4 {
  text-align: center;
}

img {
  width: 100%;
}
</style>
