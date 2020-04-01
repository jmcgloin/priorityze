class Api::V1::GoalController < ApplicationController

	before_action :authenticate_user!

	def index
		user = current_user
		goals = user.goals
		# goals = Goal.all
		# binding.pry
		if goals
			render json: goals, include: :steps
		else
			render json: []
		end
	end

	def create
		goal = Goal.new(goal_params)
		if goal.save
			render json: { goal: goal, ok: true}, include: :steps
		else
			render json: { errors: goal&.errors, ok: false }
		end
		
	end

	def update
		goal = Goal.find_by(id: params["id"])
		if goal&.update(goal_params)
			render json: { goal: goal, ok: true }, include: :steps
		else
			render json: { errors: goal&.errors, ok: false }
		end
	end

	def destroy
		goal = Goal.find_by(id: params["id"])
		if goal.destroy
			render json: { message: "success" }
		else
			render json: { errors: goal.errors }
		end
	end

	private

	def goal_params
		params.require(:goal).permit(:title, :deadline, :importance, :icon, :user_id, :completed, :goalId)
	end
	
end
