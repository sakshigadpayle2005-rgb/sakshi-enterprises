export interface MeshMaterialOption {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  characteristics: string[];
  recommendedFor: string;
}

export interface MeshShadeOption {
  id: 'black' | 'grey' | 'cream';
  name: string;
  hex: string;
  borderHex: string;
  visibilityNote: string;
  interiorMatch: string;
}

export interface FittingSystemOption {
  id: string;
  name: string;
  mechanism: string;
  description: string;
  highlights: string[];
}

export const MESH_MATERIALS: MeshMaterialOption[] = [
  {
    id: 'fiberglass',
    name: 'Fiberglass Mosquito Mesh',
    subtitle: 'Flexible, High-Visibility Architectural Weave',
    description:
      'Constructed from woven fiberglass filaments with a protective coating, offering clear outward visibility, natural airflow, and wrinkle-resistant flexibility for everyday residential windows.',
    characteristics: [
      'Fine uniform mesh aperture for reliable insect protection',
      'Pliable weave suited for both Velcro and chain-based systems',
      'Washable and reusable maintenance cycle',
      'Does not crease easily during removal and re-installation',
    ],
    recommendedFor: 'Bedroom windows, living room casements, and standard residential openings',
  },
  {
    id: 'polyester',
    name: 'Polyester Mosquito Mesh',
    subtitle: 'Resilient, Tear-Resistant Synthetic Fibre',
    description:
      'Engineered for enhanced tensile resilience where curtains, frequent handling, or routine washing demand a sturdy fabric-like synthetic mesh profile.',
    characteristics: [
      'High resistance to stretching during regular cleaning',
      'Soft touch with clean perimeter stitching support',
      'Compatible with custom Velcro and zippered chain tracks',
      'Washable and reusable design for long-term utility',
    ],
    recommendedFor: 'Frequently opened windows, utility balconies, and family living areas',
  },
  {
    id: 'aluminium',
    name: 'Aluminium Mosquito Mesh',
    subtitle: 'Rigid Metallic Architectural Screen',
    description:
      'Woven metallic aluminium wire mesh designed for structural rigidity and durability in framed window and door installations where a firmer screen surface is required.',
    characteristics: [
      'Rigid metallic weave that holds planar form inside frames',
      'Ideal for framed window shutters and semi-exposed openings',
      'Resistant to sag across wider window spans',
      'Easy wipe-down and water-rinse maintenance',
    ],
    recommendedFor: 'Kitchen windows, ground-floor openings, doors, and commercial spaces',
  },
];

export const MESH_SHADES: MeshShadeOption[] = [
  {
    id: 'black',
    name: 'Charcoal Black',
    hex: '#1C1C1E',
    borderHex: '#3A3A3C',
    visibilityNote: 'Absorbs glare for the sharpest outward view toward gardens and balconies.',
    interiorMatch: 'Pairs seamlessly with dark anodised aluminium frames and modern interiors.',
  },
  {
    id: 'grey',
    name: 'Architectural Grey',
    hex: '#6E7278',
    borderHex: '#8E9299',
    visibilityNote: 'Balanced neutral tone that softens daylight while preserving ventilation.',
    interiorMatch: 'Ideal for silver aluminium profiles, concrete finishes, and contemporary offices.',
  },
  {
    id: 'cream',
    name: 'Warm Cream',
    hex: '#EAE2D3',
    borderHex: '#C9BFA8',
    visibilityNote: 'Gently diffuses bright exterior light while blending into warm wall palettes.',
    interiorMatch: 'Complements ivory walls, wooden window frames, and classic residential interiors.',
  },
];

export const FITTING_SYSTEMS: FittingSystemOption[] = [
  {
    id: 'velcro',
    name: 'Velcro-Based Fitting System',
    mechanism: 'Perimeter Hook-and-Loop Architectural Tape Assembly',
    description:
      'A clean, drill-free perimeter attachment method using high-grip hook-and-loop fastening strips applied along the window frame, allowing effortless detachment whenever the mesh needs washing.',
    highlights: [
      'Custom-stitched perimeter border tailored to exact window measurements',
      'Quick peel-and-wash convenience for seasonal cleaning',
      'Neat flush profile around wooden, aluminium, or UPVC frames',
      'Reusable assembly without bulky hardware intrusion',
    ],
  },
  {
    id: 'chain',
    name: 'Chain-Based Fitting System',
    mechanism: 'Zippered Track Access & Perimeter Retention',
    description:
      'Designed with an integrated heavy-duty chain (zipper) closure along the screen perimeter or access panel, enabling you to reach window handles and latches without removing the entire mosquito net.',
    highlights: [
      'Smooth chain zipper operation to open and lock window shutters easily',
      'Keeps perimeter seal intact while providing immediate hand access',
      'Ideal for casement windows, sliding latches, and large openings',
      'Fully removable and washable screen panel',
    ],
  },
];

