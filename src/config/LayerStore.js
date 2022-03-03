import { customAlphabet } from "nanoid";
const nanoid = customAlphabet("1234567890abcdef", 6);
const LayerStore = [
  {
    name: "Property",
    id: nanoid(),
    children: [
      {
        name: "Addresses (black)",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Addresses (yellow)",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Buildings",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Easements (black)",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Easements (yellow)",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Legal Plan Boundaries (all)",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Lot Dimensions",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Lot Hooks",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Lot Numbers (black)",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Lot Numbers (yellow)",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Lots",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Lots (Outline)",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Lots (Yellow)",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Posting Plans",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Rights of Way (black)",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Rights of Way (yellow)",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Surrey City Boundary",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Surrey Communities",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Surrey Map Index",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Survey Monuments",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Water courses",
        id: nanoid(),
        leaf: true,
      },
    ],
  },
  {
    name: "Community Services",
    id: nanoid(),
    children: [
      {
        name: "Garbage and Recycling",
        id: nanoid(),
        children: [
          {
            name: "Collection Secondary Suites",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Collection Curbside",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Garbage Recycling Collection Days",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Multi-family Building Centralized Collections",
            id: nanoid(),
            leaf: true,
          },
        ],
      },
      {
        name: "Elementary School Catchments",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Fire Hall Zones",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Schools",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Secondary School Catchments",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Child Care",
        id: nanoid(),
        leaf: true,
      },
    ],
  },
  {
    name: "Drainage",
    id: nanoid(),
    children: [
      {
        name: "Drainage Catch Basins",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Drainage Flow Arrows",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Drainage Detention Ponds",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Drainage Mains",
        id: nanoid(),
        leaf: true,
      },
    ],
  },
  {
    name: "Images",
    id: nanoid(),
    children: [
      {
        name: "Aerial Photo April 2021",
        id: nanoid(),
        leaf: true,
      },
    ],
  },
];

export default LayerStore;
