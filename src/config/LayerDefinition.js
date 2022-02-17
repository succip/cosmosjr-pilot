const layerDefinitions = [
  {
    name: "Dev Apps - All",
    description: "This layer shows all active and completed Dev Apps and Utility Extension Projects. Criteria:  No filters, show all dev apps regardless of status.",
  },
  {
    name: "Dev Apps - In Process",
    description: "This layer shows only the Dev App Projects and Utility Extension Projects that are not complete.   Criteria:  AMANDA PR Folder has a Status value not in (Closed, Concluded, Final Approval), and AMANDA EN Folders that have a status value not in (Cancelled, Closed, Final Maintenance).  Note:  We could also filter out Utility Extension Projects that have a Status = ‘Project acc’, but currently do not.",
  },
  {
    name: "Dev Apps - Servicing Agmt Executed",
    description: "This layer shows only the Dev Apps that have completed the Servicing Agreement Process  Note: No Utility Extension Projects are included.  Criteria:  Status is Closed on Process 3068 (Exec SA to Developer).",
  },
  {
    name: "Posting Plans",
    description: "A posting plan is a type of survey record certified by a British Columbia Land Surveyor pursuant to Section 68 of the Land Title Act.  It shows survey evidence found and set in the ground, without making any changes to a boundary.  The Posting Plans layer in COSMOS shows georeferenced polygons which identify the posting plan number and outline the locations of many posting plans within the City.  These posting plans have been registered in the Land Title Office and can be ordered from the New Westminster Land Title Office or https://www.ltsa.ca/.",
  },
];

export default layerDefinitions;
