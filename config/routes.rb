Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :create, :show, :update]
    resources :posts, except: [:edit, :new]
    resources :comments, only: [:index, :create, :update, :destroy]
    resources :likes, only: [:index, :create, :destroy]
    resources :experiences, only: [:index, :create, :update, :destroy]
    resources :connections, only: [:index, :create, :update, :destroy]
    
    resource :session, only: [:create, :destroy]
  end
end
