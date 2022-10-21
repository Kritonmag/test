import React from 'react';
import AddItem from '../add';
import ApiComponent from '../api';
import ApiComponentSeccond from '../api__2';
import ChildList from '../list'
import ListContent from '../list-cont';

import './index.css'

export default class App extends React.Component {

  maxId = 100;

  state = {
    persons: [
      {
        id: 'Daddy',
        todo: [
          this.createTodo('Drink Coffee'),
          this.createTodo('Buy car'),
          this.createTodo('Whach TV')
        ]
      },
      {
        id: 'Mom',
        todo: [
          this.createTodo('Clear home'),
          this.createTodo('Drink tea'),
          this.createTodo('Make diner')
        ]
      },
      {
        id: 'My',
        todo: [
            this.createTodo('Creact react app'),
            this.createTodo('Stay home')
        ]
      }
    ],
    selectedPerson: 'Daddy'
  }

  createTodo(label) {
    return {
      label,
      id: this.maxId++
    }
  }

  onTogglePress = (nas) => {
    this.setState({selectedPerson: nas})
  }

  addItem = (todo, arr) => {
    // const newItem = this.createTodo(todo);
    // this.setState(({}) => {
    //   const newArr = [
    //     ...arr,
    //     newItem
    //   ];
    //   return {
        
    //   }
    // })
    console.log(todo, arr)
  }

  getCoctail = async (e) => {
    e.preventDefault();
    const api_url = await
    fetch('www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    const data = await api_url.json();
    console.log(data)
  }

  render() {
    const persons = this.state.persons
    const selectedPerson = this.state.selectedPerson
    const select = this.state.persons.filter(item => item.id === selectedPerson);
    const todos = select[0].todo
    console.log(todos)
    return (
      <div className='flex'>
        <ChildList 
          persons={persons}
          onTogglePress={this.onTogglePress}
        />
        <AddItem onItemAdded={this.addItem}
          todos={todos}/>
        <ListContent todos={todos}/>
        {/* <ApiComponent /> */}
        {/* <ApiComponentSeccond getCoctail={this.getCoctail}/> */}
      </div>
    )
  }
}