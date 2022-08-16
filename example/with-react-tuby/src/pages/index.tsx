import type { NextPage } from "next";
import { useState, useRef, KeyboardEvent } from "react";
import HlsPlayer from "../../../../src/index";
import Head from "next/head";
import dynamic from "next/dynamic";

const Player = dynamic(() => import("react-tuby").then(react_tuby => react_tuby.Player), { ssr: false });

const Home: NextPage = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [hlsUrl, setHlsUrl] = useState(
    "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"
  );
  const [destroy, setDestroy] = useState(false);
  function _handleEnter(e: KeyboardEvent) {
    if (e.key === "Enter") {
      setHlsUrl(inputRef?.current?.value ?? "");
    }
  }
  function _handleDestroyClick() {
    setDestroy(true);
  }
  return (
    <>
      <Head>
        <title>Example</title>
      </Head>
      <div>
        <div
          style={{
            margin: "0 0 20px",
          }}
        >
          <label
            style={{
              display: "block",
              marginBottom: 10,
            }}
            htmlFor="url-input"
          >
            hls url :{" "}
          </label>
          <input
            ref={inputRef}
            id="url-input"
            type="text"
            defaultValue={hlsUrl}
            onKeyUp={_handleEnter}
            style={{
              width: "100%",
              height: "30px",
              lineHeight: "30px",
              fontSize: "16px",
              color: "#333",
            }}
          />
        </div>
        {!destroy ? (
          <Player src={hlsUrl}>
            {(ref, props) => {
              const { src, ...others } = props;
              return (
                <HlsPlayer
                  loop={true}
                  width="100%"
                  height="auto"
                  autoPlay
                  playerRef={ref}
                  src={src}
                  {...others}
                />
              );
            }}
          </Player>
        ) : null}
        <br />
        <button
          style={{
            padding: "5px 10px",
          }}
          onClick={_handleDestroyClick}
        >
          Destroy Video
        </button>
      </div>
    </>
  );
};

export default Home;

