class Api::UsersController < ApplicationController

    #To deal w search bar later
    def index 
        @users = User.search(params[:query])
    end

    def create 
        @user = User.new(user_params)

        if @user.save 
            # Automatically make a connection with demo user
            demo_user = User.find_by(email: 'farzam@mazraf.com')
            Connection.create(
                connector_id: demo_user.id,
                connectee_id: @user.id,
                accepted: true
            )

            login!(@user)
            render :show
        else   
            render json: @user.errors.full_messages, status: 401
        end
    end 

    def show
        @user = User.find(params[:id])
        render :show
    end

    def update
        @user = User.find(params[:id])
        if @user.update(user_params)
            render :show
        else
            render json: @user.errors.full_messages, status: 404
        end
    end

    private 
    def user_params
        params.require(:user).permit(:username, :password)
    end



end
