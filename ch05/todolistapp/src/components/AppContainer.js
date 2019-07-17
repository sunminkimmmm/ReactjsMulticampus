import React, { Component } from 'react';
import produce from 'immer';
import App from './App';


class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todolist : [
                { no:1, todo:"React학습1", done:false },
                { no:2, todo:"React학습2", done:false },
                { no:3, todo:"React학습3", done:true },
                { no:4, todo:"React학습4", done:false },
            ]
        }
    }

    addTodo = (todo) => {
        let newTodoList = produce(this.state.todolist, (draft) => {
            draft.push({no: new Date().getTime(), todo:todo, done:false});
        })
        this.setState({todolist:newTodoList});
    }
    deleteTodo = (no) => {
        let index = this.state.todolist.findIndex((todo) => todo.no === no);
        let newTodoList = produce(this.state.todolist, (draft)=> {
            draft.splice(index,1);
        })
        this.setState({todolist:newTodoList});
    }
    toggleDone = (no) => {
        let index = this.state.todolist.findIndex((todo) => todo.no === no);
        let newTodoList = produce(this.state.todolist, (draft)=> {
            draft[index].done =! draft[index].done;
        })
        this.setState({todolist:newTodoList});
    }
    
    render() {
        return (
            <App todolist={this.state.todolist}
                addTodo={this.addTodo}
                deleteTodo={this.deleteTodo}
                toggleDone={this.toggleDone}
            />
        );
    }
}

export default AppContainer;