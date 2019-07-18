import Constant from '../Constant'

//여기서 디스패치 x
//액션 메세지 만들어 리턴만
const TodoActionCreator = {
    addTodo(todo){
        return { type:Constant.ADD_TODO, payload:{todo}}
    },
    deleteTodo(no){
        return { type:Constant.DELETE_TODO, payload:{no}}
    },
    toggleDone(no){
        return { type:Constant.TOGGLE_DONE, payload:{no}}
    }
}

export default TodoActionCreator;