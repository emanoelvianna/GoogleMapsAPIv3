
var map;

var locations = [
        [-51.12794467539000000,-30.04794290572600000, 1],
        [-51.23682367539000000,-30.09264490572600000, 2],
        [-51.15110967539000000,-30.02610290572600000, 3],
        [-51.14673067539000000,-30.02404990572600000, 4]
    ]; 


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
    url: 'imag/marcador.png'
};

function points(map,locations) {
    
    
    for( var i = 0; i < locations.length; i++) {
        var beach = locations[i];
        var myLatLng = new google.maps.LatLng(beach[1], beach[2]);
        
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'Hello World!'
        });
        
    }

}


//initialize();
//pontos();
google.maps.event.addDomListener(window, 'load', initialize);

