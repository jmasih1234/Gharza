export type OpportunityStatus = "New" | "Researching" | "Qualified" | "Contacted" | "Meeting" | "Bid Opportunity" | "Proposal" | "Won" | "Lost";
export type RequirementCategory = "Commercial roofing" | "Electrical" | "HVAC" | "Concrete" | "Plumbing" | "Windows" | "Safety equipment" | "Waste management";

export type CompanyProfile = {
  name: string;
  description: string;
  products: string[];
  services: string[];
  industries: string[];
  territory: string[];
  projectTypes: string[];
  minProjectValue: number;
  maxProjectValue: number;
  buyerPersonas: string[];
  avoidProjectTypes: string[];
};

export type Requirement = {
  category: RequirementCategory;
  relevance: number;
  confidence: number;
  reasoning: string;
  source: string;
};

export type Opportunity = {
  id: string;
  projectName: string;
  address: string;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
  permitNumber: string;
  permitType: string;
  permitStatus: string;
  filingDate: string;
  approvalDate: string;
  estimatedStart: string;
  estimatedCompletion: string;
  projectValue: number;
  constructionType: string;
  description: string;
  squareFootage: number;
  units: number;
  owner: string;
  developer: string;
  architect: string;
  engineer: string;
  generalContractor: string;
  subcontractors: string[];
  source: string;
  sourceUrl: string;
  rawSourceData: string;
  projectSummary: string;
  requirements: Requirement[];
  score: number;
  confidence: number;
  scoreFactors: { label: string; value: number; detail: string }[];
  updatedAt: string;
  status: OpportunityStatus;
  saved: boolean;
};

export const companyProfile: CompanyProfile = {
  name: "Northstar Roofing Supply",
  description: "Commercial roofing systems and field support for growth-market construction teams.",
  products: ["TPO and EPDM roofing systems", "Insulation and membranes", "Roof safety equipment"],
  services: ["Estimating", "Submittal support", "Jobsite delivery"],
  industries: ["Multifamily", "Commercial", "Industrial"],
  territory: ["Denver", "Aurora", "Lakewood", "Boulder"],
  projectTypes: ["Multifamily", "Commercial"],
  minProjectValue: 5000000,
  maxProjectValue: 25000000,
  buyerPersonas: ["General contractor", "Preconstruction manager", "Project executive"],
  avoidProjectTypes: ["Single-family residential"],
};

const requirement = (category: RequirementCategory, relevance: number, confidence: number, reasoning: string, source: string): Requirement => ({ category, relevance, confidence, reasoning, source });

