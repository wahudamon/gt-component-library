import iconLibrary from "../../lib/icons";

export const getSvgIcon = (name) => {
  const iconDeff = iconLibrary[name];

  if (!iconDeff) {
    console.warn(`[GTIcon] - this ${name} icon does not exists`);

    return {
      path: "",
      viewBox: "",
    };
  }

  return {
    path: iconDeff.path,
    viewBox: iconDeff.viewBox || "0 0 24 24",
  };
};

export const iconSizes = ["small", "normal", "large", "x-large"];
