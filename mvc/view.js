export const View = (() => {
    const domstr = {
        pendinglist: "#pending_list_container",
        completedlist: "#completed_list_container",
        addbutton: ".add_todo",
        deletebutton: ".dlebtn",
        editbutton: ".edbtn",
        inputbox: ".todolist__input",
        completebutton: '.cpbtn',
        pendingbutton: '.pdbtn',
    };
    const render = (ele, tmp) => {
        ele.innerHTML = tmp;
    };
    const createTmp = (arr) => {
        let tmp = "";
        arr.forEach((todo) => {
            if (todo.isCompleted === false){
                tmp += `
                    <li>
                        <span >${todo.content}</span>
                        <button class="edbtn ${todo.id}">Edit</button>
                        <button class="dlebtn ${todo.id}">delete</button>
                        <button class="cpbtn ${todo.id}">complete</button>
                    </li>
                `;
            } else {
                tmp += `
                    <li>
                        <button class="pdbtn ${todo.id}">pending</button>
                        <span>${todo.content}</span>
                        <button class="edbtn ${todo.id}">Edit</button>
                        <button class="dlebtn ${todo.id}">delete</button>
                    </li>
                `;
            }
            // tmp += `
            //     <li>
            //         <span>${todo.content}</span>
            //         <button class="edbtn ${todo.id}">Edit</button>
            //         <button class="dlebtn ${todo.id}">delete</button>
            //         <button>complete</button>
            //     </li>
            // `;
        });
        return tmp;
    };
    return {
        domstr,
        render,
        createTmp,
    };
})();