import React from 'react';
import {Link} from 'react-router-dom';

class CreateReview extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.review;

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        const review = {
            user_id: this.props.review.user_id,
            product_id: this.state.product_id,
            title: this.state.title,
            body: this.state.body,
            rating: this.state.rating
        }
        this.props.createReview(review);
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

    clearInput(field){
        if (this.state[field] === this.props.review[field]) {
            return () => this.setState({
                [field]: ''
            })
        }

        // this.setState({title: this.props.title, body: this.props.body})

    }

    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <form onSubmit={this.handleSubmit}> 
                        <h1>Write a Review!</h1>
                        <label>
                            <input type="text" value={this.state.title} onChange={this.update('title')} onClick={this.clearInput('title')}/>
                        </label>

                        <label>
                            <textarea value={this.state.body} onChange={this.update('body')} onClick={this.clearInput('body')}/>
                        </label>
                        <div>Rate your experience!</div>
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
                            <button type='submit' onClick={() => {this.props.closePopup; window.location.reload(false);}}>Submit Review</button>
                            <Link to={`/products/${this.state.product_id}`}><div className='login-close' type='submit' onClick={() => {this.props.closePopup; window.location.reload(false);}}></div></Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}

export default CreateReview;