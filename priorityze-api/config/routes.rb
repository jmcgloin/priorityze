Rails.application.routes.draw do
  devise_for :users
	namespace :api do
		namespace :v1 do
			resources :goal, only: [:index, :create, :destroy, :update]
			resources :step, only: [:index, :create, :update, :destroy]
		end
	end
	root to: "home#index"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
