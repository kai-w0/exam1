// const baseUrl = 'http://localhost:3000';
// const path = "todos";

// const getTodos = async () => {
//     let results = await fetch([baseUrl, path].join("/")).then((response) => response.json()); 
//     return results;//.then((json) => console.log(json))
// }

// //console.log(await getTodos());

// const render = (ele, tmp) => {
//     ele.innerHTML = tmp;
// };

// const createTmp = (arr) => {
//     let tmp = "";
//     arr.forEach((todo) => {
//         tmp += `
//             <li>
//                 <span>${todo.content}</span>
//                 <button>Edit</button>
//                 <button>delete</button>
//                 <button>complete</button>
//             </li>
//         `;
//     });
//     return tmp;
// };

// const showRender = async () => {
//     const pendingLists = document.getElementsByClassName('p_list');
//     let arrs = await getTodos();
//     console.log(arrs);
//     let TMP = createTmp(arrs);
//     render(pendingLists, TMP);
// }

// showRender();

import { Controller } from './mvc/controller.js'

Controller.bootstrap();