//import BaseStore from './BaseStore';
import services from '../services/services.js';
class UserStore  {
    constructor() {
       // super();
    } 
    login(options) {
        services.login(options,  () => {
            console.log("LOgin")
        } );
    }
}

const userStore = new UserStore();
export default userStore;