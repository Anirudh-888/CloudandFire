export const projects = [
  {
    id: "heliri-bengaluru",
    name: "HELIRI BENGALURU",
    category: "Civic Tech & Geospatial Intelligence",
    tagline: "Civic Grievance & Spatial Mapping Platform",
    description: "A production-grade geospatial platform enabling Bengaluru citizens and urban administrators to report, geolocate, triage, and track municipal infrastructure issues in real-time across ward boundaries.",
    tags: ["React", "FastAPI", "Leaflet"],
    status: "Production Deployed",
    location: "Bengaluru, Karnataka",
    highlights: [
      "Sub-second spatial polygon queries across 198+ BBMP administrative wards",
      "Dynamic Leaflet tile rendering with cluster markers and heatmaps for recurring road distress",
      "Asynchronous FastAPI backend handling multi-part image uploads and geospatial coordinate indexing",
      "Role-based grievance dispatch dashboard with automated SLA routing for civic engineers"
    ],
    architecture: {
      frontend: "React SPA with Leaflet.js, OpenStreetMap raster layers, custom vector polygons, Tailwind CSS",
      backend: "FastAPI (Python) with async worker tasks for spatial indexing and coordinate validation",
      database: "PostgreSQL with PostGIS extensions for spatial radius searches and ST_Contains ward lookups",
      storage: "S3-compatible object storage for photo evidence compression and automated EXIF stripping"
    },
    metrics: [
      { label: "Wards Mapped", value: "198 Wards" },
      { label: "Spatial Queries", value: "<120ms Latency" },
      { label: "Tile Engine", value: "Leaflet + GeoJSON" }
    ],
    interactiveType: "map"
  },
  {
    id: "retaiq",
    name: "RETAILIQ",
    category: "Conversational AI & Retail Operations",
    tagline: "Voice-First AI Store Manager & Inventory Assistant",
    description: "An operational voice-first platform engineered for high-throughput retail store managers to query inventory, reconcile daily stock variances, and trigger purchase orders hands-free using real-time voice input.",
    tags: ["FastAPI", "Speech-to-Text", "AI"],
    status: "Operational Pilot",
    location: "Multi-Store Retail",
    highlights: [
      "Low-latency streaming speech recognition pipeline optimized for noisy retail floor environments",
      "Deterministic intent classification & fuzzy product matching across 10,000+ SKU catalogs",
      "Real-time voice-to-action pipeline: instant stock balance retrieval and automated vendor PO generation",
      "Offline-resilient sync engine bridging local POS terminals with centralized cloud telemetry"
    ],
    architecture: {
      speechPipeline: "Whisper speech-to-text fine-tuned on regional retail terminology and ambient noise profiles",
      backend: "FastAPI with streaming WebSockets for bi-directional audio chunking and instant transcription",
      engine: "Deterministic slot-filling model + LLM fallback for conversational catalog search",
      posIntegration: "RESTful webhook sync connecting to existing retail ERPs and barcode registries"
    },
    metrics: [
      { label: "Speech Latency", value: "<400ms Streaming" },
      { label: "SKU Catalog", value: "10,000+ Items" },
      { label: "Interface", value: "Hands-Free Voice" }
    ],
    interactiveType: "voice"
  },
  {
    id: "evntpulse",
    name: "EVNTPULSE",
    category: "Smart Campus & Club Event Intelligence Hub",
    tagline: "Campus Event Operating System & Intelligence Hub",
    liveUrl: "https://evntpulseapp-e3fgeweegte0bvbk.southeastasia-01.azurewebsites.net/",
    badge: "1st Place Winner — MVJCE SDC Startup Challenge (Sept 2026)",
    description: "Unified smart campus event operating system connecting students, college clubs, and campus administrators on a single real-time platform—replacing fragmented Google Forms, manual spreadsheets, and gate lists with cryptographic QR ticketing, live session polling, and explainable event health analytics.",
    tags: ["React", "FastAPI", "SQLite", "Azure"],
    status: "Production Deployed (Azure)",
    location: "Bengaluru, Karnataka (MVJCE SDC)",
    highlights: [
      "Cryptographic Zero-Fraud QR Ticketing & Gate Scanning: Tamper-resistant verifiable QR passes with instant gate verification and live venue capacity tracking",
      "Real-Time Live Session Polling: Interactive audience pulse checks and instant sentiment voting during active campus hackathons, workshops, and fests",
      "Explainable Event Health Score (4-Factor Engine): Real-time index evaluating registration velocity, check-in conversion, live poll participation, and operational pacing",
      "Role-Based Campus Ecosystem: Dedicated portals for Students (live RSVP & QR passes), Club Leads (publishing & gate scanning), and Campus IT Admins (JWT auth & oversight)"
    ],
    architecture: {
      frontend: "React SPA with Tailwind CSS, responsive role-based navigation, cryptographic QR scanner, and live poll widgets",
      backend: "FastAPI (Python) with JWT authentication, asynchronous REST endpoints, and role-based access control (RBAC)",
      database: "SQLite relational engine with indexed event schemas, attendance ledgers, and tamper-resistant ticket verification tables",
      cloudDeployment: "Automated CI/CD via GitHub Actions deployed to Microsoft Azure Web App (Southeast Asia datacenter)"
    },
    metrics: [
      { label: "Gate Verification", value: "<150ms QR Scan" },
      { label: "SDC Challenge", value: "1st Place Winner" },
      { label: "Cloud Hosting", value: "Azure Web App" }
    ],
    interactiveType: "telemetry"
  }
];

