import React from 'react';
import {Link} from 'react-router-dom';

class ProductShow extends React.Component{
    // constructor(props) {
    //     super(props);
    // }
    constructor(props){
        super(props);
        this.highlightBorder = this.highlightBorder.bind(this);
    }
    componentDidMount(){
        this.props.getProduct(this.props.match.params.productId);
    }

    renderGender(){
        const gender = (this.props.product.gender ==="Men's") ? (
            'Men'
        ) : (
            'Women'
        )
        return gender;
    }

    highlightBorder(){
        var ele = document.getElementsByClassName('product-icon');
        ele.classList.toggle('style');
    }
    
    render() {
        let product = this.props.product 
        if (!product) {
            return null;
        } else {
               return(
                <div className='product'>
                    <div className='product-card-show'>
                        <div className='product-image-show'>        
                                {this.props.product.photoUrls.map((photo,idx) => (
                                    <img src={photo} key = {idx} className='product-image-each'></img>
                                ))}
                        </div>
                        
                        <div className='product-info-show'>
                            <div className='product-price-show'>
                                <div className='product-price-show-mini'>{this.props.product.gender}&nbsp;{this.props.product.category} Shoe</div>
                                <div className='product-price-show-mini'>${this.props.product.price}</div>
                            </div>
                            <div className='product-name-head'>{this.props.product.product_name}</div>
                            
                               <div ><img onClick={this.highlightBorder} className='product-icon' src={product.photoUrls ? product.photoUrls[0] : null} ></img></div>
                            
                            <div className='product-description'>"{this.props.product.description}"</div>
                            


                            <ul className='product-style'>
                                <li>
                                    Shown: {this.props.product.color}
                                </li>
                                <li>
                                    Style: KOBE4EVER
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }
       
    }
}

export default ProductShow;