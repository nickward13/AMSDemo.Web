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
                "src": "http://hectagonmedia.streaming.mediaservices.windows.net/071b7ec6-d0c7-4871-9543-bed233e7960d/1c4f8c7e-fefe-4c07-8dbb-9b7532137c1f.ism/manifest",
                "type": "application/vnd.ms-sstr+xml"
        }
]);
