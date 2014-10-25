# https://api.openbankproject.com/obp/v1.3.0/banks/landesbank-berlin-berliner-sparkasse-berlin/accounts/simon/public/transactions

# class OpenBank

# 	attr_accessor :url




# end

require 'json'
require 'rest-client'
require 'time'

url = "https://api.openbankproject.com/obp/v1.3.0/banks/landesbank-berlin-berliner-sparkasse-berlin/accounts/simon/public/transactions"
page = 0
count = 200

start = 0
aggregates = {}

loop do

	offset = page * count

	resp = JSON.load(RestClient.get(url, {
		"obp_limit" => count,
		"obp_offset" => offset
		}))

	# puts "Loaded #{resp["transactions"].length}, offset #{}"

	break unless resp["transactions"].length > 0

	resp["transactions"].each do |t|
		puts ""
		day = Time.parse(t["details"]["posted"]).day

		puts "CUR: #{day} #{aggregates[day]}"

		aggregates[day]	= 0 if aggregates[day] == nil

		val = t["details"]["value"]["amount"].to_f
		puts "#{val}"

		aggregates[day] += val
		puts "NEW: #{day} #{aggregates[day]}"

		puts "#{t["details"]["posted"]},#{t["id"]},#{t["details"]["value"]["amount"]},#{t["details"]["type"]},#{day},\"#{t["other_account"]["holder"]["name"]}\""
	end

	page += 1

end

puts aggregates
puts

aggregates.each{ |k,v| aggregates[k] = v/12 }

# aggregates.each do |k, v|
# 	puts "#{k}:\t#{v}"
# end

# Start building output format
# eg. current = [[0,190.1],[1,181.9],[2,2181.9],[3,2181.9],[4,1401.94],[5,388.14],[6,421.27],[7,421.27],[8,413.09],[9,413.09],[10,413.09],[11,413.09],[12,413.09],[13,287.99],[14,287.99],[15,256.39],[16,256.39],[17,256.39],[18,234.19]]

output = []
n = start
for i in 1..31 do
	n = n - aggregates[i]
	output << [i, n]
end

puts
puts output.to_json

