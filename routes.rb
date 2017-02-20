require "sinatra"

get "/index" do
    erb :index
end

get "/json" do
    erb :json
end