class MapData  {

	constructor (ajax) {		
		this.url = "https://api.jcdecaux.com/vls/v1/stations?contract=toulouse&apiKey=0dd39fb7d2b169fac1860b7627dda27fab246e44";
		this.ajax = ajax; 
		this.mapInfo();	
	}

	mapInfo () {

		mapboxgl.accessToken = 'pk.eyJ1IjoiamFsbHktcGgiLCJhIjoiY2swdGMwNHZjMGFzZDNicGU2bHVhODkwbCJ9.T83X_8s7_gWjdH67B7Zcew';
		var map = new mapboxgl.Map({
			container: 'map',
			style: 'mapbox://styles/mapbox/streets-v11',
		     //coordonnées Toulouse
		     center: [1.433333, 43.600000],
		     zoom: 13

		 })

		//coordonnées, infos vélos, lat, long pr marqueurs

		this.ajax.ajaxGet(this.url, (response) => {
			let markers = JSON.parse(response); 

			for (var i = 0; i < markers.length; i++) {
				
				//console.log(markers[i]);
				
				var positions = markers[i]["position"];
				var lat = markers[i]["position"]["lat"];
				var long = markers[i]["position"]["lng"];
				var address = markers[i]["address"];
				var availableBikes = markers[i]["available_bikes"];
				var status = markers[i]["status"];
				

				var geojson = {
					type: 'FeatureCollection',
					features: [{
						type: 'Feature',
						geometry: {
							type: 'Point',
							coordinates: [long, lat]
						},
						properties: {
							title : address,
							description: availableBikes + " vélos libres<br/>" 
							+ "station : " + status + 
							"<br/><p id='reserverVelo' onclick='reserverVelo(`"+address+"`);'>Réserver</p>",
						}
					},
					]
				};

				
				// add markers and popups to map 
				geojson.features.forEach(function(marker) {

					var el = document.createElement('i');
					el.className = 'fas fa-map-marker-alt fa-2x';

					new mapboxgl.Marker(el)
					.setLngLat(geojson["features"][0]["geometry"]["coordinates"])
				    .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
				    .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>' ))
				    .addTo(map);
				});

			}

		});

	}
}
