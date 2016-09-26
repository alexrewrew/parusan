jQuery(document).ready(function(){

	jQuery("#jquery_jplayer_1").jPlayer({
		ready: function () {
			jQuery(this).jPlayer("setMedia", {
				title: "Spot Video",
				m4v: "/media/files/spot-video.m4v",
				ogv: "/media/files/spot-video.ogv",
				webmv: "/media/files/spot-video.webm",
				poster: "system/templates/parusan/images/video-poster.jpg"
			});
		},
		play: function() { // To avoid multiple jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		swfPath: "jplayer",
		supplied: "webmv, ogv, m4v",
		size: {width: "100%", height: "auto"},
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true,
		remainingDuration: true,
		toggleDuration: true
	});
	jQuery("#jquery_jplayer_2").jPlayer({
		ready: function (event) {
			jQuery(this).jPlayer("setMedia", {
				title: "Spot radio",
				m4a: "/media/files/spot-radio.m4a",
				oga: "/media/files/spot-radio.ogg",
				poster: "system/templates/parusan/images/audio-poster.jpg"
			});
		},
		play: function() { // To avoid multiple jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		swfPath: "jplayer",
		supplied: "m4a, oga",
		cssSelectorAncestor: "#jp_container_2",
		size: {width: "100%", height: "auto"},
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true,
		remainingDuration: true,
		toggleDuration: true
	});

});