json.user do 
    json.set! @user.id do 
        json.partial! 'user', user: @user #grab info from the user partial
        json.connections (
            @user.rec_connects.where(connections: {accepted: true}).count
        ) + (
            @user.sent_connects.where(connections: {accepted: true}).count
        )
    end
end

# json.experiences do 
#     @user.experiences.each do |experience|
#         json.set! experience.id do 
#             json.partial! # grab info from the experience partial
#         end
#     end
# end

# json.educations do 
#     @user.educations.each do |education|
#         json.set! education.id do 
#             json.partial! #grab info from the education partial
#         end
#     end
# end 

