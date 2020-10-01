import React from 'react';
import {Link} from 'react-router-dom'


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
            <div style={{top: '100px', position:'relative'}}>
                <h1>Your Reviews</h1>
                {reviews.map( review => {
                    return (
                        <div key={review.id}>
                            <img src={this.props.products[review.product_id].photoUrls[0]}/>
                            {this.props.products[review.product_id].product_name}
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