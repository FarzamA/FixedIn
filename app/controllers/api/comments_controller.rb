class Api::CommentsController < ApplicationController
    def index
        case params[:type]
        when 'comment button'
            @comments = Comment.two_comments(params[:post_id])
        when 'more comments'
            @comments = Comment.more_comments(params[:post_id], params[:offset])
        end
    end

    def comment_count 
        @comments = Comment.where(post_id: params[:post_id])

        render json: @comments.count
    end

    def create 
        @comment = Comment.new(comment_params)

        if @comment.save 
            render :show
        else 
            render json: @comment.errors.full_messages, status: 400
        end
    end

    def update 
        @comment = Comment.find(params[:id])

        if @comment.update(comment_params)
            render :show
        else 
            render json: @comment.errors.full_messages
        end
    end

    def destroy 
        @comment = Comment.find(params[:id])

        @comment.destroy
        render :show
    end

    private 
    def comment_params
        params.require(:comment).permit(:body, :user_id, :post_id, :media)
    end
end