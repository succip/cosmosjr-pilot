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
    name: "Images",
    id: nanoid(),
    children: [
      {
        name: "Aerial Photo April 2021",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Aerial Photo April 2020",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Aerial Photo March 2019",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Aerial Photo April 2018",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Aerial Photo May 2017",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Aerial Photo March 2016",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Aerial Photo 2016 Metro Vancouver",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Aerial Photo April 2015",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Aerial Photo April 2013",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Lidar Hillshade 2018",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Lidar Hillshade 2017",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Lidar Hillshade 2013",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Lidar Hillshade 2009",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Aerial Photo April 2012",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Aerial Photo April/May 2011",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Aerial Photo May 2010",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Aerial Photo April 2009",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Aerial Photo April 2008",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Aerial Photo April 2007",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Aerial Photo April 2006",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Aerial Photo April 2005",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Aerial Photo April 2004",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Satellite Image Summer 2003",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Aerial Photo April 2001",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Aerial Photo 1998",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Aerial Photo 1949",
        id: nanoid(),
        leaf: true,
      },
    ],
  },
  {
    name: "Parks and Recreation",
    id: nanoid(),
    children: [
      {
        name: "Cemeteries",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Park Bioswale Beds",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Park Catch Basins",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Park Classification",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Park Name Labels",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Park Natural Areas",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Park Outdoor Recreation Facilities",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Park Playgrounds",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Park Potential Donation Bench Locations",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Park Specimen Trees",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Park Specimen Trees (Parks)",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Park Sports Fields",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Park Structures",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Trails and Paths (Parks)",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Parks",
        id: nanoid(),
        leaf: true,
      },
    ],
  },
  {
    name: "Transportation",
    id: nanoid(),
    children: [
      {
        name: "Transit",
        id: nanoid(),
        children: [
          {
            name: "SkyTrain Guideways",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "SkyTrain Stations",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Transit Routes",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Transit Stops (Accessible Only)",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Transit Stops (All Stops)",
            id: nanoid(),
            leaf: true,
          },
        ],
      },
      {
        name: "Adopt A Street",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Bike Routes",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Grass Cutting Contracts",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Greenways",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Historic Roads",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Intersections",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Pay Parking Stations",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "EV Charging Stations",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Poles",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Sign Inventory",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Road Centrelines",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Road Classifications-Existing",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Road Classifications-Future",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Road Names",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Road Surface",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Sidewalks",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Traffic Data Hub",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Traffic Cameras",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Drainage Signals",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Trails and Paths (Parks)",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Trails and Paths (Eng)",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Truck Routes",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Vehicular Bridges",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Drainage Catch Basins",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Winter Maintenance Brine Truck 1st Priority Routes",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Winter Maintenance Brine Truck 2nd Priority Routes",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Winter Maintenance Grader Truck Routes",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Winter Maintenance One Ton Truck Routes",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Winter Maintenance Tandem Truck 1st Priority Routes",
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
];

export default LayerStore;
