import React, {useState} from 'react';
import "..style/app.css";

const Cart = ({cart, setCart}) => {
    const [price, setPrice] = useState(0);
    return (
        <article>
            {
                Cart.map((item) => {
                    <div className="cart_box" key={item.id}>
                        <div className="cart_img">
                            <img src={item.img}/>
                            <p>{item.title}</p>
                        </div>
                        <div>
                            <button> + </button>
                            <button> - </button>
                        </div>
                        <div>
                            <span>{item.price}</span>
                            <button>Remove</button>
                        </div>
                    </div>
                })
            }
            <div>
                <span>Total Price of your Cart</span>
                <span>{price}</span>
            </div>
        </article>

    )
}

export default Cart