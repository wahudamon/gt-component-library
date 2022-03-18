import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ["Getting Started", "Installation", "Contributing", "Docs"],
    },
  },
  previewTabs: {
    "storybook/docs/panel": { index: -1 },
  },
};
