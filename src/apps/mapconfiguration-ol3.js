//Global variables
var map, layers;
Proj4js.defs["EPSG:27700"] = "+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 +x_0=400000 +y_0=-100000 +ellps=airy +datum=OSGB36 +units=m +no_defs";

//Proj4js
var projection = ol.proj.configureProj4jsProjection({
  code: 'EPSG:27700',
  extent: [1393.0196, 13494.9764, 671196.3657, 1230275.0454]
});

var attribution = new ol.Attribution({
  html: 'Tiles &copy; <a href="http://services.arcgisonline.com/ArcGIS/' +
      'rest/services/World_Topo_Map/MapServer">ArcGIS</a>'
});

//Load map into HTML5 Canvas
function maploader(){
	/*layers = [
		new ol.layer.Tile({
			source: new ol.source.TileWMS({
				url: 'http://vmap0.tiles.osgeo.org/wms/vmap0',
				params: {
					'VERSION': '1.1.1',
					'LAYERS': 'basic',
					'FORMAT': 'image/jpeg'
				}
			})
		})
	];*/
	
	layers = [
		new ol.layer.Tile({
		  source: new ol.source.XYZ({
			attributions: [attribution],
			url: 'http://server.arcgisonline.com/ArcGIS/rest/services/' +
				'World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
		  })
		})
	];
	
	map = new ol.Map({
	  layers: layers,
	  renderers: ol.RendererHint.CANVAS,
	  target: 'map',
	  view: new ol.View2D({
		//projection: projection,
		//center: ol.proj.transform([37.41, 8.82], 'EPSG:4326', 'EPSG:3857'),
		//center: ol.proj.transform([405000, 285000], projection, 'EPSG:3857'),
		//center: [405000, 285000],
		center: ol.proj.transform([-121.1, 47.5], 'EPSG:4326', 'EPSG:3857'),
		zoom: 7
	  })
	});
}