export const capabilities = [
  {
    id: "enterprise-platforms",
    number: "01",
    title: "Enterprise Web & Mobile Platforms",
    subtitle: "High-concurrency systems engineered for fault tolerance, security, and sustained scale.",
    deliverables: [
      "Full-stack reactive web applications with sub-second time-to-interactive",
      "Distributed microservices & asynchronous REST/gRPC backend APIs",
      "PostgreSQL/PostGIS & MongoDB schema modeling with zero-downtime migration plans",
      "Hardened role-based access control (RBAC), multi-tenancy, and audit logging pipelines"
    ],
    techStack: ["TypeScript", "React", "Next.js", "FastAPI", "Node.js", "PostgreSQL", "Docker", "AWS / GCP"],
    approach: "We architect web and mobile platforms with clean separation of concerns, end-to-end type safety, and automated test coverage. No fragile monolithic spaghetti code; every service is containerized, horizontally scalable, and instrumented with structured observability from day zero."
  },
  {
    id: "practical-ai",
    number: "02",
    title: "Practical AI Automation & LLM Workflows",
    subtitle: "Production-grade AI systems that eliminate operational bottlenecks without the research lab overhead.",
    deliverables: [
      "Streaming Speech-to-Text & Voice-driven operational interfaces",
      "Production RAG architectures with strict deterministic citations and low-latency vector indexes",
      "Custom agentic workflows for automated document triage, data extraction, and invoice reconciliation",
      "Model quantization, fine-tuning, and self-hosted inference pipelines on cloud GPUs"
    ],
    techStack: ["Whisper / Deepgram", "FastAPI", "LangChain / LlamaIndex", "Pinecone / Qdrant", "Claude / GPT-4 / Gemini", "vLLM"],
    approach: "We strictly reject generic prompt wrappers and AI toy apps. We engineer production-grade AI pipelines that handle edge cases, audio noise, API rate limits, hallucination guards, and strict structured JSON validation for mission-critical enterprise workflows."
  },
  {
    id: "founder-mvp",
    number: "03",
    title: "Founder-Focused MVP Engineering",
    subtitle: "Zero-to-one velocity for venture-backed and bootstrapped founders requiring clean code that scales.",
    deliverables: [
      "Production-ready core product built and shipped in 2 to 4 weeks",
      "Clean, modular codebase ready for technical investor due diligence",
      "Integrated authentication, payments, event analytics, and transaction emails",
      "Automated CI/CD pipelines deploying to production on every Git push"
    ],
    techStack: ["React / Tailwind", "FastAPI / Node.js", "Supabase / PostgreSQL", "Stripe / Razorpay", "GitHub Actions", "Vercel / Render"],
    approach: "Founders cannot afford slow 6-month consulting cycles. We pair senior systems engineers directly with founders to distill technical roadmaps down to core defensible mechanics, delivering fully functional, beautiful, and secure software built to handle Series A growth."
  }
];

