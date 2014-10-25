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

	# Load transactions from the OpenBank API
	resp = JSON.load(RestClient.get(url, {
		"obp_limit" => count,
		"obp_offset" => offset
		}))
	break unless resp["transactions"].length > 0
	# puts "Loaded #{resp["transactions"].length}, offset #{}"

	# Process transactions, and build a aggregate value based on the day of the month
	resp["transactions"].each do |t|
		day = Time.parse(t["details"]["posted"]).day
		aggregates[day]	= 0 if aggregates[day] == nil
		val = t["details"]["value"]["amount"].to_f
		aggregates[day] += val
		# puts "#{t["details"]["posted"]},#{t["id"]},#{t["details"]["value"]["amount"]},#{t["details"]["type"]},#{day},\"#{t["other_account"]["holder"]["name"]}\""
	end

	# Next page please
	page += 1
end

# We've aggregated per day over the year -
aggregates.each{ |k,v| aggregates[k] = v / 12 }

# Start building output format
# eg. current = [[0,190.1],[1,181.9],[2,2181.9],[3,2181.9],[4,1401.94],[5,388.14],[6,421.27],[7,421.27],[8,413.09],[9,413.09],[10,413.09],[11,413.09],[12,413.09],[13,287.99],[14,287.99],[15,256.39],[16,256.39],[17,256.39],[18,234.19]]
output = []
n = start
for i in 1..31 do
	n = n - aggregates[i]
	output << [i, n]
end

# Dump out result
puts
puts output.to_json
