import CustomVideoPlayer from './component/VideoPlayer';
import { useState } from 'react';
import {
  customFullscreenIcon,
  customPlayIcon,
  customPauseIcon,
} from './assets/icons';
import './App.css';

const videoURL =
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

const App = () => {
  const [playing, setPlaying] = useState({
    time: 0,
    status: false,
    speed: 1,
  });

  const [videoProgressFunctions, setVideoProgressFunctions] = useState({
    getPlayingStatus: null,
    getCurrentTime: null,
    getPlaybackSpeed: null,
  });

  const [videoDetails, setVideoDetails] = useState({
    currentTime: 0,
    isPlaying: 0,
    speed: 1,
    totalTime: 0,
  });

  const [showFullscreenIcon, setShowFullscreenIcon] = useState(true);
  const [showPlaybackSpeed, setShowPlaybackSpeed] = useState(true);
  const [showTime, setShowTime] = useState(true);
  const [showPlayPauseIcon, setShowPlayPauseIcon] = useState(true);

  const [isFullscreenIconCustom, setIsFullscreenIconCustom] = useState(false);
  const [isPlayIconCustom, setIsPlayIconCustom] = useState(false);
  const [isPauseIconCustom, setIsPauseIconCustom] = useState(false);
  const [isPlaybackSpeedCustom, setIsPlaybackSpeedCustom] = useState(false);
  const [isTimeCustom, setIsTimeCustom] = useState(false);

  const handlePlayPause = (status) => () => {
    setPlaying({
      status,
      time: videoProgressFunctions.getCurrentTime?.() || playing.time,
      speed: videoProgressFunctions.getPlaybackSpeed?.() || playing.speed,
    });
  };

  const handlePlaybackSpeedChange = (speed) => () => {
    setPlaying({
      speed,
      time: videoProgressFunctions.getCurrentTime?.() || playing.time,
      status: videoProgressFunctions.getPlayingStatus?.() || playing.status,
    });
  };

  const storeVideoDetailFunctions = ({
    getPlaybackSpeed,
    getCurrentTime,
    getPlayingStatus,
  }) => {
    setVideoProgressFunctions({
      getPlayingStatus: getPlayingStatus,
      getCurrentTime: getCurrentTime,
      getPlaybackSpeed: getPlaybackSpeed,
    });
  };

  const changeStateForIconVisibility = (iconName) => () => {
    // Object that contains all the function that changes visibility of control icons
    let collection = {
      fs: setShowFullscreenIcon,
      pp: setShowPlayPauseIcon,
      tm: setShowTime,
      ps: setShowPlaybackSpeed,
    };

    collection[iconName]((prevState) => !prevState);
  };

  const handleVideoProgress = ({
    currentTime,
    isPlaying,
    speed,
    totalTime,
  }) => {
    setVideoDetails({ currentTime, isPlaying, speed, totalTime });
  };

  return (
    <div className="app-container">
      <h1>Folly Systems - Custom video player </h1>
      <div className="video-container">
        <CustomVideoPlayer
          url={videoURL}
          playing={playing}
          getVideoProgressDetails={storeVideoDetailFunctions}
          controls={{
            fullscreen: {
              show: showFullscreenIcon,
              icon: isFullscreenIconCustom && customFullscreenIcon,
            },
            playPause: {
              show: showPlayPauseIcon,
              playIcon: isPlayIconCustom && customPlayIcon,
              pauseIcon: isPauseIconCustom && customPauseIcon,
            },
            playbackSpeed: {
              show: showPlaybackSpeed,
              color: isPlaybackSpeedCustom && '#1aa14a',
            },
            time: {
              show: showTime,
              color: isTimeCustom && '#1aa14a',
            },
          }}
          onVideoProgress={handleVideoProgress}
          height={600}
          width={800}></CustomVideoPlayer>

        <div className="manual-controls">
          <h2>Change Playback Speed</h2>

          <button
            className="example-btn"
            onClick={handlePlaybackSpeedChange(1)}>
            1x
          </button>

          <button
            className="example-btn"
            onClick={handlePlaybackSpeedChange(1.5)}>
            1.5x
          </button>

          <button
            className="example-btn"
            onClick={handlePlaybackSpeedChange(2)}>
            2x
          </button>

          <h2>Play/Pause</h2>

          <button className="example-btn" onClick={handlePlayPause(true)}>
            Play
          </button>

          <button className="example-btn" onClick={handlePlayPause(false)}>
            Pause
          </button>

          <h2>Customize controls</h2>

          <div className="visibility-controllers">
            <div className="control-section">
              <p>Fullscreen</p>
              <button
                className="example-btn"
                onClick={changeStateForIconVisibility('fs')}>
                {showFullscreenIcon ? 'Hide' : 'Show'}
              </button>
            </div>

            <div className="control-section">
              <p>Playback Speed</p>
              <button
                className="example-btn"
                onClick={changeStateForIconVisibility('ps')}>
                {showPlaybackSpeed ? 'Hide' : 'Show'}
              </button>
            </div>

            <div className="control-section">
              <p>Play/Pause</p>
              <button
                className="example-btn"
                onClick={changeStateForIconVisibility('pp')}>
                {showPlayPauseIcon ? 'Hide' : 'Show'}
              </button>
            </div>

            <div className="control-section">
              <p>Time</p>
              <button
                className="example-btn"
                onClick={changeStateForIconVisibility('tm')}>
                {showTime ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          <br />

          <div className="icon-controls">
            <div className="control-section">
              <p>Fullscreen</p>

              <button
                className="example-btn"
                onClick={() => setIsFullscreenIconCustom(false)}>
                DEFAULT
              </button>

              <button
                className="example-btn"
                onClick={() => setIsFullscreenIconCustom(true)}>
                CUSTOM ICON
              </button>
            </div>

            <div className="control-section">
              <p>Play</p>

              <button
                className="example-btn"
                onClick={() => setIsPlayIconCustom(false)}>
                DEFAULT
              </button>

              <button
                className="example-btn"
                onClick={() => setIsPlayIconCustom(true)}>
                CUSTOM ICON
              </button>
            </div>

            <div className="control-section">
              <p>Pause</p>

              <button
                className="example-btn"
                onClick={() => setIsPauseIconCustom(false)}>
                DEFAULT
              </button>

              <button
                className="example-btn"
                onClick={() => setIsPauseIconCustom(true)}>
                CUSTOM ICON
              </button>
            </div>
          </div>

          <div className="icon-controls">
            <div className="control-section">
              <p>Playback Speed</p>

              <button
                className="example-btn"
                onClick={() => setIsPlaybackSpeedCustom(false)}>
                DEFAULT
              </button>

              <button
                className="example-btn"
                onClick={() => setIsPlaybackSpeedCustom(true)}>
                CUSTOM COLOR
              </button>
            </div>

            <div className="control-section">
              <p>Time</p>

              <button
                className="example-btn"
                onClick={() => setIsTimeCustom(false)}>
                DEFAULT
              </button>

              <button
                className="example-btn"
                onClick={() => setIsTimeCustom(true)}>
                CUSTOM COLOR
              </button>
            </div>
          </div>

          <h2>Video details</h2>

          <div className="video-details">
            <p>Current Time: {videoDetails.currentTime.toFixed(2)}s</p>
            <p>Video Duration: {videoDetails.totalTime.toFixed(2)}s</p>
            <p>Is video paused? : {videoDetails.isPlaying ? 'NO' : 'YES'}</p>
            <p>Playback Speed: {videoDetails.speed}x</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
