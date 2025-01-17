# Below are the routes for madmin
namespace :madmin, path: :admin do
  resources :contacts
  resources :users
  root to: "dashboard#show"
end
