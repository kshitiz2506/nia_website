/**
 * NIA Website — All text content
 * Update copy, phone numbers, and image paths here.
 * Drop images into public/assets/images/ (see folder structure).
 */

export const siteInfo = {
  name: 'NIA',
  fullName: 'Next India Institute of Aesthetics',
  tagline: 'NEXT INDIA',
  logo: '/assets/images/logo/clinic_logo.png',
  logoAlt: 'NIA Aesthetics — Advanced Aesthetic & Wellness Clinic',
  phone: '916376226758', 
  whatsapp: '916376226758',
  email: 'info@nianextindia.com',
  address: '123 Medical District, New Delhi, India 110001',
}

export const navLinks = {
  clinic: [
    { label: 'All Services', href: '/clinic' },
    { label: 'Hair Treatments', href: '/clinic/hair' },
    { label: 'Skin Treatments', href: '/clinic/skin' },
    { label: 'Anti-Aging Treatments', href: '/clinic/anti-aging' },
    { label: 'Laser Treatments', href: '/clinic/laser' },
    { label: 'Body Contouring & Wellness', href: '/clinic/body' },
    { label: 'Dermatological Services', href: '/clinic/dermatological' },
    { label: 'Cosmetic Procedures', href: '/clinic/cosmetic' },
    { label: 'Aesthetic Gynecology', href: '/clinic/aesthetic-gynecology' },
  ],
  institute: [
    { label: 'All Courses', href: '/institute' },
    { label: 'Fellowship Programs', href: '/institute#fellowship-programs' },
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
      'With 15+ years of experience and 25K+ happy patients, NIA is India\'s premier destination for dermatology and education.',
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
  '/assets/images/hero/slide-4.jpg',
  '/assets/images/hero/slide-5.jpg',
]

export const stats = [
  { target: 15, suffix: '+', decimals: 0, label: 'Years Experience' },
  { target: 25, suffix: 'K+', decimals: 0, label: 'Happy Patients' },
  { target: 100, suffix: '+', decimals: 0, label: 'Students Trained' },
  { target: 4.9, suffix: '', decimals: 1, label: 'Patient Rating' },
]
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
  heading: 'Why Train With Us?',
  description:
    'NIA combines clinical excellence with structured education — giving you the skills, confidence, and credentials to excel in aesthetic medicine.',
  points: [
    'Expert faculty with international training',
    'Hands-on clinical exposure',
    'USFDA-approved technology training',
    'Internationally aligned curriculum',
    'Career guidance and placement support',
  ],
  ctaLabel: 'Ready to enroll?',
  ctaPrefix: 'Speak with our admissions team at',
}

