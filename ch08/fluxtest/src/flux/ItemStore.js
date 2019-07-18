import { Store } from 'flux/utils';
import AppDispatcher from './AppDispatcher';
import Constant from './Constant';
import produce from 'immer';

//export하지 않음 --> 내부에 숨겨진 상태
let itemName = '';
let items = [];

class ItemStore extends Store{
    getState() {
        return{ itemName, items }; //속성이름과 변수이름 같으면 하나만 
        //배열 하위 값만 불변성 처리 
        //배열아니것은 불변성 확보
    }
    __onDispatch(action) {
        //type에 따라 상태 변경
        switch(action.type){
            case Constant.ADD_ITEM :
                items = produce(items, (draft)=>{
                    draft.push(action.payload)
                })
                //해당 상태 구독하는 컴포넌트에게
                //상태가 바꼇음을 알리는 메소드 --> emitChange()
                this.__emitChange();
                break;
            case Constant.DELETE_ITEM :
                let index = items.findIndex((item)=>item.id === action.payload.id);
                items = produce(items,(draft)=>{
                    draft.splice(index,1);
                });
                this.__emitChange();
                break;

            case Constant.CHANGE_NAME :
                itemName = action.payload.itemName;
                this.__emitChange();
                break;
            default:
                break;
        }
    }
}

export default new ItemStore(AppDispatcher);
//dispatcher 통해 item store가 받겠다.