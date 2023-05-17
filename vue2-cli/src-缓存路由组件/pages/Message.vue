<template>
  <div>
    <ul>
      <li v-for="message in messageList" :key="message.id">
        <!-- 跳转路由并携带params路径参数，to的字符串写法，需要使用反引号包裹并且js变量需要使用${}包裹 -->
        <!-- <router-link :to="`/home/message/detail/${message.id}/${message.title}`">{{message.title}}</router-link> -->

        <!-- 跳转路由并携带params路径参数和query表单参数，to的对象写法，注意的是传递params参数不能使用path的属性值
        只能使用路由名称name: 'detail'指定路由并且路由名称只能使用单引号包裹 -->
        <!-- router-link的push属性设置当前页面被浏览器记录，而replace属性是设置当前页面及其子路由页面不被浏览器记录，
        即跳转到其他页面后无法回退到之前的页面，但是会继续向更早的页面跳转 -->
        <router-link 
          :to="{
            name: 'detail',
            params: {
              id: message.id,
            },
            query: {
              title: message.title,
            },
          }"
          >{{ message.title }}</router-link>

          <!-- 不使用router-link标签实现路由跳转 -->
          <button @click="pushShow(message)" >push跳转</button>
          <button @click="replaceShow(message)">replace</button>
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

  methods:{
    pushShow(message){
      // this.$router.push，进行路由的跳转，并且当前页面被浏览器记录，可以回退到当前页面
      // 参数和router-link标签的to属性对象写法一样
      this.$router.push({
            name: 'detail',
            params: {
              id: message.id,
            },
            query: {
              title: message.title,
            },
          });
    },
    replaceShow(message){
      // this.$router.replace进行路由的跳转，而当前页面不被浏览器记录，不可以回退到当前页面
      // 参数和router-link标签的to属性对象写法一样
      this.$router.replace({
            name: 'detail',
            params: {
              id: message.id,
            },
            query: {
              title: message.title,
            },
          });
    }
  },

  mounted() {
    console.log("message组件挂载完毕了！");
  },
  beforeDestroy() {
    console.log("message组件即将被销毁了！");
  },
};
</script>

<style>
</style>