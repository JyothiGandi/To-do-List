/**
 * Created by Jyothi on 25/12/16.
 */

'use strict';

let baseUrl = `api/v1`;

export class TodoClass {
    /*async getTodoList() {
        let response = await fetch(`/todo`);
        let todoList = await response.json();
        return todoList;
    }*/

    getTodoList() {
        let url = `${baseUrl}/todo`;
        return fetch(url)
            .then(response => response.json())
            .catch(err => err);
    }
}