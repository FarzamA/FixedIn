@expereinces.each do |expereince|
    json.set! expereince.id do 
        json.partial! '/api/experiences/experience', expeirence: expeirence
    end
end
