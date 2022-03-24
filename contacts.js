
    (function () {
      var setting = {
        height: 500,
        width: 2100,
        zoom: 15,
        queryString: "Moringa School, Nairobi, Kenya",
        place_id: "ChIJwV1E92saLxgRTN7vyKNiC5Q",
        satellite: false,
        centerCoord: [-1.3005225503604962, 36.7847293],
        cid: "0x940b62a3c8efde4c",
        lang: "en",
        cityUrl: "/kenya/nairobi-222",
        cityAnchorText: "Map of Nairobi, Nakuru, Kenya",
        id: "map-9cd199b9cc5410cd3b1ad21cab2e54d3",
        embed_id: "422854",
      };
      var d = document;
      var s = d.createElement("script");
      s.src =
        "https://1map.com/js/script-for-user.js?embed_id=422854";
      s.async = true;
      s.onload = function (e) {
        window.OneMap.initMap(setting);
      };
      var to = d.getElementsByTagName("script")[0];
      to.parentNode.insertBefore(s, to);
    })();