@educations.each do |education|
    json.set! education.id do 
        json.partial! '/apii/educations/education', education: education
    end
end
