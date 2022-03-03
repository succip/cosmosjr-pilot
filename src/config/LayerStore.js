import { customAlphabet } from "nanoid";
const nanoid = customAlphabet("1234567890abcdef", 6);
const LayerStore = [
  {
    id: nanoid(),
    name: "Property",
    children: [
      {
        id: nanoid(),
        name: "Addresses (black)",
        leaf: true,
      },
      {
        id: nanoid(),
        name: "Addresses (yellow)",
        leaf: true,
      },
      {
        id: nanoid(),
        name: "Buildings",
        leaf: true,
      },
      {
        id: nanoid(),
        name: "Easements (black)",
        leaf: true,
      },
      {
        id: nanoid(),
        name: "Easements (yellow)",
        leaf: true,
      },
      {
        id: nanoid(),
        name: "Legal Plan Boundaries (all)",
        leaf: true,
      },
      {
        id: nanoid(),
        name: "Lot Dimensions",
        leaf: true,
      },
      {
        id: nanoid(),
        name: "Lot Hooks",
        leaf: true,
      },
      {
        id: nanoid(),
        name: "Lot Numbers (black)",
        leaf: true,
      },
      {
        id: nanoid(),
        name: "Lot Numbers (yellow)",
        leaf: true,
      },
      {
        id: nanoid(),
        name: "Lots",
        leaf: true,
      },
      {
        id: nanoid(),
        name: "Lots (Outline)",
        leaf: true,
      },
      {
        id: nanoid(),
        name: "Lots (Yellow)",
        leaf: true,
      },
      {
        id: nanoid(),
        name: "Posting Plans",
        leaf: true,
      },
      {
        id: nanoid(),
        name: "Rights of Way (black)",
        leaf: true,
      },
      {
        id: nanoid(),
        name: "Rights of Way (yellow)",
        leaf: true,
      },
      {
        id: nanoid(),
        name: "Surrey City Boundary",
        leaf: true,
      },
      {
        id: nanoid(),
        name: "Surrey Communities",
        leaf: true,
      },
      {
        id: nanoid(),
        name: "Surrey Map Index",
        leaf: true,
      },
      {
        id: nanoid(),
        name: "Survey Monuments",
        leaf: true,
      },
      {
        id: nanoid(),
        name: "Water courses",
        leaf: true,
      },
    ],
  },
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
        name: "Subfolder test",
        children: [
          {
            id: nanoid(),
            name: "Test Item",
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
