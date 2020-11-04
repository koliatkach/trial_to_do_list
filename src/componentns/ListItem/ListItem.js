import React from 'react';
import classes from './ListItem.module.css'



function ListItem(props) {
    return (
        <li className={classes['ItemLi']} key={props.item}>{props.item}
            <div className={classes['btns']}>
                <button className={classes['btnDone']}>Done</button>
                <button className={classes['btnNotDone']}>Delete</button>
            </div>
        </li>
    )
}

export default ListItem;