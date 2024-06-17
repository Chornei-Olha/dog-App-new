import { CSSProperties } from "react";

export const shadowTopWrap: CSSProperties = {
  position: "absolute",
  top: 0,
  right: 0,
  zIndex: -1,
  maxWidth: "400px",

  // img: {
  //   width: "100%",
  // },
};

export const shadowBottomWrap: CSSProperties = {
  position: "absolute",
  left: 0,
  bottom: "-24px",
  zIndex: -1,
  maxWidth: "400px",
  // img: {
  //   width: "100%",
  // },
};
