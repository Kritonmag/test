import React from 'react';
import './index.css'


export default class AddItem extends React.Component {

  state = {
    label: ''
  }

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    });
  };

  // onSubmit = (e) => {
  //   e.preventDefault()
  //   this.props.onItemAdded(this.state.label);
  //   this.setState({
  //     label: ''
  //   })
  // }

  render() {

    const {todos} = this.props

    return (
      <div className="flex"
            // onSubmit={this.onSubmit}
            >
        <input className=""
               type='text'  
               onChange={this.onLabelChange}
               placeholder='What needs to be done'
               value={this.state.label}
               />
        <button 
          className=""
          onClick={() => this.props.onItemAdded('new todos', todos)}>
          Add
        </button>
      </div>
    );
  };
}

