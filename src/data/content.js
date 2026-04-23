// Central content source for Desire Foundation site.
// Keeping copy here lets pages stay lean and content easy to tune.

export const brand = {
  name: "Desire Foundation",
  tagline: "Empowering Lives. Restoring Earth.",
  longTagline:
    "A grassroots movement lifting women, restoring ecosystems, and building dignified rural livelihoods across India.",
  established: 2011,
  address: {
    line1: "Desire Foundation",
    line2: "14/B, Green Avenue, Banjara Hills",
    city: "Hyderabad, Telangana 500034",
    country: "India",
  },
  email: "hello@desirefoundation.org",
  phone: "+91 98765 43210",
  hours: "Mon – Sat, 9:30 AM – 6:30 PM IST",
  social: {
    instagram: "https://instagram.com/desirefoundation",
    facebook: "https://facebook.com/desirefoundation",
    linkedin: "https://linkedin.com/company/desirefoundation",
    youtube: "https://youtube.com/@desirefoundation",
    twitter: "https://twitter.com/desirefdn",
  },
};

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/focus-areas", label: "Focus Areas" },
  { to: "/projects", label: "Projects" },
  { to: "/programs", label: "Programs" },
  { to: "/impact", label: "Impact" },
  { to: "/team", label: "Team" },
  { to: "/contact", label: "Contact" },
];

// 4 pillars
export const pillars = [
  {
    id: "women",
    title: "Women Empowerment",
    subtitle: "Dignity, skills, and independent income.",
    icon: "◈",
    accent: "#D97706",
    description:
      "Vocational skilling, micro-enterprise incubation, and leadership circles that turn survival into self-reliance.",
    subInitiatives: [
      "Tailoring & textile cooperatives",
      "Financial literacy circles",
      "Leadership & advocacy fellowships",
      "Safe-workplace certification",
    ],
    reach: [
      { label: "Women trained", value: "48,000+" },
      { label: "Enterprises seeded", value: "1,240" },
      { label: "Districts active", value: "62" },
    ],
  },
  {
    id: "green",
    title: "Green Environment",
    subtitle: "Forests, soil, and shared air.",
    icon: "❦",
    accent: "#064E3B",
    description:
      "Miyawaki groves, watershed rebuilds, and zero-waste campuses — regenerating the landscapes our work depends on.",
    subInitiatives: [
      "Miyawaki micro-forests",
      "Rainwater & watershed rebuild",
      "Organic farming clusters",
      "Plastic-free village pacts",
    ],
    reach: [
      { label: "Trees planted", value: "2.1 M" },
      { label: "Water bodies revived", value: "86" },
      { label: "Hectares restored", value: "4,300" },
    ],
  },
  {
    id: "rural",
    title: "Rural Employment",
    subtitle: "Work that keeps families home.",
    icon: "✦",
    accent: "#34D399",
    description:
      "Artisan guilds, agri-value chains, and rural tech cells that create stable income without forcing migration.",
    subInitiatives: [
      "Craft & weaver guilds",
      "Agri value-chain collectives",
      "Rural BPO & tech cells",
      "Youth apprenticeship placement",
    ],
    reach: [
      { label: "Livelihoods created", value: "17,500" },
      { label: "Artisan guilds", value: "140" },
      { label: "Avg. income lift", value: "+2.3×" },
    ],
  },
  {
    id: "welfare",
    title: "Social Welfare",
    subtitle: "A floor of dignity for every life.",
    icon: "✿",
    accent: "#B45309",
    description:
      "Child nutrition, elder care, healthcare camps, and disaster response — the safety net beneath everything we do.",
    subInitiatives: [
      "Child nutrition kitchens",
      "Mobile health camps",
      "Elder care circles",
      "Disaster relief corps",
    ],
    reach: [
      { label: "Lives touched", value: "3.6 M" },
      { label: "Health camps/yr", value: "480" },
      { label: "Meals served", value: "12 M+" },
    ],
  },
];

// Home impact counters
export const impactCounters = [
  { label: "Lives touched", value: 3600000, suffix: "+", color: "gold" },
  { label: "Villages reached", value: 1840, suffix: "", color: "forest" },
  { label: "Trees planted", value: 2100000, suffix: "+", color: "forest" },
  { label: "Women trained", value: 48000, suffix: "+", color: "gold" },
];

