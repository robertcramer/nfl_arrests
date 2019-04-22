class ArrestApi
  require 'net/http'

  def initialize
    @base_url = 'http://nflarrest.com/api/v1'
  end

  def top_players
    url = URI.parse("#{@base_url}/player")
    req = Net::HTTP::Get.new(url.to_s)
    res = Net::HTTP.start(url.host, url.port) {|http|
      http.request(req)
    }
    JSON.parse(res.body)
  end

  def player_details(player_name)
    url = URI.parse("#{@base_url}/player/arrests/#{player_name}")
    req = Net::HTTP::Get.new(url.to_s)
    res = Net::HTTP.start(url.host, url.port) {|http|
      http.request(req)
    }
    JSON.parse(res.body)
  end
end
