'use strict'

class TodoController { 

    index({ view }){
        //fetch some data
        const todos = [{
            id: 1,
            text:'Buy some vegetables'
        }, {
            id: 2,
            text:'complete online cours'
        }, {
            id: 3,
            text:'Make some chinese tea.'
        }];
        return view.render('home', { todos });
    }
}


