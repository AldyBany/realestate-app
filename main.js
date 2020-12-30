fetch("https://realtor-com-real-estate.p.rapidapi.com/property-detail?property_id=1961921598", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "12860fc84cmshc2532495e830160p1d1f3ajsn54fc00431357",
		"x-rapidapi-host": "realtor-com-real-estate.p.rapidapi.com"
	}
}).then(response => response.json())
.then(response => {
	// console.log(response.data);
	// let srce = response.data.photos[3].href; 

	view = document.querySelector('.img')
	 let image = document.createElement('img')
	 image.setAttribute('src',srce);
	 view.appendChild(image)
	 
})
.catch(err => {
	console.error(err);
});

console.log('hi')