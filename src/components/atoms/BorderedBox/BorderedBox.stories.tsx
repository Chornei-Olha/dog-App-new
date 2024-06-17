// import { Meta, Story } from "@storybook/react";
import React from "react";

import { alpha } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import BorderedBox from ".";

const theme = createTheme();

// const withHoverEffect = (Story: React.ComponentType) => (
//   <div
//     onMouseEnter={() => Story({ showHovered: true })}
//     onMouseLeave={() => Story({ showHovered: false })}
//   >
//     <Story showHovered={false} />
//   </div>
// );

const withHoverEffect = (
  Story: React.ComponentType<{ showHovered: boolean }>
) => {
  const WithHoverEffect = () => {
    const [showHovered, setShowHovered] = React.useState(false);

    return (
      <div
        onMouseEnter={() => setShowHovered(true)}
        onMouseLeave={() => setShowHovered(false)}
      >
        <Story showHovered={showHovered} />
      </div>
    );
  };

  return WithHoverEffect;
};

export default {
  title: "BorderedBox",
  component: BorderedBox,
  decorators: [withHoverEffect],
};

export const HoverWithBlackShadow = () => (
  <BorderedBox
    showHovered={false}
    boxShadow={alpha(theme.palette.common.white, 1)}
  >
    Box with BLACK shadow on hover
  </BorderedBox>
);

export const HoverWithMainShadow = () => (
  <BorderedBox showHovered boxShadow={alpha(theme.palette.primary.main, 1)}>
    Box with MAIN shadow on hover
  </BorderedBox>
);
