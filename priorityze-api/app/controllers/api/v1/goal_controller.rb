class Api::V1::GoalController < ApplicationController

		before_action :set_goal, only: [:update, :destroy]
		
		def index
			goals = Goal.all
			puts(goals)
			render json: goals, include: :steps
		end

		def create
			goal = Goal.new(goal_params)
			if goal.save
				render json: goal, include: :steps
			else
				render json: { errors: goal.errors }
			end
			
		end
	
		def update
			binding.pry
			goal = Goal.find_by(id: params["id"])
			if goal&.update(goal_params)
				render json: { message: "success" }
			else
				render json: { errors: goal&.errors }
			end
		end
	
		def destroy
			if goal.destroy
				render json: { message: "success" }
			else
				render json: { errors: goal.errors }
			end
		end
	
		private
	
		def goal_params
			params.require(:goal).permit(:title, :deadline, :importance, :icon, :user_id, :completed, :updated_at)
		end
	
		def set_goal
			goal = Goal.find_by_id(params[:id])
		end
	
end
