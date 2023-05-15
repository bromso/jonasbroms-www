import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";

import NavItem from "./components/NavItem";

interface Props {
  pages: {
    landings: Array<PageItem>;
    company: Array<PageItem>;
    secondary: Array<PageItem>;
    blog: Array<PageItem>;
  };
}

const SidebarNav = ({ pages }: Props): JSX.Element => {
  const theme = useTheme();
  const { mode } = theme.palette;

  const {
    landings: landingPages,
    secondary: secondaryPages,
    company: companyPages,
    blog: blogPages,
  } = pages;

  return (
    <Box>
      <Box width={1} paddingX={2} paddingY={1}>
        <Box
          display={"flex"}
          component="a"
          href="/"
          title="theFront"
          width={{ xs: 100, md: 120 }}
        >
          <Box
            component={"img"}
            src={
              mode === "light"
                ? "https://assets.maccarianagency.com/the-front/logos/logo.svg"
                : "https://assets.maccarianagency.com/the-front/logos/logo-negative.svg"
            }
            height={1}
            width={1}
          />
        </Box>
      </Box>
      <Box paddingX={2} paddingY={2}>
        <Box>
          <NavItem title={"Landings"} items={landingPages} />
        </Box>
        <Box>
          <NavItem title={"Company"} items={companyPages} />
        </Box>
        <Box>
          <NavItem title={"Pages"} items={secondaryPages} />
        </Box>
        <Box>
          <NavItem title={"Blog"} items={blogPages} />
        </Box>
      </Box>
    </Box>
  );
};

export default SidebarNav;
