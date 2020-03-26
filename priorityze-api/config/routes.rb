Rails.application.routes.draw do
	namespace :api do
		namespace :v1 do
			resources :goal, only: [:index, :create, :destroy]
			resources :step, only: [:index, :create, :update, :destroy]
			patch "/goal" => "goal#update"
		end
	end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