export const opportunities: Opportunity[] = [
  {
    id: "opp-aurora-0142",
    projectName: "Aurora Commons",
    address: "1450 Southable Boulevard",
    city: "Aurora",
    state: "CO",
    latitude: 39.705,
    longitude: -104.82,
    permitNumber: "BD-2026-0142",
    permitType: "New building permit",
    permitStatus: "Issued",
    filingDate: "2026-08-18",
    approvalDate: "2026-09-12",
    estimatedStart: "2026-10-06",
    estimatedCompletion: "2028-02-15",
    projectValue: 14200000,
    constructionType: "Multifamily residential",
    description: "New 84-unit, five-story multifamily building with podium parking and ground-floor amenity space.",
    squareFootage: 118400,
    units: 84,
    owner: "Aurora Housing Partners",
    developer: "Summit Residential Group",
    architect: "Fieldwork Architecture",
    engineer: "Civic MEP Engineering",
    generalContractor: "Mile High Build Co.",
    subcontractors: [],
    source: "City of Aurora Building Services",
    sourceUrl: "https://www.auroragov.org/",
    rawSourceData: "Permit BD-2026-0142; valuation 14200000; 118400 SF; 84 dwelling units; issued 2026-09-12.",
    projectSummary: "A five-story, 84-unit multifamily project entering its procurement window after permit issuance. The scope includes a large low-slope roof and shared amenity areas.",
    requirements: [
      requirement("Commercial roofing", 98, 94, "Five-story multifamily scope includes a large low-slope roof; the permit has been issued and construction is expected to start within 30 days.", "Permit scope and project type"),
      requirement("HVAC", 93, 91, "84 residential units plus shared amenity space imply distributed mechanical systems and rooftop equipment.", "Unit count and building description"),
      requirement("Electrical", 91, 89, "Multifamily buildings require unit distribution, common-area power, life safety, and EV-ready infrastructure.", "Building type"),
      requirement("Concrete", 84, 87, "Podium parking and a five-story structure require substantial foundation and structural concrete.", "Project description"),
      requirement("Safety equipment", 78, 82, "A dense urban construction site with multiple trades will require active fall protection and site safety programs.", "Construction stage"),
    ],
    score: 92,
    confidence: 94,
    scoreFactors: [
      { label: "Territory fit", value: 100, detail: "Aurora is inside your active Colorado territory." },
      { label: "Product relevance", value: 98, detail: "Commercial roofing is predicted at 98% relevance." },
      { label: "Project value", value: 94, detail: "$14.2M fits your $5M-$25M preference." },
      { label: "Buying window", value: 92, detail: "Permit issued 4 days ago; start estimated in 30 days." },
      { label: "Buyer visibility", value: 86, detail: "General contractor is identified; roofing trade is open." },
    ],
    updatedAt: "2026-09-16T14:20:00Z",
    status: "New",
    saved: true,
  },
  {
    id: "opp-denver-0288",
    projectName: "Union Yard Offices",
    address: "2200 Blake Street",
    city: "Denver",
    state: "CO",
    latitude: 39.752,
    longitude: -104.99,
    permitNumber: "BD-2026-0288",
    permitType: "Tenant improvement",
    permitStatus: "Under review",
    filingDate: "2026-09-03",
    approvalDate: "Pending",
    estimatedStart: "2026-11-02",
    estimatedCompletion: "2027-06-30",
    projectValue: 6800000,
    constructionType: "Commercial office",
    description: "Conversion of an existing warehouse into a 62,000 square foot office and life-sciences workspace.",
    squareFootage: 62000,
    units: 0,
    owner: "Blake Street Holdings",
    developer: "Front Range Capital",
    architect: "Common Ground Studio",
    engineer: "Westline Engineering",
    generalContractor: "Peakline Contractors",
    subcontractors: ["Rocky Mountain Electric"],
    source: "City and County of Denver Community Planning",
    sourceUrl: "https://www.denvergov.org/",
    rawSourceData: "Permit BD-2026-0288; valuation 6800000; 62000 SF; commercial tenant improvement; under review.",
    projectSummary: "A warehouse conversion with a clear mechanical and electrical scope. Roofing is less urgent because the existing envelope is being retained.",
    requirements: [
      requirement("HVAC", 96, 92, "Life-sciences workspace conversion creates high mechanical specification needs.", "Project description"),
      requirement("Electrical", 94, 94, "Specialized office use and tenant improvement scope require upgraded power and controls.", "Permit type and use"),
      requirement("Safety equipment", 63, 76, "Active conversion work creates a moderate site safety need.", "Construction stage"),
    ],
    score: 77,
    confidence: 88,
    scoreFactors: [
      { label: "Territory fit", value: 100, detail: "Denver is inside your active Colorado territory." },
      { label: "Product relevance", value: 58, detail: "Roofing is not the leading predicted requirement." },
      { label: "Project value", value: 88, detail: "$6.8M is inside your preferred project range." },
      { label: "Buying window", value: 71, detail: "Permit is under review; estimated start is 46 days away." },
      { label: "Buyer visibility", value: 82, detail: "GC identified and one electrical subcontractor found." },
    ],
    updatedAt: "2026-09-15T10:05:00Z",
    status: "Researching",
    saved: false,
  },
  {
    id: "opp-lakewood-0401",
    projectName: "West Colfax Residences",
    address: "8750 West Colfax Avenue",
    city: "Lakewood",
    state: "CO",
    latitude: 39.74,
    longitude: -105.095,
    permitNumber: "PL-2026-0401",
    permitType: "Planning application",
    permitStatus: "Approved",
    filingDate: "2026-07-22",
    approvalDate: "2026-08-29",
    estimatedStart: "2027-01-18",
    estimatedCompletion: "2028-09-30",
    projectValue: 22100000,
    constructionType: "Multifamily residential",
    description: "Planned 132-unit mixed-income residential community with two buildings and structured parking.",
    squareFootage: 188000,
    units: 132,
    owner: "Colfax Community Housing",
    developer: "Summit Residential Group",
    architect: "Fieldwork Architecture",
    engineer: "Civic MEP Engineering",
    generalContractor: "Not identified",
    subcontractors: [],
    source: "City of Lakewood Planning Department",
    sourceUrl: "https://www.lakewood.org/",
    rawSourceData: "Planning PL-2026-0401; estimated valuation 22100000; 188000 SF; 132 units; approved 2026-08-29.",
    projectSummary: "A large multifamily project with strong category fit but an earlier buying window. Contractor discovery is the immediate next action.",
    requirements: [
      requirement("Commercial roofing", 96, 87, "Two multifamily buildings and structured parking create significant roof area.", "Planning application"),
      requirement("HVAC", 95, 88, "132 units and mixed-income building systems imply major mechanical procurement.", "Unit count"),
      requirement("Windows", 90, 84, "Two new residential buildings require a high volume of exterior openings.", "Project description"),
      requirement("Concrete", 88, 86, "Structured parking and two new buildings suggest substantial concrete packages.", "Project description"),
    ],
    score: 84,
    confidence: 81,
    scoreFactors: [
      { label: "Territory fit", value: 100, detail: "Lakewood is inside your active Colorado territory." },
      { label: "Product relevance", value: 97, detail: "Commercial roofing is predicted at 96% relevance." },
      { label: "Project value", value: 100, detail: "$22.1M fits your preferred range." },
      { label: "Buying window", value: 62, detail: "Planning is approved, but estimated start is 4 months away." },
      { label: "Buyer visibility", value: 48, detail: "Developer is known but general contractor is not identified." },
    ],
    updatedAt: "2026-09-14T16:40:00Z",
    status: "Qualified",
    saved: true,
  },
  {
    id: "opp-boulder-0517",
    projectName: "Pearl Street Medical Pavilion",
    address: "1800 Pearl Street",
    city: "Boulder",
    state: "CO",
    latitude: 40.019,
    longitude: -105.27,
    permitNumber: "BD-2026-0517",
    permitType: "New building permit",
    permitStatus: "Issued",
    filingDate: "2026-08-07",
    approvalDate: "2026-09-05",
    estimatedStart: "2026-10-20",
    estimatedCompletion: "2027-12-15",
    projectValue: 9800000,
    constructionType: "Commercial healthcare",
    description: "Three-story outpatient medical pavilion with clinic, imaging, and pharmacy space.",
    squareFootage: 74000,
    units: 0,
    owner: "Pearl Medical Properties",
    developer: "Boulder Health Ventures",
    architect: "Sage Collaborative",
    engineer: "Northline Systems",
    generalContractor: "Mile High Build Co.",
    subcontractors: ["Civic MEP Engineering"],
    source: "City of Boulder Planning",
    sourceUrl: "https://bouldercolorado.gov/",
    rawSourceData: "Permit BD-2026-0517; valuation 9800000; 74000 SF; healthcare outpatient; issued 2026-09-05.",
    projectSummary: "A near-term healthcare build with strong mechanical and electrical demand. Roofing fit is positive but less certain than for a large multifamily envelope.",
    requirements: [
      requirement("HVAC", 99, 96, "Healthcare spaces require specialized ventilation, controls, and redundancy.", "Healthcare use"),
      requirement("Electrical", 98, 94, "Imaging and clinical spaces require high-reliability electrical systems.", "Project description"),
      requirement("Commercial roofing", 82, 83, "A new three-story commercial building will require a complete roof system.", "New building permit"),
      requirement("Safety equipment", 72, 79, "Active healthcare construction will require controlled jobsite safety procedures.", "Construction stage"),
    ],
    score: 73,
    confidence: 91,
    scoreFactors: [
      { label: "Territory fit", value: 100, detail: "Boulder is inside your active Colorado territory." },
      { label: "Product relevance", value: 77, detail: "Roofing relevance is good, but HVAC and electrical dominate the scope." },
      { label: "Project value", value: 92, detail: "$9.8M fits your preferred project range." },
      { label: "Buying window", value: 94, detail: "Permit issued 12 days ago; start estimated in 33 days." },
      { label: "Buyer visibility", value: 89, detail: "General contractor is identified." },
    ],
    updatedAt: "2026-09-13T11:10:00Z",
    status: "Contacted",
    saved: false,
  },
];

export const formatCurrency = (value: number) => `$${(value / 1000000).toFixed(1)}M`;
export const formatDate = (value: string) => new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }).format(new Date(`${value}T12:00:00`));

export const scoreReason = (opportunity: Opportunity) => opportunity.scoreFactors.filter((factor) => factor.value >= 80).slice(0, 3).map((factor) => factor.detail);
