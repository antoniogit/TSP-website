function getAjax(url, success) {
    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    xhr.open('GET', url);
    xhr.onreadystatechange = function() {
        if (xhr.readyState>3 && xhr.status==200) success(xhr.responseText);
    };
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.send();
    return xhr;
}

// mapping settings
function setPinImage(id) {
    var pinColors = [ "FFA000","009688","673AB7","4CAF50", "9E9E9E"];
    var randomColor = (Math.random() * 0xFFFFFF << 0).toString(16);
    var pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColors[id],
    new google.maps.Size(21, 34),
    new google.maps.Point(0,0),
    new google.maps.Point(10, 34));

    return pinImage;
}

//more mapping stufff
function setPinShadow() {
    var pinShadow = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_shadow",
    new google.maps.Size(40, 37),
    new google.maps.Point(0, 0),
    new google.maps.Point(12, 35));

    return pinShadow;
}

// example request
function callNTspRoutingV1() {
    document.getElementById('loader').classList.remove('hidden');

    getAjax('http://165.227.228.76/api/v1', function(data){ 
        jsonData = JSON.parse(data);
        nodes = jsonData['message'];
        fitness =  jsonData['fitness'];
        distance = jsonData['distance'];

        var driversNodes = [];

        for(var i=0; i< nodes.length; i++) {
            driversNodes.push(nodes[i].driver_path)
        }

        $( document ).ready(function() {

            document.getElementById('loader').classList.add('hidden');
            document.getElementById('fitness_field').innerHTML = fitness;
            document.getElementById('distance_field').innerHTML = distance;
            document.getElementById('fitness_container').classList.remove('hidden');
            document.getElementById('distance_container').classList.remove('hidden');

            var map = new google.maps.Map(document.getElementById('map'), {
                        zoom: 8,
                        center: {lat: 51.528308, lng: -0.3817765}
                    });

            var pinColors = [ "FFA000","009688","673AB7","4CAF50", "9E9E9E"];

            for(var i=0; i< driversNodes.length; i++) {
                var temp = driversNodes[i];
                var pinImage = setPinImage(i); //set the pin colour
                var pinShadow = setPinShadow();
                var driverPath = [];

                for (var j=0; j<temp.length; j++) {
                            var myLatLng = {lat: temp[j].lat, lng: temp[j].lng};
                            var marker = new google.maps.Marker({
                                map: map,
                                position: myLatLng,
                                tag: i,
                                icon: pinImage,
                                shadow: pinShadow
                              });

                            driverPath.push(myLatLng);
                }

                var userCoordinate = new google.maps.Polyline({
                    path: driverPath,
                    strokeColor: "#"+pinColors[i],
                    strokeOpacity: 1,
                    strokeWeight: 2
                });

                userCoordinate.setMap(map);
            }

        });

    });

};

// example request
function callNTspRoutingV2() {
    document.getElementById('loader').classList.remove('hidden');

    getAjax('http://165.227.228.76/api/v2', function(data){ 
        jsonData = JSON.parse(data);
        nodes = jsonData['message'];
        fitness =  jsonData['fitness'];
        distance = jsonData['distance'];

        var driversNodes = [];

        for(var i=0; i< nodes.length; i++) {
            driversNodes.push(nodes[i].driver_path)
        }

        $( document ).ready(function() {

            document.getElementById('loader').classList.add('hidden');
            document.getElementById('fitness_field').innerHTML = fitness;
            document.getElementById('distance_field').innerHTML = distance;
            document.getElementById('fitness_container').classList.remove('hidden');
            document.getElementById('distance_container').classList.remove('hidden');

            var map = new google.maps.Map(document.getElementById('map'), {
                        zoom: 8,
                        center: {lat: 51.528308, lng: -0.3817765}
                    });

            var pinColors = [ "FFA000","009688","673AB7","4CAF50", "9E9E9E"];

            for(var i=0; i< driversNodes.length; i++) {
                var temp = driversNodes[i];
                var pinImage = setPinImage(i); //set the pin colour
                var pinShadow = setPinShadow();
                var driverPath = [];

                for (var j=0; j<temp.length; j++) {
                            var myLatLng = {lat: temp[j].lat, lng: temp[j].lng};
                            var marker = new google.maps.Marker({
                                map: map,
                                position: myLatLng,
                                tag: i,
                                icon: pinImage,
                                shadow: pinShadow
                              });

                            driverPath.push(myLatLng);
                }

                var userCoordinate = new google.maps.Polyline({
                    path: driverPath,
                    strokeColor: "#"+pinColors[i],
                    strokeOpacity: 1,
                    strokeWeight: 2
                });

                userCoordinate.setMap(map);
            }

        });

    });

};

// example request
function callNTspRoutingV3() {
    document.getElementById('loader').classList.remove('hidden');

    getAjax('http://165.227.228.76/api/v3', function(data){ 
        jsonData = JSON.parse(data);
        nodes = jsonData['message'];
        fitness =  jsonData['fitness'];
        distance = jsonData['distance'];

        var driversNodes = [];

        for(var i=0; i< nodes.length; i++) {
            driversNodes.push(nodes[i].driver_path)
        }

        $( document ).ready(function() {

            document.getElementById('loader').classList.add('hidden');
            document.getElementById('fitness_field').innerHTML = fitness;
            document.getElementById('distance_field').innerHTML = distance;
            document.getElementById('fitness_container').classList.remove('hidden');
            document.getElementById('distance_container').classList.remove('hidden');

            var map = new google.maps.Map(document.getElementById('map'), {
                        zoom: 8,
                        center: {lat: 51.528308, lng: -0.3817765}
                    });

            var pinColors = [ "FFA000","009688","673AB7","4CAF50", "9E9E9E"];

            for(var i=0; i< driversNodes.length; i++) {
                var temp = driversNodes[i];
                var pinImage = setPinImage(i); //set the pin colour
                var pinShadow = setPinShadow();
                var driverPath = [];

                for (var j=0; j<temp.length; j++) {
                            var myLatLng = {lat: temp[j].lat, lng: temp[j].lng};
                            var marker = new google.maps.Marker({
                                map: map,
                                position: myLatLng,
                                tag: i,
                                icon: pinImage,
                                shadow: pinShadow
                              });

                            driverPath.push(myLatLng);
                }

                var userCoordinate = new google.maps.Polyline({
                    path: driverPath,
                    strokeColor: "#"+pinColors[i],
                    strokeOpacity: 1,
                    strokeWeight: 2
                });

                userCoordinate.setMap(map);
            }

        });

    });

};
