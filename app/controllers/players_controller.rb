class PlayersController < ApplicationController

  def index
    players = ArrestApi.new.top_players
    render json: players
  end

  def details
  end
end
