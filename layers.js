var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_southANDAMAN_1 = new ol.format.GeoJSON();
var features_southANDAMAN_1 = format_southANDAMAN_1.readFeatures(json_southANDAMAN_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_southANDAMAN_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_southANDAMAN_1.addFeatures(features_southANDAMAN_1);
var lyr_southANDAMAN_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_southANDAMAN_1, 
                style: style_southANDAMAN_1,
                popuplayertitle: 'south ANDAMAN ',
                interactive: false,
                title: '<img src="styles/legend/southANDAMAN_1.png" /> south ANDAMAN '
            });
var format_touristloactions_2 = new ol.format.GeoJSON();
var features_touristloactions_2 = format_touristloactions_2.readFeatures(json_touristloactions_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_touristloactions_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_touristloactions_2.addFeatures(features_touristloactions_2);
var lyr_touristloactions_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_touristloactions_2, 
                style: style_touristloactions_2,
                popuplayertitle: 'tourist loactions',
                interactive: true,
                title: '<img src="styles/legend/touristloactions_2.png" /> tourist loactions'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_southANDAMAN_1.setVisible(true);lyr_touristloactions_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_southANDAMAN_1,lyr_touristloactions_2];
lyr_southANDAMAN_1.set('fieldAliases', {'district_c': 'district_c', 'District': 'District', 'state_code': 'state_code', 'State': 'State', 'st_area_sh': 'st_area_sh', 'st_length_': 'st_length_', });
lyr_touristloactions_2.set('fieldAliases', {'Name': 'Name', '.': '.', 'Details': 'Details', });
lyr_southANDAMAN_1.set('fieldImages', {'district_c': 'TextEdit', 'District': 'TextEdit', 'state_code': 'TextEdit', 'State': 'TextEdit', 'st_area_sh': 'TextEdit', 'st_length_': 'TextEdit', });
lyr_touristloactions_2.set('fieldImages', {'Name': 'TextEdit', '.': 'ExternalResource', 'Details': 'TextEdit', });
lyr_southANDAMAN_1.set('fieldLabels', {'district_c': 'no label', 'District': 'no label', 'state_code': 'no label', 'State': 'no label', 'st_area_sh': 'no label', 'st_length_': 'no label', });
lyr_touristloactions_2.set('fieldLabels', {'Name': 'inline label - always visible', '.': 'inline label - always visible', 'Details': 'inline label - always visible', });
lyr_touristloactions_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});