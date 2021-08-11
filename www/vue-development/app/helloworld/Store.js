import store from '../Global/Store';

const helloworld = {
    state: {
        aaa: 'HELLO WORLD APP'
    }
};

store.registerModule('helloworld', helloworld);

export default helloworld;