export interface AluminiumServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  applications: string[];
  features: string[];
}

export const ALUMINIUM_SERVICES: AluminiumServiceItem[] = [
  {
    id: 'aluminium-windows',
    title: 'Aluminium Windows',
    subtitle: 'Custom-Fabricated Casement & Fixed Window Frames',
    description:
      'Precision-built aluminium window frames fabricated to match the exact aperture measurements of residential homes, apartments, and commercial buildings across Nagpur.',
    applications: ['Residential bedrooms & living spaces', 'Commercial facades', 'Kitchen & utility apertures'],
    features: [
      'Clean geometric profiles with durable surface finishes',
      'Measurement-based custom fabrication and on-site installation',
      'Compatible with integrated mosquito mesh tracks and screens',
    ],
  },
  {
    id: 'sliding-windows',
    title: 'Aluminium Sliding Windows',
    subtitle: 'Smooth Multi-Track Gliding Window Systems',
    description:
      'Space-saving horizontal sliding windows engineered for effortless track movement, expansive daylight views, and optional dedicated mosquito mesh sliding shutters.',
    applications: ['Balcony-facing living rooms', 'Modern apartment windows', 'Office cabin exteriors'],
    features: [
      'Two-track and three-track configurations available',
      'Smooth roller hardware and neat interlock profiles',
      'Maximizes natural light and cross-ventilation without swing clearance',
    ],
  },
  {
    id: 'sliding-doors',
    title: 'Aluminium Sliding Doors',
    subtitle: 'Floor-to-Ceiling Architectural Door Systems',
    description:
      'Large-format aluminium and glass sliding doors that connect indoor living areas with balconies, terraces, patios, and commercial entrances.',
    applications: ['Terrace & balcony transitions', 'Showroom & shop entrances', 'Conference room access'],
    features: [
      'Sturdy aluminium framing for wide glass panels',
      'Space-efficient sliding mechanism with secure locking hardware',
      'Custom-sized to suit architectural floor-to-lintel heights',
    ],
  },
  {
    id: 'glass-partitions',
    title: 'Glass Partitions',
    subtitle: 'Modern Interior Zoning with Acoustic & Visual Clarity',
    description:
      'Elegant aluminium-framed glass partitions designed to divide offices, commercial cabins, shops, and modern residential study areas while maintaining openness and daylight flow.',
    applications: ['Corporate offices & cabins', 'Retail shops & clinics', 'Residential study & dining dividers'],
    features: [
      'Slim architectural aluminium framing for a minimal visual footprint',
      'Custom layouts including full-height glass and door integration',
      'Clean installation with minimal disruption to existing interiors',
    ],
  },
  {
    id: 'custom-aluminium',
    title: 'Custom Aluminium Fabrication',
    subtitle: 'Bespoke Enclosures & Architectural Framing',
    description:
      'Tailored aluminium fabrication work built around unique site dimensions, ventilators, utility enclosures, and specialized residential or commercial requirements.',
    applications: ['Duct & utility enclosures', 'Custom ventilators & louvers', 'Bespoke architectural frames'],
    features: [
      'Built from on-site measurements in Nagpur',
      'Coordinated fabrication and installation workflow',
      'Adaptable to renovation and new-build projects alike',
    ],
  },
];

export interface SteelServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  applications: string[];
  features: string[];
}