// Coherent Client-Side State Models for Proof of Work

export const heliriWardData = {
  Koramangala: {
    wardNumber: "151",
    zone: "South Zone • BBMP",
    coordinates: "12.9352° N, 77.6245° E",
    epsg: "EPSG:4326 | WGS 84",
    areaSqKm: "4.8 km²",
    polygonVertices: 1420,
    queryLatency: "84ms",
    activeGrievancesCount: "14 Active",
    resolutionRate: "94.2%",
    primaryIssue: {
      id: "BBMP-BLR-4091",
      category: "Road Distress & Pothole Cluster",
      location: "80ft Road, Sony World Signal Junction",
      priority: "HIGH",
      severity: "Level 3 Surface Degradation",
      slaTarget: "4h SLA",
      status: "Assigned to Ward Engineer",
      team: "Team BBMP-S12",
      reportedAt: "26 mins ago",
      coordinates: "12.9348° N, 77.6251° E"
    },
    secondaryHotspot: {
      id: "BBMP-BLR-4074",
      category: "Streetlight Circuit Tripped",
      location: "5th Cross Extension, 17th Main",
      status: "Resolved in 2.8 hrs",
      verified: true
    },
    criticalEscalation: {
      id: "BBMP-BLR-4088",
      category: "Stormwater Drain Silt Block",
      location: "Main Canal Gate #4",
      status: "Priority Escalation • Dispatch Pending",
      urgent: true
    },
    metrics: [
      { label: "Wards Mapped", value: "198 Wards" },
      { label: "Query Latency", value: "84ms" },
      { label: "Ward SLA Rate", value: "94.2%" }
    ]
  },
  "HSR Layout": {
    wardNumber: "174",
    zone: "Bommanahalli Zone • BBMP",
    coordinates: "12.9121° N, 77.6446° E",
    epsg: "EPSG:4326 | WGS 84",
    areaSqKm: "7.1 km²",
    polygonVertices: 1890,
    queryLatency: "76ms",
    activeGrievancesCount: "8 Active",
    resolutionRate: "96.8%",
    primaryIssue: {
      id: "BBMP-BLR-5112",
      category: "Storm Drain Inflow Obstruction",
      location: "19th Main, Sector 2 Canal Boundary",
      priority: "CRITICAL",
      severity: "Silt Inflow > 60%",
      slaTarget: "2h Urgent SLA",
      status: "Escalated to Emergency Desilting Crew",
      team: "Team BBMP-B04",
      reportedAt: "11 mins ago",
      coordinates: "12.9118° N, 77.6452° E"
    },
    secondaryHotspot: {
      id: "BBMP-BLR-5098",
      category: "Dry Waste Segregation Overflow",
      location: "Sector 1 Micro-Collection Hub",
      status: "Truck Dispatched • En Route",
      verified: true
    },
    criticalEscalation: {
      id: "BBMP-BLR-5104",
      category: "Traffic Loop Sensor Disconnect",
      location: "Agara Lake Outer Junction",
      status: "Scheduled Off-Peak 23:00",
      urgent: false
    },
    metrics: [
      { label: "Wards Mapped", value: "198 Wards" },
      { label: "Query Latency", value: "76ms" },
      { label: "Ward SLA Rate", value: "96.8%" }
    ]
  },
  Indiranagar: {
    wardNumber: "89",
    zone: "East Zone • BBMP",
    coordinates: "12.9784° N, 77.6408° E",
    epsg: "EPSG:4326 | WGS 84",
    areaSqKm: "3.9 km²",
    polygonVertices: 1640,
    queryLatency: "92ms",
    activeGrievancesCount: "19 Active",
    resolutionRate: "91.5%",
    primaryIssue: {
      id: "BBMP-BLR-3320",
      category: "Pedestrian Walkway Slab Displacement",
      location: "100ft Road, Metro Pillar #42",
      priority: "MEDIUM",
      severity: "Footpath Safety Hazard",
      slaTarget: "12h Standard SLA",
      status: "Materials Dispatched to Contractor",
      team: "Team BBMP-E08",
      reportedAt: "42 mins ago",
      coordinates: "12.9780° N, 77.6415° E"
    },
    secondaryHotspot: {
      id: "BBMP-BLR-3309",
      category: "Commercial Noise Telemetry Trigger",
      location: "12th Main Nightlife Corridor",
      status: "Monitored via IoT Sound Sensors",
      verified: true
    },
    criticalEscalation: {
      id: "BBMP-BLR-3315",
      category: "Tree Canopy Overhead Cable Strain",
      location: "Double Road / CMH Junction",
      status: "Forest Cell Crew Queued",
      urgent: false
    },
    metrics: [
      { label: "Wards Mapped", value: "198 Wards" },
      { label: "Query Latency", value: "92ms" },
      { label: "Ward SLA Rate", value: "91.5%" }
    ]
  },
  Bellandur: {
    wardNumber: "150",
    zone: "Mahadevapura Zone • BBMP",
    coordinates: "12.9304° N, 77.6784° E",
    epsg: "EPSG:4326 | WGS 84",
    areaSqKm: "11.4 km²",
    polygonVertices: 2350,
    queryLatency: "108ms",
    activeGrievancesCount: "27 Active",
    resolutionRate: "88.7%",
    primaryIssue: {
      id: "BBMP-BLR-6041",
      category: "Sewer Line Backpressure & Surface Overflow",
      location: "Green Glen Layout, Gate 3",
      priority: "CRITICAL",
      severity: "Effluent Hydraulic Surge",
      slaTarget: "3h Urgent SLA",
      status: "BWSSB Jetting Machine Deployed on Site",
      team: "Team BWSSB-M02",
      reportedAt: "8 mins ago",
      coordinates: "12.9301° N, 77.6790° E"
    },
    secondaryHotspot: {
      id: "BBMP-BLR-6029",
      category: "Pavement Edge Erosion from Runoff",
      location: "ORR Service Road Km 14.2",
      status: "Barricaded • Repair In Progress",
      verified: true
    },
    criticalEscalation: {
      id: "BBMP-BLR-6037",
      category: "Lake Inflow Sluice Gate Silt Load",
      location: "Bellandur North Inflow Weir",
      status: "Priority Escalation • Telemetry Active",
      urgent: true
    },
    metrics: [
      { label: "Wards Mapped", value: "198 Wards" },
      { label: "Query Latency", value: "108ms" },
      { label: "Ward SLA Rate", value: "88.7%" }
    ]
  }
};

