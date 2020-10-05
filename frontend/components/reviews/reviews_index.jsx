import React from 'react';
import {Link} from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import moment from 'moment';

class ReviewIndex extends React.Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchReviews()
    }

 

    render() {
        const {reviews} = this.props;
        // debugger
        if (Object.values(this.props.products).length === 0) return null;
     
        return(
            <div className='your-reviews-container'>
                <h1 className='your-reviews-header'>Your Reviews</h1>
                {reviews.map( review => {
                    return (
                        <div key={review.id} className='your-reviews-element'>

                            <img className='your-reviews-image' src={this.props.products[review.product_id].photoUrls[0]}/>
                            <div className='your-reviews-info'>
                                <div className='your-reviews-product'>{this.props.products[review.product_id].product_name}
                                <div className='your-reviews-date'>{moment(review.created_at).format('MMM Do[,] YYYY')}</div>
                                </div>
                                <div className='your-reviews-title'>{review.title}
                                </div>
                                <div className='your-reviews-body'>{review.body}</div>
                                <div className='your-reviews-rating'>
                                    Rating: &nbsp;
                                    <div className='your-reviews-star'>
                                        <StarRatings 
                                            rating={parseFloat(review.rating)}
                                            ignoreInlineStyles={false}
                                            starDimension='15px'
                                            starRatedColor='gold'
                                            numberOfStars={5}
                                            name='rating'
                                            starSpacing='1px'
                                        />
                                    </div>
                                </div>

                                <button className='your-reviews-edit'><Link to={`/reviews/${review.id}`} className='your-reviews-link'>Edit</Link></button>&nbsp;&nbsp;&nbsp;&nbsp;
                                <button className='your-reviews-delete' onClick={() => {this.props.deleteReview(review.id); window.location.reload()}}>Delete</button>
                            </div>

                        </div>
                    )
                })}

                <div className='footer-main-review'>
                        <div className='kobe'>
                            In memory of Kobe Bryant.
                        </div>
                        <div className='social-icons'>
                            
                            <a href="https://github.com/albert-d-chen" target={"_blank"}><i className="fab fa-github fa-2x footer-icon" style={{color: 'white'}}></i></a>
                            <a href="https://linkedin.com/in/albertdchen" target={"_blank"}><i className="fab fa-linkedin fa-2x footer-icon" style={{ color: 'white' }}></i></a>
                            
                        </div>
                </div>
            </div>
        )
    }
}

export default ReviewIndex;