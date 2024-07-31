import { useState } from 'react';
import {FaStar} from 'react-icons/fa'
import './styles.css'


export default function StarRating({noOfStarts = 5}){

    const [rating , setRating ] = useState(0);
    const [hover , setHover] = useState(0);

    function handleClick(getCurrentIndex){
        setRating(getCurrentIndex);
    }

    function handleMouseEnter(getCurrentIndex){
        setHover(getCurrentIndex);
    }

    function handleMouseLeave(getCurrentIndex){
        setHover(rating);
    }

    return <div>
        {
            [...Array(noOfStarts)].map((_,index)=>{
                index += 1;

                return <FaStar
                className={index <= (hover || rating) ? "active" : "inactive"}
                key={index}
                onClick={() => handleClick(index)}
                onMouseMove={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave()}
                size= {40}
                />
            })
        }
    </div>
}