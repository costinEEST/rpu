import { Observable, from, interval, mergeMap, retry, distinct } from "rxjs";
import L from "leaflet";

const QUAKE_URL = `http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojsonp`;

const mapContainer = document.createElement("div");
mapContainer.id = "map";
document.body.appendChild(mapContainer);

const map = L.map("map").setView([33.858631, -118.279602], 7);
L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png").addTo(map);

function loadJSONP(settings) {
  const url = settings.url;
  const callbackName = settings.callbackName;

  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = url;

  window[callbackName] = (data) => {
    window[callbackName].data = data;
  };

  return new Observable((subscriber) => {
    const handler = (e) => {
      const status = e.type === "error" ? 400 : 200;
      const response = window[callbackName].data;

      if (status === 200) {
        subscriber.next({
          status,
          responseType: "jsonp",
          response,
          originalEvent: e,
        });

        subscriber.complete();
      } else {
        subscriber.error({
          type: "error",
          status,
          originalEvent: e,
        });
      }
    };

    script.onload = script.onreadystatechanged = script.onerror = handler;

    const head = window.document.getElementsByTagName("head")[0];
    head.insertBefore(script, head.firstChild);
  });
}

interval(5000)
  .pipe(
    mergeMap(() =>
      loadJSONP({
        url: QUAKE_URL,
        callbackName: "eqfeed_callback",
      }).pipe(retry(3))
    ),
    mergeMap((result) => from(result.response.features)),
    distinct((quake) => quake.properties.code)
  )
  .subscribe((quake) => {
    const coords = quake.geometry.coordinates;
    const size = quake.properties.mag * 10000;

    L.circle([coords[1], coords[0]], size).addTo(map);
  });
