const myLink = document.getElementById('ethereum');
const API_KEY =
	'[{"id":"ethereum","symbol":"eth","name":"Ethereum","image":"https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880","current_price":1779.84,"market_cap":214418393763,"market_cap_rank":2,"fully_diluted_valuation":214418393763,"total_volume":10877192676,"high_24h":1825.53,"low_24h":1766.06,"price_change_24h":-26.301190233042462,"price_change_percentage_24h":-1.45621,"market_cap_change_24h":-3167347428.679596,"market_cap_change_percentage_24h":-1.45568,"circulating_supply":120448797.976576,"total_supply":120448797.976576,"max_supply":null,"ath":4878.26,"ath_change_percentage":-63.54691,"ath_date":"2021-11-10T14:24:19.604Z","atl":0.432979,"atl_change_percentage":410607.54534,"atl_date":"2015-10-20T00:00:00.000Z","roi":{"times":84.12407156512988,"currency":"btc","percentage":8412.407156512987},"last_updated":"2023-03-30T19:13:47.554Z"}]';

// Define the endpoint URL for the Ethereum price
const endpoint = `https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd&apiKey=${API_KEY}`;

// Get the price element
const priceElement = document.getElementById('price');

// Fetch the Ethereum price from the API
fetch(endpoint)
	.then((response) => response.json())
	.then((data) => {
		// Get the price from the API response
		const price = data.ethereum.usd;

		// Update the price element with the new price
		priceElement.textContent = price.toFixed(2);
	})
	.catch((error) => console.error(error));

myLink.addEventListener('click', function () {
	window.open('https://www.coingecko.com/en/coins/ethereum', '_blank');
});
