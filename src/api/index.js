import React, {Component} from 'react';


export default class ApiComponent extends Comment {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoader: false,
      items: []
    };
  }

  componentDidMount() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoader: true,
          items: result.drinks
        });
      },
      (error) => {
        this.setState({
          isLoader: true,
          error
        });
      }
    )
  }

  render() {
    const {error, isLoader, items} = this.state;
    if (error) {
      return <p> Error {error.message}</p>
    } else if (!isLoader) {
      return <p> Loading... </p>
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.name}>
              {item.strDrink}
            </li>
          ))}
        </ul>
      )
    }
  }
}