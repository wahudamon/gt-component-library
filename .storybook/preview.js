import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import storybookTheme from "./storybookTheme";

var beautify_html = require("js-beautify").html;

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: storybookTheme,
    transformSource: (src) => {
      const string1 = src.substr(0, src.length - 12).substr(10);
      return beautify_html(string1);
    },
  },
  options: {
    storySort: {
      order: [
        "Getting Started",
        "Contributing",
        "Guidelines",
        "Color",
        ["Introduction", "Fonts"],
        ["Corner Radius", "Elevation", "Padding", "Margin"],
      ],
    },
  },
  previewTabs: {
    "storybook/docs/panel": { index: -1 },
  },
};
