/**
 * NIA Website — All text content
 * Update copy, phone numbers, and image paths here.
 * Drop images into public/assets/images/ (see folder structure).
 */

const clinicAddress =
  'A 1/230 , Ground Floor, Golf Course Rd, Opposite Metro Pillar 237, Sector 55, Gurugram, Haryana, 122011'

export const siteInfo = {
  name: 'NIA',
  fullName: 'Next India Institute of Aesthetics',
  tagline: 'NEXT INDIA',
  logo: '/assets/images/logo/clinic_logo.png',
  logoAlt: 'NIA Aesthetics — Advanced Aesthetic & Wellness Clinic',
  phone: '+91 8675200222',
  phoneLabel: 'Clinic',
  phone2: '+91 7065123679',
  phone2Label: 'Admissions',
  whatsapp: '+91 7065123679',
  email: 'customersupport@niia.in',
  address: clinicAddress,
  mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `Next India Institute of Aesthetics, ${clinicAddress}`,
  )}`,
  instagram: 'https://www.instagram.com/niia.in',
  facebook: '',
  linkedin: 'https://www.linkedin.com/in/next-india-aesthetics-clinic-gurugram-a1456b420/',
}

export const navLinks = {
  clinic: [
    { label: 'All Services', href: '/clinic' },
    { label: 'Hair Treatments', href: '/clinic/hair' },
    { label: 'Skin Treatments', href: '/clinic/skin' },
    { label: 'Anti-Aging Treatments', href: '/clinic/anti-aging' },
    { label: 'Laser Treatments', href: '/clinic/laser' },
    { label: 'Body Contouring & Wellness', href: '/clinic/body' },
    { label: 'Dermatology Services', href: '/clinic/dermatological' },
    { label: 'Cosmetic Procedures', href: '/clinic/cosmetic' },
  ],
  institute: [
    { label: 'All Courses', href: '/institute' },
    { label: 'Fellowship Programs', href: '/institute#certificate-programs' },
    { label: 'Certificate Programs', href: '/institute#certificate-programs' },
    { label: 'Workshop Programs', href: '/institute#workshop-programs' },
  ],
  resources: [
    { label: 'Blog', href: '/blog' },
    { label: 'FAQs', href: '/faqs' },
    { label: 'Gallery', href: '/gallery' },
  ],
}

export const heroSlides = [
  {
    id: 1,
    tag: 'EXPERT DERMATOLOGY CARE & ADVANCED TRAINING',
    heading: 'Where Clinical Excellence Meets',
    headingAccent: 'Education',
    description:
      'Experience world-class dermatology treatments and advance your career with our internationally recognized aesthetic medicine programs.',
  },
  {
    id: 2,
    tag: 'PREMIUM SKIN & HAIR SOLUTIONS',
    heading: 'Advanced Treatments for',
    headingAccent: 'Every Concern',
    description:
      'From anti-aging to laser therapies, our expert dermatologists deliver personalized care using cutting-edge technology.',
  },
  {
    id: 3,
    tag: 'LEARN FROM THE BEST',
    heading: 'Shape Your Future in',
    headingAccent: 'Aesthetic Medicine',
    description:
      'Join our fellowship, certificate, and workshop programs designed for aspiring aesthetic specialists across India.',
  },
  {
    id: 4,
    tag: 'TRUSTED BY THOUSANDS',
    heading: 'Your Journey to',
    headingAccent: 'Confidence',
    description:
      'With 15+ years of experience and 25K+ happy patients, NIIA is India\'s premier destination for dermatology and education.',
  },
  {
    id: 5,
    tag: 'HOLISTIC WELLNESS',
    heading: 'Where Beauty Meets',
    headingAccent: 'Science',
    description:
      'Discover a holistic approach to skin health, body contouring, and aesthetic wellness under one roof.',
  },
]

// Image paths — replace with your uploaded files in public/assets/images/hero/
export const heroImages = [
  '/assets/images/hero/slide-1.png',
  '/assets/images/hero/slide-2.jpg',
  '/assets/images/hero/slide-3.jpg',
  '/assets/images/hero/slide-4.png',
  '/assets/images/hero/slide-5.jpg',
]

export const stats = [
  { target: 15, suffix: '+', decimals: 0, label: 'Years Experience' },
  { target: 25, suffix: 'K+', decimals: 0, label: 'Happy Patients' },
  { target: 100, suffix: '+', decimals: 0, label: 'Students Trained' },
  { target: 4.9, suffix: '', decimals: 1, label: 'Patient Rating' },
]

export const accreditations = {
  label: 'ACCREDITATIONS',
  heading: 'Certified & Recognized',
  description:
    'NIIA upholds nationally and internationally recognized standards across clinical care and professional training.',
  items: [
    {
      id: 'iso',
      name: 'ISO',
      fullName: 'International Organization for Standardization',
      description:
        'Certified quality management systems ensuring consistent standards across our clinic and institute operations.',
      logo: '/assets/images/certifications/ISO.png',
    },
    {
      id: 'nsdc',
      name: 'NSDC',
      fullName: 'National Skill Development Corporation',
      description:
        'Aligned with India\'s national skilling ecosystem for industry-relevant aesthetic medicine training.',
      logo: '/assets/images/certifications/nsdc.png',
    },
    {
      id: 'bnwssc',
      name: 'BNWSSC',
      fullName: 'Beauty & Wellness Sector Skill Council',
      description:
        'Recognized training partner under the beauty and wellness sector skills framework.',
      logo: '/assets/images/certifications/b&wssc.png',
    },
    {
      id: 'iao',
      name: 'IAO',
      fullName: 'International Accreditation Organization',
      description:
        'Internationally accredited programs meeting global education and training benchmarks.',
      logo: '/assets/images/certifications/iao.jpg',
    },
  ],
}

export const clinicPage = {
  label: 'OUR CLINIC',
  heading: 'Clinic Services',
  description:
    'Explore our full range of dermatological and aesthetic treatments, each delivered by specialists using advanced technology and personalized care plans.',
}

export const institutePage = {
  label: 'OUR INSTITUTE',
  heading: 'Institute Courses',
  description:
    'Advance your career with fellowship programs, certificate courses, and hands-on workshops led by experienced dermatologists and aesthetic medicine experts.',
}

/** Why Train With Us card on the institute page */
export const instituteWhyTrainWithUs = {
  heading: 'Why Choose NIIA?',
  description: 'Learn Today. Lead Tomorrow.',
  points: [
    'Expert Faculty & Mentorship',
    'Hands-on Clinical Training',
    'Live Patient Demonstrations',
    'Industry-Oriented Curriculum',
    'International Standard Protocols',
    'Small Batch Learning',
    'Certificate on Successful Completion',
    'Placement & Career Guidance',
    'Lifetime Learning Support',
  ],
  ctaLabel: 'Ready to enroll?',
  ctaPrefix: 'Speak with our admissions team at',
}

/** Enroll CTA band at the bottom of the institute page */
export const instituteEnrollCta = {
  heading: 'Enroll Now',
  description:
    'Start your career with hands-on clinical training, expert mentorship, and internationally aligned programs at NIIA — and take the next step toward becoming a leader in aesthetic medicine.',
  buttonLabel: 'Apply for a Course',
  buttonHref: '/contact',
}

const instituteCourseList = [
  {
    id: 'short-term-skin-hair-aesthetics',
    program: 'fellowship',
    category: 'Fellowship',
    title: 'Short-Term Course in Skin & Hair Aesthetics',
    description:
      'Fast-Track Your Skills in Cosmetology. An intensive program covering essential skin and hair treatments, consultation techniques, treatment planning, and practical sessions — ideal for beginners and practicing professionals looking to upgrade their skills.',
    image: '/assets/images/courses/short-term-skin-hair-aesthetics.jpg',
    duration: '15 Days',
    format: 'On-Campus',
    eligibility: '12th Pass',
    price: 50000,
    curriculum: [
      {
        title: 'Introduction to Skin & Hair Aesthetics',
        description: 'Overview of cosmetology fundamentals, hygiene standards, and the role of an aesthetic practitioner.',
      },
      {
        title: 'Skin Analysis & Client Consultation',
        description: 'Skin typing, basic assessment, consultation flow, and building appropriate treatment plans.',
      },
      {
        title: 'Essential Skin Treatments',
        description: 'Foundational facial protocols, cleansing routines, and common skin concern management.',
      },
      {
        title: 'Hair & Scalp Basics',
        description: 'Hair and scalp anatomy, common hair concerns, and introductory hair care treatments.',
      },
      {
        title: 'Treatment Planning & Safety',
        description: 'Selecting suitable treatments, contraindications, aftercare guidance, and client safety essentials.',
      },
      {
        title: 'Practical Sessions',
        description: 'Hands-on practice covering consultation, treatment delivery, and real-world clinic workflow.',
      },
    ],
    highlights: [
      'Open to 12th pass candidates',
      'Ideal for beginners entering cosmetology',
      'Covers essential skin and hair aesthetics',
      'Consultation and treatment planning focus',
      'Hands-on practical training included',
    ],
  },
  {
    id: 'aast',
    program: 'certificate',
    category: 'Certificate',
    title: 'Advance Aesthetic Skin Technician Course (AAST)',
    description:
      'Your first step towards a career in aesthetic skincare. Gain practical expertise in skin analysis, facial treatments, laser assistance, and clinic protocols through hands-on training.',
    image: '/assets/images/courses/aast.jpg',
    duration: '1 Month',
    format: 'On-Campus',
    eligibility: '12th Pass',
    price: 100000,
    curriculum: [
      {
        title: 'Medi-facials',
        descriptionPoints: [
          'Radiofrequency',
          'High frequency',
          'Electroporation',
          'Ultrasonic',
          'Microdermabrasion',
        ],
      },
      {
        title: 'HydraFacial',
        descriptionPoints: ['HydraFacial'],
      },
      {
        title: 'Chemical peels',
        descriptionPoints: [
          'Lactic peel',
          'Pigmentation peel',
          'Hydration peel',
          'Acne peel',
          'Combination peel',
        ],
      },
      {
        title: 'Lasers',
        descriptionPoints: [
          'Diode laser- hair reduction',
          'Nd:yag laser: acne healing',
          'Q-switch laser: carbon facial',
          'IPL: photofacial',
          'Pigmentation laser',
        ],
      },
      {
        title: 'Microneedling',
        descriptionPoints: ['Microneedling'],
      },
      {
        title: 'Bb glow',
        descriptionPoints: ['Bb glow'],
      },
      {
        title: 'Body Therapy',
        descriptionPoints: [
          'Lymphatic ballancer',
          'Lipo laser',
          'Cavitation & body Rf',
        ],
      },
      {
        title: 'Coolsculpt- observation',
        descriptionPoints: ['Coolsculpt- observation'],
      },
    ],
    highlights: [
      'Open to 12th pass candidates',
      'Ideal entry point into aesthetic skincare',
      'Intensive 1-month hands-on training',
      'Covers facials, peels, lasers, and body therapies',
      'Clinic protocol and patient assistance skills',
    ],
  },
  {
    id: 'aesthetic-medicine',
    program: 'fellowship',
    category: 'Fellowship',
    title: 'Fellowship in Aesthetic Medicine',
    description:
      'Intensive certification covering injectables, facial aesthetics, and non-surgical rejuvenation techniques for medical professionals.',
    image: '/assets/images/courses/aesthetic-medicine.jpg',
    duration: '1.5 Months',
    format: 'On-Campus',
    price: "150000",
    curriculum: [
      {
        title: 'Facial Anatomy & Aging',
        description: 'Study facial musculature, fat compartments, and how aging affects aesthetic treatment planning.',
      },
      {
        title: 'Botox & Dermal Fillers',
        description: 'Injection techniques for dynamic wrinkles and volume restoration with natural-looking results.',
      },
      {
        title: 'Chemical Peels & Mesotherapy',
        description: 'Peel selection, application depth, and mesotherapy for skin rejuvenation and glow.',
      },
      {
        title: 'Laser & Light Therapies',
        description: 'Overview of laser and IPL applications for hair removal, pigmentation, and skin tightening.',
      },
      {
        title: 'Business of Aesthetics',
        description: 'Clinic setup, pricing, patient communication, and building a successful aesthetic practice.',
      },
    ],
    highlights: [
      'Industry-recognized certification upon completion',
      'Hands-on training with live patients',
      'Expert faculty with international experience',
      'Career placement assistance',
      'Small batch sizes for personalized attention',
    ],
  },
  {
    id: 'cccc',
    program: 'certificate',
    category: 'Certificate',
    title: 'Certificate Course in Clinical Cosmetology (CCCC)',
    description:
      'Master the science of advanced skin and hair treatments with practical exposure to modern aesthetic procedures and patient management.',
    image: '/assets/images/courses/cccc.jpg',
    duration: '1 Month',
    format: 'On-Campus',
    eligibility: 'BAMS, BUMS, BPT, BDS & BNYS',
    price: 75000,
    curriculum: [
      {
        title: 'Basic concept of skin',
        descriptionPoints: [
          'Skin Anatomy',
          'Skin types & Classification',
          'Skin Disorders, Diseases & Management',
        ],
      },
      {
        title: 'Trichology',
        descriptionPoints: [
          'Hair Anatomy',
          'Hair Disorders & their Management',
        ],
      },
      {
        title: 'Medi-facials',
        descriptionPoints: [
          'RF',
          'HydraFacial',
          'Carbon facial',
          'Ultrasonic',
          'T-oxy',
          'Oxygeneo',
          'Dermalogica',
          'Radiance Revival',
          'Microdermabrasion',
        ],
      },
      {
        title: 'Chemical peels',
        descriptionPoints: [
          'Introduction',
          'Mechanism',
          'Types of acids used in aesthetic industry',
          'Classification of peels- Superficial peel, Medium depth peel, Combination peel',
          'Post care & Management',
        ],
      },
      {
        title: 'Basic concept of laser in skin aesthetic (LHR)',
        descriptionPoints: [
          'Introduction to LHR',
          'Reaction mechanism',
          'Chromophores',
          'Tissue interaction',
          'Clinical range of wavelength',
          'Laser-Diode laser & NdYAG',
          'Contraindications & management',
        ],
      },
      {
        title: 'EBD',
        descriptionPoints: [
          'Body contouring & skin tightening devices',
          'Devices',
          'RF & Ultrasound (cavitation)',
          'Exilis',
          'Coolsculpt',
          'HIFU',
          'Lymphatic Ballancer',
          'TENS & G5 vibrator',
          'I-LIPO',
        ],
      },
    ],
    highlights: [
      'Eligibility focused for BAMS, BUMS, BPT, BDS & BNYS',
      'One-month intensive clinical cosmetology program',
      'Skin, trichology, peels, lasers, and EBD coverage',
      'Hands-on orientation to modern aesthetic procedures',
      'Practice setup and patient management exposure',
    ],
  },
  {
    id: 'laser-ipl',
    program: 'certificate',
    category: 'Certificate',
    title: 'Laser & IPL Certification',
    description:
      'Master laser hair removal, skin resurfacing, and IPL treatments with supervised hands-on sessions on USFDA-approved devices.',
    image: '/assets/images/courses/laser-ipl.jpg',
    duration: '1 Day',
    format: 'On-Campus',
    price: 25000,
    curriculum: [
      {
        title: 'Laser Physics & Safety Protocols',
        description: 'Essential laser science, eye protection, and safety standards for clinical practice.',
      },
      {
        title: 'Laser Hair Removal Techniques',
        description: 'Parameter settings, skin typing, and techniques for effective, safe hair reduction.',
      },
      {
        title: 'IPL for Pigmentation & Rejuvenation',
        description: 'IPL protocols for melasma, sun damage, and overall skin tone improvement.',
      },
      {
        title: 'Fractional Laser & Skin Resurfacing',
        description: 'Fractional laser applications for scars, wrinkles, and texture refinement.',
      },
      {
        title: 'Complication Management',
        description: 'Identify, prevent, and manage common laser-related complications.',
      },
      {
        title: 'Clinical Practicum & Assessment',
        description: 'Supervised hands-on sessions and competency assessment on live cases.',
      },
    ],
    highlights: [
      'Training on USFDA-approved laser systems',
      'Hybrid online theory + clinical sessions',
      'Safety-first approach with certification',
      'Live patient demonstrations',
      'Ongoing faculty mentorship',
    ],
  },
  {
    id: 'prp-gfc',
    program: 'certificate',
    category: 'Certificate',
    title: 'PRP & GFC Certification',
    description:
      'Learn platelet-rich plasma and growth factor concentrate therapies for hair restoration and skin rejuvenation.',
    image: '/assets/images/courses/prp-gfc.jpg',
    duration: '1 Day',
    format: 'On-Campus',
    price: 15000,
    curriculum: [
      {
        title: 'PRP Science & Preparation Methods',
        description: 'Blood draw, centrifugation, and preparation techniques for optimal platelet concentration.',
      },
      {
        title: 'GFC Technology & Protocols',
        description: 'Growth factor concentrate systems, protocols, and clinical applications.',
      },
      {
        title: 'Hair Restoration Applications',
        description: 'PRP and GFC techniques for androgenetic alopecia and hair thinning management.',
      },
      {
        title: 'Facial Rejuvenation with PRP',
        description: 'Microneedling with PRP, under-eye treatments, and skin quality improvement.',
      },
      {
        title: 'Combination Therapies',
        description: 'Integrating PRP/GFC with lasers, microneedling, and other aesthetic modalities.',
      },
      {
        title: 'Patient Selection & Aftercare',
        description: 'Contraindications, expectations management, and post-treatment care guidelines.',
      },
    ],
    highlights: [
      'Online modules with flexible scheduling',
      'Step-by-step preparation demonstrations',
      'Evidence-based treatment protocols',
      'Certificate upon successful completion',
      'Access to faculty Q&A sessions',
    ],
  },
  {
    id: 'spmu-advanced',
    program: 'certificate',
    category: 'Certificate',
    title: 'Certificate Course in Semi-Permanent Makeup (SPMU) Advanced',
    description:
      'Master luxury semi-permanent makeup with expert training, advanced techniques, and hands-on practice. Build confidence, precision, and a rewarding career in the world of aesthetic beauty.',
    image: '/assets/images/courses/spmu-advanced.jpg',
    duration: '7 Days',
    format: 'On-Campus',
    price: 70000,
    curriculum: [
      {
        title: 'Eye Brow Mapping',
        description: 'Precision brow mapping techniques for balanced, symmetrical semi-permanent brow design.',
      },
      {
        title: 'Cheek Blush',
        description: 'Semi-permanent cheek blush application for natural contour and a refreshed appearance.',
      },
      {
        title: 'Micro Blading',
        description: 'Hair-stroke microblading methods for realistic, long-lasting eyebrow enhancement.',
      },
      {
        title: 'Scalp Micro Pigmentation',
        description: 'Scalp micropigmentation protocols for hairline definition and density illusion.',
      },
      {
        title: 'Lip Tint',
        description: 'Lip tinting techniques to enhance shape, tone, and definition with subtle, lasting colour.',
      },
      {
        title: 'Camouflage Techniques for Vitiligo',
        description: 'Colour-matching and camouflage approaches for vitiligo and uneven skin pigmentation.',
      },
      {
        title: 'BB Glow',
        description: 'BB Glow treatments for luminous, even-toned skin with a semi-permanent finish.',
      },
      {
        title: 'Lip Pigmentation',
        description: 'Advanced lip pigmentation for fuller definition, colour correction, and lasting results.',
      },
    ],
    highlights: [
      'Comprehensive SPMU theory and hands-on practical training',
      'Covers brows, lips, cheeks, scalp, and camouflage techniques',
      'Designed for beauty professionals and aspiring PMU artists',
      'Industry-oriented curriculum with live demonstration exposure',
      'Certificate upon successful completion',
    ],
  },
  {
    id: 'spmu-basic',
    program: 'certificate',
    category: 'Certificate',
    title: 'Certificate Course in Semi-Permanent Makeup (SPMU) Basic',
    description:
      'Build foundational skills in semi-permanent makeup with focused theoretical learning and guided hands-on practice — an ideal starting point for beauty professionals entering the field of permanent cosmetics.',
    image: '/assets/images/courses/spmu-basic.jpg',
    duration: '5 Days',
    format: 'On-Campus',
    price: 40000,
    curriculum: [
      {
        title: 'BB Glow',
        description: 'Introduction to BB Glow for improved skin tone, radiance, and semi-permanent finish.',
      },
      {
        title: 'Lip Pigmentation',
        description: 'Foundational lip pigmentation techniques for shape enhancement and natural colour.',
      },
      {
        title: 'Eye Brow Mapping',
        description: 'Core brow mapping principles for proportionate, client-specific brow design.',
      },
      {
        title: 'Micro Blading',
        description: 'Essential microblading skills for creating natural-looking eyebrow hair strokes.',
      },
      {
        title: 'Lip Tint',
        description: 'Basic lip tinting methods for soft colour enhancement and defined lip contours.',
      },
    ],
    highlights: [
      'Foundational SPMU training for beginners and beauty professionals',
      'Focused curriculum covering core brow and lip techniques',
      'Hands-on practice with expert faculty guidance',
      'Stepping stone to advanced semi-permanent makeup training',
      'Certificate upon successful completion',
    ],
  },
  {
    id: 'botox-masterclass',
    program: 'workshop',
    category: 'Workshop',
    title: 'Level 1 Filler Workshop',
    description:
      'Master the art of natural facial enhancement with structured hands-on training in filler fundamentals and safe aesthetic practice.',
    image: '/assets/images/courses/filler1-workshop.jpg',
    duration: '1 Day',
    format: 'On-Campus',
    price: 30000,
    curriculum: [
      {
        title: 'Facial Anatomy for Fillers',
        description: 'Understand facial planes, danger zones, and key anatomical landmarks for safe filler placement.',
      },
      {
        title: 'Patient Assessment',
        description: 'Learn consultation flow, facial analysis, and candidacy evaluation for individualized treatment planning.',
      },
      {
        title: 'Core Filler Indications',
        description: 'Hands-on guidance for mid-face rejuvenation, under-eye fillers, and lip augmentation.',
      },
      {
        title: 'Injection Techniques',
        description: 'Practice depth control, product placement, and injection patterns for natural outcomes.',
      },
      {
        title: 'Complication Prevention & Management',
        description: 'Recognize early warning signs, minimize risks, and manage common filler-related complications.',
      },
    ],
    highlights: [
      'One-day practical workshop',
      'Natural facial enhancement focus',
      'Clinical patient assessment training',
      'Hands-on filler technique practice',
      'Safety-first complication protocols',
    ],
  },
  {
    id: 'advanced-filler-workshop',
    program: 'workshop',
    category: 'Workshop',
    title: 'Level 2 Advanced Filler Workshop',
    description:
      'Advanced contouring with precision and confidence for practitioners looking to upgrade to high-impact filler indications.',
    image: '/assets/images/courses/advanced-filler-workshop.jpg',
    duration: '1 Day',
    format: 'On-Campus',
    price: 50000,
    curriculum: [
      {
        title: 'Advanced Indications',
        description: 'Temple filler, jawline contouring, chin enhancement, and non-surgical nose reshaping.',
      },
      {
        title: 'Advanced Facial Balancing',
        description: 'Comprehensive profiling and proportion-based filler planning for harmonious outcomes.',
      },
      {
        title: 'Cannula & Needle Techniques',
        description: 'Technique selection by area, product rheology, and risk profile for safer advanced treatment.',
      },
    ],
    highlights: [
      'One-day advanced filler upskilling',
      'High-value contouring indications',
      'Precision-based facial balancing',
      'Cannula and needle mastery',
      'Confidence-driven practical learning',
    ],
  },
  {
    id: 'level-1-botox-workshop',
    program: 'workshop',
    category: 'Workshop',
    title: 'Level 1 Botox Workshop',
    description:
      'Precision in every injection with comprehensive hands-on training across full-face Botox applications.',
    image: '/assets/images/courses/botox-workshop.jpg',
    duration: '1 Day',
    format: 'On-Campus',
    price: 40000,
    curriculum: [
      {
        title: 'Full-Face Rejuvenation',
        description: 'Upper face Botox, crow\'s feet, bunny lines, lip Botox/lip flip, smile line correction, and masseter Botox.',
      },
      {
        title: 'Meso Botox & Consultation',
        description: 'Meso Botox concepts with structured patient consultation and expectation setting.',
      },
      {
        title: 'Dosage & Dilution',
        description: 'Dilution standards, unit planning, and dosing strategies for safe and effective outcomes.',
      },
    ],
    highlights: [
      'One-day injectable fundamentals',
      'Comprehensive full-face approach',
      'Consultation + planning workflow',
      'Dosage and dilution confidence',
      'Hands-on Botox technique training',
    ],
  },
  {
    id: 'thread-lift-workshop',
    program: 'workshop',
    category: 'Workshop',
    title: 'Thread Lift Workshop',
    description:
      'Lift without surgery through practical training in thread techniques, patient selection, and live demonstrations.',
    image: '/assets/images/courses/thread-lift-workshop.jpg',
    duration: '1 Day',
    format: 'On-Campus',
    price: 40000,
    curriculum: [
      {
        title: 'Facial Anatomy & Planning',
        description: 'Thread vectors, anchoring zones, and anatomy-led lift design principles.',
      },
      {
        title: 'Mono & Cog Threads',
        description: 'Indications, insertion patterns, and practical use of mono threads and cog threads.',
      },
      {
        title: 'Patient Selection & Live Practice',
        description: 'Candidacy screening, live demonstrations, and supervised hands-on practice.',
      },
    ],
    highlights: [
      'One-day non-surgical lifting training',
      'Mono and cog thread techniques',
      'Anatomy-based treatment planning',
      'Live demonstration exposure',
      'Supervised practical learning',
    ],
  },
  {
    id: 'advanced-thread-lift-course',
    program: 'workshop',
    category: 'Workshop',
    title: 'Advanced Thread Lift Course',
    description:
      'Master advanced lifting techniques with specialized thread procedures and complication management strategies.',
    image: '/assets/images/courses/thread-lift.png',
    duration: '1 Day',
    format: 'On-Campus',
    price: 70000,
    curriculum: [
      {
        title: 'Advanced Procedures',
        description: 'Nose thread lift, scalp threads, neck lift, and advanced facial lifting applications.',
      },
      {
        title: 'Complication Management',
        description: 'Prevention and management pathways for advanced thread-related challenges.',
      },
    ],
    highlights: [
      'Advanced one-day thread module',
      'Specialized facial and neck indications',
      'Nose and scalp thread applications',
      'Complex case handling focus',
      'Complication readiness training',
    ],
  },
  {
    id: 'skin-booster-workshop',
    program: 'workshop',
    category: 'Workshop',
    title: 'Skin Booster Workshop',
    description:
      'Revitalize skin from within through injectable skin quality protocols tailored to hydration and rejuvenation goals.',
    image: '/assets/images/courses/skin-booster.jpg',
    duration: '1 Day',
    format: 'On-Campus',
    price: 25000,
    curriculum: [
      {
        title: 'Skin Booster Modalities',
        description: 'Clinical use of skin boosters, PDRN therapy, and NCTF for skin quality enhancement.',
      },
      {
        title: 'Injection Protocols',
        description: 'Depth, spacing, and technique guidance for safe and effective booster delivery.',
      },
      {
        title: 'Patient Selection',
        description: 'Identify ideal candidates and build realistic, staged treatment plans.',
      },
    ],
    highlights: [
      'One-day skin revitalization workshop',
      'PDRN and NCTF protocol coverage',
      'Injectable technique-focused training',
      'Patient suitability guidance',
      'Rejuvenation-centered treatment planning',
    ],
  },
  {
    id: 'exosome-regenerative-workshop',
    program: 'workshop',
    category: 'Workshop',
    title: 'Exosome & Regenerative Aesthetics Workshop',
    description:
      'Explore the future of skin and hair regeneration with practical regenerative medicine frameworks and protocols.',
    image: '/assets/images/courses/exosome-regenerative-workshop.jpg',
    duration: '1 Day',
    format: 'On-Campus',
    price: 30000,
    curriculum: [
      {
        title: 'Exosome Therapy Fundamentals',
        description: 'Core science, indications, and treatment positioning for exosome-based therapies.',
      },
      {
        title: 'Regenerative Medicine Protocols',
        description: 'Evidence-led protocol structuring for skin and hair regeneration cases.',
      },
      {
        title: 'Combination Therapies',
        description: 'Integrate exosomes with adjunct procedures for synergistic outcomes.',
      },
    ],
    highlights: [
      'One-day regenerative aesthetics focus',
      'Exosome therapy clinical foundations',
      'Protocol-driven treatment execution',
      'Combination therapy strategies',
      'Future-forward clinical upskilling',
    ],
  },
  {
    id: 'iv-drip-therapy-workshop',
    program: 'workshop',
    category: 'Workshop',
    title: 'IV Drip Therapy Workshop',
    description:
      'Wellness through precision medicine with practical IV nutrition and vitamin drip training in clinical settings.',
    image: '/assets/images/courses/iv-drip-therapy-workshop.jpg',
    duration: '1 Day',
    format: 'On-Campus',
    price: 30000,
    curriculum: [
      {
        title: 'IV Nutrition & Vitamin Drips',
        description: 'Formulation concepts, treatment goals, and structured infusion planning.',
      },
      {
        title: 'Safety Protocols',
        description: 'Clinical safety checks, contraindication screening, and infusion best practices.',
      },
      {
        title: 'Patient Selection & Applications',
        description: 'Identify suitable candidates and map protocols to wellness indications.',
      },
    ],
    highlights: [
      'One-day precision wellness workshop',
      'IV nutrition practical framework',
      'Patient screening essentials',
      'Safety-first infusion protocols',
      'Clinical application orientation',
    ],
  },
  {
    id: 'laser-hair-reduction-workshop',
    program: 'workshop',
    category: 'Workshop',
    title: 'Laser Hair Reduction Workshop',
    description:
      'Become an expert in laser hair removal through practical, protocol-based, and safety-driven device training.',
    image: '/assets/images/courses/laser-hair-reduction-workshop.jpg',
    duration: '1 Day',
    format: 'On-Campus',
    price: 40000,
    curriculum: [
      {
        title: 'Laser Physics & Skin Typing',
        description: 'Laser fundamentals, chromophore targeting, and Fitzpatrick-based treatment planning.',
      },
      {
        title: 'Treatment Protocols',
        description: 'Parameter selection, session planning, and endpoint assessment for safe outcomes.',
      },
      {
        title: 'Practical Demonstrations & Safety',
        description: 'Hands-on demonstrations with strict operational safety and post-care guidelines.',
      },
    ],
    highlights: [
      'One-day laser specialization module',
      'Skin typing and parameter confidence',
      'Protocol-based practical training',
      'Safety and guideline emphasis',
      'Real-world demonstration exposure',
    ],
  },
  {
    id: 'advanced-ebd-laser-course',
    program: 'workshop',
    category: 'Workshop',
    title: 'Advanced EBD Laser Course',
    description:
      'Master energy-based devices with advanced applications across resurfacing, pigmentation, scars, and combination plans.',
    image: '/assets/images/courses/advanced-ebd-laser-course.jpg',
    duration: '2 Days',
    format: 'On-Campus',
    price: 30000,
    curriculum: [
      {
        title: 'Advanced EBD Applications',
        description: 'Fractional lasers, pigmentation treatments, scar revision, and skin resurfacing protocols.',
      },
      {
        title: 'Combination Therapy Design',
        description: 'Integrate EBD approaches with multimodal treatment planning for complex cases.',
      },
    ],
    highlights: [
      'Two-day advanced device immersion',
      'Fractional and pigment expertise',
      'Scar and resurfacing protocols',
      'Combination treatment planning',
      'High-level practical orientation',
    ],
  },
  {
    id: 'weight-loss-device-workshop',
    program: 'workshop',
    category: 'Workshop',
    title: 'Weight Loss Device Workshop',
    description:
      'Technology-driven body contouring workshop focused on device use, patient profiling, and protocol planning.',
    image: '/assets/images/courses/weight-loss-device-workshop.jpg',
    duration: '1 Day',
    format: 'On-Campus',
    price: 20000,
    curriculum: [
      {
        title: 'Body Contouring Devices',
        description: 'Device categories, mechanism of action, and clinical indications for fat reduction.',
      },
      {
        title: 'Fat Reduction Protocols',
        description: 'Treatment sequencing and standardized outcome-focused contouring protocols.',
      },
      {
        title: 'Assessment & Treatment Planning',
        description: 'Patient assessment frameworks and personalized treatment plan design.',
      },
    ],
    highlights: [
      'One-day body contouring technology module',
      'Device-specific fat reduction workflows',
      'Structured patient assessment methods',
      'Planning-driven treatment outcomes',
      'Hands-on clinical relevance',
    ],
  },
  {
    id: 'glp1-weight-management-workshop',
    program: 'workshop',
    category: 'Workshop',
    title: 'GLP-1 Weight Management Workshop',
    description:
      'Modern medical weight loss training centered on GLP-1 protocols, patient selection, and follow-up strategy.',
    image: '/assets/images/courses/glp1-weight-management-workshop.jpg',
    duration: '1 Day',
    format: 'On-Campus',
    price: 25000,
    curriculum: [
      {
        title: 'GLP-1 Medication Foundations',
        description: 'Mechanism, indications, and practical framework for medical weight management.',
      },
      {
        title: 'Selection, Dosage & Plans',
        description: 'Patient selection, dosage protocols, and personalized weight management planning.',
      },
      {
        title: 'Follow-Up Strategies',
        description: 'Monitoring, adherence support, and long-term optimization of treatment outcomes.',
      },
    ],
    highlights: [
      'One-day modern obesity medicine module',
      'GLP-1 protocol understanding',
      'Selection and dosage confidence',
      'Structured follow-up workflows',
      'Clinical plan-building skills',
    ],
  },
  {
    id: 'chemical-peels',
    program: 'workshop',
    category: 'Workshop',
    title: 'Chemical Peel Masterclass',
    description:
      'Scientific approach to skin renewal through peel depth selection and indication-based protocol design.',
    image: '/assets/images/courses/chemical-peels.jpg',
    duration: '2 Days',
    format: 'On-Campus',
    price: 20000,
    curriculum: [
      {
        title: 'Peel Science & Depth Selection',
        description: 'From superficial to advanced peels with indication-matched treatment depth.',
      },
      {
        title: 'Clinical Indications',
        description: 'Protocols for acne treatment, pigmentation, melasma, and anti-ageing concerns.',
      },
      {
        title: 'Combination Treatments',
        description: 'Layering and sequencing strategies to improve efficacy while preserving safety.',
      },
    ],
    highlights: [
      'Two-day scientific peel training',
      'Superficial to advanced depth coverage',
      'Acne, melasma, pigment protocols',
      'Anti-ageing treatment frameworks',
      'Combination strategy orientation',
    ],
  },
  {
    id: 'medifacial-workshop',
    program: 'workshop',
    category: 'Workshop',
    title: 'MediFacial Workshop',
    description:
      'Professional facial protocols for every skin type with practical treatment customization training.',
    image: '/assets/images/courses/medifacial-workshop.jpg',
    duration: '1 Day',
    format: 'On-Campus',
    price: 20000,
    curriculum: [
      {
        title: 'Core MediFacial Protocols',
        description: 'Hydra facial, oxygen facial, and carbon facial treatment workflows.',
      },
      {
        title: 'Glow & Rejuvenation Plans',
        description: 'Glow protocols tailored to skin concerns and event-driven treatment goals.',
      },
      {
        title: 'Treatment Customization',
        description: 'Adapt facial protocols by skin type, concern profile, and tolerance.',
      },
    ],
    highlights: [
      'One-day facial protocol intensive',
      'Hydra, oxygen, and carbon facial training',
      'Skin-type specific customization',
      'Protocol-based glow planning',
      'Practical clinic readiness',
    ],
  },
  {
    id: 'mesotherapy-workshop',
    program: 'workshop',
    category: 'Workshop',
    title: 'Mesotherapy Workshop',
    description:
      'Targeted skin and hair rejuvenation training with indication-based mesotherapy planning and injection methods.',
    image: '/assets/images/courses/mesotherapy-workshop.jpg',
    duration: '1 Day',
    format: 'On-Campus',
    price: 25000,
    curriculum: [
      {
        title: 'Skin & Hair Mesotherapy',
        description: 'Use-case based mesotherapy protocols for skin rejuvenation and hair concerns.',
      },
      {
        title: 'Injection Techniques',
        description: 'Practical mesotherapy delivery methods with comfort and safety optimization.',
      },
      {
        title: 'Product Selection',
        description: 'Choose mesotherapy cocktails based on indication, patient profile, and treatment goals.',
      },
    ],
    highlights: [
      'One-day mesotherapy practical course',
      'Skin and hair indication coverage',
      'Technique-focused injectable training',
      'Product selection frameworks',
      'Outcome-driven protocol planning',
    ],
  },
  {
    id: 'advanced-trichology-workshop',
    program: 'workshop',
    category: 'Workshop',
    title: 'Advanced Trichology Workshop',
    description:
      'Comprehensive hair restoration training covering diagnosis, regenerative therapies, and integrated treatment protocols.',
    image: '/assets/images/courses/advanced-trichology-workshop.jpg',
    duration: '2 Days',
    format: 'On-Campus',
    price: 25000,
    curriculum: [
      {
        title: 'Hair Loss Diagnosis',
        description: 'Structured evaluation of hair loss patterns and root-cause clinical assessment.',
      },
      {
        title: 'Core Restoration Modalities',
        description: 'PRP, GFC, mesotherapy, and exosome workflows for staged restoration planning.',
      },
      {
        title: 'Treatment Planning & Protocols',
        description: 'Build evidence-guided clinical protocols for long-term hair regrowth outcomes.',
      },
    ],
    highlights: [
      'Two-day advanced hair restoration training',
      'Diagnosis to protocol end-to-end approach',
      'PRP, GFC, mesotherapy, exosome integration',
      'Comprehensive trichology planning skills',
      'Clinical application-focused curriculum',
    ],
  },
]

function toCourseCard(course) {
  return {
    id: course.id,
    title: course.title,
    description: course.description,
    image: course.image,
    duration: course.duration,
    format: course.format,
    href: `/institute/${course.id}`,
  }
}

export const certificatePrograms = {
  heading: 'Certificate Programs',
  items: [
    ...instituteCourseList.filter((c) => c.program === 'fellowship').map(toCourseCard),
    ...instituteCourseList.filter((c) => c.program === 'certificate').map(toCourseCard),
  ],
}

export const workshopPrograms = {
  heading: 'Workshop Programs',
  items: instituteCourseList.filter((c) => c.program === 'workshop').map(toCourseCard),
}

/** Look up a course by its URL slug (`id`). */
export function getCourseById(id) {
  return instituteCourseList.find((course) => course.id === id) ?? null
}

export const courseDetailLabels = {
  backLink: '← Back to Courses',
  curriculumHeading: 'Curriculum',
  highlightsHeading: 'Program Highlights',
  priceHeading: 'Course Fee',
  gstLabel: '+ GST',
  durationLabel: 'Duration',
  modeLabel: 'Mode',
  eligibilityLabel: 'Eligibility',
  enrollLabel: 'Enroll Now',
  enrollHref: '/contact',
}

/** Shared sidebar on every treatment detail page */
export const treatmentWhyChooseUs = {
  heading: 'Why Choose NIA Aesthetic?',
  points: [
    'Personalized treatment plans',
    'Advanced technology and equipment',
    'Safe and evidence-based procedures',
    'Experienced aesthetic professionals',
    'Hygienic and comfortable environment',
    'Transparent consultation process',
  ],
  ctaLabel: 'Need more details?',
  ctaPrefix: 'Call us at',
}

export const treatmentsSection = {
  label: 'OUR CLINIC',
  heading: 'Advanced Treatments Tailored For You',
  description:
    'Discover our comprehensive range of dermatological and aesthetic treatments designed to enhance your natural beauty and boost your confidence.',
  viewAllLabel: 'View All Services',
  viewAllHref: '/clinic',
  offeringsHeading: 'Treatments We Offer',
  items: [
    {
      id: 'anti-aging',
      title: 'Anti-Aging Treatments',
      description: 'Comprehensive anti-aging solutions designed to restore youthful contours, improve skin quality, and reduce signs of aging.',
      image: '/assets/images/treatments/anti-aging.jpg',
      href: '/clinic/anti-aging',
      offerings: [
        'Botox',
        'Dermal Fillers',
        'Thread Lift',
        'Skin Boosters',
        'Collagen Induction Therapy',
        'Microneedling',
        'RF Microneedling',
      ],
    },
    {
      id: 'laser',
      title: 'Laser Treatments',
      description: 'State-of-the-art laser technology for targeted hair, skin, pigment, and lesion correction with precision and safety.',
      image: '/assets/images/treatments/laser.jpg',
      href: '/clinic/laser',
      offerings: [
        'Laser Hair Reduction',
        'Laser Skin Rejuvenation',
        'Tattoo Removal',
        'Pigmentation Laser',
        'Vascular Lesion Treatment',
        'Mole & Wart Removal (where appropriate)',
        'Carbon Laser Peel',
      ],
    },
    {
      id: 'skin',
      title: 'Skin Treatments',
      description: 'Comprehensive solutions for acne, pigmentation, scars, and all your skin concerns with proven results.',
      image: '/assets/images/treatments/skin.jpg',
      href: '/clinic/skin',
      offerings: [
        'HydraFacial',
        'MediFacial',
        'Chemical Peels',
        'Carbon Laser Peel',
        'Skin Brightening & Glow Treatments',
        'Pigmentation & Melasma Treatment',
        'Acne & Acne Scar Management',
        'Open Pore Reduction',
        'Skin Polishing',
        'Skin Tightening (HIFU/RF)',
        'Vampire Facial (PRP)',
      ],
    },
    {
      id: 'hair',
      title: 'Hair Treatments',
      description: 'Advanced hair restoration and scalp therapies to reduce hair fall, improve scalp health, and stimulate regrowth.',
      image: '/assets/images/treatments/hair.jpg',
      href: '/clinic/hair',
      offerings: [
        'PRP Hair Therapy',
        'GFC Hair Treatment',
        'Hair Mesotherapy',
        'Hair Fall Management',
        'Dandruff & Scalp Therapy',
        'Hair Growth Stimulation',
        'Low-Level Laser Therapy (LLLT)',
      ],
    },
    {
      id: 'body',
      title: 'Body Contouring & Wellness',
      description: 'Body contouring and wellness programs focused on fat reduction, sculpting, skin tightening, and metabolic support.',
      image: '/assets/images/treatments/body.jpg',
      href: '/clinic/body',
      offerings: [
        'Fat Reduction',  
        'Inch Loss Treatments',
        'Body Sculpting',
        'Cellulite Reduction',
        'Body Skin Tightening',
        'IV Wellness Therapy (where permitted)',
        'Weight Management Programs',
      ],
    },
    {
      id: 'dermatological',
      title: 'Dermatology Services',
      description: 'Comprehensive dermatology care for chronic and acute skin conditions, allergies, infections, and nail concerns.',
      image: '/assets/images/treatments/dermatological.jpg',
      href: '/clinic/dermatological',
      offerings: [
        'Eczema Management',
        'Psoriasis Management',
        'Rosacea Treatment',
        'Skin Allergy Consultation',
        'Fungal Skin Infection Treatment',
        'Nail Disorders',
      ],
    },
    {
      id: 'cosmetic',
      title: 'Cosmetic Procedures',
      description: 'Targeted cosmetic procedures for benign lesion removal, scar correction, and structural skin repair.',
      image: '/assets/images/treatments/cosmetic.jpg',
      href: '/clinic/cosmetic',
      offerings: [
        'Mole Removal',
        'Skin Tag Removal',
        'Ear Lobe Repair',
        'Scar Revision',
        'Keloid Management',
      ],
    },
    {
      id: 'aesthetic-gynecology',
      title: 'Aesthetic Gynecology',
      description: 'Aesthetic gynecology treatments focused on intimate wellness, rejuvenation, and non-surgical functional support.',
      image: '/assets/images/treatments/aesthetic-gynecology.jpg',
      href: '/clinic/aesthetic-gynecology',
      offerings: [
        'Intimate Rejuvenation',
        'PRP for Intimate Wellness',
        'Vaginal Tightening (Laser/RF)',
        'Stress Urinary Incontinence Treatments',
      ],
    },
  ],
}

/** Look up a treatment by its URL slug (`id`). */
export function getTreatmentById(id) {
  return treatmentsSection.items.find((item) => item.id === id) ?? null
}

export const coursesSection = {
  label: 'OUR INSTITUTE',
  heading: 'Courses Designed for Every Aspiring Specialist',
  description:
    'Advance your career with our comprehensive training programs led by experienced dermatologists and aesthetic medicine experts.',
  viewAllLabel: 'View All Courses',
  viewAllHref: '/institute',
  items: [
    {
      id: 'certificate',
      title: 'Certificate Courses',
      description: 'Short-term intensive programs for quick skill acquisition in specific aesthetic procedures.',
      image: '/assets/images/courses/certificate.jpg',
      href: '/institute#certificate-programs',
      features: [
        '2-4 week duration',
        'Hands-on training',
        'Industry certification',
        'Flexible schedules',
      ],
      cta: 'Explore Certificate Courses',
    },
    {
      id: 'fellowship',
      title: 'Fellowship Programs',
      description: 'Comprehensive diploma courses covering all aspects of aesthetic dermatology and cosmetology.',
      image: '/assets/images/courses/fellowship.jpg',
      href: '/institute#certificate-programs',
      features: [
        '2-4 week programs',
        'Clinical rotations',
        'International curriculum',
        'Clinical exposure',
      ],
      cta: 'Explore Fellowship Programs',
    },
    {
      id: 'workshops',
      title: 'Workshops',
      description: 'Weekend workshops and masterclasses on the latest techniques and technologies in aesthetic medicine.',
      image: '/assets/images/courses/workshops.jpg',
      href: '/institute#workshop-programs',
      features: [
        '1-3 day sessions',
        'Expert faculty',
        'Live demonstrations',
        'Networking opportunities',
      ],
      cta: 'Explore Workshops',
    },
  ],
}

export const processSection = {
  label: 'OUR PROCESS',
  heading: 'Excellence in Every Step',
  steps: [
    {
      number: '01',
      title: 'Consultation',
      description: 'Personalized assessment with our expert dermatologists to understand your unique needs and goals.',
    },
    {
      number: '02',
      title: 'Treatment Plan',
      description: 'Customized treatment protocol designed specifically for your skin type, concerns, and lifestyle.',
    },
    {
      number: '03',
      title: 'Advanced Care',
      description: 'State-of-the-art treatments performed by certified specialists using premium products and technology.',
    },
    {
      number: '04',
      title: 'Results & Support',
      description: 'Ongoing follow-up care and maintenance programs to ensure lasting, beautiful results.',
    },
  ],
}

export const testimonialsSection = {
  label: 'Testimonials',
  heading: 'Trusted by Thousands of Happy Patients and Students',
  items: [
    {
      id: 1,
      quote:
        'The results exceeded my expectations. The team at NIA is professional, caring, and truly experts in their field. My skin has never looked better!',
      name: 'Priya Sharma',
      location: 'Delhi',
      image: '/assets/images/testimonials/patient-1.jpg',
      rating: 5,
    },
    {
      id: 2,
      quote:
        'I completed the diploma program and it transformed my career. The hands-on training and expert guidance prepared me to excel in aesthetic medicine.',
      name: 'Dr. Ananya Patel',
      location: 'Mumbai',
      image: '/assets/images/testimonials/patient-2.jpg',
      rating: 5,
    },
    {
      id: 3,
      quote:
        'From consultation to aftercare, every step was seamless. The clinic maintains the highest standards of hygiene and patient care. Highly recommended!',
      name: 'Rahul Mehta',
      location: 'Bangalore',
      image: '/assets/images/testimonials/patient-3.png',
      rating: 5,
    },
  ],
}

export const aboutSection = {
  label: 'ABOUT NIIA',
  heading: 'Redefining Dermatology Care & Education in India',
  description:
    'At NIA, we bridge the gap between clinical excellence and professional education. Our state-of-the-art clinic offers world-class dermatological treatments, while our NIIA institute trains the next generation of aesthetic medicine specialists.',
  cta: 'Know More About Us',
  ctaHref: '/about',
  media: {
    src: '/assets/images/about/clinic-interior.png',
    alt: 'NIA — Next India Institute of Aesthetics academy and clinic',
    width: 1254,
    height: 1254,
  },
  features: [
    { title: 'Expert Dermatologists', description: 'Board-certified specialists with international training' },
    { title: 'Advanced Technology', description: 'Latest FDA-approved equipment and treatment protocols' },
    { title: 'Holistic Approach', description: 'Personalized care addressing root causes, not just symptoms' },
    { title: 'Education Excellence', description: 'Internationally recognized curriculum and certifications' },
  ],
}

export const aboutPage = {
  label: 'ABOUT US',
  heading: 'Where Clinical Care Meets Aesthetic Education',
  description:
    'NIIA brings together expert dermatology, advanced treatments, and structured professional training under one trusted name.',
  intro:
    'Next India Institute of Aesthetics (NIIA) was built on a simple belief: exceptional patient care and exceptional education should go hand in hand. Our clinic delivers personalized dermatological and aesthetic treatments, while our institute equips doctors and beauty professionals with the skills, confidence, and clinical exposure to grow in this fast-evolving field.',
  facultyLabel: 'OUR TEAM',
  facultyHeading: 'Meet Our Faculty & Doctors',
  facultyDescription:
    'A multidisciplinary team of dermatologists, aesthetic physicians, and clinical trainers guiding every treatment and training program.',
}

export const aboutFeaturedFaculty = {
  name: 'Dr Vipul Shandilya',
  designation: 'Aesthetic Medicine Consultant',
  specialty: 'Aesthetic Medicine & Neurorehabilitation',
  image: '/assets/images/faculty/vipul-shandilya.jpeg',
  bio:
    'Dr Vipul Shandilya is a renowned Aesthetic Medicine Consultant and Neurorehabilitation specialist. With over 20 years of medical experience, he is an international trainer for Allergan.',
  credentials: [
    'Aesthetic Medicine Consultant',
    'Neurorehabilitation Specialist',
    '20+ Years Medical Experience',
    'International Trainer — Allergan',
  ],
}

export const aboutFaculty = [
  {
    id: 'shweta-pradeep-manchanda',
    name: 'Dr. Shweta Pradeep Manchanda',
    designation: 'Senior Faculty — Aesthetic Medicine',
    specialty: 'Dermatology & Aesthetic Medicine',
    image: '/assets/images/faculty/shweta-pradeep.jpeg',
    description:
      'Gold medalist and top dermatologist at Skin Clinic in Delhi. Holds MBBS, MD (Dermatology, Venereology & Leprosy), and fellowships in aesthetic medicine. Senior faculty teaching aesthetic medicine with practical knowledge and 18 years of experience.',
  },
  {
    id: 'sana',
    name: 'Dr. Sana',
    designation: 'Trainer — Botox, Fillers & Threads',
    specialty: 'Aesthetic Medicine · Punjab',
    image: '/assets/images/faculty/sana.jpeg',
    description:
      'BHMS (Punjab) with a Fellowship in Aesthetic Medicine (USA). Post-operative cancer patient and vitiligo permanent makeup expert. Trainer in Botox, fillers, and threads with 7 years of experience.',
  },
  {
    id: 'poornima-tyagi',
    name: 'Dr. Poornima Tyagi',
    designation: 'Faculty — Aesthetic Training',
    specialty: 'Aesthetic Medicine',
    image: '/assets/images/faculty/poornima-tyagi.jpeg',
    description:
      'BDS with a Fellowship in Aesthetic Medicine. Faculty for aesthetic training, guiding students through practical clinical skills and treatment protocols.',
  },
]

export const aboutCta = {
  heading: 'Want to know more about us?',
  buttonLabel: 'Get in Touch',
  buttonHref: '/contact',
}

export const blogPosts = [
  {
    id: 1,
    slug: '5-essential-skincare-habits-for-glowing-skin',
    category: 'Skincare Tips',
    date: 'March 15, 2026',
    title: '5 Essential Skincare Habits for Glowing Skin',
    image: '/assets/images/blog/blog-1.jpg',
    excerpt:
      'Simple daily habits that protect your skin barrier, boost radiance, and keep your complexion healthy year-round.',
    body: [
      'Healthy, glowing skin starts with consistency — not an overwhelming ten-step routine. At NIA, we recommend focusing on the fundamentals: gentle cleansing, daily sun protection, adequate hydration, and products suited to your skin type.',
      'Start your morning with a mild cleanser to remove overnight buildup without stripping natural oils. Follow with a lightweight moisturizer and broad-spectrum SPF 30 or higher, even on cloudy days. UV exposure remains the leading cause of premature aging and pigmentation.',
      'In the evening, double cleanse if you wear makeup or sunscreen. Incorporate active ingredients like vitamin C in the morning and retinol or niacinamide at night — but introduce one new product at a time to avoid irritation.',
      'Hydration matters inside and out. Drink enough water, use a humidifier in dry seasons, and avoid hot showers that dehydrate the skin. Regular professional facials or dermatologist visits can address concerns that home care alone cannot resolve.',
      'Remember: glowing skin is a marathon, not a sprint. Stick to your routine for at least 6–8 weeks before expecting visible results, and consult our specialists for a plan tailored to your unique needs.',
    ],
  },
  {
    id: 2,
    slug: 'understanding-botox-myths-vs-facts',
    category: 'Anti-Aging',
    date: 'March 10, 2026',
    title: 'Understanding Botox: Myths vs. Facts',
    image: '/assets/images/blog/blog-2.jpg',
    excerpt:
      'Separate fact from fiction about Botox — what it does, who it is for, and what to expect from treatment.',
    body: [
      'Botox is one of the most researched and widely used aesthetic treatments worldwide, yet myths persist. Let us clear the air with evidence-based facts from our clinical team.',
      'Myth: Botox freezes your face and looks unnatural. Fact: When administered by a trained dermatologist using precise dosing, Botox softens dynamic wrinkles — the lines formed by repeated expressions — while preserving natural movement.',
      'Myth: Botox is only for older patients. Fact: Preventive Botox in your late twenties or thirties can reduce the depth of wrinkles that form over time. The right timing depends on your skin, lifestyle, and goals.',
      'Myth: Results are instant and permanent. Fact: You will typically see results within 3–7 days, with full effect at two weeks. Results last 3–6 months, after which muscle activity gradually returns.',
      'At NIA, every Botox treatment begins with a thorough consultation. We assess your facial anatomy, discuss expectations, and create a subtle, refreshed look — never an overdone appearance.',
    ],
  },
  {
    id: 3,
    slug: 'career-opportunities-in-aesthetic-medicine',
    category: 'Education',
    date: 'March 5, 2026',
    title: 'Career Opportunities in Aesthetic Medicine',
    image: '/assets/images/blog/blog-3.jpg',
    excerpt:
      'Explore the growing field of aesthetic dermatology and how NIIA\'s programs prepare you for a rewarding career.',
    body: [
      'Aesthetic medicine is one of the fastest-growing specialties in healthcare. Rising demand for non-invasive treatments, combined with increasing patient awareness, has created abundant career opportunities for qualified professionals.',
      'Dermatologists, dentists, nurses, and allied health graduates can all find pathways into aesthetic practice — from injectables and laser therapies to skin rejuvenation and cosmetology.',
      'NIIA\'s diploma and certificate programs combine theoretical knowledge with hands-on training under experienced faculty. Graduates go on to work in premium clinics, launch their own practices, or join medical spas across India.',
      'Key skills employers look for include clinical assessment, patient communication, knowledge of USFDA-approved devices, and adherence to safety protocols. Our curriculum is designed to build all of these from day one.',
      'Whether you are a recent graduate or an established practitioner looking to expand your skill set, aesthetic medicine offers both financial reward and the satisfaction of helping patients feel confident in their skin.',
    ],
  },
  {
    id: 4,
    slug: 'a-day-in-the-life-of-a-dermatology-resident',
    category: 'Academy',
    date: 'May 20, 2026',
    title: 'A Day in the Life of a Dermatology Resident',
    image: '/assets/images/blog/blog-4.jpg',
    excerpt:
      'Follow a typical day in our training program — from morning rounds to hands-on procedures and evening case discussions.',
    body: [
      'Ever wondered what life is like as a dermatology resident at NIIA? We followed Dr. Meera Kapoor through a typical training day to give aspiring specialists an inside look.',
      'The day begins at 8 AM with morning rounds. Residents review overnight cases, discuss treatment plans with senior faculty, and prepare for the day\'s consultations. This collaborative environment ensures every patient receives thoughtful, evidence-based care.',
      'By mid-morning, the clinic floor is buzzing. Residents assist with laser procedures, observe injectable techniques, and conduct independent consultations under supervision. Hands-on exposure is central to our training philosophy.',
      'Afternoons are dedicated to academic sessions — journal clubs, case presentations, and workshops on emerging technologies. Today\'s topic: advances in HIFU skin tightening, with a live demonstration by our lead dermatologist.',
      'The day wraps up around 6 PM with a debrief and tomorrow\'s schedule review. It is demanding, but residents consistently describe the experience as transformative — building skills and confidence that last a career.',
    ],
  },
]

export const blogPage = {
  label: '# BLOG',
  heading: 'Insights, Tips & Expert Advice',
  searchPlaceholder: 'Search articles...',
  emptyMessage: 'No articles match your search. Try different keywords.',
}

export const blogPostCta = {
  heading: 'Need Professional Advice?',
  description: 'Visit our clinic for a personalized consultation with our expert dermatologists.',
  buttonLabel: 'Book a Consultation',
  buttonHref: '/contact',
}

export const blogSection = {
  label: 'FROM OUR BLOG',
  heading: 'Insights, Tips & Expert Advice',
  viewAllLabel: 'View All Articles',
  viewAllHref: '/blog',
  items: blogPosts.map(({ id, category, date, title, image, slug, excerpt }) => ({
    id,
    category,
    date,
    title,
    image,
    excerpt,
    href: `/blog/${slug}`,
  })),
}

/** Look up a blog post by its URL slug. */
export function getBlogBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug) ?? null
}

export const ctaSection = {
  heading: 'Ready to Begin Your Journey With NIA?',
  items: [
    { label: 'Explore Courses', href: '/institute' },
  ],
  buttonLabel: 'Get in Touch',
  buttonHref: '/contact',
}

export const faqPage = {
  label: '# FAQ',
  heading: 'Frequently Asked Questions',
  searchPlaceholder: 'Search questions...',
  emptyMessage: 'No questions match your search. Try different keywords.',
  items: [
    {
      id: 1,
      question: 'What skin conditions do you treat?',
      answer:
        'We treat a wide range of skin concerns including acne, pigmentation, melasma, scars, open pores, dull skin, aging signs, and general skin rejuvenation. Our dermatologists create a personalized plan after a detailed consultation.',
    },
    {
      id: 2,
      question: 'Is laser hair removal permanent?',
      answer:
        'Laser hair removal significantly reduces hair growth over multiple sessions. Results vary by skin type, hair color, and hormonal factors. Most patients experience long-lasting reduction, with occasional maintenance sessions recommended.',
    },
    {
      id: 3,
      question: 'Who can enroll in your courses?',
      answer:
        'Our institute programs are open to doctors, dentists, nurses, and qualified healthcare professionals interested in aesthetic medicine. Some certificate courses may also accept graduates from allied health backgrounds — contact us for eligibility details.',
    },
    {
      id: 4,
      question: 'What is the duration of your diploma program?',
      answer:
        'Diploma programs typically run 6–12 months depending on the specialization. They include classroom learning, hands-on training, and clinical exposure. Certificate courses are shorter (2–4 weeks), and workshops run 1–3 days.',
    },
    {
      id: 5,
      question: 'How do I book a consultation?',
      answer:
        'You can book a consultation by calling our clinic directly, using the contact form on our website, or visiting us during working hours. We recommend booking in advance to secure your preferred time slot.',
    },
    {
      id: 6,
      question: 'Are your treatments safe and FDA-approved?',
      answer:
        'Yes. We use USFDA-approved technology and follow strict safety and hygiene protocols. All procedures are performed or supervised by experienced dermatologists after a thorough assessment of your skin and medical history.',
    },
    {
      id: 7,
      question: 'Do you offer EMI or payment plans?',
      answer:
        'Selected treatment packages and course enrollments may be available with flexible payment options. Please speak with our front desk team during your visit or call us to learn about current plans and eligibility.',
    },
    {
      id: 8,
      question: 'What should I expect during my first visit?',
      answer:
        'Your first visit includes a consultation with our specialist, skin or hair assessment, discussion of your goals, and a customized treatment plan with transparent pricing. There is no pressure to start treatment on the same day.',
    },
  ],
}

/**
 * Gallery — place files in public/assets/images/gallery/
 * Photos: type 'photo'. Videos: type 'video' with optional poster.
 */
export const galleryPage = {
  label: 'OUR SPACE',
  heading: 'Gallery',
  description:
    'Moments from our clinic floor, treatment results, and hands-on training at Next India Institute of Aesthetics.',
  emptyMessage: 'No media in this view yet.',
  filters: [
    { id: 'all', label: 'All' },
    { id: 'photo', label: 'Photos' },
    { id: 'video', label: 'Videos' },
  ],
  items: [
    {
      id: 'clinic-ambience',
      type: 'photo',
      src: '/assets/images/gallery/clinic-ambience.png',
      title: 'Clinic Ambience',
      alt: 'NIIA clinic interior and welcoming ambience',
    },
    {
      id: 'clinic-moment-01',
      type: 'video',
      src: '/assets/images/gallery/clinic-moment-01.mp4',
      poster: '/assets/images/gallery/clinic-moment-01-poster.jpg',
      title: 'Hands-on Training',
      alt: 'Faculty guiding a hands-on aesthetic training session',
    },
    {
      id: 'lip-blush-result',
      type: 'photo',
      src: '/assets/images/gallery/lip-blush-result.jpeg',
      title: 'Lip Blush Result',
      alt: 'Before and after lip blush permanent makeup result',
    },
    {
      id: 'clinic-moment-02',
      type: 'video',
      src: '/assets/images/gallery/clinic-moment-02.mp4',
      poster: '/assets/images/gallery/clinic-moment-02-poster.jpg',
      title: 'Treatment Session',
      alt: 'Aesthetic treatment being performed at the clinic',
    },
    {
      id: 'hair-treatment',
      type: 'photo',
      src: '/assets/images/gallery/hair-treatment.jpg',
      title: 'Hair Treatment',
      alt: 'Hair treatment session at NIIA clinic',
    },
    {
      id: 'neck-rejuvenation-result',
      type: 'photo',
      src: '/assets/images/gallery/neck-rejuvenation-result.jpeg',
      title: 'Neck Rejuvenation',
      alt: 'Before and after neck rejuvenation treatment result',
    },
    {
      id: 'clinic-moment-03',
      type: 'video',
      src: '/assets/images/gallery/clinic-moment-03.mp4',
      poster: '/assets/images/gallery/clinic-moment-03-poster.jpg',
      title: 'Clinical Practice',
      alt: 'Clinical practice and patient care at NIIA',
    },
    {
      id: 'laser-treatment',
      type: 'photo',
      src: '/assets/images/gallery/laser-treatment.jpg',
      title: 'Laser Treatment',
      alt: 'Laser treatment procedure at NIIA',
    },
    {
      id: 'skin-rejuvenation-result',
      type: 'photo',
      src: '/assets/images/gallery/skin-rejuvenation-result.jpeg',
      title: 'Skin Rejuvenation',
      alt: 'Before and after facial skin rejuvenation result',
    },
    {
      id: 'clinic-moment-04',
      type: 'video',
      src: '/assets/images/gallery/clinic-moment-04.mp4',
      poster: '/assets/images/gallery/clinic-moment-04-poster.jpg',
      title: 'Clinic Floor',
      alt: 'A moment from the NIIA clinic floor',
    },
    {
      id: 'jawline-enhancement-result',
      type: 'photo',
      src: '/assets/images/gallery/jawline-enhancement-result.jpeg',
      title: 'Jawline Enhancement',
      alt: 'Before and after jawline enhancement result',
    },
    {
      id: 'clinic-moment-05',
      type: 'video',
      src: '/assets/images/gallery/clinic-moment-05.mp4',
      poster: '/assets/images/gallery/clinic-moment-05-poster.jpg',
      title: 'Faculty Mentorship',
      alt: 'Faculty mentoring and consultation at NIIA',
    },
    {
      id: 'workshop-training',
      type: 'photo',
      src: '/assets/images/gallery/workshop-training.jpg',
      title: 'Workshop Training',
      alt: 'Hands-on aesthetic medicine workshop at NIIA',
    },
    {
      id: 'clinic-moment-06',
      type: 'video',
      src: '/assets/images/gallery/clinic-moment-06.mp4',
      poster: '/assets/images/gallery/clinic-moment-06-poster.jpg',
      title: 'Inside NIIA',
      alt: 'Inside Next India Institute of Aesthetics',
    },
  ],
}

export const contactPage = {
  label: 'GET IN TOUCH',
  heading: 'Contact Us',
  description:
    'Have a question about our clinic services or institute programs? Fill out the form and our team will respond shortly.',
  form: {
    nameLabel: 'Full Name',
    namePlaceholder: 'Your full name',
    phoneLabel: 'Phone Number',
    phonePlaceholder: '10-digit mobile number',
    emailLabel: 'Email Address',
    emailPlaceholder: 'you@example.com',
    preferredDateLabel: 'Preferred Date',
    inquiryLabel: 'How can we help?',
    inquiryPlaceholder: 'Select an option',
    messageLabel: 'Message',
    messagePlaceholder: 'Tell us how we can assist you…',
    submitLabel: 'Send Message',
    submittingLabel: 'Sending…',
    successMessage:
      'Thank you! Your message has been received. A confirmation email has been sent to your inbox.',
    errorMessage: 'Something went wrong. Please try again or call us directly.',
  },
  inquiryOptions: [
    { value: 'general-inquiry', label: 'General Query' },
    { value: 'clinical-appointment', label: 'Clinical Appointment' },
    { value: 'course-enrollment', label: 'Course Enrollment' },
  ],
  sideHeading: 'Reach Us Directly',
}

export const footer = {
  clinicLinks: [
    { label: 'All Services', href: '/clinic' },
    { label: 'Hair Treatments', href: '/clinic/hair' },
    { label: 'Skin Treatments', href: '/clinic/skin' },
    { label: 'Anti-Aging', href: '/clinic/anti-aging' },
    { label: 'Laser Treatments', href: '/clinic/laser' },
    { label: 'Body Contouring', href: '/clinic/body' },
    { label: 'Dermatology', href: '/clinic/dermatological' },
    { label: 'Cosmetic Procedures', href: '/clinic/cosmetic' },
  ],
  instituteLinks: [
    { label: 'All Courses', href: '/institute' },
    { label: 'Fellowship Programs', href: '/institute#certificate-programs' },
    { label: 'Certificate Courses', href: '/institute#certificate-programs' },
    { label: 'Workshops', href: '/institute#workshop-programs' },
  ],
  quickLinks: [
    { label: 'About Us', href: '/about' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Blog', href: '/blog' },
    { label: 'FAQs', href: '/faqs' },
    { label: 'Contact', href: '/contact' },
  ],
  copyright: `© ${new Date().getFullYear()} NIA — Next India Institute of Aesthetics. All rights reserved.`,
}
