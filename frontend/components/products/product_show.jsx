import React from 'react';
import {Link} from 'react-router-dom';

class ProductShow extends React.Component{
    // constructor(props) {
    //     super(props);
    // }

    componentDidMount(){
        this.props.getProduct(this.props.match.params.productId);
    }

    renderGender(){
        const gender = (this.props.product.gender ==='M') ? (
            'Men'
        ) : (
            'Women'
        )
        return gender;
    }

    render() {
        let product = this.props.product 
        if (!product) {
            return null;
        } else {
               return(
                <div>
                    <div className='show-parent'>
                        <div className='show-left'>        
                                {this.props.product.photoUrls.map((photo,idx) => (
                                    <img src={photo} key = {idx}></img>
                                ))}
                                {/* <img src={this.props.product.photo} height='200px' width='200px'  /> */}
                        </div>

                        <div className='show-right'>
                            <ul>   
                                <li>
                                    <div>{this.renderGender()}'s Shoe</div>
                                    <div>{this.props.product.price}</div>
                                </li>
                                <li>{this.props.product.product_name}</li>
                                <li>{this.props.product.size}</li>
                                <li>{this.props.product.description}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }
       
    }
}

export default ProductShow;