export const STEEL_SERVICES: SteelServiceItem[] = [
  {
    id: 'balcony-railings',
    title: 'Balcony Railings',
    subtitle: 'Architectural Safety & Exterior Facade Definition',
    description:
      'Custom-fabricated steel balcony railings that combine structural safety with clean modern geometry for independent houses, apartment buildings, and commercial complexes.',
    applications: ['Residential balconies & sit-outs', 'Apartment facade upgrades', 'Terrace perimeters'],
    features: [
      'Custom height, baluster spacing, and handrail profiles',
      'Secure anchoring and precision weld finishing',
      'Tailored to match modern architectural elevations',
    ],
  },
  {
    id: 'staircase-railings',
    title: 'Staircase Railings',
    subtitle: 'Ergonomic Handrails & Structural Balustrades',
    description:
      'Precision-crafted steel staircase railings designed to follow straight, dog-legged, or custom stair flights inside homes, duplexes, residential societies, and commercial buildings.',
    applications: ['Internal duplex staircases', 'Society common stairwells', 'Commercial building access stairs'],
    features: [
      'Measured on-site to match exact stair pitch and landing turns',
      'Smooth handrail joints and sturdy vertical support posts',
      'Clean contemporary and classic railing patterns',
    ],
  },
  {
    id: 'steel-railings',
    title: 'Steel Railings',
    subtitle: 'Durable Perimeter & Access Protection',
    description:
      'Versatile steel railing assemblies for ramps, walkways, corridors, compounds, and elevated decks requiring dependable strength and clean fabrication.',
    applications: ['Walkways & access ramps', 'Compound parapet railings', 'Commercial mezzanine guards'],
    features: [
      'Fabricated for structural rigidity and daily usage',
      'Custom section choices according to site load and layout',
      'Complete fabrication and on-site fitting in Nagpur',
    ],
  },
  {
    id: 'custom-steel',
    title: 'Custom Steel Manufacturing & Fabrication',
    subtitle: 'Bespoke Structural & Utility Steel Work',
    description:
      'End-to-end custom steel fabrication tailored to specific residential, builder, architect, or commercial project drawings and site measurements.',
    applications: ['Custom gates & grilles', 'Structural support frames', 'Utility & commercial steel fixtures'],
    features: [
      'Direct measurement-based fabrication',
      'Built to specification for homeowners, contractors, and architects',
      'End-to-end coordination from quotation to site installation',
    ],
  },
];

export const WHY_CHOOSE_US_ITEMS = [
  {
    id: '01',
    title: 'Customized Solutions',
    description:
      'Every window, door, partition, and railing is fabricated around the functional requirements of your residential or commercial space.',
  },
  {
    id: '02',
    title: 'Multiple Material Options',
    description:
      'Choose from fiberglass, polyester, and aluminium mosquito mesh in black, grey, or cream shades, alongside custom aluminium and steel profiles.',
  },
  {
    id: '03',
    title: 'Measurement-Based Customization',
    description:
      'We take accurate aperture and site measurements prior to fabrication so each frame, net, or railing fits cleanly.',
  },
  {
    id: '04',
    title: 'Window and Door Expertise',
    description:
      'Integrated knowledge across mosquito protection systems, Velcro and chain fittings, sliding windows, and architectural doors.',
  },
  {
    id: '05',
    title: 'Aluminium and Steel Fabrication',
    description:
      'A single trusted Nagpur partner for modern aluminium windows, glass partitions, balcony railings, and custom steel work.',
  },
  {
    id: '06',
    title: 'Installation Services',
    description:
      'Complete on-site fitting and installation across Nagpur for homeowners, builders, architects, societies, and commercial spaces.',
  },
];

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Customer Enquiry',
    description:
      'Share your requirement via our online enquiry form, WhatsApp, or direct contact—whether for a single window mosquito net or full-building aluminium and steel work.',
  },
  {
    number: '02',
    title: 'Measurement and Requirements',
    description:
      'We assess your window, door, partition, or railing dimensions and help you select the right mesh material, shade, fitting system, or metal profile.',
  },
  {
    number: '03',
    title: 'Quotation',
    description:
      'Receive a clear, itemized quotation based on your verified measurements, chosen materials, and installation scope.',
  },
  {
    number: '04',
    title: 'Fabrication and Installation',
    description:
      'Your solution is custom-fabricated to specification and installed neatly at your residential or commercial property in Nagpur.',
  },
];

export const TARGET_AUDIENCES = [
  {
    title: 'Homeowners',
    description: 'Custom window and balcony mosquito nets, sliding windows, and staircase or balcony railings tailored for comfort and safety.',
  },
  {
    title: 'Builders & Contractors',
    description: 'Coordinated multi-unit aluminium window fabrication, steel railings, and insect screen installations for residential developments.',
  },
  {
    title: 'Architects & Interior Designers',
    description: 'Clean-lined aluminium glass partitions, colour-matched mosquito mesh, and bespoke steel fabrication executed to design intent.',
  },
  {
    title: 'Residential Societies',
    description: 'Stairwell railings, common-area aluminium windows, and standardized balcony or window mosquito-net solutions.',
  },
  {
    title: 'Commercial Establishments',
    description: 'Durable aluminium entrances, glass cabin partitions, and protective steel railings built for daily commercial footfall.',
  },
  {
    title: 'Offices & Shops',
    description: 'Modern acoustic-style aluminium glass partitions, sliding doors, and low-maintenance window insect screens.',
  },
];
