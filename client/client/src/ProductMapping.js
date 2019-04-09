import React, { Component } from 'react';

class ProductMapping extends Component{

    render(){
        const productArray = this.props.array.map(
            (eachElement)=>{
                return(<div>
                    <p>{eachElement.productID} {eachElement.price} </p>
                </div>)
            }
        );
        return(
            <div>{productArray}</div>
        );
    }
}

export default ProductMapping;