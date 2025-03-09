import React from 'react';



const Cards = ({item}) => {
    const {title, img, price} = item;
    return (
        <div className="cards">
            <div className="image_box">
                <img src={img} alt="Image"/>
            </div>
            <div className="details">
                <p>{title}</p>
                <p>{price}</p>
                <p>Price - {price}</p>
                <button onClick={()=>handleClick(item)}>Add to Cart</button>
            </div>
        </div>
    )
}

export default Cards


// function Menu() {
//     return (
//         <section className="menu" id="menu">
//         <div className="heading">
//             <br></br>
//             <br></br>
//             <br></br>
//             <span>Menu</span>
//             <h2>Tasty menu of the week</h2>
//         </div>
//         <div className="menu-container">
          
//             <div className="box">
//                 <div className="box-img">
//                     <img src="https://images.pexels.com/photos/803290/pexels-photo-803290.jpeg?cs=srgb&dl=pexels-beqa-tefnadze-803290.jpg&fm=jpg" alt=""/>
//                 </div>
//                 <h2>Cheese Pizza</h2>
//                 <h3>Tasty Food</h3>
//                 <span>$10.05</span>
//                 <i className='bx bx-cart-alt'></i>
//             </div>
            
//             <div className="box">
//                 <div className="box-img">
//                     <img src="https://img.freepik.com/free-photo/pepperoni-pizza-with-sausages-cheese-dark-wooden-table_220768-9277.jpg?size=626&ext=jpg" alt=""/>
//                 </div>
//                 <h2>Pepperoni Pizza</h2>
//                 <h3>Tasty Food</h3>
//                 <span>$13.05</span>
//                 <i className='bx bx-cart-alt'></i>
//             </div>
           
//             <div className="box">
//                 <div className="box-img">
//                     <img src="https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg?w=740&t=st=1661842808~exp=1661843408~hmac=c40f0c154036b96b1dba17947c4e4f7c07f40db983106490402bb0b7b6ec452e" alt=""/>
//                 </div>
//                 <h2>Mecaroni Pizza</h2>
//                 <h3>Tasty Food</h3>
//                 <span>$12.05</span>
//                 <i className='bx bx-cart-alt'></i>
//             </div>
//         </div>
//         </section>
    

    
//     )
// }

// export default Menu