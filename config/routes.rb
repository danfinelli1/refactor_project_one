Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
get "/" => "question#index"
get "/html" =>"question#html"
end
