import React,{useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./components/Card";
import ListItem from "./components/ListItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInr } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const product = [
    {id : 1,title:"Apple 13 pro",price:80000,rating:2},{id : 2,title:"Redmi note 12 pro",price:20000,rating:3.5},{id : 3,title:"Moto",price:18000,rating:5},{id : 4,title:"Samsung A75",price:30000,rating:4.5},{id : 5,title:"OnePlus Nord",price:45000,rating:1.5},
  ];
   const [card,setCard] = useState([]);
   const [total,setTotal] = useState(0);

  
  const addToCart = (item)=>{
    setCard([...card,item]);

    setTotal(total + item.price);
  }

  const removeToCart = (item)=>{
let index = card.findIndex((val)=>{
  return val.id === item.id
});
card.splice(index,1)
setCard([...card]);
setTotal(total - item.price);
  }
  return (
    
      <div className="container  ">
        <div className="row">
          <div className="col-lg-8">
          <div className="row">
         {
          product.map((item)=>{
            return <Card item = {item} handleAddToCart= {addToCart} card = {card}></Card>
          })
         }
          </div>
            
          </div>
          <div className="col-lg-4">
{
  card.length === 0 ? <h1 className="text-white">Add item in cart</h1> : <div className="row m-2">
  <ol class="list-group list-group-numbered">
    
  {
     
      card.map((item)=>{
       
        return <ListItem value = {item} handleRemoveToCart = {removeToCart}/>
      })
     }
  
  <h2 className="text-white">TotalAmount :  <FontAwesomeIcon icon={faInr} /> {total}</h2>
  </ol>
  </div>
  
}
          </div>
        </div>
      </div>
    
  );
};

export default App;
