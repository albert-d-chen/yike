import React from 'react';

class EditReview extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            id: this.props.review.id,
            product_id: this.props.review.product_id,
            user_id: this.props.review.user_id,
            title: this.props.review.title,
            body: this.props.review.body,
            rating: this.props.review.rating,
       }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.getProducts();
    }
    update(field) {
        return (e) => this.setState({
            [field]: e.currentTarget.value
        })
    }

    reviewDelete() {
        this.props.deleteReview(this.state.id)
    }

    handleSubmit() {
        e.preventDefault();
        this.props.updateReview(this.state);
    }


    render() {
        return(
            <div style={{top: '100px', position:'relative'}}>

                <form>
                    <h1>Edit Review</h1>
                    <input type="text" />
                </form>
                Edit
                {this.state.title}
            </div>

        )
    }
}

export default EditReview;