export const retaiqVoiceData = [
  {
    id: "inventory-lookup",
    label: "Inventory Lookup",
    audioQuery: "Check stock balance for 500ml Cold Pressed Olive Oil",
    parsedIntent: "INVENTORY_LOOKUP",
    confidence: "98.6%",
    latency: "284ms",
    actionType: "STOCK_LEDGER_RETRIEVAL",
    sku: "SKU-77291 • Premium Oils",
    item: "Cold Pressed Virgin Olive Oil 500ml",
    stockLevel: "42 Units",
    stockStatus: "Healthy In Stock",
    stockStatusColor: "emerald",
    location: "Aisle 4B • Bay 2 • Shelf 3",
    lastMovement: "Sale logged 14 mins ago via POS-Terminal #02",
    actionOutput: "No purchase order required. Healthy buffer (Reorder threshold: 15 units).",
    waveformPattern: [35, 65, 40, 90, 75, 45, 80, 60, 95, 30, 85, 55, 70, 90, 40, 65, 80, 50, 60]
  },
  {
    id: "purchase-order",
    label: "Draft Purchase Order",
    audioQuery: "Draft PO for 30 packs of Organic Filter Coffee",
    parsedIntent: "PURCHASE_ORDER_DRAFT",
    confidence: "99.2%",
    latency: "342ms",
    actionType: "ERP_VENDOR_DISPATCH",
    sku: "SKU-31844 • Roasted Coffee",
    item: "Coorg Estate Organic Filter Blend 250g",
    stockLevel: "4 Units",
    stockStatus: "Low Stock Alert",
    stockStatusColor: "amber",
    location: "Aisle 1A • Coffee Rack 04",
    lastMovement: "Stock depleted by 18 units in morning store peak",
    actionOutput: "Drafted PO #PO-8821 for Coorg Roast Co. Total: ₹7,800. Awaiting store manager 1-tap approval.",
    waveformPattern: [50, 80, 60, 100, 85, 70, 90, 65, 80, 50, 95, 75, 85, 100, 60, 80, 70, 55, 65]
  },
  {
    id: "variance-flag",
    label: "Flag Variance",
    audioQuery: "Flag variance in Dairy refrigeration unit 2",
    parsedIntent: "STOCK_VARIANCE_FLAG",
    confidence: "97.8%",
    latency: "318ms",
    actionType: "AUDIT_TICKET_ESCALATION",
    sku: "SECTION-DRY-02 • Chilled Dairy",
    item: "A2 Pasteurized Whole Milk 1L Packets",
    stockLevel: "-6 Units",
    stockStatus: "Shortfall Variance",
    stockStatusColor: "red",
    location: "Walk-in Cooler 02 • Tray B",
    lastMovement: "Discrepancy logged between physical count and barcode registry",
    actionOutput: "Variance ticket #VAR-3091 registered. Real-time SMS alert dispatched to Floor Supervisor Raghav.",
    waveformPattern: [40, 70, 85, 60, 95, 80, 50, 90, 100, 70, 60, 85, 45, 90, 75, 55, 80, 60, 70]
  },
  {
    id: "price-promo",
    label: "Price & Promo Check",
    audioQuery: "What is the retail price and promotion for Almond Flour 1kg?",
    parsedIntent: "PRICE_PROMOTION_QUERY",
    confidence: "99.4%",
    latency: "265ms",
    actionType: "CATALOG_PROMO_LOOKUP",
    sku: "SKU-99210 • Specialty Flours",
    item: "Blanched Almond Flour 1000g Bag",
    stockLevel: "28 Units",
    stockStatus: "Promo Active",
    stockStatusColor: "blue",
    location: "Aisle 3C • Baking Goods",
    lastMovement: "Weekend festival price promotion mapped to POS master",
    actionOutput: "Base MRP: ₹640.00 | Member Promo: ₹576.00 (10% Off). Shelf electronic tag synchronized.",
    waveformPattern: [30, 50, 70, 60, 85, 90, 75, 60, 80, 70, 95, 65, 80, 75, 60, 85, 50, 45, 55]
  }
];

