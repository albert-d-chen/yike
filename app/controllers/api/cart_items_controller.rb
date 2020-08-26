class Api::CartItemsController < ApplicationController
    def index 
        if current_user 
            @cart_items = current_user.cart_items 
        else
            @cart_items = []
        end 

        render :index
    end

    def show 
        @cart_item = CartItem.find(params[:id])
        render :show
    end

    def create 
        @cart_item = CartItem.new(cart_item_params)
      
        if @cart_item.save 
            render :show 
        else 
            render json: @cart_item.errors.full_messages, status: 422
        end

    end

    def update
        @cart_item = CartItem.find_by(id: params[:id])
        # debugger
        if @cart_item.update(cart_item_params)
            render :show
        else 
            render json: @cart_item.errors.full_messages, status: 422
        end
    end

    def destroy
        @cart_item = CartItem.find_by(id: params[:id])
        @cart_item.destroy 
        render :show 
    end

    private 
    
    def cart_item_params
        params.require(:cartItem).permit(:user_id, :product_id, :quantity)
    end
end
