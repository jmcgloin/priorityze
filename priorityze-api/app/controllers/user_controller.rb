class UserController < ApplicationController
	before_action :authenticate_user!
	def show
		user = current_user
		render json: user
	end

	def index
		# binding.pry
		render json: { user: current_user }
	end

	private

	def user_params
		params.require(:user).permit(:username, :email)
	end
end