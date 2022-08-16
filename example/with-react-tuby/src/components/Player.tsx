import { FC } from "react";
import { Player as VideoPlayer, PlayerProps } from "react-tuby";

const Player: FC<PlayerProps> = (props) => {
  return <VideoPlayer {...props} />;
};

export default Player;
