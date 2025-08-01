var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Petung_2 = new ol.format.GeoJSON();
var features_Petung_2 = format_Petung_2.readFeatures(json_Petung_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Petung_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Petung_2.addFeatures(features_Petung_2);
var lyr_Petung_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Petung_2, 
                style: style_Petung_2,
                popuplayertitle: 'Petung',
                interactive: false,
                title: '<img src="styles/legend/Petung_2.png" /> Petung'
            });
var format_Landuse_3 = new ol.format.GeoJSON();
var features_Landuse_3 = format_Landuse_3.readFeatures(json_Landuse_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Landuse_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Landuse_3.addFeatures(features_Landuse_3);
var lyr_Landuse_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Landuse_3, 
                style: style_Landuse_3,
                popuplayertitle: 'Landuse',
                interactive: false,
                title: '<img src="styles/legend/Landuse_3.png" /> Landuse'
            });
var format_Bangunan_4 = new ol.format.GeoJSON();
var features_Bangunan_4 = format_Bangunan_4.readFeatures(json_Bangunan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bangunan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_4.addFeatures(features_Bangunan_4);
var lyr_Bangunan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bangunan_4, 
                style: style_Bangunan_4,
                popuplayertitle: 'Bangunan',
                interactive: false,
                title: '<img src="styles/legend/Bangunan_4.png" /> Bangunan'
            });
var format_Jalan_5 = new ol.format.GeoJSON();
var features_Jalan_5 = format_Jalan_5.readFeatures(json_Jalan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_5.addFeatures(features_Jalan_5);
var lyr_Jalan_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_5, 
                style: style_Jalan_5,
                popuplayertitle: 'Jalan',
                interactive: false,
                title: '<img src="styles/legend/Jalan_5.png" /> Jalan'
            });
var format_TitikPenting_6 = new ol.format.GeoJSON();
var features_TitikPenting_6 = format_TitikPenting_6.readFeatures(json_TitikPenting_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikPenting_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikPenting_6.addFeatures(features_TitikPenting_6);
var lyr_TitikPenting_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikPenting_6, 
                style: style_TitikPenting_6,
                popuplayertitle: 'Titik Penting',
                interactive: true,
                title: '<img src="styles/legend/TitikPenting_6.png" /> Titik Penting'
            });
var format_TempatMenarik_7 = new ol.format.GeoJSON();
var features_TempatMenarik_7 = format_TempatMenarik_7.readFeatures(json_TempatMenarik_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TempatMenarik_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TempatMenarik_7.addFeatures(features_TempatMenarik_7);
var lyr_TempatMenarik_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TempatMenarik_7, 
                style: style_TempatMenarik_7,
                popuplayertitle: 'Tempat Menarik',
                interactive: true,
                title: '<img src="styles/legend/TempatMenarik_7.png" /> Tempat Menarik'
            });
var format_UMKM_8 = new ol.format.GeoJSON();
var features_UMKM_8 = format_UMKM_8.readFeatures(json_UMKM_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UMKM_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UMKM_8.addFeatures(features_UMKM_8);
cluster_UMKM_8 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_UMKM_8
});
var lyr_UMKM_8 = new ol.layer.Vector({
                declutter: false,
                source:cluster_UMKM_8, 
                style: style_UMKM_8,
                popuplayertitle: 'UMKM',
                interactive: true,
    title: 'UMKM<br />\
    <img src="styles/legend/UMKM_8_0.png" /> Budidaya<br />\
    <img src="styles/legend/UMKM_8_1.png" /> Hiburan<br />\
    <img src="styles/legend/UMKM_8_2.png" /> Jasa<br />\
    <img src="styles/legend/UMKM_8_3.png" /> Kerajinan<br />\
    <img src="styles/legend/UMKM_8_4.png" /> Kuliner<br />\
    <img src="styles/legend/UMKM_8_5.png" /> Penginapan<br />\
    <img src="styles/legend/UMKM_8_6.png" /> Retail<br />' });

lyr_GoogleSatellite_0.setVisible(false);lyr_OpenStreetMap_1.setVisible(true);lyr_Petung_2.setVisible(true);lyr_Landuse_3.setVisible(true);lyr_Bangunan_4.setVisible(true);lyr_Jalan_5.setVisible(true);lyr_TitikPenting_6.setVisible(true);lyr_TempatMenarik_7.setVisible(true);lyr_UMKM_8.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OpenStreetMap_1,lyr_Petung_2,lyr_Landuse_3,lyr_Bangunan_4,lyr_Jalan_5,lyr_TitikPenting_6,lyr_TempatMenarik_7,lyr_UMKM_8];
lyr_Petung_2.set('fieldAliases', {'DUSUN': 'DUSUN', 'JMLH_JIWA': 'JMLH_JIWA', });
lyr_Landuse_3.set('fieldAliases', {'Jenis': 'Jenis', 'layer': 'layer', 'path': 'path', });
lyr_Bangunan_4.set('fieldAliases', {'Jenis': 'Jenis', 'layer': 'layer', 'path': 'path', });
lyr_Jalan_5.set('fieldAliases', {'Jenis': 'Jenis', });
lyr_TitikPenting_6.set('fieldAliases', {'Nama': 'Nama', });
lyr_TempatMenarik_7.set('fieldAliases', {'Nama': 'Nama', 'Jenis': 'Jenis', 'Keterangan': 'Keterangan', 'Desc': 'Desc', });
lyr_UMKM_8.set('fieldAliases', {'Nama': 'Nama', 'Jenis': 'Jenis', 'Keterangan': 'Keterangan', 'Desc': 'Desc', });
lyr_Petung_2.set('fieldImages', {'DUSUN': '', 'JMLH_JIWA': '', });
lyr_Landuse_3.set('fieldImages', {'Jenis': '', 'layer': '', 'path': '', });
lyr_Bangunan_4.set('fieldImages', {'Jenis': '', 'layer': '', 'path': '', });
lyr_Jalan_5.set('fieldImages', {'Jenis': 'TextEdit', });
lyr_TitikPenting_6.set('fieldImages', {'Nama': '', });
lyr_TempatMenarik_7.set('fieldImages', {'Nama': '', 'Jenis': '', 'Keterangan': '', 'Desc': '', });
lyr_UMKM_8.set('fieldImages', {'Nama': 'TextEdit', 'Jenis': 'TextEdit', 'Keterangan': 'TextEdit', 'Desc': 'TextEdit', });
lyr_Petung_2.set('fieldLabels', {'DUSUN': 'no label', 'JMLH_JIWA': 'no label', });
lyr_Landuse_3.set('fieldLabels', {'Jenis': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Bangunan_4.set('fieldLabels', {'Jenis': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Jalan_5.set('fieldLabels', {'Jenis': 'inline label - visible with data', });
lyr_TitikPenting_6.set('fieldLabels', {'Nama': 'inline label - visible with data', });
lyr_TempatMenarik_7.set('fieldLabels', {'Nama': 'inline label - visible with data', 'Jenis': 'inline label - visible with data', 'Keterangan': 'inline label - visible with data', 'Desc': 'inline label - always visible', });
lyr_UMKM_8.set('fieldLabels', {'Nama': 'inline label - visible with data', 'Jenis': 'inline label - visible with data', 'Keterangan': 'inline label - visible with data', 'Desc': 'inline label - visible with data', });
lyr_UMKM_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});