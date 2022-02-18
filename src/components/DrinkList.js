import React from 'react';


function DrinkList(props){
    return(
      <>
      <div className="container">
            <DrinksForm onDrinkCreate= {(data) => props.toAddNewDrink(data)}/>
    
            <section className="ordersContainer">
                {props.list.map(Order => <DisplayDrinks Order={Order} key={Order.id}/>)} 
            </section>
        
      </div>
      </>
    )
  }
  
  
  function DisplayDrinks(props){
    return(
      <>
        <div className="order"> 
            <p>
             Order{props.Order.id}: {props.Order.name}, {props.Order.drink}
             , with {props.Order.flavour} flavour, {props.Order.size}, {props.Order.milk} milk
             , {props.Order.isHot}
            </p>
        </div>
      </>
    )
  
  }
  
  class DrinksForm extends React.Component{
    constructor(props){
      super(props);
      this.state={
        newName:'', 
        newDrinkSize:'',
        newDrinkMilk:'',
        newDrinkHot:'',
        newDrink:'',
        newDrinkFlavour:''
  
      };
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(event){
      event.preventDefault();
  
      let name = event.target.drinkName.value
      let size = event.target.size.value
      let milk = event.target.milk.value
      let hot = event.target.isHot.value
      let drink = event.target.drinkType.value
      let flavour = event.target.Flavour.value
  
      this.setState((state, props) => ({
        newName        : name, 
        newDrinkSize   : size,
        newDrinkMilk   : milk,
        newDrinkHot    : hot,
        newDrink       : drink,
        newDrinkFlavour: flavour
      }), ()=>{
        console.log(this.state);
        this.props.onDrinkCreate(this.state);
      });
     
  
    }
  
    render(){
      return(
        <>
        <div className="formContainer">
            <h3>Place a new order</h3>
            <form onSubmit={this.handleSubmit}>  
                <label >Your Name:</label><br />
                <input type="text" required name="drinkName" placeholder="Name"/><br />
                
              
                <label>Drink</label><br />
                <select name="drinkType">
                  <option value="black Coffee">Black Coffee</option>
                  <option value="Latte">Latte</option>
                  <option value="Irish Cappuccino">Irish Cappuccino</option>
                  <option value="Honey Bear Latte">Honey Bear Latte</option>
                  <option value="Ice-Blended ">Ice-Blended </option>
                  <option value="Frappe ">Frappe</option>
                  <option value="Caramel Macchiato ">Caramel Macchiato</option>
  
  
                </select><br />
  
                <label>Flavour</label><br />
                <select name="Flavour">
                  <option value="Caramel">Caramel</option>
                  <option value="Vanilla">Vanilla</option>
                  <option value="Hazelnut">Hazelnut</option>
                  <option value="No">No Flavour</option>
                </select><br />
  
                <label>Size:</label><br />
                <select name="size">
                  <option value="Small">Small</option>
                  <option value="Medium">Medium</option>
                  <option value="Large">Large</option>
                </select><br />
  
                <label>Milk</label><br />
                <select name="milk">
                  <option value="regular"> Regular </option>
                  <option value="almond"> Almond </option>
                  <option value="coconut"> Coconut </option>
                  <option value="none"> None </option>  
                </select> <br />
          
                <label>Hot: </label>
                <input name="isHot" type="radio" value="Hot" />
  
                <label>Cold: </label>
                <input name="isHot" value="Cold" type="radio"/><br />
  
  
                <button className='button' type="submit">Order </button>
            </form>
        </div>
        </>
    )}
  }
export default DrinkList;