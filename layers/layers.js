var wms_layers = [];

var format_Kelurahan_0 = new ol.format.GeoJSON();
var features_Kelurahan_0 = format_Kelurahan_0.readFeatures(json_Kelurahan_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kelurahan_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kelurahan_0.addFeatures(features_Kelurahan_0);
var lyr_Kelurahan_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kelurahan_0, 
                style: style_Kelurahan_0,
                popuplayertitle: 'Kelurahan',
                interactive: true,
                title: '<img src="styles/legend/Kelurahan_0.png" /> Kelurahan'
            });
var format_Jalan_1 = new ol.format.GeoJSON();
var features_Jalan_1 = format_Jalan_1.readFeatures(json_Jalan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_1.addFeatures(features_Jalan_1);
var lyr_Jalan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_1, 
                style: style_Jalan_1,
                popuplayertitle: 'Jalan',
                interactive: true,
                title: '<img src="styles/legend/Jalan_1.png" /> Jalan'
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
                interactive: true,
                title: '<img src="styles/legend/Petung_2.png" /> Petung'
            });
var format_BangunanRT1_3 = new ol.format.GeoJSON();
var features_BangunanRT1_3 = format_BangunanRT1_3.readFeatures(json_BangunanRT1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BangunanRT1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BangunanRT1_3.addFeatures(features_BangunanRT1_3);
var lyr_BangunanRT1_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BangunanRT1_3, 
                style: style_BangunanRT1_3,
                popuplayertitle: 'Bangunan RT 1',
                interactive: true,
                title: '<img src="styles/legend/BangunanRT1_3.png" /> Bangunan RT 1'
            });
var format_BangunanRT4_4 = new ol.format.GeoJSON();
var features_BangunanRT4_4 = format_BangunanRT4_4.readFeatures(json_BangunanRT4_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BangunanRT4_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BangunanRT4_4.addFeatures(features_BangunanRT4_4);
var lyr_BangunanRT4_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BangunanRT4_4, 
                style: style_BangunanRT4_4,
                popuplayertitle: 'Bangunan RT 4',
                interactive: true,
                title: '<img src="styles/legend/BangunanRT4_4.png" /> Bangunan RT 4'
            });
var format_BangunanRT2_5 = new ol.format.GeoJSON();
var features_BangunanRT2_5 = format_BangunanRT2_5.readFeatures(json_BangunanRT2_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BangunanRT2_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BangunanRT2_5.addFeatures(features_BangunanRT2_5);
var lyr_BangunanRT2_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BangunanRT2_5, 
                style: style_BangunanRT2_5,
                popuplayertitle: 'Bangunan RT 2',
                interactive: true,
                title: '<img src="styles/legend/BangunanRT2_5.png" /> Bangunan RT 2'
            });
var format_BangunanRT3_6 = new ol.format.GeoJSON();
var features_BangunanRT3_6 = format_BangunanRT3_6.readFeatures(json_BangunanRT3_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BangunanRT3_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BangunanRT3_6.addFeatures(features_BangunanRT3_6);
var lyr_BangunanRT3_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BangunanRT3_6, 
                style: style_BangunanRT3_6,
                popuplayertitle: 'Bangunan RT 3',
                interactive: true,
                title: '<img src="styles/legend/BangunanRT3_6.png" /> Bangunan RT 3'
            });

lyr_Kelurahan_0.setVisible(true);lyr_Jalan_1.setVisible(true);lyr_Petung_2.setVisible(true);lyr_BangunanRT1_3.setVisible(true);lyr_BangunanRT4_4.setVisible(true);lyr_BangunanRT2_5.setVisible(true);lyr_BangunanRT3_6.setVisible(true);
var layersList = [lyr_Kelurahan_0,lyr_Jalan_1,lyr_Petung_2,lyr_BangunanRT1_3,lyr_BangunanRT4_4,lyr_BangunanRT2_5,lyr_BangunanRT3_6];
lyr_Kelurahan_0.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Jalan_1.set('fieldAliases', {'Jenis': 'Jenis', });
lyr_Petung_2.set('fieldAliases', {'DUSUN': 'DUSUN', 'JMLH_JIWA': 'JMLH_JIWA', });
lyr_BangunanRT1_3.set('fieldAliases', {'Jenis': 'Jenis', });
lyr_BangunanRT4_4.set('fieldAliases', {'Jenis': 'Jenis', });
lyr_BangunanRT2_5.set('fieldAliases', {'Jenis': 'Jenis', });
lyr_BangunanRT3_6.set('fieldAliases', {'Jenis': 'Jenis', });
lyr_Kelurahan_0.set('fieldImages', {'KDPPUM': '', 'NAMOBJ': '', 'REMARK': '', 'KDPBPS': '', 'FCODE': '', 'LUASWH': '', 'UUPP': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'KDEBPS': '', 'KDEPUM': '', 'KDCBPS': '', 'KDCPUM': '', 'KDBBPS': '', 'KDBPUM': '', 'WADMKD': '', 'WIADKD': '', 'WADMKC': '', 'WIADKC': '', 'WADMKK': '', 'WIADKK': '', 'WADMPR': '', 'WIADPR': '', 'TIPADM': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_Jalan_1.set('fieldImages', {'Jenis': 'TextEdit', });
lyr_Petung_2.set('fieldImages', {'DUSUN': '', 'JMLH_JIWA': '', });
lyr_BangunanRT1_3.set('fieldImages', {'Jenis': '', });
lyr_BangunanRT4_4.set('fieldImages', {'Jenis': '', });
lyr_BangunanRT2_5.set('fieldImages', {'Jenis': '', });
lyr_BangunanRT3_6.set('fieldImages', {'Jenis': '', });
lyr_Kelurahan_0.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Jalan_1.set('fieldLabels', {'Jenis': 'inline label - visible with data', });
lyr_Petung_2.set('fieldLabels', {'DUSUN': 'no label', 'JMLH_JIWA': 'no label', });
lyr_BangunanRT1_3.set('fieldLabels', {'Jenis': 'no label', });
lyr_BangunanRT4_4.set('fieldLabels', {'Jenis': 'no label', });
lyr_BangunanRT2_5.set('fieldLabels', {'Jenis': 'no label', });
lyr_BangunanRT3_6.set('fieldLabels', {'Jenis': 'no label', });
lyr_BangunanRT3_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});