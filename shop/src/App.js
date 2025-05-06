import './App.css';
import  {useState} from 'react';
import data from './data';
import Card from './Card';
import Draggable from 'react-draggable';

function App() {
  const[products,setProducts]=useState(data);
 
  
  
return (
<div className='shoppin'>{products.map((item)=><Card name={item.name} brand={item.brand}  price={item.price} originalPrice={item.originalPrice} discountPercentage={item.discountPercentage} imageUrl={item.imageUrl}/>)}</div>
       )    

}



export default App;
