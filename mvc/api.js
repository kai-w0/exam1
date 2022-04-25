export const Api = (() => {
    const baseUrl = 'http://localhost:3000';
    const path = "todos";

    const getTodos = () =>
        fetch([baseUrl, path].join("/")).then((response) => response.json());

    const getTodo = (id) =>
        fetch([baseUrl, path, id].join("/")).then((response) =>
            response.json()
        );

    const deleteTodo = (id) =>
        fetch([baseUrl, path, id].join("/"), {
            method: "DELETE",
        });

    const addTodo = (newtodo) =>
        fetch([baseUrl, path].join("/"), {
            method: "POST",
            body: JSON.stringify(newtodo),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((response) => response.json());

    const editTodo = (id, content, isCompleted) => 
        fetch([baseUrl, path, id].join("/"), {
            method: "PATCH",
            body: {
                content: content,
                isCompleted: isCompleted
            }
        }).then((response) => response.json());

    return {
        getTodos,
        getTodo,
        deleteTodo,
        addTodo,
        editTodo
    };
})();