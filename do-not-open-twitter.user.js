// ==UserScript==
// @name		DO NOT OPEN TWITTER
// @description	Redirect to Gmail
// @version		0.1.0
// @include		https://twitter.com/*
// @include		https://tweetdeck.twitter.com/*
// @author		sanaehururu1200(original:yanorei32)
// @website		https://github.com/sanaehururu1200/do-not-open-twitter (original:https://github.com/yanorei32/do-not-open-twitter)
// @namespace	https://twitter.com/sanaehururu2100 (original:http://yano.teamfruit.net/~rei/)
// @updateURL	https://github.com/sanaehururu1200/do-not-open-twitter/do-not-open-twitter.user.js
// @license		The Unlicense
// @grant		none
// @run-at		document-start
// ==/UserScript==

(function() {
	'use strict';
	location.href = 'https://mail.google.com/';
})();
