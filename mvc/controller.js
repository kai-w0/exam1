import { View } from './view.js'
import { Model } from './model.js'

export const Controller = ((model, view) => {
    const state = new model.State();

    const addTodo = () => {
        const addone = document.querySelector(view.domstr.addbutton);
        
        addone.addEventListener("click", (event) => {
            const newcontent = document.querySelector(view.domstr.inputbox).value;
            console.log(newcontent);
            const newtodo = new model.Todo(newcontent);
            
            model.addTodo(newtodo).then(todo => {
                state.pendinglist = [todo, ...state.pendinglist];
            });
            event.target.value = "";
            
        });
    };

    const deletependingTodo = () => {
        const pendinglistEle = document.querySelector(view.domstr.pendinglist);
        pendinglistEle.addEventListener("click", (event) => {
            const [className, id] = event.target.className.split(" ");
            state.todolist = state.pendinglist.filter((todo) => +todo.id !== +id);
            model.deleteTodo(id);
        });
    };

    const deletecompleteTodo = () => {
        const completelistEle = document.querySelector(view.domstr.completedlist);
        completelistEle.addEventListener("click", (event) => {
            const [className, id] = event.target.className.split(" ");
            state.todolist = state.completedlist.filter((todo) => +todo.id !== +id);
            model.deleteTodo(id);
        });
    };


    const completeTodo = () => {
        const pendinglistEle = document.querySelector(view.domstr.pendinglist);
        const completelistEle = document.querySelector(view.domstr.completedlist);
        pendinglistEle.addEventListener("click", (event) => {
            const [className, id] = event.target.className.split(" ");
            let todo = state.pendinglist.filter((todo) => +todo.id !== +id);
            console.log(todo);
            state.todolist = state.pendinglist.filter((todo) => +todo.id !== +id);
            state.todolist = state.completedlist.push(todo);
        });
        // let completebutton = document.querySelector(view.domstr.completebutton);
        // completebutton.addEventListener("click", (event) => {
        //     const [className, id] = event.target.className.split(" ");
        //     let todo = model.getTodos(id);
        //     model.deleteTodo(id);
        //     todo.isCompleted = true;
        //     state.completedlist = [todo, ...completedlist];
        // });
    }
    // let selected;
    // const eventListener = (element) => {
    //     element.addEventListener('change', (e) => {
    //         selected = e.target.className.split(" ");
    //     });
    // }

    // const switchTodo = (selected) => {
    //     if (selected[0] === 'complete') {
    //         state.pendinglist.deleteTodo(selected[1]);
    //         state.completedlist.addTodo(selected[1]);
    //     } else if (selected[0] === 'pending'){
    //         state.completedlist.deleteTodo(selected[1]);
    //         state.pendinglist.addTodo(selected[1]);
    //     }
    // }

    // const editTodo = () => {
    //     const editEle = document.querySelector(view.domstr.editbutton);
    //     editEle.addEventListener('click', (event) => {
    //         const [className, id] = event.target.className.split(" ");

    //     })
    // }

    const init = () => {
        model.getTodos().then((todolist) => {
            state.todolist = todolist.reverse();
        });
    };

    const bootstrap = () => {
        init();
        // deleteTodo();
        completeTodo();
        deletependingTodo();
        deletecompleteTodo();
        addTodo();
    };

    return { bootstrap };
})(Model, View);