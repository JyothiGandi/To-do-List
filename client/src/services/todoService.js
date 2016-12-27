/**
 * Created by Jyothi on 25/12/16.
 */

'use strict';

let baseUrl = `api/v1`;

let todoServiceModule = angular.module('todoServiceModule', [])
    .service('TodoService', function ($http){

        return {
            getTodoList() {
                return $http.get(`${baseUrl}/todo`)
                    .then(response => response.data)
                    .catch(function (err) {
                        //Handle 400 and 500 status codes
                        console.log(err.data);
                        return err.data;
                    });
            },

            addTodo(data) {
                return $http.post(`${baseUrl}/todo`, data)
                    .then(response => response.data)
                    .catch(err => err.data);
            }
        };

    });

export default todoServiceModule;

