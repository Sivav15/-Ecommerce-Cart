import React from "react";
import Rating from "@mui/material/Rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInr } from "@fortawesome/free-solid-svg-icons";
import Phone from '../image/phone3.jpg'

const Card = ({ item, handleAddToCart, card}) => {
 
  return (
    <>
      <div className="card m-2" style={{ width: "17rem" }}>
        <img 
          src={Phone}
          className="card-img-top p-2"
          alt="..."
        />
        <div className="card-body d-flex justify-content-center">
          <div>
            {" "}
            <h5 className="card-title">{item.title}</h5>
            <h6 className="card-text">
              Amount :{" "}
              <span>
                <FontAwesomeIcon icon={faInr} />{" "}
              </span>
              {item.price}
            </h6>
            <h3>
              <Rating
                name="half-rating-read"
                defaultValue={item.rating}
                precision={0.5}
                readOnly
              />
            </h3>
          
            <button
              onClick={() => {
                
                handleAddToCart(item);
              }}
              className=" btn btn-primary" disabled ={card.some((obj)=> obj.id === item.id )}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
