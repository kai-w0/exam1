import { Api } from './api.js'
import { View } from './view.js'

export const Model = ((api, view) => {
    class Todo {
        constructor(content) {
            // this.id = 3;
            this.content = content;
            this.isCompleted = false;
        }
    }

    class State {
        #pendinglist = [];
        #completedlist = [];

        get pendinglist() {
            return this.#pendinglist;
        }

        get completedlist() {
            return this.#completedlist;
        }

        set todolist(newtodolist) {
            [...newtodolist].forEach(todo => {
                if (todo.isCompleted === false) {
                    this.#pendinglist.push(todo);
                } else {
                    this.#completedlist.push(todo);
                }
            });

            const pendinglistEle = document.querySelector(view.domstr.pendinglist);
            const ptmp = view.createTmp(this.pendinglist);
            view.render(pendinglistEle, ptmp);

            const completedlistEle = document.querySelector(view.domstr.completedlist);
            const ctmp = view.createTmp(this.completedlist);
            view.render(completedlistEle, ctmp);
            
        }

        
    }

    const getTodos = api.getTodos;
    const getTodo = api.getTodo;
    const deleteTodo = api.deleteTodo;
    const addTodo = api.addTodo;
    const editTodo = api.editTodo;

    return {
        getTodos,
        deleteTodo,
        addTodo,
        State,
        Todo,
        editTodo,
    };
})(Api, View);