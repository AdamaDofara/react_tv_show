import S from "./style.module.css";
import { StarFill, Star as StarEmpty, StarHalf, Display } from "react-bootstrap-icons";
export function FiveStarRating({rating}){
    //Déclare un tableau d'étoiles (jsx) vide
    const starList = [];
    // Stocker dans une variable le nombre d'étoile pleine
    const starFilCount = Math.floor(rating)
    // Stocker dans une variable si oui ou non il y'a une demi étoile
    const hasStarhalf = rating - starFilCount >= 0.5;
    // Stocker dans une variable le nombre d'étoile vide
    const emptyStarCount = 5 - starFilCount - (hasStarhalf ? 1 : 0);
    // Pusher dans le tableau les étoiles pleine
    for (let i = 1; i<= starFilCount; i++) {
        starList.push(<StarFill size={20} color="yellow" key={"star-fill"+i}/>); 
    }
    // Pusher dans le tableau les démi étoiles (s'il y'en a)
    if(hasStarhalf){
        starList.push(<StarHalf size={20} color="yellow" key={"star-half"}/>); 
}
    // Pusher dans le tableau les étoiles vide
    for (let i = 1; i<= emptyStarCount; i++) {
        starList.push(<StarEmpty size={20} color="yellow" key={"star-empty"+i}/>); 
    }
    return(
        <div>
            {starList}
        </div>
    );
}