export const evntpulseStageData = [
  {
    id: "qr-gate-scanner",
    name: "QR Gate Scanner",
    timestamp: "00:01",
    stageStatus: "GATE VERIFIED",
    statusBadgeColor: "emerald",
    activeWorker: "FastAPI Gate Dispatch (JWT Secured)",
    workerThreads: "Cryptographic QR Pass Token Verification",
    queueDepth: "0 Fraudulent Passes • Gate Live",
    throughput: "<150ms / scan",
    dataBitrate: "FastAPI + SQLite",
    fps: "Zero-Fraud 100%",
    gpuLoad: "Capacity: 95.1%",
    metric1Label: "Scan Latency",
    metric2Label: "Gate Backend",
    metric3Label: "Pass Integrity",
    timeSeriesWrite: "Attendance Ledger Committed",
    logStdout: [
      "[00:01.08] [QR:VERIFY] Cryptographic token verified: Attendee #0482 (Student Council Fest).",
      "[00:01.24] [GATE:ENTRY] Duplicate check: PASS. Entry recorded in SQLite ledger (142ms).",
      "[00:01.62] [CAPACITY] Main Auditorium capacity updated: 428/450 seats occupied (95.1%)."
    ]
  },
  {
    id: "live-polling",
    name: "Live Polling",
    timestamp: "00:05",
    stageStatus: "STREAM ACTIVE",
    statusBadgeColor: "amber",
    activeWorker: "Real-Time Session Pulse Engine",
    workerThreads: "Interactive Audience Voting Channel",
    queueDepth: "Active Session: SDC Keynote",
    throughput: "320 votes/sec",
    dataBitrate: "FastAPI REST + Web",
    fps: "88.6% Response",
    gpuLoad: "Live Quorum: 382 Active",
    metric1Label: "Poll Ingestion",
    metric2Label: "Live Endpoint",
    metric3Label: "Audience Turnout",
    timeSeriesWrite: "Vote Tally Aggregated",
    logStdout: [
      "[00:05.12] [POLL:DISPATCH] Live pulse launched: 'AI Agents in Campus Hackathons'.",
      "[00:05.41] [VOTE:INGEST] 382 student votes ingested across 4 concurrent club tracks.",
      "[00:05.89] [SENTIMENT] Instant breakdown: 78% High Interest, 16% Moderate, 6% Neutral."
    ]
  },
  {
    id: "health-engine",
    name: "Health Score",
    timestamp: "00:10",
    stageStatus: "4-FACTOR COMPUTED",
    statusBadgeColor: "blue",
    activeWorker: "Explainable Event Health Engine",
    workerThreads: "Registration • Check-in • Polling • Pacing",
    queueDepth: "1st Place Winner (MVJCE SDC)",
    throughput: "98.4 / 100 Index",
    dataBitrate: "4-Factor Engine",
    fps: "100% Explainable",
    gpuLoad: "Index: 98.4 Excellent",
    metric1Label: "Health Score",
    metric2Label: "Analytics Engine",
    metric3Label: "Factor Breakdown",
    timeSeriesWrite: "Health Metrics Indexed",
    logStdout: [
      "[00:10.02] [HEALTH:4FACTOR] Registration Velocity (98%), Check-in Conversion (96%).",
      "[00:10.35] [HEALTH:FACTORS] Live Polling Quorum (94%), Session Operational Pacing (98%).",
      "[00:10.74] [EXPLAIN] Composite score 98.4/100: Optimal club engagement & zero bottleneck."
    ]
  },
  {
    id: "campus-ecosystem",
    name: "Campus Ecosystem",
    timestamp: "00:15",
    stageStatus: "AZURE LIVE",
    statusBadgeColor: "emerald",
    activeWorker: "Role-Based Multi-Portal Gateway",
    workerThreads: "Student Portal • Club Lead • Campus IT Admin",
    queueDepth: "Azure Web App (SE Asia)",
    throughput: "9 Campus Clubs",
    dataBitrate: "Azure Web App",
    fps: "JWT RBAC Secured",
    gpuLoad: "CI/CD: GitHub Actions",
    metric1Label: "Club Tenancy",
    metric2Label: "Cloud Hosting",
    metric3Label: "Access Control",
    timeSeriesWrite: "Campus Utilization Synced",
    logStdout: [
      "[00:15.11] [RBAC:JWT] Student discover portal, Club Lead dashboard, and Admin views synced.",
      "[00:15.42] [DEPLOY:AZURE] Production container live on Microsoft Azure (Southeast Asia).",
      "[00:15.80] [CI/CD:ACTIONS] GitHub Actions automated deployment completed: 0 build errors."
    ]
  }
];
