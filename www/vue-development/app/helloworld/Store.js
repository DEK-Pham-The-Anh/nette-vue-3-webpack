const helloworld = {
    state: {
        aaa: 'HELLO WORLD APP'
    }
};

STORE_Global.registerModule('helloworld', helloworld);

module.exports = helloworld;