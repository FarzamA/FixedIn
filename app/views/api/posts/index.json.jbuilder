json.posts do 
    @posts.each do |post|
        json.set! post.id do 
            json.partial! '/api/posts/post', post: post
            json.likes post.likes.count 
            json.comments post.comments.count
        end
    end
end

json.users do 
    @posts.each do |post|
        json.set! post.user.id do 
            json.partial! '/api/users/user', user: post.user
        end
    end
end

