class UserController < ApplicationController
	def show
		user = User.find_by(email: user_params[:email])
		render json: user
	end

	def index
		binding.pry
		render json: { user: current_user }
	end

	private

	def user_params
		params.require(:user).permit(:username, :email)
	end
end