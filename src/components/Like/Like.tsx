import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}
const Like = ({onClick} : Props) => {
  return <AiOutlineHeart onClick={onClick} />;
};

export default Like;
