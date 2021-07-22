//미디어쿼리

const size = {
  mobile: "375px",
  tablet: "768px",
};

const device = {
  mobile: `only screen and (max-width: ${size.mobile};)`,
  tablet: `only screen and (max-width: ${size.tabletS};)`,
};

const theme = {device}

export default theme;