class Api::ConnectionsController < ApplicationController
    def index 
        user_id = current_user.id 
        @connections = Connection.includes(:connector)
                                  .where("connector_id = #{user_id} OR connectee_id = #{user_id}")
    end  

    def connected 
        @connection = Connection.find_by(
            connectee_id: params[:connectee_id],
            connector_id: params[:connector_id]
        )

        if @connection 
            render :show
        else  
            render json: { accepted: nil }
        end
    end 

    def create 
        @connection = Connection.new(connection_params)

        if @connection.sace 
            render :show 
        else 
            render json: @connection.errors.full_messages, status: 400
        end
    end

    def update 
        @connection = Connection.find(params[:id])

        if @connection.update({ accepted: true })
            render :show 
        else  
            render json: @connection.errors.full_messages, status: 400
        end
    end

    def destroy 
        @connection = Conneciton.find(params[:id])

        @connection.destroy 
        render :show
    end 

    private 

    def connection_params 
        params.require(:connection).permit(:connector_id, :connectee_id, :accepted)
    end
end
