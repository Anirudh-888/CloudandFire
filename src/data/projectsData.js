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
    name: "RETAIQ",
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
