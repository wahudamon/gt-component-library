import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import storybookTheme from "./storybookTheme";

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
