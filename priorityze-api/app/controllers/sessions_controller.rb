class SessionsController < Devise::SessionsController
    respond_to :json

  	def new
  		super
  	end
  	def create
      self.resource = warden.authenticate!(auth_options)
      a = sign_in(resource_name, resource)
      yield resource if block_given?
      respond_with resource, location: after_sign_in_path_for(resource)
    end

  	private

  	def respond_with(resource, _opts = {})
  		render json: resource
  	end
  	def respond_to_on_destroy
  		render json: { ok: true, message: "logged out" }
  	end
end