const instituteCourseList = [
  {
    id: 'clinical-dermatology',
    program: 'fellowship',
    category: 'Fellowship',
    title: 'Diploma in Clinical Dermatology',
    description:
      'A comprehensive fellowship covering clinical dermatology fundamentals, diagnosis, and advanced aesthetic procedures for healthcare professionals.',
    image: '/assets/images/courses/diploma.jpg',
    duration: '12 Months',
    format: 'Hybrid (Online + Clinical)',
    price: 250000,
    curriculum: [
      {
        title: 'Fundamentals of Dermatology',
        description: 'Core principles of skin structure, common conditions, and foundational clinical assessment techniques.',
      },
      {
        title: 'Clinical Diagnosis & Dermoscopy',
        description: 'Learn systematic diagnosis approaches and dermoscopy for accurate lesion evaluation.',
      },
      {
        title: 'Medical Dermatology & Therapeutics',
        description: 'Evidence-based treatment protocols for acne, eczema, psoriasis, and other medical skin conditions.',
      },
      {
        title: 'Aesthetic Dermatology Basics',
        description: 'Introduction to non-surgical rejuvenation, injectables, and cosmetic dermatology fundamentals.',
      },
      {
        title: 'Laser & Energy-Based Devices',
        description: 'Hands-on training with laser systems for hair removal, pigmentation, and skin resurfacing.',
      },
      {
        title: 'Clinical Rotations & Case Management',
        description: 'Supervised patient cases, treatment planning, and real-world clinical decision-making.',
      },
    ],
    highlights: [
      'Structured 12-month fellowship curriculum',
      'Supervised clinical rotations',
      'Hybrid learning with online modules',
      'Mentorship from senior dermatologists',
      'Career guidance upon completion',
    ],
  },
  {
    id: 'skincare-specialist',
    program: 'fellowship',
    category: 'Fellowship',
    title: 'Skincare Specialist Course',
    description:
      'Focused training on skin analysis, treatment protocols, and patient care for aspiring skincare professionals.',
    image: '/assets/images/courses/certificate.jpg',
    duration: '6 Months',
    format: 'Online',
    price: 45000,
    eligibility: '12th Pass',
    curriculum: [
      {
        title: 'Skin Anatomy & Physiology',
        description: 'Understand skin layers, barrier function, and how structure relates to common concerns.',
      },
      {
        title: 'Skin Typing & Analysis',
        description: 'Master professional skin assessment techniques to recommend appropriate treatments.',
      },
      {
        title: 'Product Chemistry & Formulation',
        description: 'Learn active ingredients, product selection, and how formulations affect treatment outcomes.',
      },
      {
        title: 'Treatment Protocols for Common Concerns',
        description: 'Step-by-step protocols for acne, pigmentation, aging, and sensitivity management.',
      },
      {
        title: 'Client Consultation & Aftercare',
        description: 'Build consultation skills and aftercare plans that improve results and client satisfaction.',
      },
      {
        title: 'Building a Skincare Practice',
        description: 'Business basics for launching or growing a skincare-focused professional practice.',
      },
    ],
    highlights: [
      'Fully online, self-paced modules',
      'Industry-recognized certification',
      'Practical case studies and assessments',
      'Expert faculty support',
      'Ideal for allied health professionals',
    ],
  },
  {
    id: 'aast',
    program: 'certificate',
    category: 'Certificate',
    title: 'Advance Aesthetic Skin Technician Course (AAST)',
    description:
      'Your first step towards a career in aesthetic skincare. Gain practical expertise in skin analysis, facial treatments, laser assistance, and clinic protocols through hands-on training.',
    image: '/assets/images/courses/certificate.jpg',
    duration: '1 Month',
    format: 'On-Campus',
    eligibility: '12th Pass',
    price: 100000,
    curriculum: [
      {
        title: 'Medi-Facials',
        description:
          'Radiofrequency, high frequency, electroporation, ultrasonic, and microdermabrasion techniques for advanced facial treatments.',
      },
      {
        title: 'Hydrafacial',
        description:
          'Hands-on training in hydrafacial protocols for deep cleansing, hydration, extraction, and skin rejuvenation.',
      },
      {
        title: 'Chemical Peels',
        description:
          'Lactic peel, pigmentation peel, hydration peel, acne peel, and combination peel selection and application.',
      },
      {
        title: 'Lasers',
        description:
          'Diode laser (hair reduction), Nd:YAG laser (acne healing), Q-switch laser (carbon facial), IPL (photofacial), and pigmentation laser.',
      },
      {
        title: 'Microneedling',
        description:
          'Microneedling protocols for collagen induction, scar refinement, and overall skin texture improvement.',
      },
      {
        title: 'BB Glow',
        description:
          'BB glow treatment techniques for instant radiance, even tone, and a natural semi-permanent foundation effect.',
      },
      {
        title: 'Body Therapy',
        description:
          'Lymphatic balancer, lipo laser, cavitation, and body RF for non-invasive body contouring and wellness.',
      },
      {
        title: 'Coolsculpt — Observation',
        description:
          'Clinical observation of Coolsculpt procedures, patient selection, and post-treatment care protocols.',
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
    program: 'certificate',
    category: 'Certificate',
    title: 'Certificate in Aesthetic Medicine',
    description:
      'Intensive certification covering injectables, facial aesthetics, and non-surgical rejuvenation techniques for medical professionals.',
    image: '/assets/images/courses/certificate.jpg',
    duration: '6 Months',
    format: 'On-Campus',
    price: 75000,
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
    id: 'laser-ipl',
    program: 'certificate',
    category: 'Certificate',
    title: 'Laser & IPL Certification',
    description:
      'Master laser hair removal, skin resurfacing, and IPL treatments with supervised hands-on sessions on USFDA-approved devices.',
    image: '/assets/images/courses/diploma.jpg',
    duration: '3 Months',
    format: 'Hybrid (Online + Clinical)',
    price: 55000,
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
    image: '/assets/images/courses/workshops.jpg',
    duration: '2 Months',
    format: 'Online',
    price: 35000,
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
    id: 'botox-masterclass',
    program: 'workshop',
    category: 'Workshop',
    title: 'Botox & Fillers Masterclass',
    description:
      'A focused weekend workshop on facial anatomy, injection techniques, and achieving natural-looking results.',
    image: '/assets/images/courses/workshops.jpg',
    duration: '2 Days',
    format: 'On-Campus',
    price: 25000,
    curriculum: [
      {
        title: 'Upper Face Botox Mapping',
        description: 'Forehead, glabella, and crow\'s feet injection points with dosing guidelines.',
      },
      {
        title: 'Filler Techniques for Lips & Cheeks',
        description: 'Volume enhancement and contouring techniques for natural facial balance.',
      },
      {
        title: 'Cannula vs. Needle Approaches',
        description: 'When to use cannula versus needle techniques for safer filler placement.',
      },
      {
        title: 'Complication Prevention & Management',
        description: 'Avoiding vascular complications and managing adverse events effectively.',
      },
      {
        title: 'Live Demonstration & Hands-On Practice',
        description: 'Watch expert demonstrations and practice injection techniques under supervision.',
      },
    ],
    highlights: [
      'Intensive 2-day immersive format',
      'Live demonstrations by expert injectors',
      'Hands-on practice on models',
      'Small group for maximum learning',
      'Certificate of participation',
    ],
  },
  {
    id: 'chemical-peels',
    program: 'workshop',
    category: 'Workshop',
    title: 'Advanced Chemical Peels Workshop',
    description:
      'Hands-on training in peel selection, application protocols, and post-treatment care for diverse skin types.',
    image: '/assets/images/courses/certificate.jpg',
    duration: '1 Day',
    format: 'On-Campus',
    price: 15000,
    curriculum: [
      {
        title: 'Peel Classification & Skin Typing',
        description: 'Understand peel depths, Fitzpatrick skin types, and patient suitability criteria.',
      },
      {
        title: 'Superficial & Medium Depth Peels',
        description: 'Application techniques for glycolic, salicylic, TCA, and combination peels.',
      },
      {
        title: 'Combination Peel Protocols',
        description: 'Design peel sequences for acne, pigmentation, and anti-aging concerns.',
      },
      {
        title: 'Pre & Post Peel Care',
        description: 'Preparation regimens and aftercare to maximize results and minimize downtime.',
      },
      {
        title: 'Live Application Workshop',
        description: 'Hands-on peel application on models with faculty guidance and feedback.',
      },
    ],
    highlights: [
      'Single-day focused intensive',
      'Hands-on peel application practice',
      'Protocols for Indian skin types',
      'Product knowledge from leading brands',
      'Take-home treatment guides',
    ],
  },
  {
    id: 'hifu-rf',
    program: 'workshop',
    category: 'Workshop',
    title: 'HIFU & RF Skin Tightening Workshop',
    description:
      'Live demonstrations and practice on the latest non-invasive skin tightening technologies.',
    image: '/assets/images/courses/diploma.jpg',
    duration: '1 Day',
    format: 'Hybrid (Online + Clinical)',
    price: 18000,
    curriculum: [
      {
        title: 'HIFU Technology & Mechanism',
        description: 'How focused ultrasound targets SMAS layers for non-surgical lifting and tightening.',
      },
      {
        title: 'RF Microneedling Principles',
        description: 'Radiofrequency microneedling for collagen induction, scars, and pore refinement.',
      },
      {
        title: 'Treatment Parameters & Mapping',
        description: 'Device settings, energy levels, and facial mapping for consistent outcomes.',
      },
      {
        title: 'Combining HIFU with Other Modalities',
        description: 'Treatment sequencing with fillers, threads, and other rejuvenation procedures.',
      },
      {
        title: 'Live Demo & Clinical Observation',
        description: 'Observe live treatments and discuss case selection with expert practitioners.',
      },
    ],
    highlights: [
      'Latest non-invasive device training',
      'Hybrid theory session + clinical demo',
      'Treatment mapping workshops',
      'Expert-led live demonstrations',
      'Certificate of attendance',
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

export const fellowshipPrograms = {
  heading: 'Fellowship Programs',
  items: instituteCourseList.filter((c) => c.program === 'fellowship').map(toCourseCard),
}

export const certificatePrograms = {
  heading: 'Certificate Programs',
  items: instituteCourseList.filter((c) => c.program === 'certificate').map(toCourseCard),
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
  heading: 'Why Choose Us?',
  points: [
    'Experienced dermatologists',
    'USFDA-approved technology',
    'Personalized treatment plans',
    'Safe, hygienic environment',
    'Affordable pricing',
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
      description: 'Turn back time with our advanced anti-aging solutions including Botox, fillers, and skin rejuvenation therapies.',
      image: '/assets/images/treatments/anti-aging.jpg',
      href: '/clinic/anti-aging',
      offerings: [
        'Botox & Dysport',
        'Dermal Fillers',
        'Skin Rejuvenation Therapy',
        'Thread Lift',
        'Anti-Aging Facials',
        'Collagen Induction Therapy',
      ],
    },
    {
      id: 'laser',
      title: 'Laser Treatments',
      description: 'State-of-the-art laser technology for hair removal, skin resurfacing, pigmentation correction, and more.',
      image: '/assets/images/treatments/laser.jpg',
      href: '/clinic/laser',
      offerings: [
        'Laser Hair Removal',
        'Laser Skin Resurfacing',
        'Pigmentation Correction',
        'Carbon Laser Peel',
        'Laser Scar Reduction',
        'Tattoo Removal',
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
      description: 'Advanced hair restoration, PRP therapy, and scalp treatments to combat hair loss and promote healthy growth.',
      image: '/assets/images/treatments/hair.jpg',
      href: '/clinic/hair',
      offerings: [
        'PRP & GFC Hair Therapy',
        'Hair Mesotherapy',
        'Scalp Treatments',
        'Hair Fall Control Therapy',
        'Hair Growth Boosters',
        'Dandruff & Scalp Care',
      ],
    },
    {
      id: 'body',
      title: 'Body Contouring',
      description: 'Non-invasive body sculpting and contouring treatments to help you achieve your ideal physique.',
      image: '/assets/images/treatments/body.jpg',
      href: '/clinic/body',
      offerings: [
        'Non-Invasive Body Sculpting',
        'Fat Reduction Treatments',
        'Skin Tightening',
        'Cellulite Reduction',
        'Body Contouring Packages',
      ],
    },
    {
      id: 'dermatological',
      title: 'Dermatological Services',
      description: 'Comprehensive dermatological services including skin cancer screenings, acne treatments, and more.',
      image: '/assets/images/treatments/dermatological.jpg',
      href: '/clinic/dermatological',
      offerings: [
        'Skin Consultations',
        'Acne Treatment',
        'Eczema & Psoriasis Care',
        'Skin Allergy Management',
        'Mole & Lesion Evaluation',
        'Skin Cancer Screening',
      ],
    },
    {
      id: 'cosmetic',
      title: 'Cosmetic Procedures',
      description: 'Cosmetic procedures including facelifts, lip fillers, and more.',
      image: '/assets/images/treatments/cosmetic.jpg',
      href: '/clinic/cosmetic',
      offerings: [
        'Lip Fillers',
        'Cheek & Jaw Contouring',
        'Non-Surgical Facelift',
        'Under-Eye Treatments',
        'Lip Enhancement',
        'Facial Balancing',
      ],
    },
    {
      id: 'aesthetic-gynecology',
      title: 'Aesthetic Gynecology',
      description: 'Aesthetic gynecology services including vaginal rejuvenation, labiaplasty, and more.',
      image: '/assets/images/treatments/aesthetic-gynecology.jpg',
      href: '/clinic/aesthetic-gynecology',
      offerings: [
        'Vaginal Rejuvenation',
        'Labiaplasty Consultation',
        'Intimate Skin Care',
        'Postpartum Aesthetic Care',
        'Laser Intimate Treatments',
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
      image: '/assets/images/courses/diploma.jpg',
      href: '/institute#fellowship-programs',
      features: [
        '6-12 month programs',
        'Clinical rotations',
        'International curriculum',
        'Job placement support',
      ],
      cta: 'Explore Felowship Programs',
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
  label: 'PATIENTS LOVE US',
  heading: 'Trusted by Thousands of Happy Patients',
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
      image: '/assets/images/testimonials/patient-3.jpg',
      rating: 5,
    },
  ],
}

export const aboutSection = {
  label: 'ABOUT NIA',
  heading: 'Redefining Dermatology Care & Education in India',
  description:
    'At NIA, we bridge the gap between clinical excellence and professional education. Our state-of-the-art clinic offers world-class dermatological treatments, while our institute trains the next generation of aesthetic medicine specialists.',
  cta: 'Know More About Us',
  ctaHref: '/about',
  image: '/assets/images/about/clinic-interior.png',
  features: [
    { title: 'Expert Dermatologists', description: 'Board-certified specialists with international training' },
    { title: 'Advanced Technology', description: 'Latest FDA-approved equipment and treatment protocols' },
    { title: 'Holistic Approach', description: 'Personalized care addressing root causes, not just symptoms' },
    { title: 'Education Excellence', description: 'Internationally recognized curriculum and certifications' },
  ],
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
      'Explore the growing field of aesthetic dermatology and how NIA\'s programs prepare you for a rewarding career.',
    body: [
      'Aesthetic medicine is one of the fastest-growing specialties in healthcare. Rising demand for non-invasive treatments, combined with increasing patient awareness, has created abundant career opportunities for qualified professionals.',
      'Dermatologists, dentists, nurses, and allied health graduates can all find pathways into aesthetic practice — from injectables and laser therapies to skin rejuvenation and cosmetology.',
      'NIA\'s diploma and certificate programs combine theoretical knowledge with hands-on training under experienced faculty. Graduates go on to work in premium clinics, launch their own practices, or join medical spas across India.',
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
    image: '/assets/images/blog/blog-1.jpg',
    excerpt:
      'Follow a typical day in our training program — from morning rounds to hands-on procedures and evening case discussions.',
    body: [
      'Ever wondered what life is like as a dermatology resident at NIA? We followed Dr. Meera Kapoor through a typical training day to give aspiring specialists an inside look.',
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
    { label:'All Services', href: '/clinic/' },
    { label: 'Hair Treatments', href: '/clinic/hair' },
    { label: 'Skin Treatments', href: '/clinic/skin' },
    { label: 'Anti-Aging', href: '/clinic/anti-aging' },
    { label: 'Laser Treatments', href: '/clinic/laser' },
  ],
  instituteLinks: [
    { label: 'Fellowship Programs', href: '/institute#fellowship-programs' },
    { label: 'Certificate Courses', href: '/institute#certificate-programs' },
    { label: 'Workshops', href: '/institute#workshop-programs' },
    { label: 'Faculty', href: '/institute/faculty' },
  ],
  quickLinks: [
    { label: 'About Us', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Privacy Policy', href: '#privacy' },
  ],
  copyright: `© ${new Date().getFullYear()} NIIA - Next India Institute of Aesthetics. All rights reserved.`,
}
