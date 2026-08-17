import { ProductCategory } from "@/types";

export const categories: ProductCategory[] = [
  {
    slug: "drainage-water",
    path: "/products/drainage-water",
    navGroup: "products",
    title: "Drainage & Water",
    shortDescription: "Twinwall pipe, land drainage and MDPE water main.",
    intro:
      "We stock a comprehensive range of drainage and water management products for agricultural, domestic and commercial applications.",
    heroImage: {
      src: "/drainage-and-water.jpg",
      alt: "Stacks of twinwall drainage pipe ready for despatch",
    },
    cardImage: {
      src: "/drainage-and-water.jpg",
      alt: "Coils of land drainage pipe stacked in the yard",
    },
    sections: [
      {
        heading: "Twinwall Pipes",
        body:
          "We stock a full range of twinwall pipes, available in both perforated and solid wall options, along with a comprehensive range of fittings to suit.",
      },
      {
        heading: "Land Drainage",
        body:
          "We always maintain high stock levels of land drainage coils, including all associated joiners, reducers and Y-joints.",
      },
      {
        heading: "Blue MDPE Water Main",
        body:
          "We also stock a range of blue MDPE water main pipe, with a full selection of compression fittings to suit.",
      },
    ],
    products: [
      { slug: "twinwall-pipe", name: "Twinwall Pipe", description: "Perforated and solid wall twinwall pipe with fittings.", availability: "in-stock", image: { src: "/twinwall-pipe.jpg", alt: "Lengths of twinwall pipe" } },
      { slug: "land-drainage-coil", name: "Land Drainage Coil", description: "High stock levels of flexible land drainage coil.", availability: "in-stock", image: { src: "/land-drainage-coil.jpg", alt: "Coiled land drainage pipe" } },
      { slug: "land-drainage-fittings", name: "Land Drainage Fittings", description: "Joiners, reducers and Y-joints for drainage coil.", availability: "in-stock", image: { src: "/land-drainage-fittings.jpg", alt: "Land drainage joiners and fittings" } },
      { slug: "blue-mdpe-water-main", name: "Blue MDPE Water Main", description: "Blue MDPE water main pipe with compression fittings.", availability: "in-stock", image: { src: "/blue-mdpe-water-main.jpg", alt: "Reel of blue MDPE water main pipe" } },
    ],
    gallery: [
      { alt: "Twinwall pipe stacked in the yard" },
      { alt: "Blue MDPE water main pipe coil" },
      { alt: "Land drainage fittings laid out" },
      { alt: "Land drainage coil ready for collection" },
    ],
    features: [
      "Perforated and solid wall twinwall pipe",
      "High stock levels of land drainage coil",
      "Compression fittings for MDPE water main",
      "Joiners, reducers and Y-joints available",
      "Suitable for agricultural, domestic and commercial use",
    ],
    faqs: [
      { question: "Do you hold drainage products in stock?", answer: "Yes, we keep high stock levels of twinwall pipe, land drainage coil and MDPE water main, so most orders are available straight away." },
      { question: "Can you help with fittings and joiners?", answer: "We stock a full range of fittings, including joiners, reducers and Y-joints for land drainage, and compression fittings for water main." },
    ],
    relatedSlugs: ["roofing-guttering", "timber-fencing"],
    ctaHeading: "Need help with a drainage project?",
    ctaBody: "Speak to our team about pipe sizes, fittings and quantities for your project.",
  },
  {
    slug: "roofing-guttering",
    path: "/products/roofing-guttering",
    navGroup: "products",
    title: "Roofing & Guttering",
    shortDescription: "Box profile, fibre cement roofing and guttering systems.",
    intro:
      "A comprehensive range of roofing, sheeting and guttering products for agricultural, industrial, commercial and domestic projects.",
    heroImage: {
      src: "/roofing-and-guttering.jpg",
      alt: "Galvanised box profile roofing sheets stacked in the yard",
    },
    cardImage: {
      src: "/roofing-and-guttering.jpg",
      alt: "Fibre cement roofing sheets and trims",
    },
    sections: [
      {
        heading: "Roofing Materials",
        body:
          "We stock a full range of roofing materials, including galvanised steel box profile sheeting, fibre cement sheets and roof lights, along with all associated verge and barge boards.",
      },
      {
        heading: "Guttering",
        body:
          "We also stock a comprehensive range of guttering systems, suitable for everything from smaller DIY projects through to larger agricultural and industrial applications.",
      },
    ],
    products: [
      { slug: "box-profile-sheets", name: "Box Profile Sheets", description: "Galvanised steel box profile roofing sheets.", availability: "in-stock", image: { alt: "Galvanised box profile roofing sheets" } },
      { slug: "fibre-cement-roofing", name: "Fibre Cement Roofing", description: "Fibre cement roof sheets for agricultural buildings.", availability: "in-stock", image: { alt: "Fibre cement roofing sheets" } },
      { slug: "fibre-cement-barge", name: "Fibre Cement Barge & Trims", description: "Verge and barge boards to suit fibre cement roofing.", availability: "in-stock", image: { alt: "Fibre cement barge boards and trims" } },
      { slug: "guttering-systems", name: "Guttering Systems", description: "Guttering suitable for DIY, agricultural and industrial use.", availability: "in-stock", image: { alt: "Guttering system installed on a building" } },
      { slug: "timber-purlins", name: "Timber Purlins", description: "Timber purlins to support roofing structures.", availability: "in-stock", image: { alt: "Stacked timber purlins" } },
    ],
    gallery: [
      { alt: "Box profile sheets stacked ready for delivery" },
      { alt: "Fibre cement roofing on an agricultural building" },
      { alt: "Fibre cement barge boards" },
      { alt: "Guttering fitted to a barn roofline" },
      { alt: "Timber purlins stacked in the timber yard" },
    ],
    features: [
      "Galvanised steel box profile sheeting",
      "Fibre cement sheets and roof lights",
      "Verge and barge boards available",
      "Guttering for domestic to industrial use",
      "Timber purlins to suit roofing projects",
    ],
    faqs: [
      { question: "Can you supply roofing for agricultural buildings?", answer: "Yes, we stock box profile and fibre cement roofing suitable for agricultural, industrial and commercial buildings." },
      { question: "Do you stock guttering for smaller projects?", answer: "We hold guttering systems suitable for everything from small domestic projects through to larger agricultural jobs." },
    ],
    relatedSlugs: ["drainage-water", "timber-fencing"],
    ctaHeading: "Planning a roofing project?",
    ctaBody: "Contact us for advice on sheet sizes, trims and guttering to suit your building.",
  },
  {
    slug: "timber-fencing",
    path: "/products/timber-fencing",
    navGroup: "products",
    title: "Timber & Fencing",
    shortDescription: "Fence panels, sleepers, decking and chestnut fencing.",
    intro:
      "A broad range of timber, fencing and landscaping products for gardens, properties, farms and commercial projects.",
    heroImage: {
      src: "/timber-yard.jpg",
      alt: "Timber fence panels stacked in the timber yard",
    },
    cardImage: {
      src: "/timber-yard.jpg",
      alt: "Railway sleepers stacked for a landscaping project",
    },
    sections: [
      {
        heading: "Timber Products",
        body:
          "We stock a comprehensive range of timber products, including fencing panels and boards, chestnut fencing and pales, railway sleepers, decking and slatted fencing. Whether you're working on a small garden project or a larger fencing or landscaping job, we can supply the timber products you need.",
      },
    ],
    products: [
      { slug: "fence-panels", name: "Fence Panels", description: "A range of timber fence panels for garden boundaries.", availability: "in-stock", image: { alt: "Timber fence panels" } },
      { slug: "fence-boards", name: "Fence Boards", description: "Featherboard and fence boards sold individually or in bulk.", availability: "in-stock", image: { alt: "Timber fence boards" } },
      { slug: "chestnut-pales", name: "Chestnut Pales", description: "Traditional chestnut pale fencing rolls.", availability: "in-stock", image: { alt: "Rolled chestnut pale fencing" } },
      { slug: "cleft-chestnut-fencing", name: "Cleft Chestnut Fencing", description: "Cleft chestnut fencing for gardens and paddocks.", availability: "in-stock", image: { alt: "Cleft chestnut fencing" } },
      { slug: "railway-sleepers", name: "Railway Sleepers", description: "New and reclaimed-style railway sleepers.", availability: "in-stock", image: { alt: "Stacked railway sleepers" } },
      { slug: "timber-decking", name: "Timber Decking", description: "Timber decking boards for outdoor spaces.", availability: "in-stock", image: { alt: "Timber decking boards" } },
      { slug: "round-top-boards", name: "Round Top Boards", description: "Round top fence boards for a traditional finish.", availability: "in-stock", image: { alt: "Round top timber fence boards" } },
      { slug: "slatted-fencing", name: "Slatted Fencing", description: "Contemporary slatted timber fencing panels.", availability: "in-stock", image: { alt: "Slatted timber fencing panel" } },
    ],
    gallery: [
      { alt: "Timber yard with stacked fencing products" },
      { alt: "Railway sleepers used in a garden landscaping project" },
      { alt: "Chestnut pale fencing rolled for delivery" },
      { alt: "Timber decking laid in a garden" },
    ],
    features: [
      "Fence panels and boards in a range of styles",
      "Chestnut pales and cleft chestnut fencing",
      "Railway sleepers for landscaping projects",
      "Timber decking and slatted fencing",
      "Suitable for garden, farm and commercial projects",
    ],
    relatedSlugs: ["composite", "gates", "roofing-guttering"],
    ctaHeading: "Working on a fencing or landscaping project?",
    ctaBody: "Contact our team for advice on timber, quantities and delivery.",
  },
  {
    slug: "composite",
    path: "/products/composite",
    navGroup: "products",
    title: "Composite Products",
    shortDescription: "Low-maintenance decking, cladding, fencing and balustrade.",
    intro:
      "Low-maintenance contemporary products for modern gardens, outdoor spaces and property improvements.",
    heroImage: {
      src: "/composite-products.jpg",
      alt: "Composite decking boards in a modern garden setting",
    },
    cardImage: {
      src: "/composite-products.jpg",
      alt: "Composite cladding fitted to a garden building",
    },
    sections: [
      {
        heading: "Composite Range",
        body:
          "We stock a comprehensive range of composite products, including decking, balustrading, cladding and fencing, available in a variety of styles to suit different projects. We also stock slatted fence panels and artificial grass, providing low-maintenance options for creating modern and attractive outdoor spaces.",
      },
    ],
    products: [
      { slug: "composite-decking", name: "Composite Decking", description: "Low-maintenance composite decking boards.", availability: "in-stock", image: { alt: "Composite decking boards" } },
      { slug: "composite-balustrade", name: "Composite Balustrade", description: "Balustrading to complement composite decking.", availability: "in-stock", image: { alt: "Composite balustrade on a raised deck" } },
      { slug: "composite-cladding", name: "Composite Cladding", description: "Cladding for garden buildings and property features.", availability: "in-stock", image: { alt: "Composite cladding panels" } },
      { slug: "composite-fencing", name: "Composite Fencing", description: "Low-maintenance composite fencing panels.", availability: "in-stock", image: { alt: "Composite fencing panel" } },
      { slug: "slatted-fence-panels", name: "Slatted Fence Panels", description: "Modern slatted fence panels in composite finish.", availability: "in-stock", image: { alt: "Slatted composite fence panel" } },
      { slug: "artificial-grass", name: "Artificial Grass", description: "Low-maintenance artificial grass for gardens.", availability: "in-stock", image: { alt: "Artificial grass laid in a garden" } },
    ],
    gallery: [
      { alt: "Composite decking with balustrade" },
      { alt: "Composite cladding on a modern outbuilding" },
      { alt: "Artificial grass lawn" },
      { alt: "Composite fencing along a garden boundary" },
    ],
    features: [
      "Low-maintenance decking, cladding and fencing",
      "Composite balustrade to complement decking",
      "Slatted fence panels in a modern finish",
      "Artificial grass for low-maintenance lawns",
      "A range of colours and styles available",
    ],
    relatedSlugs: ["timber-fencing", "gates"],
    ctaHeading: "Considering composite for your next project?",
    ctaBody: "Talk to our team about colours, styles and quantities available.",
  },
  {
    slug: "gates",
    path: "/products/gates",
    navGroup: "products",
    title: "Bespoke Gates",
    shortDescription: "Made-to-measure timber, aluminium and composite gates.",
    intro: "Made-to-measure gates supplied in a range of materials, designs and finishes.",
    heroImage: {
      src: "/bespoke-gates.jpg",
      alt: "Hardwood driveway gate fitted at a property entrance",
    },
    cardImage: {
      src: "/bespoke-gates.jpg",
      alt: "Wrought iron gate with decorative finials",
    },
    sections: [
      {
        heading: "Bespoke, Made-to-Measure Gates",
        body:
          "We supply a wide range of bespoke, made-to-measure gates, available in timber, aluminium and composite, with a variety of styles and finishes to suit your property. From driveway and side gates to hardwood and wrought iron designs, we can provide a solution tailored to your individual requirements.",
      },
    ],
    products: [
      { slug: "composite-gates", name: "Composite Gates", description: "Low-maintenance composite gates.", availability: "made-to-measure", image: { alt: "Composite driveway gate" } },
      { slug: "timber-gates", name: "Timber Gates", description: "Timber gates in a range of styles.", availability: "made-to-measure", image: { alt: "Timber garden gate" } },
      { slug: "hardwood-gates", name: "Hardwood Gates", description: "Hardwood gates for a premium finish.", availability: "made-to-measure", image: { alt: "Hardwood entrance gate" } },
      { slug: "aluminium-gates", name: "Aluminium Gates", description: "Low-maintenance aluminium gates.", availability: "made-to-measure", image: { alt: "Aluminium driveway gate" } },
      { slug: "wrought-iron-gates", name: "Wrought Iron Gates", description: "Traditional wrought iron gate designs.", availability: "made-to-measure", image: { alt: "Wrought iron gate" } },
      { slug: "driveway-gates", name: "Driveway Gates", description: "Made-to-measure driveway gates.", availability: "made-to-measure", image: { alt: "Driveway gate at a property entrance" } },
      { slug: "side-gates", name: "Side Gates", description: "Side gates to match your fencing and boundary.", availability: "made-to-measure", image: { alt: "Timber side gate" } },
      { slug: "arched-gates", name: "Arched Gates", description: "Arched top gate designs, including Warwick style.", availability: "made-to-measure", image: { alt: "Warwick arched top gate" } },
    ],
    gallery: [
      { alt: "Composite gate fitted at a driveway entrance" },
      { alt: "Hardwood gates on display" },
      { alt: "Timber side gate fitted to a garden fence" },
      { alt: "Warwick arched top gate design" },
      { alt: "Wrought iron gate with decorative detail" },
    ],
    features: [
      "Made to measure to suit your opening",
      "Timber, aluminium and composite options",
      "Driveway, side and arched gate styles",
      "Hardwood and wrought iron designs available",
      "A finish to suit most property styles",
    ],
    faqs: [
      { question: "Are your gates made to measure?", answer: "Yes, our gates are supplied made to measure to suit your exact opening and requirements." },
      { question: "What materials are available?", answer: "We supply gates in timber, hardwood, aluminium, composite and wrought iron finishes." },
    ],
    relatedSlugs: ["timber-fencing", "composite"],
    ctaHeading: "Looking for a made-to-measure gate?",
    ctaBody: "Talk to us about your requirements, sizes and finish.",
  },
  {
    slug: "animal-housing",
    path: "/agricultural/animal-housing",
    navGroup: "agricultural",
    title: "Animal Housing & Feeding Equipment",
    shortDescription: "Cattle and sheep handling, feeding and housing equipment.",
    intro:
      "A comprehensive range of livestock housing, feeding and handling equipment from trusted agricultural manufacturers.",
    heroImage: {
      src: "/housing-feeding-equipment.jpg",
      alt: "Cattle feeder in a livestock housing shed",
    },
    cardImage: {
      src: "/housing-feeding-equipment.jpg",
      alt: "Sheep housing equipment set up in a farm building",
    },
    sections: [
      {
        heading: "Livestock Equipment",
        body:
          "We supply a comprehensive range of cattle and sheep housing, handling and feeding equipment from leading agricultural manufacturers.",
      },
      {
        heading: "Ritchie",
        body:
          "As the Island's dealer for Ritchie, we can supply their full range of cattle and sheep equipment, including feeding, handling and housing products. Reference: ritchie-d.co.uk",
      },
      {
        heading: "LM Bateman",
        body:
          "We are also the Island's agent for LM Bateman, stocking and supplying their extensive range of livestock handling and housing equipment. Bateman also offers a bespoke design and made-to-measure service, allowing systems to be tailored to individual farm requirements. Reference: lmbateman.co.uk",
      },
      {
        heading: "Rappa",
        body:
          "We also supply a full range of Rappa equipment, including their mobile sheep yard systems, providing practical and flexible solutions for livestock handling. Reference: rappa.co.uk",
      },
    ],
    products: [
      { slug: "cattle-feeders", name: "Cattle Feeders", description: "Ritchie and Bateman cattle feeding equipment.", availability: "order", image: { alt: "Cattle feeder in a farm shed" } },
      { slug: "calf-creeps", name: "Calf Creeps", description: "Calf creep feeding areas and equipment.", availability: "order", image: { alt: "Calf creep feeding pen" } },
      { slug: "cattle-handling", name: "Cattle Handling", description: "Cattle handling equipment and crushes.", availability: "order", image: { alt: "Cattle handling equipment" } },
      { slug: "sheep-housing", name: "Sheep Housing", description: "Sheep housing systems and fittings.", availability: "order", image: { alt: "Sheep housing pens" } },
      { slug: "livestock-trailers", name: "Livestock Trailers", description: "Ritchie livestock trailers.", availability: "order", image: { alt: "Ritchie livestock trailer" } },
      { slug: "mobile-sheep-yards", name: "Mobile Sheep Yards", description: "Rappa mobile sheep yard systems.", availability: "order", image: { alt: "Rappa mobile sheep yard system" } },
      { slug: "bespoke-handling-systems", name: "Bespoke Handling Systems", description: "Made-to-measure handling systems from LM Bateman.", availability: "made-to-measure", image: { alt: "Bespoke livestock handling system" } },
    ],
    gallery: [
      { alt: "Cattle feeder installed in a livestock shed" },
      { alt: "Calf creep feeding area" },
      { alt: "Cattle handling equipment in use" },
      { alt: "Sheep housing pens set up on a farm" },
      { alt: "Ritchie livestock trailer" },
      { alt: "Rappa mobile sheep yard equipment" },
    ],
    features: [
      "Island dealer for Ritchie",
      "Island agent for LM Bateman",
      "Rappa mobile sheep yard systems",
      "Bespoke design and made-to-measure options",
      "Feeding, handling and housing equipment",
    ],
    brands: [
      { name: "Ritchie", slug: "ritchie", url: "https://www.ritchie-d.co.uk" },
      { name: "LM Bateman", slug: "lm-bateman", url: "https://www.lmbateman.co.uk" },
      { name: "Rappa", slug: "rappa", url: "https://www.rappa.co.uk" },
    ],
    faqs: [
      { question: "Can systems be made to measure?", answer: "Yes, LM Bateman offers a bespoke design and made-to-measure service so handling and housing systems can be tailored to your farm." },
      { question: "Are you an authorised dealer?", answer: "We are the Island's dealer for Ritchie and the Island's agent for LM Bateman and Rappa." },
    ],
    relatedSlugs: ["supplies", "equestrian"],
    ctaHeading: "Planning your livestock housing or handling setup?",
    ctaBody: "Speak to our team about Ritchie, LM Bateman and Rappa equipment for your farm.",
  },
  {
    slug: "supplies",
    path: "/agricultural/supplies",
    navGroup: "agricultural",
    title: "Agricultural Supplies",
    shortDescription: "Grass seed, field gates, troughs and agricultural fencing.",
    intro: "A wide range of everyday agricultural essentials for farms, livestock, fencing and land management.",
    heroImage: { alt: "Galvanised steel field gate in a farm boundary" },
    cardImage: {
      src: "/equipment-and-supplies.jpg",
      alt: "Concrete water trough in a livestock field",
    },
    sections: [
      {
        heading: "Grass Seed",
        body:
          "As the Island's agent for Hurrells Seeds, we stock long-term ley and permanent pasture grass seed, with access to their full range of agricultural grass seed and forage products. Reference: hmseeds.co.uk",
      },
      {
        heading: "Field Gates",
        body:
          "We stock a full range of timber and galvanised steel field gates, available in sizes from 3ft up to 16ft, along with a wide selection of gate fittings and accessories.",
      },
      {
        heading: "Concrete Water Troughs",
        body:
          "Our range of concrete water troughs covers capacities from 15 gallons right through to 500 gallons, providing options for a variety of livestock requirements.",
      },
      {
        heading: "Agricultural Fencing",
        body:
          "We carry a comprehensive range of agricultural fencing, including horse netting, sheep and cattle fencing, poultry netting and associated fencing products.",
      },
      {
        heading: "Agricultural Timber",
        body:
          "Our extensive timber yard stocks everything required for agricultural fencing projects, including fence posts, support posts, strainers and gate posts.",
      },
    ],
    products: [
      { slug: "grass-seed", name: "Grass Seed", description: "Hurrells Seeds long-term ley and permanent pasture seed.", availability: "in-stock", image: { alt: "Bags of agricultural grass seed" } },
      { slug: "field-gates", name: "Field Gates", description: "Timber and galvanised steel field gates, 3ft to 16ft.", availability: "in-stock", image: { alt: "Timber field gate" } },
      { slug: "mesh-gates", name: "Mesh Gates", description: "Galvanised mesh field gates and fittings.", availability: "in-stock", image: { alt: "Galvanised mesh field gate" } },
      { slug: "stock-fencing", name: "Stock Fencing", description: "Sheep and cattle stock fencing.", availability: "in-stock", image: { alt: "Stock fencing along a field boundary" } },
      { slug: "horse-netting", name: "Horse Netting", description: "Equestrian fencing netting.", availability: "in-stock", image: { alt: "Horse netting fencing" } },
      { slug: "sheep-fencing", name: "Sheep Fencing", description: "Fencing suitable for sheep enclosures.", availability: "in-stock", image: { alt: "Sheep fencing in a field" } },
      { slug: "cattle-fencing", name: "Cattle Fencing", description: "Robust fencing suitable for cattle.", availability: "in-stock", image: { alt: "Cattle fencing along a boundary" } },
      { slug: "poultry-netting", name: "Poultry Netting", description: "Netting for poultry enclosures.", availability: "in-stock", image: { alt: "Poultry netting fencing" } },
      { slug: "concrete-water-troughs", name: "Concrete Water Troughs", description: "Troughs from 15 gallons to 500 gallons.", availability: "in-stock", image: { alt: "Concrete water trough" } },
      { slug: "timber-fence-posts", name: "Timber Fence Posts", description: "Fence posts for agricultural fencing projects.", availability: "in-stock", image: { alt: "Timber fence posts" } },
      { slug: "strainer-posts", name: "Strainer Posts", description: "Strainer posts for fence line tensioning.", availability: "in-stock", image: { alt: "Timber strainer posts" } },
      { slug: "gate-posts", name: "Gate Posts", description: "Gate posts to suit field and agricultural gates.", availability: "in-stock", image: { alt: "Timber gate posts" } },
    ],
    gallery: [
      { alt: "Clipex fencing post system" },
      { alt: "Ring feeder in a livestock field" },
      { alt: "Ritchie harrows in the yard" },
      { alt: "Concrete water trough in a field" },
      { alt: "Stock fencing along a farm boundary" },
      { alt: "Timber field gate" },
      { alt: "Galvanised mesh gate" },
      { alt: "Octagonal timber fence post" },
    ],
    features: [
      "Island agent for Hurrells Seeds",
      "Field gates from 3ft to 16ft",
      "Concrete troughs from 15 to 500 gallons",
      "Horse, sheep, cattle and poultry fencing",
      "Full timber yard for fencing projects",
    ],
    brands: [{ name: "Hurrells Seeds", slug: "hurrells-seeds", url: "https://www.hmseeds.co.uk" }],
    relatedSlugs: ["animal-housing", "timber-fencing"],
    ctaHeading: "Need agricultural supplies for your farm?",
    ctaBody: "Contact our team for availability, sizes and quantities.",
  },
  {
    slug: "equestrian",
    path: "/equestrian",
    navGroup: "equestrian",
    title: "Equestrian",
    shortDescription: "Stables, field shelters, fencing and bedding.",
    intro: "Practical equestrian products for stables, paddocks, fencing and horse care.",
    heroImage: {
      src: "/equestrian.jpg",
      alt: "Timber stable block and field shelter in a paddock",
    },
    cardImage: {
      src: "/equestrian.jpg",
      alt: "Timber field shelter for horses",
    },
    sections: [
      {
        heading: "Stables & Field Shelters",
        body:
          "We supply a wide range of field shelters and stable blocks, all bespoke and made to suit your individual requirements.",
      },
      {
        heading: "Horse Bedding",
        body:
          "We also keep a selection of horse bedding in stock, including small flake shavings and wood pellets.",
      },
      {
        heading: "Horse Fencing",
        body:
          "For equestrian fencing, we stock everything you need for a range of applications, including horse netting, horse rail and traditional timber post-and-rail fencing. Whether you're building a new stable, improving a field shelter or upgrading your paddock fencing, we can supply the materials you need.",
      },
    ],
    products: [
      { slug: "stable-blocks", name: "Stable Blocks", description: "Bespoke timber stable blocks.", availability: "made-to-measure", image: { alt: "Timber stable block" } },
      { slug: "stable-doors", name: "Stable Doors", description: "Timber stable doors to suit your stable block.", availability: "made-to-measure", image: { alt: "Timber stable door" } },
      { slug: "field-shelters", name: "Field Shelters", description: "Made-to-measure field shelters for paddocks.", availability: "made-to-measure", image: { alt: "Timber field shelter in a paddock" } },
      { slug: "horse-netting", name: "Horse Netting", description: "Equestrian fencing netting.", availability: "in-stock", image: { alt: "Horse netting fencing" } },
      { slug: "horse-rail", name: "Horse Rail", description: "Flexible horse rail fencing.", availability: "in-stock", image: { alt: "Horse rail fencing" } },
      { slug: "timber-post-rail", name: "Timber Post & Rail", description: "Traditional timber post-and-rail fencing.", availability: "in-stock", image: { alt: "Timber post and rail fencing" } },
      { slug: "small-flake-shavings", name: "Small Flake Shavings", description: "Small flake horse bedding shavings.", availability: "in-stock", image: { alt: "Bags of small flake shavings" } },
      { slug: "wood-pellets", name: "Wood Pellets", description: "Wood pellet horse bedding.", availability: "in-stock", image: { alt: "Bags of wood pellet horse bedding" } },
    ],
    gallery: [
      { alt: "Corner stable block in a yard" },
      { alt: "Timber field shelter for horses" },
      { alt: "Horse rail fencing along a paddock" },
      { alt: "Horse netting fencing" },
      { alt: "Bags of horse bedding pellets" },
      { alt: "Bags of shavings for horse bedding" },
    ],
    features: [
      "Bespoke stable blocks and field shelters",
      "Small flake shavings and wood pellets in stock",
      "Horse netting, horse rail and post & rail fencing",
      "Made to suit your individual requirements",
      "Suitable for new builds and upgrades",
    ],
    faqs: [
      { question: "Are stable blocks made to measure?", answer: "Yes, our stable blocks and field shelters are bespoke and made to suit your individual requirements." },
      { question: "What bedding do you stock?", answer: "We keep small flake shavings and wood pellets in stock as standard." },
    ],
    relatedSlugs: ["animal-housing", "supplies"],
    ctaHeading: "Building or improving your equestrian setup?",
    ctaBody: "Contact us to discuss stables, shelters, fencing and bedding.",
  },
  {
    slug: "garden-furniture",
    path: "/garden/garden-furniture",
    navGroup: "garden",
    title: "Garden Furniture",
    shortDescription: "Picnic tables, companion sets and relaxer seating.",
    intro: "Quality garden furniture available to view in our showroom and supplied ready to enjoy.",
    heroImage: {
      src: "/garden-furniture-02.jpg",
      alt: "Wooden garden furniture set displayed in a showroom",
    },
    cardImage: {
      src: "/garden-furniture-02.jpg",
      alt: "Wooden picnic table on a lawn",
    },
    sections: [
      {
        heading: "Garden Furniture Range",
        body:
          "We stock and display a wide range of garden furniture, including picnic tables, garden tables, companion sets, relaxer seating and children's furniture. Our range is available to view in our showroom, giving you the opportunity to see and try the furniture before you buy. For added convenience, our garden furniture comes fully assembled and ready to use, with delivery available.",
      },
    ],
    products: [
      { slug: "picnic-tables", name: "Picnic Tables", description: "Sturdy timber picnic tables.", availability: "in-stock", image: { alt: "Timber picnic table" } },
      { slug: "square-garden-tables", name: "Square Garden Tables", description: "Square timber garden tables.", availability: "in-stock", image: { alt: "Square timber garden table" } },
      { slug: "round-garden-tables", name: "Round Garden Tables", description: "Round timber garden tables.", availability: "in-stock", image: { alt: "Round timber garden table" } },
      { slug: "companion-sets", name: "Companion Sets", description: "Two-seater companion seating sets.", availability: "in-stock", image: { alt: "Timber companion set seating" } },
      { slug: "double-relaxers", name: "Double Relaxers", description: "Double relaxer garden seating.", availability: "in-stock", image: { alt: "Double relaxer garden seat" } },
      { slug: "childrens-furniture", name: "Children's Garden Furniture", description: "Garden furniture sized for children.", availability: "in-stock", image: { alt: "Children's garden table and chairs" } },
    ],
    gallery: [
      { alt: "Garden furniture displayed in a showroom" },
      { alt: "Double relaxer garden seating" },
      { alt: "Companion set on a patio" },
      { alt: "Children's picnic table" },
      { alt: "Round garden table and chairs" },
    ],
    features: [
      "Available to view in our showroom",
      "Fully assembled and ready to use",
      "Delivery available",
      "Picnic tables, companion sets and relaxers",
      "Furniture sized for children",
    ],
    relatedSlugs: ["greenhouses", "timber-fencing"],
    ctaHeading: "Want to see our garden furniture in person?",
    ctaBody: "Visit our showroom or get in touch for availability and delivery.",
  },
  {
    slug: "greenhouses",
    path: "/garden/greenhouses",
    navGroup: "garden",
    title: "Greenhouses",
    shortDescription: "Greenhouses from 4ft to 24ft, made to your requirements.",
    intro: "Greenhouses for gardens and growing spaces of all sizes.",
    heroImage: {
      src: "/greenhouses-02.jpg",
      alt: "Greenhouse set up in a garden growing space",
    },
    cardImage: {
      src: "/greenhouses-02.jpg",
      alt: "Aluminium framed greenhouse",
    },
    sections: [
      {
        heading: "A Range to Suit Every Garden",
        body:
          "We supply a wide range of greenhouses, with options available to suit everything from smaller gardens to larger growing spaces. Our greenhouses can be tailored to your individual requirements, with sizes ranging from 4ft right up to 24ft, along with a variety of options and configurations to suit your needs. We also keep selected greenhouse models in stock for customers looking for a readily available option.",
      },
    ],
    products: [
      { slug: "elite-greenhouse-small", name: "Elite Greenhouse — Compact", description: "Compact greenhouse suitable for smaller gardens.", availability: "in-stock", image: { alt: "Compact greenhouse in a garden" } },
      { slug: "elite-greenhouse-medium", name: "Elite Greenhouse — Medium", description: "Medium-sized greenhouse for keen gardeners.", availability: "order", image: { alt: "Medium sized greenhouse" } },
      { slug: "elite-greenhouse-large", name: "Elite Greenhouse — Large", description: "Larger greenhouse for growing spaces up to 24ft.", availability: "order", image: { alt: "Large greenhouse growing space" } },
    ],
    gallery: [
      { alt: "Greenhouse in a domestic garden" },
      { alt: "Greenhouse interior growing space" },
      { alt: "Larger greenhouse configuration" },
    ],
    features: [
      "Sizes from 4ft up to 24ft",
      "Selected models kept in stock",
      "Configurations tailored to your requirements",
      "Suitable for small gardens to larger growing spaces",
    ],
    relatedSlugs: ["garden-furniture", "supplies"],
    ctaHeading: "Looking for the right greenhouse?",
    ctaBody: "Contact us to discuss sizes, options and availability.",
  },
];

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function getRelatedCategories(category: ProductCategory) {
  return category.relatedSlugs
    .map((slug) => getCategoryBySlug(slug))
    .filter((c): c is ProductCategory => Boolean(c));
}
