import React, { Component, Fragment } from 'react';
import './Product.css'

class Product extends Component{
    state = {
        order: 4
    }

    handlePlus = () => {
        this.setState({
            order : this.state.order + 1
        })
    }

    handleMinus = () => {
        if (this.state.order > 0) {
            this.setState({
                order : this.state.order - 1
            })
        }
    }


    render(){
        return(
            <Fragment>
                <div className="header">
                    <div className="logo">
                        <img src="https://digitaraya.com/assets/img/startups/etanee.png" width="30%" alt="logo"/>
                    </div>
                    <div className="troley">
                        <img src="https://static.thenounproject.com/png/1138102-200.png" alt="troley"/>
                        <div className="count">{this.state.order}</div>
                    </div>
                </div>
                <div className="card">
                    <div className="img-thumb-prod">
                        <img src="https://w7.pngwing.com/pngs/535/669/png-transparent-dressed-chicken-chicken-meat-buffalo-wing-chicken-leg-raw-foodism-chicken-meat-file-food-beef-hand.png" alt="daging ayam"/>
                        <p className="product-tittle">Daging Ayam Berbumbu Rasa Original Plus Tepung Crispy 1-10pcs</p>
                        <p className="product-price">Rp.410.000</p>
                    </div>
                    <div className="counter">
                        <button className="minus" onClick={this.handleMinus}>-</button>
                        <input type="text" value={this.state.order}/>
                        <button className="plus" onClick={this.handlePlus}>+</button>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Product;