export const extendedCounters = [
  { label: "Lives touched", value: 3600000, suffix: "+" },
  { label: "Villages reached", value: 1840, suffix: "" },
  { label: "Trees planted", value: 2100000, suffix: "+" },
  { label: "Women trained", value: 48000, suffix: "+" },
  { label: "Enterprises seeded", value: 1240, suffix: "" },
  { label: "Water bodies revived", value: 86, suffix: "" },
  { label: "Meals served", value: 12000000, suffix: "+" },
  { label: "Health camps / yr", value: 480, suffix: "" },
];

export const coreValues = [
  {
    title: "Dignity First",
    text: "Every program is designed to preserve the dignity of those it serves — recipients are partners, not beneficiaries.",
  },
  {
    title: "Rooted Locally",
    text: "We live in the villages we work in. No parachute programs, no saviour narratives.",
  },
  {
    title: "Women-led",
    text: "More than 72% of our field force, and half our board, are women from the communities we serve.",
  },
  {
    title: "Regenerative",
    text: "Economic uplift cannot come at ecological cost. Every program has an environmental ledger.",
  },
  {
    title: "Transparent",
    text: "Public impact dashboards, independent audits, and open books — accountability is the default.",
  },
  {
    title: "Long Horizon",
    text: "We commit to districts for ten years at a time. Real change needs real patience.",
  },
];

export const timeline = [
  {
    year: 2011,
    title: "A kitchen becomes a movement",
    text: "Founders open a community kitchen in Medak serving 40 children daily. The kitchen evolves into Desire Foundation.",
  },
  {
    year: 2013,
    title: "First women's collective",
    text: "72 women launch the first tailoring cooperative; the pilot later scales into the Suvarna guild network.",
  },
  {
    year: 2015,
    title: "Green pivot",
    text: "We commit to a regenerative model — every livelihood program now ships with an environmental ledger.",
  },
  {
    year: 2017,
    title: "Watershed rebuild",
    text: "First watershed rebuild revives 8 villages in drought-hit Anantapur; rainwater collection crosses 2 crore litres.",
  },
  {
    year: 2019,
    title: "Crossing a million",
    text: "Over 1 million lives touched across 500+ villages; audited impact reports go public.",
  },
  {
    year: 2020,
    title: "Pandemic response",
    text: "Deploy 14 mobile health cells and serve 6 million emergency meals during COVID-19.",
  },
  {
    year: 2022,
    title: "Miyawaki at scale",
    text: "52 Miyawaki micro-forests planted with 1.4 million native saplings and community stewards.",
  },
  {
    year: 2024,
    title: "Artisan guild exports",
    text: "Craft guilds in 3 states begin direct exports; average household income lift crosses 2.3×.",
  },
  {
    year: 2026,
    title: "Today",
    text: "3.6M lives touched, 1,840 villages reached, 62 districts active — with a 2030 goal to double all of it.",
  },
];

export const visionMission = {
  vision:
    "An India where every woman has a livelihood of her own, every village its own forest, and no child grows up hungry or unseen.",
  mission:
    "To co-create regenerative, women-led livelihoods with rural communities — restoring both incomes and ecosystems, one district at a time.",
  goals2030: [
    "Scale to 10 million lives touched across 100 districts",
    "Plant 10 million native trees across 500 micro-forests",
    "Seed 5,000 women-owned enterprises with fair-finance access",
    "Revive 500 water bodies serving 3,500 villages",
    "Train 150,000 women in skills linked to living-wage work",
    "Publish annually audited, open-data impact dashboards",
  ],
};

// Focus area flip-card payloads reuse pillars.

