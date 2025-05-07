import { motion } from 'framer-motion';

const Card = ({  name, brand, price, originalPrice, discountPercentage, imageUrl }) => {
  
  const handleSwipe = (direction) => {
    if (direction === "right") {
      console.log("Swiped right");
    } else if (direction === "left") {
      console.log("Swiped left");
    }
  };

  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: -30, right: 30 }}  
      onDragEnd={(e, info) => {
        if (info.offset.x > 100) handleSwipe("right");
        else if (info.offset.x < -100) handleSwipe("left");
      }}
      initial={{ scale: 1 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}  
      transition={{ duration: 0.1 }}
      style={{
        position: 'absolute',   
        width: '100%',
        height: '100%',
        background: 'transparent',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >  <div className='card'>
      <img src={imageUrl} alt={name} />
      <div>{name}</div>
      <div>{brand}</div>
      <div>{price}</div>
      <div>{originalPrice}</div>
      <div>{discountPercentage}</div>
      </div>
    </motion.div>
  );
};

export default Card;
