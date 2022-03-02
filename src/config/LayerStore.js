import { customAlphabet } from "nanoid";
const nanoid = customAlphabet("1234567890abcdef", 6);
const LayerStore = [
  {
    id: nanoid(),
    name: "Drainage",
    children: [
      {
        id: nanoid(),
        name: "Drainage Catch Basins",
        leaf: true,
      },
      {
        id: nanoid(),
        name: "Drainage Flow Arrows",
        leaf: true,
      },
      {
        id: nanoid(),
        name: "Drainage Detention Ponds",
        leaf: true,
      },
      {
        id: nanoid(),
        name: "Drainage Mains",
        leaf: true,
      },
      {
        id: nanoid(),
        name: "Drainage Sublayers",
        children: [
          {
            id: nanoid(),
            name: "drnSub",
            leaf: true,
          },
        ],
      },
    ],
  },
  {
    id: nanoid(),
    name: "Images",
    children: [
      {
        id: nanoid(),
        name: "Aerial Photo April 2021",
        leaf: true,
      },
    ],
  },
];

export default LayerStore;
