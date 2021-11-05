json.key_format! camelize: :lower
json.extract! user, :id, :email, :first_name, :last_name, :headline, :location, :industry

if user.avatar.attached? 
    json.avatarUrl url_for(user.avatar)
end

if user.background.attached? 
    json.backgroundUrl url_for(user.background)
end