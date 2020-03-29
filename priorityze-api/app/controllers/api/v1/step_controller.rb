class Api::V1::StepController < ApplicationController

		def index
			steps = Step.all
		end
	
		def create
			step = Step.new(step_params)
			goal = Goal.find_by(id: step.goal_id)
			if step.save
				render json: { goal: goal, ok: true}, include: :steps
			else
				render json: { errors: step.errors }
			end
		end
	
		def update
			step = Step.find_by(id: params["id"])
			goal = Goal.find_by(id: step.goal_id)
			if step.update(step_params)
				render json: { goal: goal, ok: true }, include: :steps
			else
				render json: { errors: step.errors }
			end
		end
	
		def destroy
			step = Step.find_by(id: params["id"])
			goal = Goal.find_by(id: step.goal_id)
			if step.destroy
				render json: { goal: goal, ok: true }, include: :steps
			else
				render json: { errors: step.errors }
			end
		end
	
		private
	
		def step_params
			params.require(:step).permit(:metric, :goal_id, :completed)
		end
	
end
