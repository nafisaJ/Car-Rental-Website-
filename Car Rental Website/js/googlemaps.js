function initialize() {
				var latlng = new google.maps.LatLng(40.721161,-74.003949);
				var settings = {
					zoom: 15,
					center: latlng,
					mapTypeControl: true,
					mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
					navigationControl: true,
					navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
					mapTypeId: google.maps.MapTypeId.ROADMAP};
				var map = new google.maps.Map(document.getElementById("map_canvas"), settings);
				var contentString = '<div id="content">'+
					'<div id="siteNotice">'+
					'</div>'+
					'<h6 id="firstHeading" class="firstHeading">Cartel Design Studio</h6>'+
					'<div id="bodyContent">'+
					'<p>5th Avenue New York</p>'+
					'</div>'+
					'</div>';
				var infowindow = new google.maps.InfoWindow({
					content: contentString
				});
				
				var companyImage = new google.maps.MarkerImage('images/map-marker.png',
					new google.maps.Size(100,75),
					new google.maps.Point(0,0),
					new google.maps.Point(50,50)
				);

				var companyShadow = new google.maps.MarkerImage('images/map-marker-shadow.png',
					new google.maps.Size(130,75),
					new google.maps.Point(0,0),
					new google.maps.Point(55, 50));

				var companyPos = new google.maps.LatLng(40.721161,-74.003949);

				var companyMarker = new google.maps.Marker({
					position: companyPos,
					map: map,
					icon: companyImage,
					shadow: companyShadow,
					title:"Cartel",
					zIndex: 3});
				
				
				google.maps.event.addListener(companyMarker, 'click', function() {
					infowindow.open(map,companyMarker);
				});
			}