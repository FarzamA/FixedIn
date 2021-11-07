class Api::ExperiencesController < ApplicationController
    def index 
        @experiences = Experience.where(user_id: params[:user_id])
    end

    def create 
        @experience = Experience.new(experience_params)

        if @experience.save 
            render :show 
        else 
            render json: @experience.errors.full_messages, status: 400
        end
    end

    def update 
        @experience = Experience.find(params[:id])

        if @expierence.update(experience_params)
            render :show
        else  
            render json: @experience.errors.full_messages, status: 400
        end
    end

    def destroy
        @experience = Experience.find(params[:id])

        @experience.destroy 
        render :show
    end

    private 
    def experience_params
        params.require(:experience).permit(:user_id, :title, :company, :location, :employment_type, :start_date, :end_date, :industry, :description)
    end
end
