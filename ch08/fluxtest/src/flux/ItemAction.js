import Constant from './Constant';
import AppDispatcher from './AppDispatcher';

const ItemActions = {
    addItem(itemName) {
        if(itemName.length > 2) {
            let id = new Date().getTime();
            //액션을 디스패처에게 준다. 디스패처 거쳐 스토어로 간다.
            //액션생성자
            AppDispatcher.dispatch({type:Constant.ADD_ITEM,payload: {id, itemName}}) //id:id, itemName:itemName
        }
    },
    deleteItem(id) {
        //액션생성자
        AppDispatcher.dispatch({type:Constant.DELETE_ITEM,payload:{id}});

    },
    changeName(itemName) {
        //액션생성자
        AppDispatcher.dispatch({type:Constant.CHANGE_NAME,payload:{itemName}})

    }
}

export default ItemActions;