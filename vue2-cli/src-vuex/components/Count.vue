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
    // 从vuex的store中获取state的属性数据
    // 方式一：手动一个个编写获取store模块中的state数据
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

    // 方式二：引入mapState使用简写形式从vuex中获取state的数据并生成对应的代码调用该函数
    // 注意如果使用的是模块化的store，mapState的第一个参数必须指定store的模块名称
    // 数组写法，只有当computed中的函数名称和state中的属性一致时可以这样写
    ...mapState("countAbout", ["sum", "school", "subject"]),
    ...mapState("personAbout", ["personList"]),
    // 对象写法，对象的属性名是生成computed中的函数名称，属性值是state中的属性名称并且必须是字符串
    // ...mapState('countAbout',{sum:"sum", school:"school", subject:"subject"}),



    // 从vuex的store中获取state的Getters计算属性
    // 方式一：手动一个个编写获取store模块中的state数据
    // 注意如果使用的是模块化的store，通过this.$store.getters['模块名称/计算属性名称']获取store的计算属性
    // bigSum() {
    //   return this.$store.getters["countAbout/bigSum"];
    // },

    // 方式二：引入mapGetters使用简写形式从vuex中获取state的数据Getters计算属性并生成对应的代码调用该函数
    // 如果使用的是模块化的store，mapGetters的第一个参数必须指定store的模块名称
    // 数组写法，只有当omputed中的函数名称与state中的Getters计算属性名称一致时可以这样写
    ...mapGetters('countAbout', ["bigSum"]),
    // 对象写法，对象的属性名是生成computed中的函数名称，属性值是state中的Getters计算属性名称并且必须是字符串
    // ...mapGetters('countAbout',{bigSum:"bigSum"}),
  },

  methods: {
    // 调用vuex的store模块mutations中函数简单修改state数据
    // 方式一：手动一个个编写调用store模块mutations中函数修改state数据
    // 注意如果使用的是模块化的store，通过this.$store.commit第一函数 ['store模块名称/store模块mutations中函数名称'] 调用mutations中函数
    // increment(value) {
    //   // 调用$store的commit传递调用的函数名和参数会在store的mutations上查找对应的函数调用
    //   // commit只能调用mutations中函数处理简单的直接处理store上的state数据
    //   this.$store.commit("countAbout/jia", value);
    // },
    // decrement(value) {
    //   this.$store.commit("countAbout/jian", value);
    // },

    // 方式二：引入mapMutations使用简写形式从vuex中获取Mutations的函数并生成对应的代码调用该函数
    // 如果使用的是模块化的store，mapMutations的第一个参数必须指定store的模块名称，并且生成的methods中的函数参数和Mutations的函数参数一致
    // 对象写法，对象的属性名是生成methods中的函数名称，属性值是state中的Mutations的函数名称并且必须是字符串
    ...mapMutations('countAbout',{increment:"jia",decrement:"jian"}),
    // 数组写法，只有当生成methods中的函数名称与state中的Mutations的函数名称一致时可以使用
    // 注意目前methods中的函数名称与state中的Mutations的函数名称不一致，所以没有使用数组写法
    // ...mapMutations('countAbout',["increment","decrement"]),


    
    // 调用vuex的store模块actions中函数复杂修改state数据
    // 方式一：手动一个个编写调用store模块actions中函数修改state数据
    // 注意如果使用的是模块化的store，通过this.$store.dispatch第一函数 ['模块名称/dispatch中函数名称'] 调用dispatch中函数
    // incrementOdd(value) {
    //   // 调用$store的dispatch传递调用的函数名和参数会在store的actions上查找对应的函数调用
    //   // store的actions中的函数用于处理一些复杂的业务，actions中的函数内部可能会调用commit在store的mutations上查找对应的函数调用
    //   // 最终修改store上的state数据
    //   this.$store.dispatch("countAbout/jiaOdd", value);
    // },
    // incrementWait(value) {
    //   this.$store.dispatch("countAbout/jiaWait", value);
    // },

    // 引入mapActions使用简写形式从vuex中获取Actions的函数并生成对应的代码调用该函数
    // 如果使用的是模块化的store，mapActions的第一个参数必须指定store的模块名称，并且生成的methods中的函数参数和Actions的函数参数一致
    // 对象写法，对象的属性名是生成methods中的函数名称，属性值是state中的Actions的函数名称并且必须是字符串
    ...mapActions('countAbout',{incrementOdd:"jiaOdd",incrementWait:"jiaWait"}),
    // 数组写法，只有当生成methods中的函数名称与state中的Actions的函数名称一致时可以使用
    // 注意目前methods中的函数名称与state中的Actions的函数名称不一致，所以没有使用数组写法
    // ...mapActions('countAbout',["incrementOdd","incrementWait"]),
  },
};
</script>

<style scoped>
button {
  margin: 5px;
}
</style>