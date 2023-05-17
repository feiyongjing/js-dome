<template>
  <div>
    <ul>
      <li v-for="massage in massageList" :key="massage.id">
        <!-- 跳转路由并携带params路径参数，to的字符串写法，需要使用反引号包裹并且js变量需要使用${}包裹 -->
        <!-- <router-link :to="`/home/massage/detail/${massage.id}/${massage.title}`">{{massage.title}}</router-link> -->

        <!-- 跳转路由并携带params路径参数和query表单参数，to的对象写法，注意的是传递params参数不能使用path的属性值
        只能使用路由名称name: 'detail'指定路由并且路由名称只能使用单引号包裹 -->
        <!-- router-link的push属性设置当前页面被浏览器记录，而replace属性是设置当前页面及其子路由页面不被浏览器记录，
        即跳转到其他页面后无法回退到之前的页面，但是会继续向更早的页面跳转 -->
        <router-link 
          :to="{
            name: 'detail',
            params: {
              id: massage.id,
            },
            query: {
              title: massage.title,
            },
          }"
          >{{ massage.title }}</router-link>

          <!-- 不使用router-link标签实现路由跳转 -->
          <button @click="pushShow(massage)" >push跳转</button>
          <button @click="replaceShow(massage)">replace</button>
      </li>
    </ul>

    <!-- 指定组件的呈现位置 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Massage",
  data() {
    return {
      massageList: [
        { id: "001", title: "消息001" },
        { id: "002", title: "消息002" },
        { id: "003", title: "消息003" },
      ],
    };
  },

  methods:{
    pushShow(massage){
      // this.$router.push，进行路由的跳转，并且当前页面被浏览器记录，可以回退到当前页面
      // 参数和router-link标签的to属性对象写法一样
      this.$router.push({
            name: 'detail',
            params: {
              id: massage.id,
            },
            query: {
              title: massage.title,
            },
          });
    },
    replaceShow(massage){
      // this.$router.replace进行路由的跳转，而当前页面不被浏览器记录，不可以回退到当前页面
      // 参数和router-link标签的to属性对象写法一样
      this.$router.replace({
            name: 'detail',
            params: {
              id: massage.id,
            },
            query: {
              title: massage.title,
            },
          });
    }
  }
};
</script>

<style>
</style>