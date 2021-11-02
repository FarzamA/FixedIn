json.set! @post.id do 
    json.partial! '/api/posts/post', post: @post 
    json.likes @post.likes.count 
    json.comments @post.comments.count
end
