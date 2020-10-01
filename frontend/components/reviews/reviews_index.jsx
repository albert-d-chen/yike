import React from 'react';
import {Link} from 'react-router-dom'


class ReviewIndex extends React.Component{
    
    componentDidMount() {
        this.props.fetchReviews()
            // .then(this.props.getProducts());
    }

 

    render() {
        const {reviews} = this.props;
        return(
            <div style={{top: '100px', position:'relative'}}>
                <h1>Your Reviews</h1>
                {reviews.map( review => {
                    return (
                        <div>
                            <div>{review.title}</div>
                            <div>{review.body}</div>
                            <div>{review.rating}</div>
                            <Link to={`/reviews/${review.id}`}>Edit</Link>
                            <button onClick={() => {this.props.deleteReview(review.id); window.location.reload()}}>Delete</button>

                        </div>
                    )
                })}
            </div>
        )
    }
}

export default ReviewIndex;