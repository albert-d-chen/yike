import React from 'react';
import {Link} from 'react-router-dom';
import PopupAdded from './product_added_popup';

class ProductShow extends React.Component{

    constructor(props){
        super(props);

        this.handleSize = this.handleSize.bind(this);
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

    handleSize(idx) {
        event.preventDefault();
        let updatedSize = {id: idx, size: event.target.value};
        this.props.updateProduct(updatedSize);
    }

    addItem(newItem) {
        this.props.createCartItem({
            user_id: this.props.currentUserId,
            product_id: newItem.id ,
            quantity: 1
        })
        this.props.history.push('/shoppingcart');
        window.location.reload(false);
    }

    addToCart(e) {
        e.preventDefault();
      
        if (this.props.currentUserId) {
            let productIdArray = this.props.userCartItems.map(item => (
                item.product_id
            ))
            if (!productIdArray.includes(this.props.product.id) ) {    
                this.addItem(this.props.product);
            } else{
                return (
                    alert('Product already in cart!')
                )
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
                            
                            <div ><img className='product-icon' src={product.photoUrls ? product.photoUrls[0] : null} ></img></div>
                            
                            <div className='product-description'>"{this.props.product.description}"</div>
                            


                            <ul className='product-style'>
                                <li>
                                    Shown: {this.props.product.color}
                                </li>
                                <li>
                                    Style: KOBE4EVER
                                </li>
                            </ul>

                            <div className='select-size'>Select Size:</div>

                            <div className= 'size-container'>
                                <div className='size-button'><button className='size-input' onClick ={() => this.handleSize(this.props.product.id)} type="text" value='6' >6</button></div>
                                <div className='size-button'><button className='size-input' onClick={() => this.handleSize(this.props.product.id)} type="text" value='6.5' >6.5</button></div>
                                <div className='size-button'><button className='size-input' onClick={() => this.handleSize(this.props.product.id)} type="text" value='7' >7 </button></div>
                                <div className='size-button'><button className='size-input' onClick={() => this.handleSize(this.props.product.id)} type="text" value='7.5' >7.5</button> </div>
                                <div className='size-button'><button className='size-input' onClick={() => this.handleSize(this.props.product.id)} type="text" value='8' >8</button></div>
                                <div className='size-button'><button className='size-input' onClick={() => this.handleSize(this.props.product.id)} type="text" value='8.5' >8.5</button> </div>
                                <div className='size-button'><button className='size-input' onClick={() => this.handleSize(this.props.product.id)} type="text" value='9' >9</button> </div>
                                <div className='size-button'><button className='size-input' onClick={() => this.handleSize(this.props.product.id)} type="text" value='9.5' >9.5</button> </div>
                                <div className='size-button'><button className='size-input' onClick={() => this.handleSize(this.props.product.id)} type="text" value='10' >10</button></div>
                                <div className='size-button'><button className='size-input' onClick={() => this.handleSize(this.props.product.id)} type="text" value='10.5' >10.5</button></div>
                                <div className='size-button'><button className='size-input' onClick={() => this.handleSize(this.props.product.id)} type="text" value='11' >11</button> </div>
                                <div className='size-button'><button className='size-input' onClick={() => this.handleSize(this.props.product.id)} type="text" value='11.5' >11.5</button> </div>
                                <div className='size-button'><button className='size-input' onClick={() => this.handleSize(this.props.product.id)} type="text" value='12' >12</button> </div>
                                <div className='size-button'><button className='size-input' onClick={() => this.handleSize(this.props.product.id)} type="text" value='12.5' >12.5</button> </div>
                                <div className='size-button'><button className='size-input' onClick={() => this.handleSize(this.props.product.id)} type="text" value='13' >13</button> </div>
                                <div className='size-button'><button className='size-input' onClick={() => this.handleSize(this.props.product.id)} type="text" value='13.5' >13.5</button> </div>
                                <div className='size-button'><button className='size-input' onClick={() => this.handleSize(this.props.product.id)} type="text" value='14' >14</button> </div>
                                <div className='size-button'><button className='size-input' onClick={() => this.handleSize(this.props.product.id)} type="text" value='14.5' >14.5</button> </div>
                                <div className='size-button'><button className='size-input' onClick={() => this.handleSize(this.props.product.id)} type="text" value='15' >15</button> </div>
                                <div className='size-button'><button className='size-input' onClick={() => this.handleSize(this.props.product.id)} type="text" value='15.5' >15.5</button> </div>
                            </div>

                            <div className='add-item-container'>
                                   <button className='add-to-cart' onClick={this.addToCart}>Add To Cart</button>
                            </div>
                     
                        </div>
                    </div>
                </div>
            )
        }
       
    }
}

export default ProductShow;