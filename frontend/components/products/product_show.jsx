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

    handleBorder(){
        event.preventDefault;
        let updatedSize = {size: event.target.value};

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
        this.props.history.push('/shoppingcart')
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
            let productIdArray = this.props.userCartItems.map(item => (
                item.product_id
            ))
                // for (let i = 0; i < this.props.userCartItems.length;i++) {
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

                            <form>
                                <div><button className='size-input' type="text" value={this.props.product.size} >Men 6 / W 7.5 </button></div>
                                <div><button className='size-input' type="text" value={this.props.product.size} >Men 6.5 W 8 </button></div>
                                <div><button className='size-input' type="text" value={this.props.product.size} >Men 7 / W 8.5  </button></div>
                                <div><button className='size-input' type="text" value={this.props.product.size} >Men 7.5 / W 9 </button> </div>
                                <div><button className='size-input' type="text" value={this.props.product.size} >Men 8 / W 9.5 </button></div>
                                <div><button className='size-input' type="text" value={this.props.product.size} >Men 8.5 / W 10</button> </div>
                                <div><button className='size-input' type="text" value={this.props.product.size} >Men 9 / W 10.5</button> </div>
                                <div><button className='size-input' type="text" value={this.props.product.size} >Men 9.5 / W 11 </button> </div>
                                <div><button className='size-input' type="text" value={this.props.product.size} >Men 10 / W 11.5 </button></div>
                                <div><button className='size-input' type="text" value={this.props.product.size} >Men 10.5 / W 12 </button></div>
                                <div><button className='size-input' type="text" value={this.props.product.size} >Men 11 / W 12.5 </button> </div>
                                <div><button className='size-input' type="text" value={this.props.product.size} >Men 11.5 / W 13 </button> </div>
                            </form>

                            <div className='add-item-container'>
                                   <button onClick={this.addToCart}>Add To Cart</button>

                            </div>
                        </div>
                    </div>



                </div>
            )
        }
       
    }
}

export default ProductShow;