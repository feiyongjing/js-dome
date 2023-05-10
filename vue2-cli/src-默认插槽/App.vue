<template>
  <div id="app">
    <Category :listData="foods" :title="美食">
      <!-- 自定义组件的标签内容存放在插槽中 -->
      <img src="./assets/OIP-C.png" alt="" />
    </Category>
    <Category :title="游戏">
      <!-- 自定义组件的标签内容存放在插槽中 -->
      <ul>
        <li v-for="item in games" :key="item.index">{{ item }}</li>
      </ul>
    </Category>
    <Category :title="电影">
      <!-- 自定义组件的标签内容存放在插槽中 -->
      <ul>
        <li v-for="item in films" :key="item.index">{{ item }}</li>
      </ul>
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
#app {
  display: flex;
  justify-content: space-around;
}

img{
  width: 100%;
}
</style>
