import userStore from './stores/UserStore';
import dispatcher from './dispatcher/dispatcher.jsx';


class app extends EventEmitter {
    Constructor() {
        console.log("hello")
                console.log("FluxDispatcher",FluxDispatcher)
        
    }
    init() {
        let appReducer = (payload) => {
            switch(payload.type) {
                case 'VALIDATE_LOGIN' : userStore.login(payload.data);
                                        break;
            }
            return true;
        }
        dispatcher.register(appReducer);
        
    }
}

export default new app();



//var request = require('request');

$(function(){
 

});

