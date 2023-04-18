import App from "./App.vue";

new Vue({
    el: ".singleFileComponentVm",
    
    components: {
        App,  // App:App  key是最终组件的名称，value是组件变量，如果它们的名称一致就可以简写为key
    },

    // template: `
    //     <div>
    //         <App></App>
    //     </div>
    // `,


})