class Api::ConnectionsController < ApplicationController
    def index 
        user_id = current_user.id 
        @connections = Connection.includes(:connector)
                                  .where("connector_id = #{user_id} OR connected_id = #{user_id}")
    end  

    def create 
        
    end 

    def update 

    end

    def destroy 

    end 

    private 

    def connection_params 

    end
end
