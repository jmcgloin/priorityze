class UserController < ApplicationController
	before_action :authenticate_user!
	def show
		render json: { user: current_user, ok: true }
	end

	def index
		# binding.pry
		render json: { user: current_user, ok: true }
	end

	private

	def user_params
		params.require(:user).permit(:username, :email)
	end
end