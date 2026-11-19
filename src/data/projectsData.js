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
    category: "Real-time Telemetry & Media Processing",
    tagline: "Analytics & Event Montage Engine",
    description: "A distributed analytics and automated media synthesis engine engineered to process high-concurrency event telemetry and programmatically generate curated visual recap montages from live attendee streams.",
    tags: ["Node.js", "Express", "MongoDB"],
    status: "Enterprise Live",
    location: "Global Events",
    highlights: [
      "High-throughput event stream ingestion handling thousands of concurrent attendee touchpoints",
      "Automated video & photographic montage compilation pipeline using FFmpeg media render queues",
      "Real-time sentiment and stage engagement telemetry dashboards with sub-second polling",
      "Scalable MongoDB time-series indexing and sharded aggregation pipelines"
    ],
    architecture: {
      ingestion: "Node.js & Express clustered microservices with backpressure queue management",
      mediaEngine: "Distributed FFmpeg render worker cluster with hardware-accelerated encoding",
      database: "MongoDB time-series collections with aggregation pipelines for real-time engagement heatmaps",
      delivery: "Edge CDN distribution with pre-signed asset caching for instant montage playback"
    },
    metrics: [
      { label: "Throughput", value: "High Concurrency" },
      { label: "Pipeline", value: "Distributed FFmpeg" },
      { label: "Aggregation", value: "Time-Series MongoDB" }
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
    id: "stage-capture",
    name: "Stage Capture",
    timestamp: "00:04",
    stageStatus: "INGESTION ACTIVE",
    statusBadgeColor: "emerald",
    activeWorker: "Cluster Node #01 (Ingest Core)",
    workerThreads: "4 Dedicated Ingest Workers",
    queueDepth: "0 Backpressure Lag",
    throughput: "1,840 events/sec",
    dataBitrate: "2.4 Gbps raw stream",
    fps: "59.94 fps locked",
    gpuLoad: "24% NVENC capacity",
    timeSeriesWrite: "142 writes/sec into MongoDB",
    logStdout: [
      "[00:04.12] [INGEST:OK] Hardware SDI stream synced: Main Hall Keynote Camera A.",
      "[00:04.45] [TELEMETRY] 1,840 concurrent badge RF touches ingested into buffer.",
      "[00:04.89] [TIMESERIES] Batch #4892 committed to MongoDB events collection."
    ]
  },
  {
    id: "grand-pulse",
    name: "Grand Pulse",
    timestamp: "00:12",
    stageStatus: "GPU RENDERING",
    statusBadgeColor: "amber",
    activeWorker: "CUDA Cluster #02 (Optical Flow)",
    workerThreads: "8 Hardware Transcode Threads",
    queueDepth: "3 Chunk Buffers in Flight",
    throughput: "3,120 events/sec",
    dataBitrate: "1.8 Gbps aggregate",
    fps: "60.00 fps interpolated",
    gpuLoad: "82% NVENC capacity",
    timeSeriesWrite: "380 writes/sec into MongoDB",
    logStdout: [
      "[00:12.02] [FFMPEG:CUDA] Optical flow scene boundary detected at frame 1,440.",
      "[00:12.38] [HEATMAP] Crowd engagement spike detected: 89.4% attention telemetry.",
      "[00:12.79] [COMPOSITOR] Dynamic split-screen highlight reel compilation active."
    ]
  },
  {
    id: "speaker-clean-up",
    name: "Speaker Clean-up",
    timestamp: "00:18",
    stageStatus: "AUDIO NORMALIZED",
    statusBadgeColor: "blue",
    activeWorker: "DSP Filter Pipeline #03",
    workerThreads: "2 Audio Filtering Workers",
    queueDepth: "1 Track in Dynamic Pass",
    throughput: "1,450 events/sec",
    dataBitrate: "1.2 Gbps clean stream",
    fps: "59.94 fps locked",
    gpuLoad: "41% NVENC capacity",
    timeSeriesWrite: "115 writes/sec into MongoDB",
    logStdout: [
      "[00:18.15] [DSP:LUFS] 2-pass loudness normalization locked at -14.0 LUFS target.",
      "[00:18.52] [NOISE-GATE] Attenuated ambient auditorium room reverb by -18dB.",
      "[00:18.91] [AUDIO:SYNC] Multi-channel stem aligned to 4K video timeline within 1.2ms."
    ]
  },
  {
    id: "closing-montage",
    name: "Closing Montage",
    timestamp: "00:24",
    stageStatus: "ASSEMBLY QUEUED",
    statusBadgeColor: "red",
    activeWorker: "Edge Transmuxer & CDN Packager",
    workerThreads: "4 HLS Sharding Workers",
    queueDepth: "Final 4K Master Rendered",
    throughput: "2,200 events/sec",
    dataBitrate: "3.1 Gbps edge egress",
    fps: "60.00 fps master",
    gpuLoad: "12% Standby",
    timeSeriesWrite: "Complete • 84,200 Points Indexed",
    logStdout: [
      "[00:24.04] [MASTER:H.265] 4K 60fps final montage rendered with zero dropped frames.",
      "[00:24.41] [SHARD:HLS] Generated multi-bitrate HLS chunks (4K, 1080p, 720p).",
      "[00:24.88] [DISPATCH:CDN] Asset broadcast to 12 global edge PoPs. Instant play ready."
    ]
  }
];
