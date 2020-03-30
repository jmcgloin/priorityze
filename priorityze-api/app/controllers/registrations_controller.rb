class RegistrationsController < Devise::RegistrationsController
	# require 'ostruct'
	respond_to :json

	def create
		begin
			super
		rescue ActiveRecord::RecordInvalid => e
			render_resource(e.record)
		rescue ActiveRecord::RecordNotUnique => e
			err = OpenStruct.new(errors: {user: 'Already exists'})
			validation_error(err)
		rescue ActiveRecord::Rollback => e
		end
	end
end