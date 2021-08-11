import store from '../Global/Store';

const todolist = {
    state: {
        aaa: 'TODOLIST APP'
    }
};

store.registerModule('todolist', todolist);

export default todolist;