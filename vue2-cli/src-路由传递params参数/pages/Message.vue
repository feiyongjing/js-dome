<template>
  <div>
    <ul>
      <li v-for="message in messageList" :key="message.id">
        <!-- 跳转路由并携带params路径参数，to的字符串写法，需要使用反引号包裹并且js变量需要使用${}包裹 -->
        <!-- <router-link :to="`/home/message/detail/${message.id}/${message.title}`">{{message.title}}</router-link> -->

        <!-- 跳转路由并携带params路径参数，to的对象写法，注意的是传递params参数不能使用path的属性值
        只能使用路由名称name: 'detail'指定路由并且路由名称只能使用单引号包裹 -->
        <router-link
          :to="{
            name: 'detail',
            params: {
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