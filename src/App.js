import React from 'react';
import './App.css';

import Header from './components/Header';
import DrinkList from './components/DrinkList';
import Footer from './components/Footer';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      allDrinks : [
        {
          id: 1,
          name: 'User1',
          size: 'Medium',
          milk:'Regular',
          isHot: 'Hot',
          drink:'Irish Cappuccino',
          flavour:'caramel'

        },
    
      ]
    }
    this.addNewDrink = this.addNewDrink.bind(this);
  }

  addNewDrink(drink){
    let allDrinksAdded = this.state.allDrinks
    allDrinksAdded.push({
        id:       allDrinksAdded.length+1, 
        name:     drink.newName, 
        size:     drink.newDrinkSize,
        milk:     drink.newDrinkMilk,
        isHot:    drink.newDrinkHot,
        drink:    drink.newDrink,
        flavour:  drink.newDrinkFlavour
    })
    this.setState({
      allDrinks: allDrinksAdded
    });
  }

  render(){
    return(
      <>
      <Header count={this.state.allDrinks} />
      <DrinkList list={this.state.allDrinks} toAddNewDrink= {(data) => this.addNewDrink(data)} />
      <Footer />

      </>
    )

  }
}

export default App;