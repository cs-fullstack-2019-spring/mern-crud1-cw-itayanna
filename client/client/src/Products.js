import React, { Component } from 'react';
import AddProduct from "./AddProduct";
import ProductMappig from "./ProductMapping";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class Products extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data:[],
        };
        this.loadData();
    }

    loadData=()=>{
        fetch('/')
            .then(data=>data.json())
            .then(response=>this.setState({data:response}));
    };


    render(){
        return(
            <div>
                <Router>
                    <Link to="/add">Add Product</Link>
                    <ProductMappig array={this.state.data}/>
                    <Route path="/add" component={AddProduct}/>
                </Router>
            </div>
        );
    }
}

export default Products;
