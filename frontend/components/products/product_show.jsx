import React from 'react';
import {Link} from 'react-router-dom';
import PopupAdded from './product_added_popup';
import CreateReviewForm from '../reviews/create_review_container'
import ProductReviewIndex from '../reviews/product_review_index'

class ProductShow extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            showPopupReview: false
        }

        this.handleSize = this.handleSize.bind(this);
        this.addToCart = this.addToCart.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    togglePopUpReview() {
        this.setState({
            showPopupReview: !this.state.showPopupReview
        })
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
        // window.location.reload(false);
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
               return (
                 <div className="product">
                   <div className="product-card-show">
                     <div className="product-image-show">
                       {this.props.product.photoUrls.map((photo, idx) => (
                         <img
                           src={photo}
                           key={idx}
                           className="product-image-each"
                         ></img>
                       ))}
                     </div>

                     <div className="product-info-show">
                       <div className="product-price-show">
                         <div className="product-price-show-mini">
                           {this.props.product.gender}&nbsp;
                           {this.props.product.category} Shoe
                         </div>
                         <div className="product-price-show-mini">
                           ${this.props.product.price}
                         </div>
                       </div>
                       <div className="product-name-head">
                         {this.props.product.product_name}
                       </div>

                       <div>
                         <img
                           className="product-icon"
                           src={product.photoUrls ? product.photoUrls[0] : null}
                         ></img>
                       </div>

                       <div className="product-description">
                         "{this.props.product.description}"
                       </div>

                       <ul className="product-style">
                         <li>Shown: {this.props.product.color}</li>
                         <li>Style: KOBE4EVER</li>
                       </ul>

                       <div className="select-size">Select Size:</div>

                       <div className="size-container">
                         <div className="size-button">
                           <button
                             className="size-input"
                             onClick={() =>
                               this.handleSize(this.props.product.id)
                             }
                             type="text"
                             value="6"
                           >
                             6
                           </button>
                         </div>
                         <div className="size-button">
                           <button
                             className="size-input"
                             onClick={() =>
                               this.handleSize(this.props.product.id)
                             }
                             type="text"
                             value="6.5"
                           >
                             6.5
                           </button>
                         </div>
                         <div className="size-button">
                           <button
                             className="size-input"
                             onClick={() =>
                               this.handleSize(this.props.product.id)
                             }
                             type="text"
                             value="7"
                           >
                             7{" "}
                           </button>
                         </div>
                         <div className="size-button">
                           <button
                             className="size-input"
                             onClick={() =>
                               this.handleSize(this.props.product.id)
                             }
                             type="text"
                             value="7.5"
                           >
                             7.5
                           </button>{" "}
                         </div>
                         <div className="size-button">
                           <button
                             className="size-input"
                             onClick={() =>
                               this.handleSize(this.props.product.id)
                             }
                             type="text"
                             value="8"
                           >
                             8
                           </button>
                         </div>
                         <div className="size-button">
                           <button
                             className="size-input"
                             onClick={() =>
                               this.handleSize(this.props.product.id)
                             }
                             type="text"
                             value="8.5"
                           >
                             8.5
                           </button>{" "}
                         </div>
                         <div className="size-button">
                           <button
                             className="size-input"
                             onClick={() =>
                               this.handleSize(this.props.product.id)
                             }
                             type="text"
                             value="9"
                           >
                             9
                           </button>{" "}
                         </div>
                         <div className="size-button">
                           <button
                             className="size-input"
                             onClick={() =>
                               this.handleSize(this.props.product.id)
                             }
                             type="text"
                             value="9.5"
                           >
                             9.5
                           </button>{" "}
                         </div>
                         <div className="size-button">
                           <button
                             className="size-input"
                             onClick={() =>
                               this.handleSize(this.props.product.id)
                             }
                             type="text"
                             value="10"
                           >
                             10
                           </button>
                         </div>
                         <div className="size-button">
                           <button
                             className="size-input"
                             onClick={() =>
                               this.handleSize(this.props.product.id)
                             }
                             type="text"
                             value="10.5"
                           >
                             10.5
                           </button>
                         </div>
                         <div className="size-button">
                           <button
                             className="size-input"
                             onClick={() =>
                               this.handleSize(this.props.product.id)
                             }
                             type="text"
                             value="11"
                           >
                             11
                           </button>{" "}
                         </div>
                         <div className="size-button">
                           <button
                             className="size-input"
                             onClick={() =>
                               this.handleSize(this.props.product.id)
                             }
                             type="text"
                             value="11.5"
                           >
                             11.5
                           </button>{" "}
                         </div>
                         <div className="size-button">
                           <button
                             className="size-input"
                             onClick={() =>
                               this.handleSize(this.props.product.id)
                             }
                             type="text"
                             value="12"
                           >
                             12
                           </button>{" "}
                         </div>
                         <div className="size-button">
                           <button
                             className="size-input"
                             onClick={() =>
                               this.handleSize(this.props.product.id)
                             }
                             type="text"
                             value="12.5"
                           >
                             12.5
                           </button>{" "}
                         </div>
                         <div className="size-button">
                           <button
                             className="size-input"
                             onClick={() =>
                               this.handleSize(this.props.product.id)
                             }
                             type="text"
                             value="13"
                           >
                             13
                           </button>{" "}
                         </div>
                         <div className="size-button">
                           <button
                             className="size-input"
                             onClick={() =>
                               this.handleSize(this.props.product.id)
                             }
                             type="text"
                             value="13.5"
                           >
                             13.5
                           </button>{" "}
                         </div>
                         <div className="size-button">
                           <button
                             className="size-input"
                             onClick={() =>
                               this.handleSize(this.props.product.id)
                             }
                             type="text"
                             value="14"
                           >
                             14
                           </button>{" "}
                         </div>
                         <div className="size-button">
                           <button
                             className="size-input"
                             onClick={() =>
                               this.handleSize(this.props.product.id)
                             }
                             type="text"
                             value="14.5"
                           >
                             14.5
                           </button>{" "}
                         </div>
                         <div className="size-button">
                           <button
                             className="size-input"
                             onClick={() =>
                               this.handleSize(this.props.product.id)
                             }
                             type="text"
                             value="15"
                           >
                             15
                           </button>{" "}
                         </div>
                         <div className="size-button">
                           <button
                             className="size-input"
                             onClick={() =>
                               this.handleSize(this.props.product.id)
                             }
                             type="text"
                             value="15.5"
                           >
                             15.5
                           </button>{" "}
                         </div>
                       </div>

                       <div className="add-item-container">
                         <button
                           className="add-to-cart"
                           onClick={this.addToCart}
                         >
                           Add To Cart
                         </button>
                       </div>

                       <div className="create-form-container">
                         Already Purchased?
                         <div className="checkout">
                           <button
                             onClick={() => {
                               this.togglePopUpReview();
                             }}
                             className="create-button"
                           >
                             Write a Review
                           </button>
                         </div>
                         {this.state.showPopupReview ? (
                           <CreateReviewForm
                             product={product}
                             showPopupReview={this.state.showPopupReview}
                             closePopup={this.togglePopUpReview}
                           />
                         ) : null}
                         {/* <CreateReviewForm product={product}/> */}
                       </div>
                       <div>
                         <ProductReviewIndex
                           product={product}
                           reviews={this.props.reviews}
                           currentUserId={this.props.currentUserId}
                         />
                       </div>
                     </div>
                   </div>

                   <div className="footer-main-review2">
                     <div className="kobe">In memory of Kobe Bryant.</div>
                     <div className="social-icons">
                       <a
                         href="https://github.com/albert-d-chen"
                         target={"_blank"}
                       >
                         <i
                           className="fab fa-github fa-2x footer-icon"
                           style={{ color: "white" }}
                         ></i>
                       </a>
                       <a
                         href="https://linkedin.com/in/albertdchen"
                         target={"_blank"}
                       >
                         <i
                           className="fab fa-linkedin fa-2x footer-icon"
                           style={{ color: "white" }}
                         ></i>
                       </a>
                     </div>
                   </div>
                 </div>
               );
        }
       
    }
}

export default ProductShow;