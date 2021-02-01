import React, { Component } from 'react'

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: ''
        };
    }

    componentDidMount(){
        const { id } = this.props.match.params;
        this.setState({id: id})
    }

    render() {
        return (
            <h1>Produto {this.state.id}</h1>
        );
    }
}

export default Product;