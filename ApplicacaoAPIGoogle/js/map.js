
var map;
var rectangle;

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

function d() {
    window.onload = function() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("scream");
    ctx.drawImage(img, 10, 10);
    }   
}

//initialize();
//pontos();
google.maps.event.addDomListener(window, 'load', initialize);


