const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c95b68476fmshe9466392785a987p1c600ejsn0aa37dccfff6',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};


const getweathercity = (city) => {
	cityname.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then(response => {
			console.log(response)

			cloud_pct.innerHTML = response.cloud_pct
			temp.innerHTML = response.temp
			temp2.innerHTML = response.temp
			feels_like.innerHTML = response.feels_like
			humidity.innerHTML = response.humidity
			humidity2.innerHTML = response.humidity
			min_temp.innerHTML = response.min_temp
			max_temp.innerHTML = response.max_temp
			wind_speed.innerHTML = response.wind_speed
			wind_speed2.innerHTML = response.wind_speed
			sunrise.innerHTML = response.sunrise
			sunset.innerHTML = response.sunset
		})
		.catch(err => console.error(err))

}

submit.addEventListener("click", (e) => {
	e.preventDefault()
	getweathercity(city.value)
})
getweathercity("Delhi");

kolkata.addEventListener("click", (e) => {
	e.preventDefault()
	getweathercity("Kolkata")
})

bangalore.addEventListener("click", (e) => {
	e.preventDefault()
	getweathercity("Bangalore")
})
noida.addEventListener("click", (e) => {
	e.preventDefault()
	getweathercity("Noida")
})
hyderabad.addEventListener("click", (e) => {
	e.preventDefault()
	getweathercity("Hyderabad")
})
bhubaneswar.addEventListener("click", (e) => {
	e.preventDefault()
	getweathercity("Bhubaneswar")
})
