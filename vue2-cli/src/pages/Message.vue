<template>
  <div>
    <ul>
      <li v-for="message in messageList" :key="message.id">
        <!-- 跳转路由并携带query参数，to的字符串写法，需要使用反引号包裹并且js变量需要使用${}包裹 -->
        <!-- <router-link :to="`/home/message/detail?id=${message.id}&title=${message.title}`">{{message.title}}</router-link> -->

        <!-- 跳转路由并携带query参数，to的对象写法，注意的是path的属性值必须使用单引号包裹，
        或者使用路由名称name: detail指定路由替换掉path属性（避免path路径过长） -->
        <router-link
          :to="{
            path: '/home/message/detail',
            query: {
              id: message.id,
              title: message.title,
            },
          }"
          >{{ message.title }}</router-link>
      </li>
    </ul>

    <!-- 指定组件的呈现位置 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      messageList: [
        { id: "001", title: "消息001" },
        { id: "002", title: "消息002" },
        { id: "003", title: "消息003" },
      ],
    };
  },
};
</script>

<style>
</style>