<template>
  <div class="count">
    <h1>当前求和为{{ sum }}</h1>
    <h1>当前求和放大10倍为{{ bigSum }}</h1>
    <h1>我在{{ school }}学习{{ subject }}</h1>
    <h1>Person组件的人员数量是{{ personList.length }}</h1>
    <select v-model="n">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再+</button>
    <button @click="incrementWait(n)">等待一段时间后再+</button>
  </div>
</template>

<script>
// 引入mapState使用简写形式从vuex中获取state的数据并生成对应的代码调用该函数
// 引入mapGetters使用简写形式从vuex中获取state的数据Getters计算属性并生成对应的代码调用该函数
// 引入mapMutations使用简写形式从vuex中获取Mutations的函数并生成对应的代码调用该函数
// 引入mapActions使用简写形式从vuex中获取Actions的函数并生成对应的代码调用该函数
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "Count",
  data() {
    return {
      n: 1,
    };
  },


  computed: {
    // 手动一个个编写获取从vuex中获取state的属性数据
    // 注意如果使用的是模块化的store，this.$store.state.模块名称.state属性名称 获取模块化store下的state的属性数据
    // sum(){
    //   return this.$store.state.countAbout.sum
    // },
    // school(){
    //   return this.$store.state.countAbout.school
    // },
    // subject(){
    //   return this.$store.state.countAbout.subject
    // },
    // personList(){
    //   return this.$store.state.personAbout.personList
    // },

    // 引入mapState使用简写形式从vuex中获取state的数据并生成对应的代码调用该函数
    // （数组写法，只有当computed中的函数名称和state中的属性一致时可以这样写）
    // 注意如果使用的是模块化的store，mapState的第一个参数必须指定store的模块名称
    ...mapState("countAbout", ["sum", "school", "subject"]),
    ...mapState("personAbout", ["personList"]),
    // 引入mapState使用简写形式从vuex中获取state的数据并生成对应的代码调用该函数
    // （对象写法，对象的属性名是生成computed中的函数名称，属性值是state中的属性名称）
    // 注意对象的属性值必须是字符串，如果使用的是模块化的store，mapState的第一个参数必须指定store的模块名称
    // ...mapState('countAbout',{sum:"sum", school:"school", subject:"subject"}),

    // 手动一个个编写获取从vuex中获取state的Getters计算属性
    // 注意如果使用的是模块化的store，通过this.$store.getters['模块名称/计算属性名称']获取store的计算属性
    // bigSum() {
    //   return this.$store.getters["countAbout/bigSum"];
    // },

    // 引入mapGetters使用简写形式从vuex中获取state的数据Getters计算属性并生成对应的代码调用该函数
    // (数组写法，只有当omputed中的函数名称与state中的Getters计算属性名称一致时可以这样写)
    // 注意如果使用的是模块化的store，mapGetters的第一个参数必须指定store的模块名称
    ...mapGetters('countAbout',["bigSum"]),
    // 引入mapGetters使用简写形式从vuex中获取state的数据Getters计算属性并生成对应的代码调用该函数
    // （对象写法，对象的属性名是生成computed中的函数名称，属性值是state中的Getters计算属性名称）
    // 注意对象的属性值必须是字符串，如果使用的是模块化的store，mapGetters的第一个参数必须指定store的模块名称
    // ...mapGetters('countAbout',{bigSum:"bigSum"}),
  },

  methods: {
    // 修改vuex中的state数据
    // 注意如果使用的是模块化的store，通过this.$store.commit第一函数 ['模块名称/mutations中函数名称'] 调用mutations中函数
    // increment(value) {
    //   // 调用$store的commit传递调用的函数名和参数会在store的mutations上查找对应的函数调用
    //   // commit只是用于处理简单的直接处理store上的state数据
    //   // 如果是复杂的业务请使用$store.dispatch处理业务并调用commit
    //   this.$store.commit("countAbout/jia", value);
    // },
    // 注意如果使用的是模块化的store，通过this.$store.commit第一函数 ['模块名称/mutations中函数名称'] 调用mutations中函数
    // decrement(value) {
    //   // 调用$store的commit传递调用的函数名和参数会在store的mutations上查找对应的函数调用
    //   // commit只是用于处理简单的直接处理store上的state数据
    //   // 如果是复杂的业务请使用$store.dispatch处理业务并调用commit
    //   this.$store.commit("countAbout/jian", value);
    // },

    // 引入mapMutations使用简写形式从vuex中获取Mutations的函数并生成对应的代码调用该函数
    // （对象写法，对象的属性名是生成methods中的函数名称，属性值是state中的Mutations的函数名称）
    // 注意对象的属性值必须是字符串，并且生成的methods中的函数参数会一并传递到Mutations的函数中
    // 如果使用的是模块化的store，mapMutations的第一个参数必须指定store的模块名称
    ...mapMutations('countAbout',{increment:"jia",decrement:"jian"}),
    // 引入mapMutations使用简写形式从vuex中获取Mutations的函数并生成对应的代码调用该函数
    // （数组写法，只有当生成methods中的函数名称与state中的Mutations的函数名称一致时可以使用）
    // 注意生成的methods中的函数参数会一并传递到Mutations的函数中
    // 目前methods中的函数名称与state中的Mutations的函数名称不一致
    // 如果使用的是模块化的store，mapMutations的第一个参数必须指定store的模块名称
    // ...mapMutations('countAbout',["increment","decrement"]),

    // 修改vuex中的state数据
    // 注意如果使用的是模块化的store，通过this.$store.dispatch第一函数 ['模块名称/dispatch中函数名称'] 调用dispatch中函数
    // incrementOdd(value) {
    //   // 调用$store的dispatch传递调用的函数名和参数会在store的actions上查找对应的函数调用
    //   // store的actions函数用于处理一些复杂的业务然后调用commit在store的mutations上查找对应的函数调用
    //   // 最终修改store上的state数据
    //   this.$store.dispatch("countAbout/jiaOdd", value);
    // },
    // 修改vuex中的state数据
    // 注意如果使用的是模块化的store，通过this.$store.dispatch第一函数 ['模块名称/dispatch中函数名称'] 调用dispatch中函数
    // incrementWait(value) {
    //   // 调用$store的dispatch传递调用的函数名和参数会在store的actions上查找对应的函数调用
    //   // store的actions函数用于处理一些复杂的业务然后调用commit在store的mutations上查找对应的函数调用
    //   // 最终修改store上的state数据
    //   this.$store.dispatch("countAbout/jiaWait", value);
    // },

    // 引入mapActions使用简写形式从vuex中获取Actions的函数并生成对应的代码调用该函数
    // （对象写法，对象的属性名是生成methods中的函数名称，属性值是state中的Actions的函数名称）
    // 注意对象的属性值必须是字符串，并且生成的methods中的函数参数会一并传递到Actions的函数中
    // 如果使用的是模块化的store，mapActions的第一个参数必须指定store的模块名称
    ...mapActions('countAbout',{incrementOdd:"jiaOdd",incrementWait:"jiaWait"}),
    // 引入mapActions使用简写形式从vuex中获取Actions的函数并生成对应的代码调用该函数
    // （数组写法，只有当生成methods中的函数名称与state中的Actions的函数名称一致时可以使用）
    // 注意生成的methods中的函数参数会一并传递到Actions的函数中
    // 目前methods中的函数名称与state中的Actions的函数名称不一致
    // 如果使用的是模块化的store，mapActions的第一个参数必须指定store的模块名称
    // ...mapActions('countAbout',["incrementOdd","incrementWait"]),
  },
};
</script>

<style scoped>
button {
  margin: 5px;
}
</style>