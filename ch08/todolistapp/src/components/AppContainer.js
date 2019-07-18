import App from './App'
import TodoActionCreator from '../redux/TodoActionCreator';
import TimeActionCreator from '../redux/TimeActionCreator';
import { connect } from 'react-redux';

const mapState = (state) => {
    return{
        todolist:state.todolist,
        currentTime:state.currentTime
    }

}
const mapDispatch = (dispatch) => {
    return {
        addTodo:(todo) => dispatch(TodoActionCreator.addTodo(todo)),
        //액션메세지를 디스패치
        deleteTodo:(no) => dispatch(TodoActionCreator.deleteTodo(no)),
        toggleDone:(no) => dispatch(TodoActionCreator.toggleDone(no)),
        changeTime : () => dispatch(TimeActionCreator.asyncChangeTime())

    }
}
//처음에 store에는 아무거소 없다
//TodoReucer 실행
const AppContainer = connect(mapState, mapDispatch)(App);
export default AppContainer