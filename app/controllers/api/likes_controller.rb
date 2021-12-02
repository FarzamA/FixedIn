class Api::LikesController < ApplicationController
    def index 
        case params[:type]
        when 'comment'
          @likes = Comment.find(params[:comment_id]).likes
        when 'post'
          @likes = Post.find(params[:post_id]).likes
        end
    end

    def count 
        case params[:type]
        when 'comment'
          num_likes = Comment.find(params[:comment_id]).likes.count
        when 'post'
          num_likes = Post.find(params[:post_id]).likes.count
        end
        
        render json: num_likes
    end
end