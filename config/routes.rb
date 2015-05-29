Rails.application.routes.draw do
  get '/' => 'games#index'
  resources :games
end
