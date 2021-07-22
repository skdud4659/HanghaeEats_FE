//미디어쿼리

const size = {
  mobile: "375px",
  tablet: "768px",
};

const device = {
  mobile: `screen and (max-width: ${size.mobile};)`,
  tablet: `screen and (max-width: ${size.tabletS};)`,
};

const theme = {device}

export default theme;