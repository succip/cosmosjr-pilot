import { generateId } from "../js/Utilities";

const LayerStore = [
  {
    name: "Property",
    id: generateId(),
    children: [
      {
        name: "Addresses (black)",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Addresses (yellow)",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Buildings",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Easements (black)",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Easements (yellow)",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Legal Plan Boundaries (all)",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Lot Dimensions",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Lot Hooks",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Lot Numbers (black)",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Lot Numbers (yellow)",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Lots",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Lots (Outline)",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Lots (Yellow)",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Posting Plans",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Rights of Way (black)",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Rights of Way (yellow)",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Surrey City Boundary",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Surrey Communities",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Surrey Map Index",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Survey Monuments",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Water Courses",
        id: generateId(),
        leaf: true,
      },
    ],
  },
  {
    name: "Community Services",
    id: generateId(),
    children: [
      {
        name: "Garbage and Recycling",
        id: generateId(),
        children: [
          {
            name: "Collection Secondary Suites",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Collection Curbside",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Garbage Recycling Collection Days",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Multi-family Building Centralized Collections",
            id: generateId(),
            leaf: true,
          },
        ],
      },
      {
        name: "Elementary School Catchments",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Fire Hall Zones",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Schools",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Secondary School Catchments",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Child Care",
        id: generateId(),
        leaf: true,
      },
    ],
  },
  {
    name: "Images",
    id: generateId(),
    children: [
      {
        name: "Aerial Photo April 2021",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Aerial Photo April 2020",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Aerial Photo March 2019",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Aerial Photo April 2018",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Aerial Photo May 2017",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Aerial Photo March 2016",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Aerial Photo 2016 Metro Vancouver",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Aerial Photo April 2015",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Aerial Photo April 2014",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Aerial Photo April 2013",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Lidar Hillshade 2018",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Lidar Hillshade 2017",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Lidar Hillshade 2013",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Lidar Hillshade 2009",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Aerial Photo April 2012",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Aerial Photo April/May 2011",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Aerial Photo May 2010",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Aerial Photo April 2009",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Aerial Photo April 2008",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Aerial Photo April 2007",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Aerial Photo April 2006",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Aerial Photo April 2005",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Aerial Photo April 2004",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Satellite Image Summer 2003",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Aerial Photo April 2001",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Aerial Photo 1998",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Aerial Photo 1949",
        id: generateId(),
        leaf: true,
      },
    ],
  },
  {
    name: "Land Use / Environment",
    id: generateId(),
    children: [
      {
        name: "Biodiversity Conservation Strategy",
        id: generateId(),
        children: [
          {
            name: "Green Infrastructure Network Corridors",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Green Infrastructure Network Hubs and Sites",
            id: generateId(),
            leaf: true,
          },
        ],
      },
      {
        name: "Species At Risk Critical Habitat",
        id: generateId(),
        children: [
          {
            name: "Salish Sucker",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Streambank Lupine",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Pacific Water Shrew",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Oregon Forestsnail",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Oregon Spotted Frog",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Marbled Murrelet",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Dun Skipper",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Western Painted Turtle",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Barn Owl",
            id: generateId(),
            leaf: true,
          },
        ],
      },
      {
        name: "Development Applications",
        id: generateId(),
        children: [
          {
            name: "Dev Apps - All",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Dev Apps - In Process",
            id: generateId(),
            leaf: true,
          },
        ],
      },
      {
        name: "Development Permit Areas",
        id: generateId(),
        children: [
          {
            name: "Campbell Heights Industrial Form and Character DP Exemption Area",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Farming Protection Development Permit Area",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Development Permit Areas",
            id: generateId(),
            children: [
              {
                name: "Hazard Lands Development Permit Area",
                id: generateId(),
                children: [
                  {
                    name: "Steep Slope Areas",
                    id: generateId(),
                    leaf: true,
                  },
                  {
                    name: "Flood Prone Areas",
                    id: generateId(),
                    leaf: true,
                  },
                ],
              },
              {
                name: "Sensitive Ecosystems Development Permit Area",
                id: generateId(),
                children: [
                  {
                    name: "Streamside Areas",
                    id: generateId(),
                    leaf: true,
                  },
                  {
                    name: "Green Infrastructure Areas",
                    id: generateId(),
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
        id: generateId(),
        children: [
          {
            name: "Abbey Ridge",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Campbell Heights",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Central Semiahmoo Peninsula",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Crescent Beach",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Highway 99 Corridor",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Ocean Park",
            id: generateId(),
            leaf: true,
          },
          {
            name: "West Panorama Ridge",
            id: generateId(),
            leaf: true,
          },
        ],
      },
      {
        name: "Neighbourhood Concept Plans",
        id: generateId(),
        children: [
          {
            name: "Aloha Estates Infill Area Land Use Concept",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Anniedale Tynehead",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Darts Hill",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Douglas",
            id: generateId(),
            leaf: true,
          },
          {
            name: "East Clayton",
            id: generateId(),
            leaf: true,
          },
          {
            name: "East Clayton Extension North of 72 Ave",
            id: generateId(),
            leaf: true,
          },
          {
            name: "East Clayton Extension West of 188 St",
            id: generateId(),
            leaf: true,
          },
          {
            name: "East Clayton Transit Oriented Area",
            id: generateId(),
            leaf: true,
          },
          {
            name: "East Newton Business Park",
            id: generateId(),
            leaf: true,
          },
          {
            name: "East Newton North",
            id: generateId(),
            leaf: true,
          },
          {
            name: "East Newton South",
            id: generateId(),
            leaf: true,
          },
          {
            name: "East Panorama Ridge",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Fleetwood Enclave",
            id: generateId(),
            leaf: true,
          },
          {
            name: "King George Highway Corridor",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Morgan Heights",
            id: generateId(),
            leaf: true,
          },
          {
            name: "North Cloverdale East",
            id: generateId(),
            leaf: true,
          },
          {
            name: "North Cloverdale West",
            id: generateId(),
            leaf: true,
          },
          {
            name: "North Grandview Heights",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Orchard Grove",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Redwood Heights",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Rosemary Heights Business Park",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Rosemary Heights Central",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Rosemary Heights West",
            id: generateId(),
            leaf: true,
          },
          {
            name: "South Newton",
            id: generateId(),
            leaf: true,
          },
          {
            name: "South Westminster",
            id: generateId(),
            leaf: true,
          },
          {
            name: "South Westminster Heights Infill Area",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Sunnyside Heights",
            id: generateId(),
            leaf: true,
          },
          {
            name: "West Clayton",
            id: generateId(),
            leaf: true,
          },
          {
            name: "West Cloverdale North",
            id: generateId(),
            leaf: true,
          },
          {
            name: "West Cloverdale South",
            id: generateId(),
            leaf: true,
          },
          {
            name: "West Newton North",
            id: generateId(),
            leaf: true,
          },
          {
            name: "West Newton South",
            id: generateId(),
            leaf: true,
          },
          {
            name: "West Newton/Highway 10",
            id: generateId(),
            leaf: true,
          },
        ],
      },
      {
        name: "Official Community Plan",
        id: generateId(),
        children: [
          {
            name: "Central Business District Densities",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Frequent Transit Development Areas",
            id: generateId(),
            leaf: true,
          },
          {
            name: "OCP Designations",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Special Study Area",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Suburban Density Exception Areas",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Town Centre Densities",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Urban Centres",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Urban Containment Boundary",
            id: generateId(),
            leaf: true,
          },
        ],
      },
      {
        name: "Town Centre Land Use Plans",
        id: generateId(),
        children: [
          {
            name: "City Centre Plan",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Cloverdale Town Centre",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Newton Town Centre",
            id: generateId(),
            leaf: true,
          },
        ],
      },
      {
        name: "Agricultural Land Reserve",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Business Improvement Areas",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Top of Bank",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Heritage Routes",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Heritage Sites",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Public Art Sites",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Important Trees",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Land Use Contracts",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Secondary Plan Boundaries",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Zoning Boundaries",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Zoning Small Lot Single Family",
        id: generateId(),
        leaf: true,
      },
    ],
  },
  {
    name: "Public Safety",
    id: generateId(),
    children: [
      {
        name: "Crime Incidents (Last 6 Months)",
        id: generateId(),
        children: [
          {
            name: "Break and Enter - Business",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Break and Enter - Residence",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Shoplifting",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Theft from Motor Vehicle",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Theft of Motor Vehicle",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Graffiti",
            id: generateId(),
            leaf: true,
          },
        ],
      },
      {
        name: "Fata or Injury Collisions (Last 6 Months)",
        id: generateId(),
        children: [
          {
            name: "Fatal or Injury Collision",
            id: generateId(),
            leaf: true,
          },
        ],
      },
    ],
  },
  {
    name: "Parks and Recreation",
    id: generateId(),
    children: [
      {
        name: "Cemeteries",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Park Bioswale Beds",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Park Catch Basins",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Park Classification",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Park Name Labels",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Park Natural Areas",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Park Outdoor Recreation Facilities",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Park Playgrounds",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Park Potential Donation Bench Locations",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Park Specimen Trees",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Park Specimen Trees (Parks)",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Park Sports Fields",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Park Structures",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Trails and Paths (Parks)",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Parks",
        id: generateId(),
        leaf: true,
      },
    ],
  },
  {
    name: "Contours",
    id: generateId(),
    children: [
      {
        name: "Contours - 5 metre",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Contours - Intermediate (1m)",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Contours - Intermediate (0.5m)",
        id: generateId(),
        leaf: true,
      },
    ],
  },
  {
    name: "Transportation",
    id: generateId(),
    children: [
      {
        name: "Transit",
        id: generateId(),
        children: [
          {
            name: "SkyTrain Guideways",
            id: generateId(),
            leaf: true,
          },
          {
            name: "SkyTrain Stations",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Transit Routes",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Transit Stops (Accessible Only)",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Transit Stops (All Stops)",
            id: generateId(),
            leaf: true,
          },
        ],
      },
      {
        name: "Adopt A Street",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Bike Routes",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Grass Cutting Contracts",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Greenways",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Historic Roads",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Intersections",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Pay Parking Stations",
        id: generateId(),
        leaf: true,
      },
      {
        name: "EV Charging Stations",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Poles",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Sign Inventory",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Road Centrelines",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Road Classifications-Existing",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Road Classifications-Future",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Road Names",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Road Surface",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Sidewalks",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Traffic Data Hub",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Traffic Cameras",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Traffic Signals",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Trails and Paths (Parks)",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Trails and Paths (Eng)",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Truck Routes",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Vehicular Bridges",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Drainage Catch Basins",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Winter Maintenance Brine Truck 1st Priority Routes",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Winter Maintenance Brine Truck 2nd Priority Routes",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Winter Maintenance Grader Truck Routes",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Winter Maintenance One Ton Truck Routes",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Winter Maintenance Tandem Truck 1st Priority Routes",
        id: generateId(),
        leaf: true,
      },
    ],
  },

  {
    name: "Infrastructure",
    id: generateId(),
    children: [
      {
        name: "Capital Construction",
        id: generateId(),
        children: [
          {
            name: "Capital Construction 2021",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Capital Construction 2020",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Capital Construction 2019",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Capital Construction 2018",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Capital Construction 2017",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Capital Construction 2016",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Capital Construction 2015",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Capital Construction 2014",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Capital Construction 2013",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Capital Construction 2012",
            id: generateId(),
            leaf: true,
          },
        ],
      },
      {
        name: "District Energy",
        id: generateId(),
        children: [
          {
            name: "District Energy Fittings",
            id: generateId(),
            leaf: true,
          },
          {
            name: "District Energy Mains",
            id: generateId(),
            leaf: true,
          },
          {
            name: "District Energy Service Connections",
            id: generateId(),
            leaf: true,
          },
          {
            name: "District Energy Valves",
            id: generateId(),
            leaf: true,
          },
        ],
      },
      {
        name: "Drainage",
        id: generateId(),
        children: [
          {
            name: "Drainage 200 Year Flood Plain",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Drainage Catch Basins",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Drainage Detention Ponds",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Drainage Devices",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Drainage Flow Arrows",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Drainage ISMP Boundary",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Drainage Laterals",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Drainage Mains",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Drainage Manholes",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Drainage Soil Permits",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Drainage Service Connections",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Drainage Water Bodies",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Drainage Sub Catchments",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Salmon Tracks",
            id: generateId(),
            leaf: true,
          },
        ],
      },
      {
        name: "Sanitary",
        id: generateId(),
        children: [
          {
            name: "Sanitary Catchments",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Sanitary Flow Arrows",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Sanitary Laterals",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Sanitary Chambers",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Sanitary Mains",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Sanitary Manholes",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Sanitary Valves",
            id: generateId(),
            leaf: true,
          },
        ],
      },
      {
        name: "Ten Year Plan (2021 - 2030)",
        id: generateId(),
        children: [
          {
            name: "Drainage Projects",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Road Projects",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Sewer Projects",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Water Projects",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Energy Projects",
            id: generateId(),
            leaf: true,
          },
        ],
      },
      {
        name: "Water",
        id: generateId(),
        children: [
          {
            name: "Water Hydrant Connections",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Water Hydrants",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Water Mains",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Water Meter Routes",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Water Meters - In Service",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Water Pressure Zones",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Water Service Area",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Water Service Connections",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Water Service Connections Offset",
            id: generateId(),
            leaf: true,
          },
          {
            name: "Water Valves",
            id: generateId(),
            leaf: true,
          },
        ],
      },
      {
        name: "BC Hydro Poles",
        id: generateId(),
        leaf: true,
      },
      {
        name: "City Utility",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Methane Lines",
        id: generateId(),
        leaf: true,
      },
      {
        name: "Utility Main Offsets",
        id: generateId(),
        leaf: true,
      },
    ],
  },
];

export default LayerStore;
