
var map;

function initialize() {
    var position = new google.maps.LatLng(-30.05, -51.18);

    var options = {
        zoom: 12,
        center: position,
       // mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById("mapa"), options);
    
    points(map, locations);    
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


//initialize();
//pontos();
google.maps.event.addDomListener(window, 'load', initialize);

