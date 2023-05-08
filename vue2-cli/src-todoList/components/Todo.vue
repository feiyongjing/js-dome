<template>
  <li>
    <div>
      <input
        type="checkbox"
        :checked="todoObj.done"
        @click="headleCheck(todoObj.id)"
      />
      <span v-if="!todoObj.isEdit">{{ todoObj.title }}</span>
      <input
        v-else
        type="text"
        ref="inputTitle"
        :value="todoObj.title"
        @blur="headleBlur(todoObj, $event)"
      />

      <button
        class="btn btn-edit"
        v-if="!todoObj.isEdit"
        @click="headleEdit(todoObj)"
      >
        编辑
      </button>
      <button class="btn btn-danger" @click="headleDelete(todoObj.id)">
        删除
      </button>
    </div>
  </li>
</template>

<script>
export default {
  name: "Todo",
  data() {
    return {};
  },

  props: ["todoObj"],

  methods: {

    headleCheck(id) {
      // 触发全局总线事件，第一参数是事件名称，后面的参数是触发事件时携带的参数
      this.$bus.$emit("checkTodo", id);
    },


    headleDelete(id) {
      if (confirm("确定删除吗？")) {
        // 触发全局总线事件，第一参数是事件名称，后面的参数是触发事件时携带的参数
        this.$bus.$emit("deleteTodo", id);
      }
    },

    // 编辑
    headleEdit(todoObj) {
      // 注意todoObj没有isEdit属性需要额外的添加该属性
      if (todoObj.hasOwnProperty("isEdit")) {
        todoObj.isEdit = true;
      } else {
        this.$set(todoObj, "isEdit", true);
      }

      // 由于修改todoObj.isEdit后没有马上就生效产生编辑input的DOM，这个时候无法获取焦点
      // 需要使用 $nextTick 进行指定在下一次Dom生成后的回调函数，在该函数中可以获取到编辑input的焦点
      this.$nextTick(function(){
        // 获取编辑input框的焦点
        console.log(this.$refs.inputTitle)
        this.$refs.inputTitle.focus()
      })
    },

    // 编辑框失去焦点时触发
    headleBlur(todoObj, event) {
      todoObj.isEdit = false;

      if (!event.target.value.trim()) return alert("输入不能为空！")

      // 触发全局总线事件，第一参数是事件名称，后面的参数是触发事件时携带的参数
      this.$bus.$emit("updateTodo", todoObj.id, event.target.value);
    },
  },
};
</script>

<style scoped>
li {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

li:hover {
  background-color: #ddd;
}

input {
  font-size: 12px;
}

.btn-edit {
  display: none;
  font-size: 12px;
  color: rgb(55, 87, 250);
}

.btn-danger {
  display: none;
  font-size: 12px;
  color: red;
}

li:hover button {
  display: block;
}

li div {
  text-align: left;
  border: 3px solid black;
  width: 350px;
}
</style>