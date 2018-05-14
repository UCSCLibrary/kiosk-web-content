/* Set up the map. */
var mapName = "mchmap";
var mapHeight = 2753; // height of the map in pixels
var mapWidth = 1332; // width of the map in pixels
var mapPath = "../img/mchenry-new.png"; //The path to the map file
/* Set up the origin point popup. This is where all the paths will be drawn from. */
var mapOriginLat = 1129; // The distance of the origin point from the top of the map in pixels
var mapOriginLat = (mapHeight - mapOriginLat); //We subtract this from the height because leaflet measures from the bottom
var mapOriginLong = 768; // The distance of the origin point from the left of the map
var mapOriginContent = "LIBRARY ENTRANCE"; // The text of the origin point popup
/* Set options for the polyline. */
var polylineOptions = {
	color: 'red',
	weight: 3,
	opacity: '.5',
	dashArray: '5,5',
	lineJoin: 'round'
};

/* Give the map a name and specify the coordinate system. CRS stand for coordinate reference system. It allows us to define our own coordinates for this map. Details at: http://leafletjs.com/examples/crs-simple/crs-simple.html. */
var map = L.map(mapName, {
	crs: L.CRS.Simple,
	minZoom: -5
});

/* Set the bounds variable to determine the size of the coordinate system. Here we are using pixels, matching the coordinate system to the pixel dimensions of the McHenry map image. */
var bounds = [[0,0], [mapHeight,mapWidth]];

/* Define the image variable and give it the source for the map image. */
L.imageOverlay(mapPath, bounds).addTo(map);
map.fitBounds(bounds);

/* Setup popup that remains on the map. This is the popup for the library entrance. All the polylines take this point as their origin. */
L.popup({closeButton:false})
.setLatLng([mapOriginLat, mapOriginLong])
.setContent(mapOriginContent)
.openOn(map);

/* Set the initial view to display the whole map, including how zoomed in it is. */
map.setView( [mapOriginLat, mapOriginLong], -1);

/* Don't show the 'Powered by Leaflet' text. */
map.attributionControl.setPrefix('');

/* Define the variable for the popups. This will be called in the click functions below. The closeButton option is set to false so that the popups don't have buttons in the upper left allowing users to close them. */
	var locationPop = L.popup({closeButton:false});

/* Define the locationPoints variable. The Lat and Long values will be set below as needed. */
	var locationPoints = [];

/* Define the locationLayer variable. */
	var locationLayer = new L.Polyline(locationPoints, polylineOptions);

/* Create the removeLayers function. This will be called in the click functions below to remove any previously drawn layers. */
	$.fn.removeLayers = function(){ 
		map.removeLayer(locationPop);
		map.removeLayer(locationLayer);
	};

/* Create the makePath function. This will be called in the click functions below. The locationLayer option uses the locationPoints defined in the click functions. The LocationPop option gets the values defined earlier. The locationLayer option uses getBounds to fit the map display to the area of the popups and adds some padding with .pad. */
	$.fn.makePath = function(){ 
		map.addLayer(locationLayer);	
		map.addLayer(locationPop);	
		map.fitBounds(locationLayer.getBounds().pad(.1));
	};

/* Create the makePolyline function. This will draw the lines based on the variables defined above. */
	$.fn.makePolyline = function(lat, long, content, coords){ 
		$.fn.removeLayers();
		locationPop
			.setLatLng([lat, long])
			.setContent(content);
		var coordsLength = (coords.length);
		var locationPoints = [];
		for(i = 0; i < coordsLength; i+=2) {
			locationPoints.push(new L.LatLng(coords[i], coords[i+1]));
		}
		locationLayer.setLatLngs(locationPoints);
		$.fn.makePath();
		$('ul.location-links li').removeClass('selected');
		$(this).addClass('selected');
	};

/* Create the drawLineFunction. This is used for the click functions below. */
function drawLine(locID) {
    $.fn.makePolyline(locID[1][0], locID[1][1], locID[0], locID[1]);
}