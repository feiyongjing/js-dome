<template>
  <div id="app">
    <Category :listData="foods" :title="美食">
      <!-- 自定义组件的标签内容存放在具名插槽中 -->
      <img slot="center" src="./assets/OIP-C.png" alt="" />
      <a slot="footer" href="/url">更多美食</a>
    </Category>
    <Category :title="游戏">
      <!-- 自定义组件的标签内容存放在具名插槽中 -->
      <ul slot="center">
        <li v-for="item in games" :key="item.index">{{ item }}</li>
      </ul>
      <div class="games" slot="footer">
        <a href="/url">单机游戏</a>
        <a href="/url">网络游戏</a>
      </div>
    </Category>
    <Category :title="电影">
      <!-- 自定义组件的标签内容存放在具名插槽中 -->
      <ul slot="center">
        <li v-for="item in films" :key="item.index">{{ item }}</li>
      </ul>
      <!-- 在template标签中可以使用v-slot:存放内容到具名插槽中
      (其他标签请老实的使用slot="插槽的名称")，注意插槽的名称不要添加引号 -->
      <template v-slot:footer>
        <div class="films">
          <a href="/url">经典</a>
          <a href="/url">热门</a>
          <a href="/url">推荐</a>
        </div>
        <h4 slot="footer">欢迎前来观影</h4>
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
    return {
      foods: ["火锅", "烧烤", "小龙虾", "牛排"],
      games: ["红色警戒", "穿越火线", "劲舞团", "超级玛丽"],
      films: ["《教父》", "《拆弹专家》", "《黑客帝国》", "《生化危机》"],
    };
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
