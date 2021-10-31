class Api::SessionsController < ApplicationController
    def create 
        user_params = params[:user]
        @user = User.includes(:rec_connects)
                    .includes(:sent_connects)
                    .find_by_credentials(user_params[:email], user_params[:password])
        
        if @user 
            login!(@user)
            render '/api/users/show'
        else   
            render json: User.login_errors(user_params), status: 401
        end
    end

    def destroy 
        if current_user 
            logout! 
            render json: {}
        else   
            render json: ['No one is logged in'], status: 
        end
    end
end
