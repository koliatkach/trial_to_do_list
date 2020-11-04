import React, {Component} from 'react'
import classes from './SimpleToDoList.module.css'
import ListItem from "../ListItem/ListItem";

class SimpleToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listToDo: ['Walking', 'Cleaning'],
            str: ''
        }

        this.HandlerInput = this.HandlerInput.bind(this)
        this.HandlerResetInput = this.HandlerResetInput.bind(this)
        this.HandlerAddToList = this.HandlerAddToList.bind(this)
        this.HandlerList = this.HandlerList.bind(this)
    }

    HandlerInput = (event) => {
        this.setState({
            str: event.target.value
        })
    }

    HandlerResetInput = (event) => {
        event.target.value = ''
    }

    HandlerAddToList() {
        const list = this.state.listToDo
        list.push(this.state.str)
        this.state.listToDo = list
        console.log(this.state)
        this.setState({
            listToDo: list,
            str: ''
        })
    }

    HandlerList() {
        return this.state.listToDo.map(function(item,num){
            return(
                <ListItem
                    key = {num}
                    num = {num}
                    item = {item}
                />
            )
        })
    }

    render() {
        return (
            <div className={classes['ToDoList']}>
                <div className={classes['ToDoListWrapper']}>
                    <div className={classes['ActiveList']}>
                        <h1>To Do List</h1>
                        <input
                            className={classes['InputList']}
                            placeholder='What are you want to do'
                            type="text"
                            onChange={this.HandlerInput}
                            onBlur={this.HandlerResetInput}
                        />
                        <button
                            className={classes['BtnAddToList']}
                            onClick={this.HandlerAddToList}
                        >Add to List
                        </button>
                         <ul className={classes['Elements']}>
                            {this.HandlerList()}
                         </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default SimpleToDoList