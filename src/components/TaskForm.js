import React, { Component } from 'react';

class TaskForm extends Component {

    state = {
        title: '',
        descripcion: ''
    }

    onSubmit = e => {
        this.props.addTask(this.state.title, this.state.descripcion);
        e.preventDefault();
    }
    onChange = e => {
        //console.log(e.target.name, e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} >
                <input name="title" type="text" placeholder="Write a Task" onChange={this.onChange}/>
                <br/>
                <textarea name="descripcion" placeholder="Write a Descripcion" onChange={this.onChange}></textarea>
                <br/>
                <input type="submit" value="Upload Task" />
            </form>
        )
    }
}

export default TaskForm;