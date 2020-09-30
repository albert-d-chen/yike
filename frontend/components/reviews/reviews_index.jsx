import React from 'react';



class ReviewIndex extends React.Component{
    componentDidMount() {
        this.props.fetchReviews()
            // .then(this.props.getProducts());
    }

    render() {
        const {reviews} = this.props;
        return(
            <div style={{top: '200px', position:'relative'}}>
                {reviews.map( review => {
                    return (
                        <div>
                            <div>{review.title}</div>
                            <div>{review.body}</div>
                            <div>{review.rating}</div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default ReviewIndex;