class StepController < ApplicationController

		before_action :set_step, only: [:update, :destroy]
		
		def index
			steps = Step.all
		end
	
		def create
			step = Step.new(step_params)
			if step.save
				render json: step
			else
				render json: { errors: step.errors }
		end
	
		def update
			if step.update(step_params)
				render json: { message: "success" }
			else
				render json: { errors: step.errors }
		end
	
		def destroy
			if step.destroy
				render json: { message: "success" }
			else
				render json: { errors: step.errors }
		end
	
		private
	
		def step_params
			params.require(:step).permit(:metric)
		end
	
		def set_step
			step = Step.find_by_id(params[:id])
		end
	
end
