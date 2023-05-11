
import axios from 'axios'


export default {

    namespaced: true,
    actions: {
        addPersonServer(context) {
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                response => {
                    context.commit('addPerson', { id: Date.now(), name: response.data })
                }
                ,
                error => {
                    alert(error.message)
                }
            )
        }
    },
    mutations: {
        addPerson(state, value) {
            state.personList.unshift(value)
        }
    },
    state: {
        personList: [
            {
                id: Date.now(),
                name: "张三"
            }
        ],
    },
    getters: {}
}