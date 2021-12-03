json.set! @comment.id do
    json.partial! '/api/comments/comment', comment: @comment
    json.likes @comment.likes.count 
    json.replies @comment.comments.count
end