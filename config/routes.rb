Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'home#index'

  namespace :api do
    get 'players', to: 'players#index'
    get 'players/:player_name', to: 'players#details'
  end

  get '*path', to: 'home#index'
end
