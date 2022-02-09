require(["esri/Map", "esri/views/MapView", "esri/layers/FeatureLayer"], (Map, MapView, FeatureLayer) => {
        const map = new Map({
          basemap: "dark-gray"
        });

        const view = new MapView({
          container: "viewDiv",
          map: map,
          zoom: 9,
          center: [-71.4774, 41.5401]  
        });

  const featureLayer_2 = new FeatureLayer({
          url: "https://services2.arcgis.com/S8zZg9pg23JUEexQ/arcgis/rest/services/StateBoundaries/FeatureServer"
        });

        map.add(featureLayer_2);
  const featureLayer_1 = new FeatureLayer({
          url: "http://services2.arcgis.com/S8zZg9pg23JUEexQ/arcgis/rest/services/RIDOT_Roads_2016/FeatureServer"
        });

        map.add(featureLayer_1);
});
