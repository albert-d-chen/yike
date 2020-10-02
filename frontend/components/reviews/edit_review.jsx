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
        // this.reviewDelete = this.reviewDelete.bind(this);
    }

    update(field) {
        return (e) => this.setState({
            [field]: e.currentTarget.value
        })
    }

    updateRating(field) {
        return (e) => this.setState({
            [field]: parseInt(e.currentTarget.value)
        })
    }

    // reviewDelete() {
    //     this.props.deleteReview(this.state.id)
    //     this.props.history.goBack();
    // }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateReview(this.state)
        this.props.history.goBack();
    }


    render() {
        
        if (Object.values(this.props.products).length === 0) return null;


        return(
            <div className='edit-review-container'>
                <h1 className='edit-review-header'>Edit Your Review</h1>
                <form className='edit-review-element'>

                        <img className='edit-review-image' src={this.props.products[this.state.product_id].photoUrls[0]}/>
                        <div className='edit-review-info'>
                            <div className='edit-review-product'>{this.props.products[this.state.product_id].product_name}</div>
                            <label>
                                <input className='edit-review-title'type="text" value={this.state.title} onChange={this.update('title')}/>
                            </label>
                            
                            <label>
                                <textarea className='edit-review-body' value={this.state.body} onChange={this.update('body')}/>
                            </label>
                            <div className='edit-review-rate'>Rate your experience!</div>
                            <span className='star-cb-group'>
                                <input id='rating-5' type="radio" value='5' name='rating' checked={(this.state.rating === 5)} onChange={this.updateRating('rating')}/>
                                <label htmlFor='rating-5'>5
                                </label>
                                <input id='rating-4' type="radio" value='4' name='rating' checked={(this.state.rating === 4)}onChange={this.updateRating('rating')}/>
                                <label htmlFor='rating-4'>4
                                </label>
                                    <input id='rating-3' type="radio" value='3' name='rating' checked={(this.state.rating === 3)} onChange={this.updateRating('rating')}/>
                                <label htmlFor='rating-3'>3
                                </label>
                                    <input id='rating-2' type="radio" value='2' name='rating' checked={(this.state.rating === 2)} onChange={this.updateRating('rating')}/>
                                <label htmlFor='rating-2'>2
                                </label>
                                    <input id='rating-1' type="radio" value='1' name='rating' checked={(this.state.rating === 1)} onChange={this.updateRating('rating')}/>
                                <label htmlFor='rating-1'>1
                                </label>
                                    <input id='rating-0' type="radio" value='0' name='rating' checked={(this.state.rating === 0)} onChange={this.updateRating('rating')} className='star-cb-clear'/>
                                <label htmlFor='rating=-'>0
                                </label>
                            </span>

                            <div>
                                <button className='edit-review-button' type='submit' onClick={this.handleSubmit}>Save</button>
                                {/* <button onClick={this.reviewDelete}>Delete</button> */}
                            </div>

                        </div>
                </form>
            </div>

        )
    }
}

export default EditReview;