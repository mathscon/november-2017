$(function () {

    function initMap() {

        var location = new google.maps.LatLng(51.499418, -0.179160);
        var locationGrange = new google.maps.LatLng(51.5107376,-0.0790549);

        var mapCanvas = document.getElementById('map');
        var mapGrangeCanvas = document.getElementById('map-grange');

        var mapOptions = {
            center: location,
            zoom: 16,
            panControl: false,
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            zoomControl: false,
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            rotateControl: false,
            fullscreenControl:  false,
            disableDefaultUI: true,
            draggable: false
	}

        var mapGrangeOptions = {
            center: locationGrange,
            zoom: 16,
            panControl: false,
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            zoomControl: false,
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            rotateControl: false,
            fullscreenControl:  false,
            disableDefaultUI: true,
            draggable: false
	}

        var map = new google.maps.Map(mapCanvas, mapOptions);
        var mapGrange = new google.maps.Map(mapGrangeCanvas, mapGrangeOptions);

        var markerImage = 'images/general/marker.png';

        var marker = new google.maps.Marker({
            position: location,
            map: map,
            icon: markerImage
        });

       var markerGrange = new google.maps.Marker({
            position: locationGrange,
            map: mapGrange,
            icon: markerImage
        });

        var contentString = '<div class="info-window">' +
                '<h3>Blackett Laboratory</h3>' +
                '<div class="info-content">' +
                '<p>Prince Consort Road, SW7 2AZ</p>' +
                '</div>' +
                '</div>';

        var contentGrangeString = '<div class="info-window">' +
                '<h3>Grange City Hotel</h3>' +
                '<div class="info-content">' +
                '<p>8-14 Cooper\'s Row, London, EC3N 2BQ</p>' +
                '</div>' +
                '</div>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 400
        });

        var infowindowGrange = new google.maps.InfoWindow({
            content: contentGrangeString,
            maxWidth: 400
        });

        infowindow.open(map, marker);
        infowindowGrange.open(mapGrange, markerGrange);

        //marker.addListener('click', function () {
        //    infowindow.open(map, marker);
        //});

        //markerGrange.addListener('click', function () {
        //    infowindowGrange.open(mapGrange, markerGrange);
        //});

        var styles = [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}];

	map.set('styles', styles);
	mapGrange.set('styles', styles);


    }

    google.maps.event.addDomListener(window, 'load', initMap);
});
