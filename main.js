var myOptions = {
	"nativeControlsForTouch": false,
	controls: true,
	autoplay: true,
	width: "640",
	height: "400",
}
myPlayer = amp("azuremediaplayer", myOptions);
myPlayer.src([
        {
                "src": "http://hectagonmedia.streaming.mediaservices.windows.net/81ffe101-45cf-41e8-906d-e6d1cbef92ab/d1933312-307f-4da4-b4e3-047cbab7b26d.ism/manifest",
                "type": "application/vnd.ms-sstr+xml"
        }
]);