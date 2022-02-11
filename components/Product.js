import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";

const MAX_RATING = 5;
const MIN_RATING = 1

const Product = ({id, title, price, description, category, image}) => {
    const dispatch = useDispatch();
    const [rating] = useState(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1))+MIN_RATING);
    const [hasPrime] = useState(Math.random() < 0.5)
    const addItemToBasket = () => {
        const product = {
            id, title, price, description, category, image, hasPrime
        }
        dispatch(addToBasket(product))
    }
    return (
        <div className="relative flex flex-col m-5 bg-white z-30 p-10">
            <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>
            <Image src={image} width={200} height={200} alt={title} objectFit="contain"/>
            <h4 className="my-3">{title}</h4>
            <div className="flex">
                {Array(rating).fill().map((_,i)=>(<StarIcon key={i} className="h-5 text-yellow-500"/>))}
            </div>
            <p className="text-xs my-2 line-clamp-2">{description}</p>
            <div className="mb-5">
                <span>${price}</span>
            </div>
            {hasPrime && (
            <div className="flex items-center space-x-2 -mt-5">
                <img className="w-12" src="https://links.papareact.com/fdw" alt=""/>
                <p className="text-xs">FREE Next-day Delivery</p>
            </div>
            )}

            <button className="button mt-auto" onClick={addItemToBasket}>Add to Basket</button>
        </div>

    )
}

export default Product;