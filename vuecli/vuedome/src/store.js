import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:0
  },
  mutations: {
    add(state,num){
      state.count+= num;
    },
    reduce(state){
      state.count--;
    }
  },
    actions:{
      actionAdd({commit}){
        setTimeout(()=>{
          commit("add",50)
          },1000)
      }
    },
  getters: {
    count(state){
      return state.count+=100
    }
  }
})