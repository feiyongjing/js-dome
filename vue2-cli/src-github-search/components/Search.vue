<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="keyWord"
      />&nbsp;
      <button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "Search",
  data() {
    return {
      keyWord: "",
    };
  },
  methods: {
    searchUsers() {
      // 请求前是加载中
      this.$bus.$emit("updateListData", {
        // 初始化的欢迎词隐藏
        isFirst:false,
        // 请求前是正在加载中
        isLoading: true,
        // 需要清空错误信息，否则会残留上一次请求失败的错误信息
        errMsg: "",
      });

      axios({
        url: `https://api.github.com/search/users`,
        method: "GET",
        params: {
          q: this.keyWord,
        },
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
        data: {},
      }).then(
        (response) => {
          console.log("请求响应状态码", response.status);
          console.log("请求响应全部header头信息", response.headers);
          //   console.log("请求响应体信息", response.data);

          // 请求加载成功
          this.$bus.$emit("updateListData", {
            // 加载结束
            isLoading: false,
            // 需要清空错误信息，否则会残留上一次请求失败的错误信息
            errMsg: "",
            // 请求成功返回的数据
            users: response.data.items,
          });
        },
        (error) => {
          // 请求加载失败
          this.$bus.$emit("updateListData", {
            // 加载结束
            isLoading: false,
            // 错误信息
            errMsg: error.masage,
            // 需要清空数据，否则会残留上一次请求成功的数据
            users:[]
          });
          console.log("请求失败了", error.masage);
        }
      );
    },
  },
};
</script>
