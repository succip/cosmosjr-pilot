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
        name: "Water Courses",
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
    name: "Land Use / Environment",
    id: nanoid(),
    children: [
      {
        name: "Biodiversity Conservation Strategy",
        id: nanoid(),
        children: [
          {
            name: "Green Infrastructure Network Corridors",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Green Infrastructure Network Hubs and Sites",
            id: nanoid(),
            leaf: true,
          },
        ],
      },
      {
        name: "Species At Risk Critical Habitat",
        id: nanoid(),
        children: [
          {
            name: "Salish Sucker",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Streambank Lupine",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Pacific Water Shrew",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Oregon Forestsnail",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Oregon Spotted Frog",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Marbled Murrelet",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Dun Skipper",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Western Painted Turtle",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Barn Owl",
            id: nanoid(),
            leaf: true,
          },
        ],
      },
      {
        name: "Development Applications",
        id: nanoid(),
        children: [
          {
            name: "Dev Apps - All",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Dev Apps - In Process",
            id: nanoid(),
            leaf: true,
          },
        ],
      },
      {
        name: "Development Permit Areas",
        id: nanoid(),
        children: [
          {
            name: "Campbell Heights Industrial Form and Character DP Exemption Area",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Farming Protection Development Permit Area",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Development Permit Areas",
            id: nanoid(),
            children: [
              {
                name: "Hazard Lands Development Permit Area",
                id: nanoid(),
                children: [
                  {
                    name: "Steep Slope Areas",
                    id: nanoid(),
                    leaf: true,
                  },
                  {
                    name: "Flood Prone Areas",
                    id: nanoid(),
                    leaf: true,
                  },
                ],
              },
              {
                name: "Sensitive Ecosystems Development Permit Area",
                id: nanoid(),
                children: [
                  {
                    name: "Streamside Areas",
                    id: nanoid(),
                    leaf: true,
                  },
                  {
                    name: "Green Infrastructure Areas",
                    id: nanoid(),
                    leaf: true,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Local Area Plans",
        id: nanoid(),
        children: [
          {
            name: "Abbey Ridge",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Campbell Heights",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Central Semiahmoo Peninsula",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Crescent Beach",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Highway 99 Corridor",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Ocean Park",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "West Panorama Ridge",
            id: nanoid(),
            leaf: true,
          },
        ],
      },
      {
        name: "Neighbourhood Concept Plans",
        id: nanoid(),
        children: [
          {
            name: "Aloha Estates Infill Area Land Use Concept",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Anniedale Tynehead",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Darts Hill",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Douglas",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "East Clayton",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "East Clayton Extension North of 72 Ave",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "East Clayton Extension West of 188 St",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "East Clayton Transit Oriented Area",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "East Newton Business Park",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "East Newton North",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "East Newton South",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "East Panorama Ridge",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Fleetwood Enclave",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "King George Highway Corridor",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Morgan Heights",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "North Cloverdale East",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "North Cloverdale West",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "North Grandview Heights",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Orchard Grove",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Redwood Heights",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Rosemary Heights Business Park",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Rosemary Heights Central",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Rosemary Heights West",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "South Newton",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "South Westminster",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "South Westminster Heights Infill Area",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Sunnyside Heights",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "West Clayton",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "West Cloverdale North",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "West Cloverdale South",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "West Newton North",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "West Newton South",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "West Newton/Highway 10",
            id: nanoid(),
            leaf: true,
          },
        ],
      },
      {
        name: "Official Community Plan",
        id: nanoid(),
        children: [
          {
            name: "Central Business District Densities",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Frequent Transit Development Areas",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "OCP Designations",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Special Study Area",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Suburban Density Exception Areas",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Town Centre Densities",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Urban Centres",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Urban Containment Boundary",
            id: nanoid(),
            leaf: true,
          },
        ],
      },
      {
        name: "Town Centre Land Use Plans",
        id: nanoid(),
        children: [
          {
            name: "City Centre Plan",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Cloverdale Town Centre",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Newton Town Centre",
            id: nanoid(),
            leaf: true,
          },
        ],
      },
      {
        name: "Agricultural Land Reserve",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Business Improvement Areas",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Top of Bank",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Heritage Routes",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Heritage Sites",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Public Art Sites",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Important Trees",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Land Use Contracts",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Secondary Plan Boundaries",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Zoning Boundaries",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Zoning Small Lot Single Family",
        id: nanoid(),
        leaf: true,
      },
    ],
  },
  {
    name: "Public Safety",
    id: nanoid(),
    children: [
      {
        name: "Crime Incidents (Last 6 Months)",
        id: nanoid(),
        children: [
          {
            name: "Break and Enter - Business",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Break and Enter - Residence",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Shoplifting",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Theft from Motor Vehicle",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Theft of Motor Vehicle",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Graffiti",
            id: nanoid(),
            leaf: true,
          },
        ],
      },
      {
        name: "Fata or Injury Collisions (Last 6 Months)",
        id: nanoid(),
        children: [
          {
            name: "Fatal or Injury Collision",
            id: nanoid(),
            leaf: true,
          },
        ],
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
    name: "Contours",
    id: nanoid(),
    children: [
      {
        name: "Contours - 5 metre",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Contours - Intermediate (1m)",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Contours - Intermediate (0.5m)",
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
    name: "Infrastructure",
    id: nanoid(),
    children: [
      {
        name: "Capital Construction",
        id: nanoid(),
        children: [
          {
            name: "Capital Construction 2021",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Capital Construction 2020",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Capital Construction 2019",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Capital Construction 2018",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Capital Construction 2017",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Capital Construction 2016",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Capital Construction 2015",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Capital Construction 2014",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Capital Construction 2013",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Capital Construction 2012",
            id: nanoid(),
            leaf: true,
          },
        ],
      },
      {
        name: "District Energy",
        id: nanoid(),
        children: [
          {
            name: "District Energy Fittings",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "District Energy Mains",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "District Energy Service Connections",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "District Energy Valves",
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
            name: "Drainage 200 Year Flood Plain",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Drainage Catch Basins",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Drainage Detention Ponds",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Drainage Devices",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Drainage Flow Arrows",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Drainage ISMP Boundary",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Drainage Laterals",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Drainage Mains",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Drainage Manholes",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Drainage Soil Permits",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Drainage Service Connections",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Drainage Water Bodies",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Drainage Sub Catchments",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Salmon Tracks",
            id: nanoid(),
            leaf: true,
          },
        ],
      },
      {
        name: "Sanitary",
        id: nanoid(),
        children: [
          {
            name: "Sanitary Catchments",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Sanitary Flow Arrows",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Sanitary Laterals",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Sanitary Chambers",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Sanitary Mains",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Sanitary Manholes",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Sanitary Valves",
            id: nanoid(),
            leaf: true,
          },
        ],
      },
      {
        name: "Ten Year Plan (2021 - 2030)",
        id: nanoid(),
        children: [
          {
            name: "Drainage Projects",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Road Projects",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Sewer Projects",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Water Projects",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Energy Projects",
            id: nanoid(),
            leaf: true,
          },
        ],
      },
      {
        name: "Water",
        id: nanoid(),
        children: [
          {
            name: "Water Hydrant Connections",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Water Hydrants",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Water Mains",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Water Meter Routes",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Water Meters - In Service",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Water Pressure Zones",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Water Service Area",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Water Service Connections",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Water Service Connections Offset",
            id: nanoid(),
            leaf: true,
          },
          {
            name: "Water Valves",
            id: nanoid(),
            leaf: true,
          },
        ],
      },
      {
        name: "BC Hydro Poles",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "City Utility",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Methane Lines",
        id: nanoid(),
        leaf: true,
      },
      {
        name: "Utility Main Offsets",
        id: nanoid(),
        leaf: true,
      },
    ],
  },
];

export default LayerStore;
