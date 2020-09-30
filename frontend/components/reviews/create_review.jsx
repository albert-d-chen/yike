import React from 'react';

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
            <div>
                <form onSubmit={this.handleSubmit}> 
                    <h1>Create a Review!</h1>
                    <label>Title:
                        <input type="text" value={this.state.title} onChange={this.update('title')} onClick={this.clearInput('title')}/>
                    </label>

                    <label>Body:
                        <textarea value={this.state.body} onChange={this.update('body')} onClick={this.clearInput('body')}/>
                    </label>

                    <label>0
                        <input type="radio" value='0' name='rating' checked={(this.state.rating === 0)} onChange={this.updateRating('rating')}/>
                    </label>
                    <label>1
                        <input type="radio" value='1' name='rating' checked={(this.state.rating === 1)} onChange={this.updateRating('rating')}/>
                    </label>
                    <label>2
                        <input type="radio" value='2' name='rating' checked={(this.state.rating === 2)} onChange={this.updateRating('rating')}/>
                    </label>
                    <label>3
                        <input type="radio" value='3' name='rating' checked={(this.state.rating === 3)} onChange={this.updateRating('rating')}/>
                    </label>
                    <label>4
                        <input type="radio" value='4' name='rating' checked={(this.state.rating === 4)}onChange={this.updateRating('rating')}/>
                    </label>
                    <label>5
                        <input type="radio" value='5' name='rating' checked={(this.state.rating === 5)} onChange={this.updateRating('rating')}/>
                    </label>


                    <button type='submit'>Submit Review</button>
                </form>
                {/* <div>hello</div> */}
            </div>
        )
    }

}

export default CreateReview;