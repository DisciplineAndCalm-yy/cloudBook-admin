import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        userinfo: {
            username: '',
            avatar: '',
            desc: '',
            nickname: '',
            email: ''
        },
        catelogId: ''
    },
    mutations: {
        CHANGE_USERINFO (state, userinfo){
            state.userinfo = userinfo
        },
        GET_CATELOG (state, catelogId) {
            state.catelogId = catelogId
        }
    },
    actions: {},
    plugins: []
})

export default store