(
function oembed() {
	
	var title_regex = /WARNING: SCARIEST GAME IN YEARS | Five Nights at Freddy's - Part 1/g;
	var author_regex = /Markiplier/g
	//var author_url_regex = /www.youtube.com/user/markiplierGAME/g
	
	function getOembed() {
		const watchUrlParams = new URLSearchParams(window.location.search);
var videoParameter = watchUrlParams.get('v');
console.log(videoParameter);
var initialOembedUrl = "https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v="
var formatJsonOembed = "&format=json"
		fetch(initialOembedUrl + videoParamter + formatJsonOembed).then(r => r.text()).then(result => {
	//Resultes
});

};
}
) ();