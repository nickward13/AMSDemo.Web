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
                "src": "http://hectagonmedia.streaming.mediaservices.windows.net/42a81079-f263-4428-b2ff-aefc6b32feb0/bfca66f9-c6b8-42e9-902a-c5cc428067ec.ism/manifest",
                "type": "application/vnd.ms-sstr+xml"
        }
]);