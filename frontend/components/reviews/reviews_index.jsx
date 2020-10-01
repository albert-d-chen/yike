import React from 'react';
import {Link} from 'react-router-dom';
import StarRatings from 'react-star-ratings';

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
                                <div className='your-reviews-product'>{this.props.products[review.product_id].product_name}</div>
                                <div className='your-reviews-title'>{review.title}</div>
                                <div className='your-reviews-body'>{review.body}</div>
                                <div className='your-reviews-rating'>
                                    Rating: &nbsp;
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
                                <Link to={`/reviews/${review.id}`}>Edit</Link>
                                <button onClick={() => {this.props.deleteReview(review.id); window.location.reload()}}>Delete</button>
                            </div>

                        </div>
                    )
                })}
            </div>
        )
    }
}

export default ReviewIndex;