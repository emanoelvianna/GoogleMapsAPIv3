
var map;
var rectangle;
var infoWindow;

function initialize() {
    var position = new google.maps.LatLng(-30.05, -51.18);

    var options = {
        zoom: 12,
        center: position,
       // mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById("mapa"), options);
    
    
    var bounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(-30.10, -51.249),
      new google.maps.LatLng(-30.00, -51.143)
    );
    
    // Define the rectangle and set its editable property to true.
    rectangle = new google.maps.Rectangle({
        bounds: bounds,
        editable: true,
        draggable: true
    });
    
    
    rectangle.setMap(map);
    points(map, locations); 

    google.maps.event.addListener(rectangle, 'bounds_changed', showNewRect);
    
    infoWindow = new google.maps.InfoWindow();
       
}

var image = {
    url: 'img/marcador.png'
};

var locations = [
        ['Hospital', -30.039119, -51.207156, 1],
];

function points(map,locations) {
    
    
    for (var i = 0; i < locations.length; i++) {
    var beach = locations[i];
    var myLatLng = new google.maps.LatLng(beach[1], beach[2]);
    
        var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image
    });
        
  }

}

function showNewRect(event) {
  var ne = rectangle.getBounds().getNorthEast();
  var sw = rectangle.getBounds().getSouthWest();

  var contentString = '<b>Rectangle moved.</b><br>' +
      'New north-east corner: ' + ne.lat() + ', ' + ne.lng() + '<br>' +
      'New south-west corner: ' + sw.lat() + ', ' + sw.lng();

  // Set the info window's content and position.
  infoWindow.setContent(contentString);
  infoWindow.setPosition(ne);

  infoWindow.open(map);
}

//initialize();
//pontos();
google.maps.event.addDomListener(window, 'load', initialize);


