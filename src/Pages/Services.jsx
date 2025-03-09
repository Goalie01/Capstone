import React from 'react';

function Services() {
    return (
         <section className="services" id="services">
        <div className="heading">
            <span>Services</span>
            <h2>We provide best food services</h2>
        </div>

        <div className="servives-container">
           
             <div className="s-box">
                <img src="https://images.pexels.com/photos/280453/pexels-photo-280453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500.png" alt=""/>
                <h3>You Order</h3>
                <p>By placing your order through us we make <br></br> sure it is accurate.</p>
            </div> 
            <div className="s-box">
                <img src="https://images.pexels.com/photos/4393426/pexels-photo-4393426.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500.png" alt=""/>
                <h3>Delivered</h3>
                <p>We deliver our pizzas fresh and on time.</p>
            </div>
        </div>
    </section> 
    )
}

export default Services