import type { Component } from "solid-js";

const Card: Component<{title:string, price: number}> = (props) => {

    const addToCart = (price: number) => {
        alert(`Product-$${price} added into the cart!`);
    }

    return (
        <div class="bg-white p-4 text-center rounded-md shadow-sm">
            <h2>{props.title}</h2>
            <p>${props.price}</p>
            <button class="btn" type="button" onClick={() => addToCart(props.price)}> Add to Cart</button>
        </div>
    )
}

export default Card;