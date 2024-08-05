import React, { Component } from 'react'
import Item from '../Item/Item'
import "./List.css";

export default class List extends Component {


    render() {

        const {todoObjs, updateTodo,deleteTodo} = this.props

        return (
            <ul>
                {
                    todoObjs.map((todoObj) => {
                        return <Item key= {todoObj.id} {...todoObj} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
                    })
                }
            </ul>
        )
    }
}
