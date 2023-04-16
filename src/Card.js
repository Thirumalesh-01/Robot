import { render } from "@testing-library/react";
import React from "react";
import './Card.css';

const Card = (props) =>{
   return(
      <div className="bg-light-green br2 shadow-4 tc  dib pa2 ma3 grow">
        {/* the thing is since we want to render the images based on the id we need so
            we use props.id that has to concatented with the img so we use $ of somethinng to put this in ``  expression
            then we wrap this as it is the expression that has to be evaluated */}
        <img src={`https://robohash.org/${props.id}200*200`} alt=""/>
        <div>
            <h1 className="h12">{props.name}</h1>
            <p>{props.email}</p>
        </div>
      </div> 
   );
  
}

export default Card;