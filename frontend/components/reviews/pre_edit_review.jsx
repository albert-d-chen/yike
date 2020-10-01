import React from "react";
import EditReview from "./edit_review"; 

class PreEditReview extends React.Component {
    componentDidMount() {
        this.props.fetchReviews();
        this.props.getProducts();
    }

    render() {
        if (!this.props.review) return null;
        if (!this.props.products) return null;
        return (
            <EditReview 
                updateReview={this.props.updateReview}
                review={this.props.review}
                products={this.props.products}
                errors={this.props.errors}
                history={this.props.history}
                receiveErrors={this.props.receiveErrors}
                deleteReview={this.props.deleteReview}
                getProducts={this.props.getProducts}
            />
        )
    }
}

export default PreEditReview; 