import { createStore } from 'vuex';

export default createStore({
  state: {
    groups: [], 
    students: [],
  },
  mutations: {
    addgroup(state, group){
        state.groups.push(group)
    },
    addstudent(state, student){
        state.students.push(student)
    }
  },
  actions: {
  }
});