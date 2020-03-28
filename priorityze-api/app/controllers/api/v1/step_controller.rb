class Api::V1::StepController < ApplicationController

		before_action :set_step, only: [:update, :destroy]
		
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
			if step.update(step_params)
				render json: { message: "success" }
			else
				render json: { errors: step.errors }
			end
		end
	
		def destroy
			if step.destroy
				render json: { message: "success" }
			else
				render json: { errors: step.errors }
			end
		end
	
		private
	
		def step_params
			params.require(:step).permit(:metric, :goal_id)
		end
	
		def set_step
			step = Step.find_by_id(params[:id])
		end
	
end
