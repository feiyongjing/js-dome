<template>
  <div>
    <h2>我是Home的内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link
            class="list-group-item"
            active-class="active"
            to="/home/message"
            >message</router-link
          >
        </li>
        <li>
          <router-link
            class="list-group-item"
            active-class="active"
            to="/home/news"
            >news</router-link
          >
        </li>
      </ul>

      <!-- keep-alive标签是让包裹的路由组件在切换时进行缓存从而不被销毁，做到用户的输入不被清理掉
      默认是包裹的全部路由组件不被销毁，
      include属性是用于指定特定的路由组件不被销毁而其他的路由组件都被销毁(内部的值是组件名称，而不是路由名称)
      include="['News','Message']" 设置多个路由组件缓存
       -->
      <keep-alive include="News">
        <!-- 指定组件的呈现位置 -->
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>