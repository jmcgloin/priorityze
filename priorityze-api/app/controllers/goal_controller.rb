class GoalController < ApplicationController

		before_action :set_goal, only: [:show, :edit, :update, :destroy]
		
		def index
			goals = Goal.all
			render json: goals, include: :step
		end

		def create
			goal = Goal.new(goal_params)
			if goal.save
				render json: goal
			else
				render json: { errors: goal.errors }
			end
			
		end
	
		def update
			if goal.update(goal_params)
				render json: { message: "success" }
			else
				render json: { errors: goal.errors }
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
			params.require(:goal).permit(:title, :deadline, :importance, :icon)
		end
	
		def set_goal
			goal = Goal.find_by_id(params[:id])
		end
	
end
