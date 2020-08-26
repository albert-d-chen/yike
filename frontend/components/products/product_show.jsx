import React from 'react';
import {Link} from 'react-router-dom';

class ProductShow extends React.Component{

    constructor(props){
        super(props);

        this.highlightBorder = this.highlightBorder.bind(this);
        this.addToCart = this.addToCart.bind(this);
        this.addItem = this.addItem.bind(this);
    }
    componentDidMount(){
        this.props.getProduct(this.props.match.params.productId);
        this.props.fetchCartItems();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.productId !== this.props.match.params.productId) {
            this.props.getProduct(this.props.match.params.productId);
        }
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

    addItem(newItem) {
        
        this.props.createCartItem({
            user_id: this.props.currentUserId,
            product_id: newItem.id ,
            quantity: 1
        })
    }

    addToCart(e) {
        e.preventDefault();
      
        if (this.props.currentUserId) {
            // let items = [];
            // for (let i = 0; i < this.props.userCartItems.length; i++) {
            //     items.push(this.props.userCartItems[i]);
            // }
            if (this.props.userCartItems.length === 0) {
                this.addItem(this.props.product);
            }
                for (let i = 0; i < this.props.userCartItems.length;i++) {
                    if (this.props.userCartItems[i].product_id === this.props.product.id) {
                        return (
                            <div>Product already in shopping cart.</div>
                        )
                    } else {
                        this.addItem(this.props.product);
                        break
                    }
                }
   
        } else {
            this.props.history.push('/login')
        }


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



                            <div className='add-item-container'>
                                   <button onClick={this.addToCart}> <Link to='/shoppingcart'>Add To Cart</Link></button>

                            </div>
                        </div>
                    </div>



                </div>
            )
        }
       
    }
}

export default ProductShow;