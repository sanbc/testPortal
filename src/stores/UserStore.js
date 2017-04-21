//import BaseStore from './BaseStore';
import services from '../services/services.js';
import { EventEmitter } from 'events';

class UserStore  {
    constructor() {
       // super();
    } 
    login(options) {
        services.login(options)
        .then((resp) => {
            console.log("Login", resp);
            EventEmiter.emit("Login completed")
        } );
    }
}

const userStore = new UserStore();
export default userStore;