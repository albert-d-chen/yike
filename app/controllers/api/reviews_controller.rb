class Api::ReviewsController < ApplicationController
    def index
        if current_user
            @user = current_user
            @reviews = current_user.reviews
        else
            render json: ['Sign in to see your reviews'], status:404
        end

        render :index
    end

    def show
        @review = Review.find(params[:id]) 
        render :show
    end

    def create
        @review = Review.new(review_params)

        if @review.save 
            render :show 
        else 
            render json: @review.errors.full_messages, status: 422
        end
    end

    def update
        @review = Review.find(params[:id])
        if @review.update(review_params)
            @user = User.find(@review.user_id)
            render :index  
        else 
            render json: @review.errors.full_messages, status: 422
        end
    end

    def destroy
        @review = Review.find_by(id: params[:id])
        @review.destroy
        @user = User.find(@review.user_id)
        render :index
    end

    private

    def review_params
        params.require(:review).permit(:user_id, :product_id, :title, :body, :rating)
    end
end
