/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/A034-video/A034-video.ts":
/*!**************************************!*\
  !*** ./src/A034-video/A034-video.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var VideoPlayer = (function () {
    function VideoPlayer(VideoPlayerElements) {
        this.videoPlayer = VideoPlayerElements.videoPlayer;
        this.playButton = VideoPlayerElements.playButton;
        this.stopButton = VideoPlayerElements.stopButton;
    }
    VideoPlayer.prototype.iniciarEventos = function () {
        var _this = this;
        this.playButton.addEventListener('click', function () {
            _this.playToggle();
        });
        this.stopButton.addEventListener('click', function () {
            _this.videoPlayer.pause();
            _this.videoPlayer.currentTime = 0;
            _this.playButton.innerText = 'Play';
        });
    };
    VideoPlayer.prototype.stop = function () {
    };
    VideoPlayer.prototype.playToggle = function () {
        if (this.videoPlayer.paused) {
            this.videoPlayer.play();
            this.playButton.innerText = 'Pause';
        }
        else {
            this.videoPlayer.pause();
            this.playButton.innerText = 'Play';
        }
    };
    return VideoPlayer;
}());
exports["default"] = VideoPlayer;
var videoPlayer = new VideoPlayer({
    videoPlayer: document.querySelector('.video'),
    playButton: document.querySelector('.play'),
    stopButton: document.querySelector('.stop'),
});
videoPlayer.iniciarEventos();


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!********************************************************************!*\
  !*** ./src/A0019-exercicio-validacao/A0019-exercicio-validacao.ts ***!
  \********************************************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ../A034-video/A034-video */ "./src/A034-video/A034-video.ts");

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map