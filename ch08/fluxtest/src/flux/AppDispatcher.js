import { Dispatcher } from 'flux';
import Constant from './Constant';
import ItemStore from './ItemStore'

//export default new Dispatcher();

class AppDispatcher extends Dispatcher {
    dispatch(action) {
        if(action.type !== Constant.CHANGE_NAME){
            console.log("##############################");
            console.log( "##액션: " + action);
            console.log("## 전 상태 : ",ItemStore.getState())
        }
            super.dispatch(action);
            if(action.type!==Constant.CHANGE_NAME){
            console.log("## 후 상태 : ",ItemStore.getState())
            }
        
        
    }
}

export default new AppDispatcher();