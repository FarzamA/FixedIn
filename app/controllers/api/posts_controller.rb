class Api::PostsController < ApplicationController
    def index 
        #what goes in the feed
        user_id = current_user.id
        rec_connections = Connection.where(connectee_id: user_id, accepted: true)
                                    .pluck(:connector_id)
        
        sent_connections = Connection.where(connector_id: user_id, accepted: true)
                                     .pluck(:connectee_id)

        # The vertical bar metacharacter ( | ) combines two expressions into a single one comes from REGEX
        connected_users = rec_connections | sent_connections
        connected_users.push(user_id)
        
        # debugger
        @posts = Post.includes(:user)
                      .where(user_id: connected_users) #need to put connected users here
                      .order(created_at: :desc)
                        .includes(:likes)
                        .offset(params[:offset].to_i * 2)
                      .limit(10)
    end

    def create 
        # debugger
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
        params.require(:post).permit(:body, :user_id, :media)
    end
end
