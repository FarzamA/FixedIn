class Api::UsersController < ApplicationController

    #To deal w search bar later written in user model
    def index 
        @users = User.search(params[:query])
    end

    def create 
        @user = User.new(user_params)

        if @user.save 
            demo_user = User.find_by(email: 'alvin@alvin.com')
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
        # debugger
        @user = User.includes(:educations)
                    .includes(:experiences)
                    .includes(:rec_connects)
                    .includes(:sent_connects)
                    .find(params[:id])
    end

    def update
        @user = User.find(params[:id])
        # debugger
        if @user.update(user_params)
            render :show
        else
            render json: @user.errors.full_messages, status: 404
        end
    end

    def email 
        @user = User.find_by(email: params[:user][:email])

        if @user 
            render :show 
        else 
            render json: 0
        end
    end

    private 
    def user_params
        params.require(:user).permit(:email, :password, :first_name, :last_name, :headline, :location, :industry, :avatar, :background)
    end



end
