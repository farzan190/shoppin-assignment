import { motion } from 'framer-motion';

const Card = ({  setData,name, brand, price, originalPrice, discountPercentage, imageUrl }) => {
  
  const handleSwipe = (direction) => {
    if (direction === "right") {
      setData((prevData) => prevData.slice(0, -1)); 
      console.log("Swiped right");
    } else if (direction === "left") {
      setData((prevData) => prevData.slice(0, -1)); 

      console.log("Swiped left");
    }
    else if (direction === "up") {
      setData((prevData) => prevData.slice(0, -1)); 

      console.log("Swiped up");
    }
    else if (direction === "down") {
      setData((prevData) => prevData.slice(0, -1)); 

      console.log("Swiped down");
    }
  };

  return (
    <motion.div
  drag="x"
  onDragEnd={(e, info) => {
    if (info.offset.x > 100) handleSwipe("right");
    else if (info.offset.x < -100) handleSwipe("left");
  }}
  style={{
    position: 'absolute',
    width: '100%',
    height: '100%',
    background: 'transparent',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    touchAction: 'none',
  }}
>
  <motion.div
    drag="y"
    onDragEnd={(e, info) => {
      if (info.offset.y < -100) handleSwipe("up");
      else if (info.offset.y > 100) handleSwipe("down");
    }}
    style={{
      position: 'absolute',
      width: '100%',
      height: '100%',
      background: 'transparent',
      borderRadius: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      touchAction: 'none',
    }}
  >
    <div className='card'>
      <img src={imageUrl} alt={name} />
      <div>{name}</div>
      <div>{brand}</div>
      <div>{price}</div>
      <div>{originalPrice}</div>
      <div>{discountPercentage}</div>
    </div>
  </motion.div>
</motion.div>

  );
};

export default Card;
