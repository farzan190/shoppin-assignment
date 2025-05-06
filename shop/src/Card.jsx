import Draggable from 'react-draggable';


const Card=({id,name,brand,price,originalPrice,discountPercentage,imageUrl})=>{
    return <div className="card">
    <img src={imageUrl}/>
    <div>{name}</div>
    <div>{brand}</div>
    <div>{price}</div>
    <div>{originalPrice}</div>
    <div>{discountPercentage}</div>
    </div>
}

export default Card;