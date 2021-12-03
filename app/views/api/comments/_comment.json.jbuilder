json.key_format! camelize: :lower
json.extract! comment, :id, :body, :user_id, :post_id, :created_at

if comment.media.attached? 
    json.mediaUrl url_for(comment.media)
end