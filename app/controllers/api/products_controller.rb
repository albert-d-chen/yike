class Api::ProductsController < ApplicationController
    def index 
        @products = Product.all 
        render :index 
    end

    def show 
        @product = Product.find_by(id: params[:id])
        if @product
            render :show
        else
            render json: ['Product not found'], status: 404
        end
    end

    def update
        @product = Product.find_by(id: params[:id])
        # debugger
        if @product.update(product_params)
            render :show
        else 
            render json: @product.errors.full_messages, status: 422
        end
    end

    private 

    def product_params
        params.require(:product).permit(:size)
    end

end