// Projects
export const projects = [
  {
    id: "suvarna",
    title: "Suvarna Tailoring Cooperative",
    status: "Active",
    focus: "women",
    location: "Medak, Telangana",
    year: 2013,
    image:
      "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=70",
    summary:
      "A 420-member women-owned garment guild stitching for regional retailers and exporting sustainable uniforms.",
  },
  {
    id: "ashraya",
    title: "Ashraya Miyawaki Forests",
    status: "Active",
    focus: "green",
    location: "Across 9 districts",
    year: 2022,
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=70",
    summary:
      "52 dense native micro-forests on degraded commons, co-planted and stewarded by village green-cells.",
  },
  {
    id: "annadaata",
    title: "Annadaata Organic Farming",
    status: "Active",
    focus: "rural",
    location: "Anantapur, Andhra Pradesh",
    year: 2018,
    image:
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=70",
    summary:
      "1,200 smallholder farmers transitioning to regenerative practice with guaranteed-offtake farmer companies.",
  },
  {
    id: "jeevan",
    title: "Jeevan Mobile Health Cells",
    status: "Active",
    focus: "welfare",
    location: "14 mobile clinics",
    year: 2020,
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=70",
    summary:
      "Weekly doorstep health screening, maternal care, and non-communicable disease management for remote villages.",
  },
  {
    id: "pravaha",
    title: "Pravaha Watershed Rebuild",
    status: "Completed",
    focus: "green",
    location: "Anantapur & Kurnool",
    year: 2017,
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=70",
    summary:
      "Watershed rebuild across 8 villages — check dams, recharge pits, and 2 crore litres of rainwater captured yearly.",
  },
  {
    id: "kala",
    title: "Kala Artisan Export Guild",
    status: "Active",
    focus: "rural",
    location: "Pochampally & Channapatna",
    year: 2023,
    image:
      "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=1200&q=70",
    summary:
      "Direct-to-buyer craft cooperatives with traceable supply chains and assured minimum price contracts.",
  },
  {
    id: "annapoorna",
    title: "Annapoorna Nutrition Kitchens",
    status: "Completed",
    focus: "welfare",
    location: "Mahabubnagar cluster",
    year: 2015,
    image:
      "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=1200&q=70",
    summary:
      "Community kitchens serving 18,000 hot meals daily to at-risk children and elders for 8 years.",
  },
  {
    id: "shakti",
    title: "Shakti Rural Tech Cells",
    status: "Upcoming",
    focus: "rural",
    location: "Pilot: 12 villages",
    year: 2026,
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=70",
    summary:
      "Solar-powered rural BPO & digital apprenticeship cells bringing remote tech income to women graduates.",
  },
  {
    id: "abhaya",
    title: "Abhaya Disaster Response Corps",
    status: "Upcoming",
    focus: "welfare",
    location: "South India readiness",
    year: 2026,
    image:
      "https://images.unsplash.com/photo-1526045478516-99145907023c?auto=format&fit=crop&w=1200&q=70",
    summary:
      "A standing corps of 600 trained volunteers for rapid cyclone, flood, and heatwave response in coastal belts.",
  },
];

export const projectFilters = [
  { id: "all", label: "All" },
  { id: "Active", label: "Active" },
  { id: "Completed", label: "Completed" },
  { id: "Upcoming", label: "Upcoming" },
];

export const programs = [
  {
    pillar: "women",
    pillarLabel: "Women Empowerment",
    items: [
      {
        title: "Suvarna Skilling Academy",
        objective: "Certify women in tailoring, embroidery, and hand-finishing.",
        beneficiaries: "4,800 / yr",
        locations: "14 centers · 7 districts",
        duration: "6-month cohorts",
      },
      {
        title: "Arthika Financial Literacy",
        objective: "Banking, credit, and household budgeting at neighborhood scale.",
        beneficiaries: "22,000 / yr",
        locations: "62 districts",
        duration: "8-week circles",
      },
      {
        title: "Netri Leadership Fellowship",
        objective: "A pipeline of women panchayat leaders and collective heads.",
        beneficiaries: "120 / yr",
        locations: "All states active",
        duration: "12-month fellowship",
      },
    ],
  },
  {
    pillar: "green",
    pillarLabel: "Green Environment",
    items: [
      {
        title: "Ashraya Miyawaki Forests",
        objective: "Dense, native-species micro-forests on degraded commons.",
        beneficiaries: "1.4M saplings planted",
        locations: "52 sites · 9 districts",
        duration: "3-yr stewardship",
      },
      {
        title: "Pravaha Watershed Rebuild",
        objective: "Check dams, percolation pits, and pond rejuvenation.",
        beneficiaries: "86 water bodies",
        locations: "4 drought-hit states",
        duration: "Multi-year rolling",
      },
      {
        title: "Swachh Gaon Plastic Pact",
        objective: "Village-level plastic audits, reuse centers, and refusals.",
        beneficiaries: "340 villages",
        locations: "3 states",
        duration: "Ongoing",
      },
    ],
  },
  {
    pillar: "rural",
    pillarLabel: "Rural Employment",
    items: [
      {
        title: "Annadaata Organic Clusters",
        objective: "Smallholders transitioning to certified organic with offtake.",
        beneficiaries: "1,200 farmers",
        locations: "Andhra Pradesh",
        duration: "3-yr cycles",
      },
      {
        title: "Kala Craft Export Guilds",
        objective: "Direct-to-buyer artisan cooperatives with minimum-price contracts.",
        beneficiaries: "2,700 artisans",
        locations: "Telangana, Karnataka, TN",
        duration: "Ongoing",
      },
      {
        title: "Shakti Rural Tech Cells",
        objective: "Solar-powered digital apprenticeships for rural graduates.",
        beneficiaries: "360 / yr (pilot)",
        locations: "12 pilot villages",
        duration: "12-month cohorts",
      },
    ],
  },
  {
    pillar: "welfare",
    pillarLabel: "Social Welfare",
    items: [
      {
        title: "Annapoorna Nutrition",
        objective: "Daily hot meals for at-risk children, pregnant mothers, and elders.",
        beneficiaries: "18,000 / day",
        locations: "140 kitchens",
        duration: "Ongoing",
      },
      {
        title: "Jeevan Mobile Health",
        objective: "Doorstep primary and maternal health screenings.",
        beneficiaries: "210,000 / yr",
        locations: "14 mobile cells",
        duration: "Weekly rotation",
      },
      {
        title: "Abhaya Disaster Corps",
        objective: "Trained volunteer first-responder corps for climate shocks.",
        beneficiaries: "600 responders",
        locations: "Coastal & heat belts",
        duration: "Always-on readiness",
      },
    ],
  },
];

