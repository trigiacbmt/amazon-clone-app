import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

const CheckoutProduct = ({
  id,
  title,
  rating,
  price,
  description,
  category,
  image,
  hasPrime,
}) => {
  const dispatch = useDispatch();
  const addItemToBasket = () => {
      const product = {
        id,
        title,
        rating,
        price,
        description,
        category,
        image,
        hasPrime,
      }
      dispatch(addToBasket(product))
  }
  const removeItemFromBasket = () => {
      dispatch(removeFromBasket({id}))
  }  
  return (
    <div className="grid grid-cols-5">
      <Image src={image} width={200} height={200} objectFit="contain" />
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-300" />
            ))}  
        </div>
        <p className="text-xs my-2 line-clamp-2">{description}</p>
        <span>${price}</span>
        {hasPrime && (<div className="flex items-center space-x-2">
            <img loading="lazy" className="w-12" src="https://links.papareact.com/fdw" alt=""/>
            <p>FREE Next-Day Delivery</p>
        </div>)}
      </div>
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
          <button className="button" onClick={addItemToBasket}>Add to basket</button>
          <button className="button" onClick={removeItemFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
