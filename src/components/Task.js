import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Task.css'; 

class Task extends Component {
    
    StyleCompleted() {
        return {
            fontSize: '20px',
            color: this.props.task.done ? 'gray' : 'black',
            textDecoration: this.props.task.done ? 'line-through'  : 'none',
            margin: '20px 0'
        }
    }

    render() {
        const {task} = this.props;

        return (
            <div style={this.StyleCompleted()}>
                {task.title} - {task.descripcion}
                    <input type="checkbox" onChange={this.props.checkDone.bind(this, task.id)}/>
                    <button onClick={this.props.deleteTask.bind(this, task.id)}>
                        X
                    </button>
            </div>
        )
    }
}

Task.protoTypes = {
    task: PropTypes.object,
}

export default Task;