export const testimonials = [
  {
    name: "Lakshmi Devi",
    role: "Founding member, Suvarna Cooperative · Medak",
    quote:
      "My daughter tells her teachers that her mother designs uniforms for real stores. That sentence alone changed our house.",
  },
  {
    name: "Ramesh Naik",
    role: "Farmer, Annadaata Cluster · Anantapur",
    quote:
      "In the first year of regenerative farming I earned less. By the third, my soil earned for me. Now my son wants to farm too.",
  },
  {
    name: "Sister Rosamma",
    role: "Coordinator, Jeevan Health Cell · Khammam",
    quote:
      "Before Jeevan, pregnant women walked 14 km for a check-up. Now the clinic walks to them. That is the whole change.",
  },
];

export const awards = [
  "CSR Impact Award 2023",
  "NITI Aayog Livelihood Fellowship",
  "GuideStar India Platinum Seal",
  "Ministry of Rural Dev. Recognition",
  "UN SDG Action Partner",
  "Bharat Green Enterprise 2024",
];

export const partners = [
  "Azim Premji Foundation",
  "Tata Trusts",
  "HDFC CSR",
  "ITC Mission Sunehra Kal",
  "Mahindra Foundation",
  "Infosys Foundation",
  "Deshpande Foundation",
  "Sattva Consulting",
];

export const team = [
  {
    name: "Priya Rao",
    role: "Founder & Managing Trustee",
    bio: "Former development economist turned community organizer. Thirteen years in the field, still shows up to village meetings first.",
    photo:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=70",
  },
  {
    name: "Arjun Mehta",
    role: "Chief Operating Officer",
    bio: "Builds the operating system behind every program — logistics, data, compliance, and the boring infrastructure that lets impact happen.",
    photo:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=70",
  },
  {
    name: "Dr. Fatima Sheikh",
    role: "Head of Women's Programs",
    bio: "Leads Suvarna, Arthika, and Netri. A physician-turned-collective-builder with strong opinions about who 'beneficiary' really means.",
    photo:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=70",
  },
  {
    name: "Vikram Gonela",
    role: "Head of Green Programs",
    bio: "Ecologist who has planted more native species than he can count. Won't stop until every commons has canopy again.",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=70",
  },
  {
    name: "Kavitha Reddy",
    role: "Head of Rural Livelihoods",
    bio: "Runs the artisan guilds and farmer producer companies. Negotiates contracts, loves spreadsheets, refuses exploitative margins.",
    photo:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=70",
  },
  {
    name: "Neeraj Kumar",
    role: "Head of Welfare & Response",
    bio: "Oversees Annapoorna, Jeevan, and Abhaya. Spent ten years in disaster response before joining — calm under any storm.",
    photo:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=600&q=70",
  },
];

export const fieldForce = [
  { label: "Field coordinators", value: 280 },
  { label: "Community volunteers", value: 1420 },
  { label: "Master trainers", value: 95 },
  { label: "Village green-cell leads", value: 340 },
];
