/* eslint-disable */
import React, { useState, useRef, useEffect } from 'react';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

/*
 Copyright (c) Folly Systems.

 This source code is licensed under the MIT license found in the
 LICENSE file in the root directory of this source tree.
*/
var PauseIcon = function () {
    return (React.createElement("svg", { width: "18", height: "19", viewBox: "0 0 18 19", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("g", { filter: "url(#filter0_d)" },
            React.createElement("rect", { x: "3.94836", y: "2", width: "3.42276", height: "15", rx: "0.5", fill: "white" }),
            React.createElement("rect", { x: "10.6289", y: "2", width: "3.42276", height: "15", rx: "0.5", fill: "white" })),
        React.createElement("defs", null,
            React.createElement("filter", { id: "filter0_d", x: "1.94836", y: "0", width: "14.1033", height: "19", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React.createElement("feOffset", null),
                React.createElement("feGaussianBlur", { stdDeviation: "1" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })))));
};
var PlayIcon = function () {
    return (React.createElement("svg", { width: "18", height: "19", viewBox: "0 0 18 19", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("g", { filter: "url(#filter0_d)" },
            React.createElement("path", { d: "M3.06263 17C2.89687 17 2.7379 16.9342 2.62068 16.8169C2.50347 16.6997 2.43762 16.5408 2.43762 16.375V2.62473C2.43767 2.51498 2.46662 2.40718 2.52155 2.31217C2.57649 2.21716 2.65547 2.13828 2.75056 2.08349C2.84565 2.02869 2.9535 1.99989 3.06324 2C3.17299 2.00011 3.28078 2.02911 3.37576 2.0841L15.251 8.95923C15.3457 9.01417 15.4243 9.09303 15.479 9.18791C15.5336 9.28279 15.5624 9.39036 15.5624 9.49986C15.5624 9.60936 15.5336 9.71693 15.479 9.81181C15.4243 9.90669 15.3457 9.98555 15.251 10.0405L3.37576 16.9156C3.28065 16.9709 3.17262 17 3.06263 17Z", fill: "white" })),
        React.createElement("defs", null,
            React.createElement("filter", { id: "filter0_d", x: "0.437622", y: "0", width: "17.1248", height: "19", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React.createElement("feOffset", null),
                React.createElement("feGaussianBlur", { stdDeviation: "1" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })))));
};
var FullScreenIcon = function () {
    return (React.createElement("svg", { width: "18", height: "19", viewBox: "0 0 18 19", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("g", { clipPath: "url(#clip0)" },
            React.createElement("g", { filter: "url(#filter0_d)" },
                React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.80769 2C2.53368 2 1.5 3.03368 1.5 4.30769V6.78022C1.5 7.12996 1.63893 7.46537 1.88623 7.71267C2.13353 7.95997 2.46895 8.0989 2.81868 8.0989C3.16842 8.0989 3.50383 7.95997 3.75113 7.71267C3.99843 7.46537 4.13736 7.12995 4.13736 6.78022V4.63736H6.28022C6.62995 4.63736 6.96537 4.49843 7.21267 4.25113C7.45997 4.00383 7.5989 3.66842 7.5989 3.31868C7.5989 2.96895 7.45997 2.63353 7.21267 2.38623C6.96537 2.13893 6.62996 2 6.28022 2H3.80769ZM11.7198 2C11.37 2 11.0346 2.13893 10.7873 2.38623C10.54 2.63353 10.4011 2.96894 10.4011 3.31868C10.4011 3.66842 10.54 4.00383 10.7873 4.25113C11.0346 4.49843 11.37 4.63736 11.7198 4.63736H13.8626V6.78022C13.8626 7.12996 14.0016 7.46537 14.2489 7.71267C14.4962 7.95997 14.8316 8.0989 15.1813 8.0989C15.5311 8.0989 15.8665 7.95997 16.1138 7.71267C16.3611 7.46537 16.5 7.12996 16.5 6.78022V4.30769C16.5 3.03368 15.4663 2 14.1923 2H11.7198ZM2.81868 10.9011C2.46894 10.9011 2.13353 11.04 1.88623 11.2873C1.63893 11.5346 1.5 11.87 1.5 12.2198V14.6923C1.5 15.3043 1.74313 15.8913 2.17591 16.3241C2.60868 16.7569 3.19565 17 3.80769 17H6.28022C6.62996 17 6.96537 16.8611 7.21267 16.6138C7.45997 16.3665 7.5989 16.0311 7.5989 15.6813C7.5989 15.3316 7.45997 14.9962 7.21267 14.7489C6.96537 14.5016 6.62996 14.3626 6.28022 14.3626H4.13736V12.2198C4.13736 11.87 3.99843 11.5346 3.75113 11.2873C3.50383 11.04 3.16842 10.9011 2.81868 10.9011ZM15.1813 10.9011C14.8316 10.9011 14.4962 11.04 14.2489 11.2873C14.0016 11.5346 13.8626 11.87 13.8626 12.2198V14.3626H11.7198C11.37 14.3626 11.0346 14.5016 10.7873 14.7489C10.54 14.9962 10.4011 15.3316 10.4011 15.6813C10.4011 16.0311 10.54 16.3665 10.7873 16.6138C11.0346 16.8611 11.37 17 11.7198 17H14.1923C14.8043 17 15.3913 16.7569 15.8241 16.3241C16.2569 15.8913 16.5 15.3043 16.5 14.6923V12.2198C16.5 11.87 16.3611 11.5346 16.1138 11.2873C15.8665 11.04 15.5311 10.9011 15.1813 10.9011Z", fill: "white" }))),
        React.createElement("defs", null,
            React.createElement("filter", { id: "filter0_d", x: "-0.5", y: "0", width: "19", height: "19", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React.createElement("feOffset", null),
                React.createElement("feGaussianBlur", { stdDeviation: "1" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React.createElement("clipPath", { id: "clip0" },
                React.createElement("rect", { width: "18", height: "19", fill: "white" })))));
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$2 = "/*\n Copyright (c) Folly Systems.\n\n This source code is licensed under the MIT license found in the\n LICENSE file in the root directory of this source tree.\n*/\n\n.VideoPlayer-module_videoContainer__3wLzP {\n  position: relative;\n}\n\n.VideoPlayer-module_videoContainer__videoComponent__JFalj {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.VideoPlayer-module_videoContainer__videoComponent--rounded__1wATM {\n  border-radius: 4px;\n}\n\n.VideoPlayer-module_videoContainer__bufferSpinner__3aipA {\n  height: 100%;\n  width: 100%;\n  background: transparent;\n  top: 0;\n  position: absolute;\n  z-index: 10;\n  pointer-events: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.VideoPlayer-module_videoContainer__controlShadow__pYWFX {\n  position: absolute;\n  bottom: 0px;\n  width: 100%;\n  height: 15%;\n  pointer-events: none;\n  box-shadow: inset 0 -37px 34px -13px #000000;\n}\n\n.VideoPlayer-module_videoContainer__controlShadow--rounded__30-rt {\n  border-radius: 0 0 4px 4px;\n}\n\n.VideoPlayer-module_videoContainer__controls__37H7J {\n  position: absolute;\n  bottom: 0;\n}\n\n.VideoPlayer-module_videoContainer__controlButton__2aKyQ {\n  display: flex;\n  width: 95%;\n  justify-content: space-between;\n}\n\n.VideoPlayer-module_videoContainer__controlButton--big__1zmjo {\n  margin: 10px auto;\n}\n\n.VideoPlayer-module_videoContainer__controlButton--small__1nqmP {\n  margin: 5px auto;\n}\n\n.VideoPlayer-module_videoContainer__3wLzP .VideoPlayer-module_controls__section--showOnHover__xtb6z {\n  transition: opacity 0.25s cubic-bezier(0, 0, 0.2, 1);\n  opacity: 0;\n}\n\n.VideoPlayer-module_videoContainer__3wLzP:hover .VideoPlayer-module_controls__section--showOnHover__xtb6z {\n  opacity: 1;\n}\n\n.VideoPlayer-module_controlSection__2LoHN {\n  min-width: 50%;\n  display: flex;\n}\n\n.VideoPlayer-module_controlSectionOne__25ciz {\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.VideoPlayer-module_controlSectionTwo__1hZxd {\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.VideoPlayer-module_playerIcon__26zQn {\n  min-width: 20px;\n  display: flex;\n  justify-content: center;\n  cursor: pointer;\n}\n\n.VideoPlayer-module_playerIcon__26zQn:hover {\n  background: #1f263b;\n  opacity: 0.85;\n  border-radius: 2px;\n}\n\n.VideoPlayer-module_playerIcon--left__1Gxat {\n  margin-right: 20px;\n  margin-left: 0;\n}\n\n.VideoPlayer-module_playerIcon--right__21BlK {\n  margin-right: 0;\n  margin-left: 20px;\n}\n\n.VideoPlayer-module_timeSection__3CzUR {\n  color: white;\n  user-select: none;\n  font-family: 'Open Sans', sans-serif;\n}\n\n.VideoPlayer-module_controlSection__speed__3hU8H {\n  font-size: 14px;\n  color: white;\n  cursor: pointer;\n  user-select: none;\n  width: 32px;\n  text-align: center;\n  font-family: 'Open Sans', sans-serif;\n}\n\n.VideoPlayer-module_videoContainer__videoLoadingOverlay__22Jj3 {\n  height: 100%;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.9);\n  top: 0;\n  position: absolute;\n  z-index: 10;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.VideoPlayer-module_slider-container__3_O7L {\n  height: 8px;\n  width: 95%;\n  margin: auto;\n}\n\n.VideoPlayer-module_controls__section--showOnHover__xtb6z {\n  transition: opacity 0.25s cubic-bezier(0, 0, 0.2, 1);\n  opacity: 0;\n}\n\n.VideoPlayer-module_controls__section--showOnHover__xtb6z:hover {\n  opacity: 1;\n}\n";
var styles$2 = {"videoContainer":"VideoPlayer-module_videoContainer__3wLzP","videoContainer__videoComponent":"VideoPlayer-module_videoContainer__videoComponent__JFalj","videoContainer__videoComponent--rounded":"VideoPlayer-module_videoContainer__videoComponent--rounded__1wATM","videoContainer__bufferSpinner":"VideoPlayer-module_videoContainer__bufferSpinner__3aipA","videoContainer__controlShadow":"VideoPlayer-module_videoContainer__controlShadow__pYWFX","videoContainer__controlShadow--rounded":"VideoPlayer-module_videoContainer__controlShadow--rounded__30-rt","videoContainer__controls":"VideoPlayer-module_videoContainer__controls__37H7J","videoContainer__controlButton":"VideoPlayer-module_videoContainer__controlButton__2aKyQ","videoContainer__controlButton--big":"VideoPlayer-module_videoContainer__controlButton--big__1zmjo","videoContainer__controlButton--small":"VideoPlayer-module_videoContainer__controlButton--small__1nqmP","controls__section--showOnHover":"VideoPlayer-module_controls__section--showOnHover__xtb6z","controlSection":"VideoPlayer-module_controlSection__2LoHN","controlSectionOne":"VideoPlayer-module_controlSectionOne__25ciz","controlSectionTwo":"VideoPlayer-module_controlSectionTwo__1hZxd","playerIcon":"VideoPlayer-module_playerIcon__26zQn","playerIcon--left":"VideoPlayer-module_playerIcon--left__1Gxat","playerIcon--right":"VideoPlayer-module_playerIcon--right__21BlK","timeSection":"VideoPlayer-module_timeSection__3CzUR","controlSection__speed":"VideoPlayer-module_controlSection__speed__3hU8H","videoContainer__videoLoadingOverlay":"VideoPlayer-module_videoContainer__videoLoadingOverlay__22Jj3","slider-container":"VideoPlayer-module_slider-container__3_O7L"};
styleInject(css_248z$2);

/*
 Copyright (c) Folly Systems.

 This source code is licensed under the MIT license found in the
 LICENSE file in the root directory of this source tree.
*/
var isVideoCustomizable = !!document.createElement('video').canPlayType;

/*
 Copyright (c) Folly Systems.

 This source code is licensed under the MIT license found in the
 LICENSE file in the root directory of this source tree.
*/
var getPercentage = function (value, total) {
    return (value / total) * 100;
};

/*
 Copyright (c) Folly Systems.

 This source code is licensed under the MIT license found in the
 LICENSE file in the root directory of this source tree.
*/
/**
 * Normalize time to the format required for the video player
 * @param {num} seconds
 * @returns {string} For minutes and seconds E.g. 3 minutes and 45 secs = 03:45
 * or 25 secs = 00:25
 * For hour 4 hours = 04:00:00
 */
var convertTimeToString = function (secs) {
    var isMinutes = secs >= 60;
    var val = (secs / (isMinutes ? 60 : 100)).toFixed(2);
    var _a = val.split('.'), minutes = _a[0], seconds = _a[1];
    minutes = minutes.length === 1 ? "0" + minutes : minutes;
    seconds = isMinutes ? "" + (secs % 60).toFixed() : seconds;
    seconds = "" + (seconds.length === 1 ? 0 : '') + seconds;
    // TODO: Pending for Hour format 01:32:02
    return minutes + ":" + seconds;
};

/*
 Copyright (c) Folly Systems.

 This source code is licensed under the MIT license found in the
 LICENSE file in the root directory of this source tree.
*/
var PlaybackSpeeds;
(function (PlaybackSpeeds) {
    PlaybackSpeeds[PlaybackSpeeds["1x"] = 1] = "1x";
    PlaybackSpeeds[PlaybackSpeeds["1.5x"] = 1.5] = "1.5x";
    PlaybackSpeeds[PlaybackSpeeds["2x"] = 2] = "2x";
})(PlaybackSpeeds || (PlaybackSpeeds = {}));
var VideoPlayerEvents;
(function (VideoPlayerEvents) {
    VideoPlayerEvents["Progress"] = "progress";
    VideoPlayerEvents["Stalled"] = "stalled";
    VideoPlayerEvents["Seeking"] = "seeking";
    VideoPlayerEvents["Seeked"] = "seeked";
    VideoPlayerEvents["Timeupdate"] = "timeupdate";
    VideoPlayerEvents["LoadedMetadata"] = "loadedmetadata";
    VideoPlayerEvents["CanPlayThrough"] = "canplaythrough";
})(VideoPlayerEvents || (VideoPlayerEvents = {}));

var css_248z$1 = "/*\n Copyright (c) Folly Systems.\n\n This source code is licensed under the MIT license found in the\n LICENSE file in the root directory of this source tree.\n*/\n\n.Spinner-module_videoSpinner__eneil {\n  display: inline-block;\n  position: relative;\n  width: 64px;\n  height: 64px;\n}\n\n.Spinner-module_videoSpinner__eneil div {\n  box-sizing: border-box;\n  display: block;\n  position: absolute;\n  width: 45px;\n  height: 45px;\n  margin: 8px;\n  border: 3px solid #fff;\n  border-radius: 50%;\n  animation: Spinner-module_spin__1mU7M 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  border-color: #1890ff transparent transparent transparent;\n}\n\n.Spinner-module_videoSpinner__eneil div:nth-child(1) {\n  animation-delay: -0.45s;\n}\n\n.Spinner-module_videoSpinner__eneil div:nth-child(2) {\n  animation-delay: -0.3s;\n}\n\n.Spinner-module_videoSpinner__eneil div:nth-child(3) {\n  animation-delay: -0.15s;\n}\n\n@keyframes Spinner-module_spin__1mU7M {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}\n";
var styles$1 = {"videoSpinner":"Spinner-module_videoSpinner__eneil","spin":"Spinner-module_spin__1mU7M"};
styleInject(css_248z$1);

/*
 Copyright (c) Folly Systems.

 This source code is licensed under the MIT license found in the
 LICENSE file in the root directory of this source tree.
*/
var Spinner = function () {
    return (React.createElement("div", { className: styles$1.videoSpinner },
        React.createElement("div", null),
        React.createElement("div", null),
        React.createElement("div", null),
        React.createElement("div", null)));
};

var css_248z = "/*\n Copyright (c) Folly Systems.\n\n This source code is licensed under the MIT license found in the\n LICENSE file in the root directory of this source tree.\n*/\n\n.ProgressBar-module_slider__3f0y4 {\n  cursor: pointer;\n  position: relative;\n  width: 100%;\n  height: 4px;\n  background-color: rgba(248, 248, 250, 0.3);\n}\n\n.ProgressBar-module_sliderProgressBar__26N4H {\n  height: 100%;\n  background-color: rgb(75, 111, 210);\n  pointer-events: none;\n  position: absolute;\n}\n\n.ProgressBar-module_bufferProgressBar__1IviB {\n  height: 100%;\n  background-color: white;\n  pointer-events: none;\n  position: absolute;\n}\n\n.ProgressBar-module_sliderHandle__2fow9 {\n  --size: 14px;\n  height: var(--size);\n  width: var(--size);\n  border: 2px solid #1a53db;\n  border-radius: 50%;\n  background: white;\n  position: absolute;\n  cursor: pointer;\n  transform: translateY(calc(-50% + (var(--size) / 4)));\n  visibility: hidden;\n  transition: visibility 0.5s ease-out;\n}\n\n.ProgressBar-module_slider__3f0y4:hover .ProgressBar-module_sliderHandle__2fow9 {\n  visibility: visible;\n  transition: visibility 0.5s ease-out;\n}\n";
var styles = {"slider":"ProgressBar-module_slider__3f0y4","sliderProgressBar":"ProgressBar-module_sliderProgressBar__26N4H","bufferProgressBar":"ProgressBar-module_bufferProgressBar__1IviB","sliderHandle":"ProgressBar-module_sliderHandle__2fow9"};
styleInject(css_248z);

/*
 Copyright (c) Folly Systems.

 This source code is licensed under the MIT license found in the
 LICENSE file in the root directory of this source tree.
*/
var ProgressBar = function (_a) {
    var total = _a.total, value = _a.value, onChange = _a.onChange, bufferValue = _a.bufferValue;
    var _b = useState(0), progressPercentage = _b[0], setProgressPercentage = _b[1];
    var _c = useState(0), bufferProgressPercentage = _c[0], setBufferProgressPercentage = _c[1];
    var _d = useState(0), totalProgress = _d[0], setTotalProgress = _d[1];
    var sliderRef = useRef(null);
    useEffect(function () {
        // Set initial and total value only if the value is greater than 0
        // If initial is less than 0 set it to 0
        // If total is less than 0 set it to 100
        var initProgressVal = value > 0 ? value : 0;
        var totalProgressVal = total > 0 ? total : 100;
        if (initProgressVal > totalProgressVal) {
            // If initial value is greater than total set initial progress to 100%
            setProgressPercentage(100);
        }
        else {
            setProgressPercentage((initProgressVal / totalProgressVal) * 100);
        }
        setTotalProgress(totalProgressVal);
    }, [value, total]);
    useEffect(function () {
        var bufferPercent = 0;
        if (bufferValue < total || bufferValue > 0) {
            bufferPercent = (bufferValue / total) * 100;
        }
        setBufferProgressPercentage(bufferPercent);
    }, [bufferValue]);
    /**
     *
     * @param progressPercent Percentage value of the slider progress
     * @param totalProgress Value of the total progress (Note: this is not in %)
     * @returns undefined
     *
     * If the user has passed onChange handler function calculate and
     * send the progress value as a parameter to onChange function
     */
    var handleOnChangeOfSliderValue = function (progressPercent, totalProgressVal) {
        // Pass current progress value to the parent if an onChange handler passed in the props
        if (onChange) {
            onChange((totalProgressVal * progressPercent) / 100);
        }
    };
    /**
     *
     * @param ev Click event for the slider
     * @returns undefined
     */
    var handleClick = function (ev) {
        // Get x coordinate and width for the slider
        var _a = ev.target.getBoundingClientRect(), x = _a.x, width = _a.width;
        var clickDistance = ev.clientX - x;
        var progressPercent = getPercentage(clickDistance, width);
        setProgressPercentage(progressPercent);
        handleOnChangeOfSliderValue(progressPercent, totalProgress);
    };
    /**
     *
     * @param ev Mousemove event for the cursor
     * @returns undefined
     */
    var handleMouseMove = function (ev) {
        var _a;
        // Get x coordinate and width for the slider
        var _b = (_a = sliderRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect(), sliderLeft = _b.x, sliderWidth = _b.width;
        // Get x coordinate for current mouse cursor
        var mousePointerLeft = ev.clientX;
        var progressPercent = getPercentage(mousePointerLeft - sliderLeft, sliderWidth);
        if (progressPercent < 0 || progressPercent >= 100) {
            // If the calculated progress is less than 0 change it to 0
            // Dragging the mouse pointer beyond the slider(to the left) will make the
            // mousePointerLeft value less than sliderLeft value
            // If the calculated progress is greater than 100 change it to 100
            // Dragging the mouse pointer beyond the slider(to the right) will make the
            // progress percentage greater than 100
            progressPercent = progressPercent < 0 ? 0 : 100;
        }
        setProgressPercentage(progressPercent);
        handleOnChangeOfSliderValue(progressPercent, totalProgress);
    };
    /**
     *
     * @param ev Mouse click event for the slider handle
     * @returns undefined
     */
    var handleDraggerClick = function (ev) {
        // Stop bubbling of event in the slider
        ev.stopPropagation();
        ev.preventDefault();
        document.addEventListener('mousemove', handleMouseMove);
        // Remove the mouse move event when the mouse click is released
        // Until the mouse is released the mouse move event will be listening
        // and changing the progress value of the progress bar
        document.addEventListener('mouseup', function () {
            document.removeEventListener('mousemove', handleMouseMove);
        }, { once: true });
    };
    return (React.createElement("div", { onClick: handleClick, role: "progressbar", tabIndex: 0, onKeyPress: function () {
            // Do nothing when user press any button from the keyboard
        }, ref: sliderRef, className: styles.slider },
        React.createElement("div", { className: styles.bufferProgressBar, style: { width: bufferProgressPercentage + "%" } }),
        React.createElement("div", { className: styles.sliderProgressBar, style: { width: progressPercentage + "%" } }),
        React.createElement("div", { className: styles.sliderHandle, style: { left: progressPercentage + "%" }, onClick: function (ev) {
                // On click of handle do nothing
                // stopPropagation is added here to avoid bubbling of this event and triggering parent elements click event
                ev.stopPropagation();
            }, role: "none", onMouseDown: handleDraggerClick })));
};
ProgressBar.defaultProps = {
    total: 100,
    value: 0,
    bufferValue: 0,
    onChange: undefined,
};

/*
 Copyright (c) Folly Systems.

 This source code is licensed under the MIT license found in the
 LICENSE file in the root directory of this source tree.
*/
var CustomVideoPlayer = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k;
    var url = _a.url, handleFullscreen = _a.handleFullscreen, _l = _a.height, height = _l === void 0 ? 400 : _l, _m = _a.width, width = _m === void 0 ? 500 : _m, controls = _a.controls, playing = _a.playing, rounded = _a.rounded, playerType = _a.playerType, getVideoProgressDetails = _a.getVideoProgressDetails, onVideoProgress = _a.onVideoProgress;
    var videoRef = useRef(null);
    var _o = useState(0), bufferProgress = _o[0], setBufferProgress = _o[1];
    var _p = useState(false), isVideoSeeking = _p[0], setIsVideoSeeking = _p[1];
    var _q = useState({
        totalTime: '00:00',
        currentTime: '00:00',
    }), videoDuration = _q[0], setVideoDuration = _q[1];
    var _r = useState(false), isVideoLoaded = _r[0], setIsVideoLoaded = _r[1];
    var _s = useState(false), isPlaying = _s[0], setIsPlaying = _s[1];
    var _t = useState(PlaybackSpeeds['1x']), playbackSpeed = _t[0], setPlaybackSpeed = _t[1];
    var videoContainerStyle = {
        height: height,
        width: width,
    };
    var videoControlStyle = {
        width: width,
    };
    // Object with functions that returns information about the video speed, current time and playing status
    var customVideoController = {
        getPlaybackSpeed: function () { return videoRef.current.playbackRate; },
        getCurrentTime: function () {
            return videoRef.current.currentTime;
        },
        getPlayingStatus: function () {
            return !videoRef.current.paused && !videoRef.current.ended;
        },
    };
    useEffect(function () {
        var currentVideo = videoRef.current;
        // If the current browser do not support video customization do not add custom controls
        if (!isVideoCustomizable) {
            setIsVideoLoaded(true);
            return;
        }
        // Disable the default video player controls
        currentVideo.controls = false;
        /**
         * Checks all the video buffer chunk and if current time exists inside any
         * of the buffer range return end time of how much video is buffered
         * @param {num} currentPlayingTime
         * @param {functions} bufferInfoProvider
         * @returns {number} End time for the buffered video chunk
         * Percentage of how much video is buffered with regards to the current video duration
         * Returns zero if nothing found
         */
        var returnBufferProgressTime = function (currentPlayingTime, bufferInfoProvider) {
            for (var timeRangeCounter = 0; timeRangeCounter < bufferInfoProvider.length; timeRangeCounter += 1) {
                var currentBufferEndTime = bufferInfoProvider.end(timeRangeCounter);
                var currentBufferStartTime = bufferInfoProvider.start(timeRangeCounter);
                // If any current video time falls between loaded video buffer chunk
                // return new value for the buffer progress indicator
                // Buffer data includes length(i.e. number of buffers),
                // start(index) and end(index) function that provides with start/end time of the buffer it takes buffer index as input
                if (currentBufferStartTime <= currentPlayingTime &&
                    currentPlayingTime <= currentBufferEndTime) {
                    return currentBufferEndTime;
                }
            }
            return 0;
        };
        /**
         * Set value of how much of the video is buffered
         * @returns {undefined} Nothing returned from this function
         * Set value of how much video is buffered with regards to the current video duration
         */
        var showVideoBufferProgress = function () {
            if (!(videoRef === null || videoRef === void 0 ? void 0 : videoRef.current)) {
                return;
            }
            var _a = videoRef === null || videoRef === void 0 ? void 0 : videoRef.current, currentTime = _a.currentTime, duration = _a.duration, buffered = _a.buffered;
            var bufferProgressVal = currentTime !== null && duration && buffered
                ? returnBufferProgressTime(currentTime, buffered)
                : 0;
            setBufferProgress(bufferProgressVal);
        };
        /**
         * Handles change when there is progress in the video(videos timeUpdate event is fired)
         * @returns {undefined} Nothing returned from this function
         * Handles the following tasks:
         * 1. Change video current time.
         * 2. Send progress related data to the user
         * 3. Show buffer progress.
         */
        var handleProgressBarUpdate = function () {
            if (videoRef.current.currentTime === videoRef.current.duration) {
                // Set playing to false if the video has played entirely
                setIsPlaying(false);
            }
            setVideoDuration(function (prevState) { return (__assign(__assign({}, prevState), { currentTime: convertTimeToString(videoRef.current.currentTime) })); });
            // If a custom handler is passed for getting video progress details
            // run that function and pass progress data as a parameter to it
            if (onVideoProgress) {
                onVideoProgress({
                    isPlaying: customVideoController.getPlayingStatus(),
                    currentTime: customVideoController.getCurrentTime(),
                    speed: customVideoController.getPlaybackSpeed(),
                    totalTime: videoRef.current.duration,
                });
            }
            showVideoBufferProgress();
        };
        /**
         * Set loader if the video is seeking or stalled
         * @returns {undefined} Nothing returned from this function
         */
        var showBufferingLoader = function () {
            setIsVideoSeeking(true);
        };
        /**
         * Remove loader once the video is seeked
         * @returns {undefined} Nothing returned from this function
         */
        var hideBufferingLoader = function () {
            setIsVideoSeeking(false);
        };
        currentVideo.addEventListener(VideoPlayerEvents.LoadedMetadata, function () {
            // Remove loader
            setIsVideoLoaded(true);
            // After we get the video time details update total duration and current time to the state
            setVideoDuration({
                totalTime: convertTimeToString(currentVideo.duration),
                currentTime: '00:00',
            });
            // Show how much of the video is buffered
            currentVideo.addEventListener(VideoPlayerEvents.Progress, showVideoBufferProgress);
            videoRef.current.playbackRate =
                (playing === null || playing === void 0 ? void 0 : playing.speed) || PlaybackSpeeds['1x'];
            videoRef.current.currentTime = (playing === null || playing === void 0 ? void 0 : playing.time) || 0;
            // Autoplay video
            if (playing === null || playing === void 0 ? void 0 : playing.status) {
                currentVideo.addEventListener(VideoPlayerEvents.CanPlayThrough, function () {
                    var _a;
                    (_a = videoRef.current) === null || _a === void 0 ? void 0 : _a.play();
                }, { once: true });
            }
            // If a custom handler is passed for getting video progress details
            // run that function and pass progress data as a parameter to it
            if (getVideoProgressDetails) {
                getVideoProgressDetails(customVideoController);
            }
            // If the video is stalled or seeking show loader and once seeked remove the loader
            currentVideo.addEventListener(VideoPlayerEvents.Stalled, showBufferingLoader);
            currentVideo.addEventListener(VideoPlayerEvents.Seeking, showBufferingLoader);
            currentVideo.addEventListener(VideoPlayerEvents.Seeked, hideBufferingLoader);
            // Update progress bar whenever the video time is updated
            currentVideo.addEventListener(VideoPlayerEvents.Timeupdate, handleProgressBarUpdate);
        }, { once: true });
        // Cleanup all the event listeners on unmount
        return function () {
            currentVideo.removeEventListener(VideoPlayerEvents.Timeupdate, handleProgressBarUpdate);
            currentVideo.removeEventListener(VideoPlayerEvents.Stalled, showBufferingLoader);
            currentVideo.removeEventListener(VideoPlayerEvents.Seeking, showBufferingLoader);
            currentVideo.removeEventListener(VideoPlayerEvents.Seeked, hideBufferingLoader);
            currentVideo.removeEventListener(VideoPlayerEvents.Progress, showVideoBufferProgress);
        };
    }, []);
    useEffect(function () {
        var _a, _b;
        var playVideo;
        var speed;
        if (!videoRef.current)
            return;
        if (playing === null || playing === void 0 ? void 0 : playing.status) {
            speed = (playing === null || playing === void 0 ? void 0 : playing.speed) || PlaybackSpeeds['1x'];
            playVideo = true;
            (_a = videoRef.current) === null || _a === void 0 ? void 0 : _a.play();
        }
        else {
            speed = (playing === null || playing === void 0 ? void 0 : playing.speed) || PlaybackSpeeds['1x'];
            playVideo = false;
            (_b = videoRef.current) === null || _b === void 0 ? void 0 : _b.pause();
        }
        videoRef.current.currentTime = (playing === null || playing === void 0 ? void 0 : playing.time) || 0;
        videoRef.current.playbackRate = speed;
        setPlaybackSpeed(speed);
        setIsPlaying(playVideo);
    }, [playing]);
    /**
     * Play video if the video is paused
     * Pause video if the video is playing
     * Set isPlaying status as true/false depending on whether video is played/pause
     * @returns {undefined} Nothing returned from this function
     */
    var handleVideoPlayPause = function () {
        var isPlayingStatus = false;
        if (videoRef.current.paused || videoRef.current.ended) {
            videoRef.current.play();
            isPlayingStatus = true;
        }
        else {
            videoRef.current.pause();
        }
        setIsPlaying(isPlayingStatus);
    };
    /**
     * Change playback speed
     * Increase playback speed and if it is the highest speed
     * set to lowest speed again
     * @returns {undefined} Nothing returned from this function
     */
    var handlePlaybackSpeedChange = function () {
        var newSpeed = playbackSpeed === PlaybackSpeeds['2x']
            ? PlaybackSpeeds['1x']
            : playbackSpeed + 0.5;
        setPlaybackSpeed(newSpeed);
        videoRef.current.playbackRate = newSpeed;
    };
    /**
     * If a default fullscreen handler is passed run that function
     * or else run video players default fullscreen method
     * @returns {undefined} Nothing returned from this function
     */
    var handleDefaultFullScreen = function () {
        if (handleFullscreen) {
            handleFullscreen(customVideoController);
            return;
        }
        videoRef.current.requestFullscreen();
    };
    /**
     * Default handler for sliders onchange
     * @returns {undefined} Nothing returned from this function
     */
    var handleVideoTimeSliderUpdate = function (value) {
        videoRef.current.currentTime = value;
    };
    // Handle keyboard button click when focus is on
    // any player control button
    var handleOnKeyDownForFocusedControl = function (clickHandler) {
        return function (ev) {
            if (ev.keyCode === 13 || ev.keyCode === 32) {
                clickHandler();
            }
        };
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: styles$2.videoContainer, style: videoContainerStyle },
            React.createElement("video", { className: styles$2.videoContainer__videoComponent + " " + (rounded ? styles$2['videoContainer__videoComponent--rounded'] : ''), onClick: handleVideoPlayPause, ref: videoRef, src: url, style: videoContainerStyle },
                React.createElement("track", { kind: "captions" })),
            isVideoSeeking && (React.createElement("div", { className: styles$2.videoContainer__bufferSpinner },
                React.createElement(Spinner, null))),
            isVideoLoaded ? (React.createElement("div", null,
                React.createElement("div", { className: styles$2.videoContainer__controlShadow + " " + (isPlaying ? styles$2['controls__section--showOnHover '] : '') + " " + (rounded
                        ? styles$2['videoContainer__controlShadow--rounded']
                        : '') }),
                React.createElement("div", { className: styles$2.videoContainer__controls + " " + (isPlaying ? styles$2['controls__section--showOnHover'] : ''), style: videoControlStyle },
                    React.createElement("div", { className: styles$2['slider-container'] },
                        React.createElement(ProgressBar, { onChange: handleVideoTimeSliderUpdate, total: videoRef.current.duration, value: videoRef.current.currentTime, bufferValue: bufferProgress })),
                    React.createElement("div", { className: styles$2.videoContainer__controlButton + " " + (playerType === 'big'
                            ? styles$2['videoContainer__controlButton--big']
                            : styles$2['videoContainer__controlButton--small']) },
                        React.createElement("div", { className: styles$2.controlSection + " " + styles$2.controlSectionOne },
                            ((_b = controls === null || controls === void 0 ? void 0 : controls.playPause) === null || _b === void 0 ? void 0 : _b.show) === false ? null : (React.createElement("div", { role: "button", tabIndex: 0, onKeyDown: handleOnKeyDownForFocusedControl(handleVideoPlayPause), className: styles$2.playerIcon + " " + styles$2['playerIcon--left'], onClick: handleVideoPlayPause }, isPlaying
                                ? ((_c = controls === null || controls === void 0 ? void 0 : controls.playPause) === null || _c === void 0 ? void 0 : _c.pauseIcon) || React.createElement(PauseIcon, null)
                                : ((_d = controls === null || controls === void 0 ? void 0 : controls.playPause) === null || _d === void 0 ? void 0 : _d.playIcon) || React.createElement(PlayIcon, null))),
                            ((_e = controls === null || controls === void 0 ? void 0 : controls.time) === null || _e === void 0 ? void 0 : _e.show) === false ? null : (React.createElement("div", { style: {
                                    color: ((_f = controls === null || controls === void 0 ? void 0 : controls.time) === null || _f === void 0 ? void 0 : _f.color) || 'white',
                                }, className: styles$2.timeSection + " " + styles$2['timeSection--left'] },
                                videoDuration.currentTime,
                                " / ",
                                videoDuration.totalTime))),
                        React.createElement("div", { className: styles$2.controlSection + " " + styles$2.controlSectionTwo },
                            ((_g = controls === null || controls === void 0 ? void 0 : controls.playbackSpeed) === null || _g === void 0 ? void 0 : _g.show) === false ? null : (React.createElement("div", { role: "button", tabIndex: 0, onKeyDown: handleOnKeyDownForFocusedControl(handlePlaybackSpeedChange), className: styles$2.playerIcon + " " + styles$2['playerIcon--right'], onClick: handlePlaybackSpeedChange },
                                React.createElement("span", { style: {
                                        color: ((_h = controls === null || controls === void 0 ? void 0 : controls.playbackSpeed) === null || _h === void 0 ? void 0 : _h.color) || 'white',
                                    }, className: styles$2.controlSection__speed },
                                    playbackSpeed,
                                    "x"))),
                            ((_j = controls === null || controls === void 0 ? void 0 : controls.fullscreen) === null || _j === void 0 ? void 0 : _j.show) === false ? null : (React.createElement("div", { role: "button", tabIndex: 0, onKeyDown: handleOnKeyDownForFocusedControl(handleDefaultFullScreen), className: styles$2.playerIcon + " " + styles$2['playerIcon--right'], onClick: handleDefaultFullScreen }, ((_k = controls === null || controls === void 0 ? void 0 : controls.fullscreen) === null || _k === void 0 ? void 0 : _k.icon) || React.createElement(FullScreenIcon, null)))))))) : (React.createElement("div", { className: "" + styles$2.videoContainer__videoLoadingOverlay },
                React.createElement(Spinner, null))))));
};

/*
 Copyright (c) Folly Systems.

 This source code is licensed under the MIT license found in the
 LICENSE file in the root directory of this source tree.
*/

export default CustomVideoPlayer;
