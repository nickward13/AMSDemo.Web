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
                "src": "http://hectagonmedia.streaming.mediaservices.windows.net/c91799fb-43fa-4ac5-970b-e02f67dec40f/e4ad70fa-84f5-4ff3-b362-aece6594075e.ism/manifest",
                "type": "application/vnd.ms-sstr+xml"
        }
]);