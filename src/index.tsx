import Hls, { type HlsConfig } from "hls.js";
import type { FC,RefObject, VideoHTMLAttributes } from "react";
import React, { useEffect, useRef, useState } from "react";

export interface HlsPlayerProps extends VideoHTMLAttributes<HTMLVideoElement> {
  hlsConfig?: HlsConfig;
  playerRef?: RefObject<HTMLVideoElement>;
  src: string;
}

const ReactHlsPlayer: FC<HlsPlayerProps> = ({
  hlsConfig,
  playerRef: passedPlayerRef,
  src,
  autoPlay,
  ...props
}) => {
  const [supported, setSupported] = useState(false);
  const myRef = useRef<HTMLVideoElement>(null);
  const playerRef = passedPlayerRef ?? myRef;
  useEffect(() => {
    let hls: Hls;
    function _initPlayer() {
      if (hls != null) {
        hls.destroy();
      }
      const newHls = new Hls({
        enableWorker: false,
        ...hlsConfig,
      });
      if (playerRef.current != null) {
        newHls.attachMedia(playerRef.current);
      }
      newHls.on(Hls.Events.MEDIA_ATTACHED, () => {
        newHls.loadSource(src);
        newHls.on(Hls.Events.MANIFEST_PARSED, () => {
          if (autoPlay) {
            playerRef?.current
              ?.play()
              .catch(() =>
                console.log(
                  "Unable to autoplay prior to user interaction with the dom."
                )
              );
          }
        });
      });
      newHls.on(Hls.Events.ERROR, function (event, data) {
        //eslint-ignore-next-line prettier/prettier
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              newHls.startLoad();
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              newHls.recoverMediaError();
              break;
            default:
              _initPlayer();
              break;
          }
        }
      });
      hls = newHls;
    }
    // Check for Media Source support
    if (Hls.isSupported()) {
      _initPlayer();
      setSupported(true);
    }
    return () => {
      if (hls != null) {
        hls.destroy();
      }
    };
  }, [autoPlay, hlsConfig, playerRef, src]);

  // If Media Source is supported, use HLS.js to play video and fallback to using a regular video player if HLS is not supported in the user's browser
  return supported ? (
    // eslint-disable-next-line jsx-a11y/media-has-caption
    <video ref={playerRef} {...props} />
  ) : (
    // eslint-disable-next-line jsx-a11y/media-has-caption
    <video ref={playerRef} src={src} autoPlay={autoPlay} {...props} />
  );
};

export default ReactHlsPlayer;
