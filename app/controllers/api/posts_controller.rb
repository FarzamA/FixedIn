class Api::PostsController < ApplicationController
    def index 
        #what goes in the feed
        user_id = current_user.id
        connected_users = User.joins(:rec_connects)
                                .where("connections.accepted = true AND (connections.connector_id = #{user_id} OR connections.connected_id = #{user_id}")
                                .pluck(:id)

        @posts = Post.includes(:user)
                      .where(user_id: connected_users) #need to put connected users here
                      .order(created_at: :desc)
                      .includes(:likes)
                      .limit(10)

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
