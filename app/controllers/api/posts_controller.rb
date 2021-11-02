class Api::PostsController < ApplicationController
    def index 

    end

    def create 
        @post = Post.new(post_params)

        if @post.save 
            render :show
        else  
            render json: @post.errors.full_messages, status: 400
        end
    end 

    def show 
        @post = Post.includes(:user).find(params[:id])
    end 

    def update 
        @post = Post.find(params[:id])

        if @post.update(post_params)
            render :show
        else 
            render json: @post.errors.full_messages
        end
    end 

    def destroy 
        @post = Post.find(params[:id])

        @post.destroy 
        render :show
    end

    private 
    def post_params
        params.require(:post).permit(:body, :user_id)
    end
end
