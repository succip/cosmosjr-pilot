export const snappingLayers = [
  "Lots (Outline)",
  "Building Large (Health Care)",
  "Building Large",
  "Building",
];

export const pointSymbol = {
  type: "simple-marker",
  style: "circle",
  color: [153, 0, 0, 0.9],
  size: 7,
  outline: {
    color: [0, 0, 0],
    width: 1,
  },
};

export const polylineSymbol = {
  type: "simple-line",
  color: [153, 0, 0],
  width: 3,
  style: "solid",
};

export const polygonSymbol = {
  type: "simple-fill",
  color: [153, 0, 0, 0.9],
  style: "solid",
  outline: {
    color: [0, 0, 0],
    width: 1,
  },
};

export const fillStyleList = [
  { styleName: "Solid", style: "solid" },
  { styleName: "Backward Diagonal", style: "backward-diagonal" },
  { styleName: "Forward Diagonal", style: "forward-diagonal" },
  { styleName: "Vertical", style: "vertical" },
  { styleName: "Horizontal", style: "horizontal" },
];

export const lineStyleList = [
  { styleName: "Solid", style: "solid" },
  { styleName: "Dash", style: "dash" },
  { styleName: "Dot", style: "dot" },
  { styleName: "Dash-dot", style: "dash-dot" },
];

export const pointStyleList = [
  { styleName: "Circle", style: "circle" },
  { styleName: "Cross", style: "cross" },
  { styleName: "Diamond", style: "diamond" },
  { styleName: "Square", style: "square" },
];

export const colorList = [
  {
    colorName: "Crimson",
    color: {
      r: 153,
      g: 0,
      b: 0,
    },
    id: "02662f",
  },
  {
    colorName: "Black",
    color: {
      r: 0,
      g: 0,
      b: 0,
    },
    id: "a16649",
  },
  {
    colorName: "Saddle Brown",
    color: {
      r: 153,
      g: 51,
      b: 0,
    },
    id: "af7a37",
  },
  {
    colorName: "Myrtle",
    color: {
      r: 51,
      g: 51,
      b: 0,
    },
    id: "678aea",
  },
  {
    colorName: "Prussian Blue",
    color: {
      r: 0,
      g: 51,
      b: 102,
    },
    id: "10b98d",
  },
  {
    colorName: "Navy",
    color: {
      r: 0,
      g: 0,
      b: 128,
    },
    id: "41a40d",
  },
  {
    colorName: "Dark Slate Blue",
    color: {
      r: 51,
      g: 51,
      b: 153,
    },
    id: "7ccb60",
  },
  {
    colorName: "Night Rider",
    color: {
      r: 51,
      g: 51,
      b: 51,
    },
    id: "000a73",
  },
  {
    colorName: "Maroon",
    color: {
      r: 128,
      g: 0,
      b: 0,
    },
    id: "276ca1",
  },
  {
    colorName: "Safety Orange",
    color: {
      r: 255,
      g: 102,
      b: 0,
    },
    id: "d51c5c",
  },
  {
    colorName: "Olive",
    color: {
      r: 128,
      g: 128,
      b: 0,
    },
    id: "900a82",
  },
  {
    colorName: "Lime",
    color: {
      r: 153,
      g: 255,
      b: 0,
    },
    id: "0b5e7f",
  },
  {
    colorName: "Teal",
    color: {
      r: 0,
      g: 128,
      b: 128,
    },
    id: "0fbfe2",
  },
  {
    colorName: "Blue",
    color: {
      r: 0,
      g: 0,
      b: 255,
    },
    id: "9a3d31",
  },
  {
    colorName: "Scampi",
    color: {
      r: 102,
      g: 102,
      b: 153,
    },
    id: "958f9c",
  },
  {
    colorName: "Gray",
    color: {
      r: 128,
      g: 128,
      b: 128,
    },
    id: "967adc",
  },
  {
    colorName: "Red",
    color: {
      r: 255,
      g: 0,
      b: 0,
    },
    id: "967dc9",
  },
  {
    colorName: "Orange Peel",
    color: {
      r: 255,
      g: 153,
      b: 0,
    },
    id: "bb9386",
  },
  {
    colorName: "Citrus",
    color: {
      r: 153,
      g: 204,
      b: 0,
    },
    id: "31a651",
  },
  {
    colorName: "Eucalyptus",
    color: {
      r: 51,
      g: 153,
      b: 102,
    },
    id: "69b876",
  },
  {
    colorName: "Medium Turquoise",
    color: {
      r: 51,
      g: 204,
      b: 204,
    },
    id: "285cd4",
  },
  {
    colorName: "Royal Blue",
    color: {
      r: 51,
      g: 102,
      b: 255,
    },
    id: "28e8b8",
  },
  {
    colorName: "Purple",
    color: {
      r: 128,
      g: 0,
      b: 128,
    },
    id: "f9b2aa",
  },
  {
    colorName: "Nobel",
    color: {
      r: 150,
      g: 150,
      b: 150,
    },
    id: "6353f5",
  },
  {
    colorName: "Magenta",
    color: {
      r: 255,
      g: 0,
      b: 255,
    },
    id: "106c35",
  },
  {
    colorName: "Tangerine",
    color: {
      r: 255,
      g: 204,
      b: 0,
    },
    id: "b5da11",
  },
  {
    colorName: "Yellow",
    color: {
      r: 255,
      g: 255,
      b: 0,
    },
    id: "8e5dec",
  },
  {
    colorName: "LightYellow",
    color: {
      r: 255,
      g: 255,
      b: 224,
    },
    id: "427927",
  },
  {
    colorName: "Moccasin",
    color: {
      r: 255,
      g: 228,
      b: 181,
    },
    id: "de0373",
  },
  {
    colorName: "Green",
    color: {
      r: 0,
      g: 255,
      b: 0,
    },
    id: "8ca109",
  },
  {
    colorName: "Aqua",
    color: {
      r: 0,
      g: 255,
      b: 255,
    },
    id: "0a0b73",
  },
  {
    colorName: "Deep Sky Blue",
    color: {
      r: 0,
      g: 204,
      b: 255,
    },
    id: "5bea83",
  },
  {
    colorName: "Lipstick",
    color: {
      r: 153,
      g: 51,
      b: 102,
    },
    id: "c4c6cb",
  },
  {
    colorName: "Silver",
    color: {
      r: 192,
      g: 192,
      b: 192,
    },
    id: "8018ba",
  },
  {
    colorName: "Carnation Pink",
    color: {
      r: 255,
      g: 153,
      b: 204,
    },
    id: "6e54fa",
  },
  {
    colorName: "Peach-Orange",
    color: {
      r: 255,
      g: 204,
      b: 153,
    },
    id: "4c75f5",
  },
  {
    colorName: "Canary",
    color: {
      r: 255,
      g: 255,
      b: 153,
    },
    id: "ebf82b",
  },
  {
    colorName: "Blue Romance",
    color: {
      r: 204,
      g: 255,
      b: 204,
    },
    id: "1d0c10",
  },
  {
    colorName: "Cyan",
    color: {
      r: 204,
      g: 255,
      b: 255,
    },
    id: "fe2d7e",
  },
  {
    colorName: "Light Sky Blue",
    color: {
      r: 153,
      g: 204,
      b: 255,
    },
    id: "721195",
  },
  {
    colorName: "Mauve",
    color: {
      r: 204,
      g: 153,
      b: 255,
    },
    id: "97e161",
  },
  {
    colorName: "White",
    color: {
      r: 255,
      g: 255,
      b: 255,
    },
    id: "ec0b2e",
  },
];
