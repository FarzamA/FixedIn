json.connections do 
    @connections.each do |connection|
        json.set! connection.id do 
            json.partial! '/api/connections/connection', connection: connection
        end
    end
end

json.users do 
    @connections.each do |connection|
        if connection.connector.id == current_user.id
            json.set! connection.connectee.id do 
                json.partial! '/api/users/user', user: connection.connectee
            end
        else 
            json.set! connection.connector.id do  
                json.partial! '/api/users/user', user: connection.connector
            end
        end 

    end
end
