class PlayersController < ApplicationController

  def index
    players = ArrestApi.new.top_players
    render json: players
  end

  def details
    # add %20 to represent whitespace
    details = ArrestApi.new.player_details(params[:player_name])
    render json: details
  end
end
