// Helper function to get asset URLs
const getAssetUrl = (filename: string) => new URL(`../../assets/${filename}`, import.meta.url).href

export const FOUNDATION_INFO = {
  name: 'L.D. Barksdale Sickle Cell Foundation',
  shortName: 'L.D. Barksdale',
  foundedYear: 1974,
  yearsOfService: 50,
  ein: '57-0681682',
  motto: 'Supporting Life, Empowering Hope',
  description: 'Dedicated to providing comprehensive support and resources to individuals and families affected by sickle cell disease.',
  
  contact: {
    email: 'info@ldbarksdale.org',
    phone: '(864) 555-0100',
    address: 'Greenville, SC',
    hours: {
      monday: '9:00 AM - 5:00 PM',
      tuesday: '9:00 AM - 5:00 PM',
      wednesday: '9:00 AM - 5:00 PM',
      thursday: '9:00 AM - 5:00 PM',
      friday: '9:00 AM - 4:00 PM',
      saturday: 'By appointment',
      sunday: 'Closed',
    },
  },

  socialMedia: {
    linkedin: 'https://www.linkedin.com/company/ldbarksdalesicklecell/',
    instagram: 'https://www.instagram.com/ldbarksdale.sicklecell/',
    facebook: 'https://www.facebook.com/L.D.BarksdaleSickleCell/',
  },
  
  mission: 'To improve the quality of life for individuals and families living with sickle cell disease through education, support services, advocacy, and community partnerships.',
  
  values: [
    {
      title: 'Compassion',
      description: 'We approach every interaction with empathy, understanding, and genuine care for those we serve.',
      icon: 'Heart',
    },
    {
      title: 'Integrity',
      description: 'We operate with transparency, honesty, and accountability in all our programs and initiatives.',
      icon: 'Shield',
    },
    {
      title: 'Excellence',
      description: 'We strive to deliver the highest quality services and resources to our community members.',
      icon: 'Star',
    },
    {
      title: 'Advocacy',
      description: 'We champion the rights and needs of individuals with sickle cell disease at local and state levels.',
      icon: 'Megaphone',
    },
    {
      title: 'Community',
      description: 'We believe in the power of collective action and building strong, supportive networks.',
      icon: 'Users',
    },
  ],

  stats: [
    { label: 'Individuals served since our founding', value: 20000, suffix: '+' },
    { label: 'Counties supported across two regions', value: 15 },
    { label: 'Screenings & referrals conducted', value: 1000, suffix: '+' },
    { label: 'Annual community events hosted', value: 12 },
  ],

  countyServed: [
    'Greenville',
    'Spartanburg',
    'Anderson',
    'Pickens',
    'Oconee',
    'Cherokee',
    'Union',
    'Lancaster',
    'Chesterfield',
    'Darlington',
    'Florence',
    'Sumter',
    'Richland',
    'Lexington',
    'Aiken',
  ],

  services: [
    {
      id: 1,
      title: 'Education & Awareness',
      shortDescription: 'Comprehensive educational programs about sickle cell disease prevention, management, and living well.',
      fullDescription: 'Our education programs provide evidence-based information about sickle cell disease, genetic counseling, and preventive care strategies for individuals, families, and healthcare providers.',
      features: [
        'Genetic counseling services',
        'Patient education workshops',
        'School-based awareness programs',
        'Healthcare provider training',
        'Newborn screening coordination',
      ],
      icon: 'BookOpen',
    },
    {
      id: 2,
      title: 'Support Groups',
      shortDescription: 'Safe, nurturing communities where individuals and families connect, share, and support each other.',
      fullDescription: 'Our support groups provide emotional support, practical advice, and community connection for patients, caregivers, and families navigating sickle cell disease.',
      features: [
        'Monthly support group meetings',
        'Peer mentorship programs',
        'Family counseling sessions',
        'Crisis support hotline',
        'Online community forums',
      ],
      icon: 'Users',
    },
    {
      id: 3,
      title: 'Healthcare Navigation',
      shortDescription: 'Expert guidance helping patients access quality healthcare, specialists, and treatment options.',
      fullDescription: 'We connect patients with specialized medical providers, insurance resources, and coordinate comprehensive care to ensure access to quality healthcare.',
      features: [
        'Provider referrals and coordination',
        'Insurance navigation assistance',
        'Treatment center connections',
        'Medical record assistance',
        'Specialist appointment scheduling',
      ],
      icon: 'Stethoscope',
    },
    {
      id: 4,
      title: 'Financial Assistance',
      shortDescription: 'Emergency support and resources to help families manage healthcare costs and living expenses.',
      fullDescription: 'Our financial assistance programs provide emergency funds, medication copay relief, and connections to additional resources for eligible families.',
      features: [
        'Emergency financial assistance',
        'Medication payment support',
        'Transportation assistance',
        'Utility bill assistance',
        'Grant and scholarship opportunities',
      ],
      icon: 'Heart',
    },
    {
      id: 5,
      title: 'Youth Programs',
      shortDescription: 'Empowering youth with sickle cell disease through education, mentorship, and community connection.',
      fullDescription: 'Our youth programs develop leadership, resilience, and healthy coping strategies while building supportive peer networks for young people living with sickle cell disease.',
      features: [
        'Youth leadership camps',
        'School transition support',
        'College and career mentoring',
        'Recreational and wellness activities',
        'Peer mentorship networks',
      ],
      icon: 'Zap',
    },
    {
      id: 6,
      title: 'Research & Advocacy',
      shortDescription: 'Advancing sickle cell disease research and advocating for policy improvements to enhance care and awareness.',
      fullDescription: 'We support clinical research initiatives, participate in advocacy efforts, and work to advance policies that improve outcomes and quality of life for those with sickle cell disease.',
      features: [
        'Research partnerships and participation',
        'Policy advocacy initiatives',
        'Community health data collection',
        'Legislative engagement',
        'Treatment advancement tracking',
      ],
      icon: 'Microscope',
    },
  ],

  events: [
    {
      id: 1,
      name: 'Monthly Support Group Meeting',
      description: 'Connect with others in a safe, supportive environment. Share experiences, ask questions, and build community.',
      frequency: 'Second Saturday of each month',
      time: '10:00 AM - 12:00 PM',
      location: 'Foundation Office, Greenville, SC',
      image: getAssetUrl('Support Group 10.png'),
    },
    {
      id: 2,
      name: 'Youth Leadership Workshop',
      description: 'Empowering young people with sickle cell disease to develop leadership skills and resilience.',
      frequency: 'Quarterly (March, June, September, December)',
      time: '2:00 PM - 5:00 PM',
      location: 'Various community centers',
      image: getAssetUrl('Support Group 4.png'),
    },
    {
      id: 3,
      name: 'Healthcare Provider Continuing Education',
      description: 'Professional development for healthcare providers on sickle cell disease management and patient-centered care.',
      frequency: 'Bi-annual (Spring & Fall)',
      time: '8:00 AM - 4:00 PM',
      location: 'Greenville Hospital System',
      image: getAssetUrl('doctor and patiant.png'),
    },
    {
      id: 4,
      name: 'Annual Gala & Fundraiser Banquet',
      description: 'Our signature event celebrating our community, honoring supporters, and raising funds for vital programs.',
      frequency: 'Annual (September)',
      time: '6:00 PM - 10:00 PM',
      location: 'TBD',
      image: getAssetUrl('Swamp Rabbits 1 (1).png'),
    },
    {
      id: 5,
      name: 'Sickle Cell Awareness Walk',
      description: 'Community walk to raise awareness and funds for sickle cell disease education and support services.',
      frequency: 'Annual (September - Sickle Cell Awareness Month)',
      time: '8:00 AM - 11:00 AM',
      location: 'Greenville Parks',
      image: getAssetUrl('Support Group 6.png'),
    },
    {
      id: 6,
      name: 'Family Wellness Day',
      description: 'Health screenings, educational sessions, recreational activities, and resources for entire families.',
      frequency: 'Semi-annual (Summer & Winter)',
      time: '10:00 AM - 3:00 PM',
      location: 'Community Center, Greenville',
      image: getAssetUrl('Father and Daughter about page.png'),
    },
  ],

  sponsors: [
    { name: 'United T.E.A.M. Initiatives', domain: 'unitedteaminitiatives.org', website: 'https://unitedteaminitiatives.org' },
    { name: 'Spartanburg County, South Carolina', domain: 'spartanburgcounty.org', website: 'https://www.spartanburgcounty.org' },
    { name: 'Spartanburg Regional Healthcare System', domain: 'spartanburgregional.com', website: 'https://www.spartanburgregional.com' },
    { name: 'ReGenesis Health Care', domain: 'regenesishcc.org', website: 'https://www.regenesishcc.org' },
    { name: 'Pfizer', domain: 'pfizer.com', website: 'https://www.pfizer.com' },
    { name: 'North Central Family Medicine', domain: 'northcentralfamilymedicine.com', website: 'https://www.northcentralfamilymedicine.com' },
    { name: 'Founders Federal Credit Union', domain: 'foundersfcu.com', website: 'https://www.foundersfcu.com' },
    { name: "Denny's", domain: 'dennys.com', website: 'https://www.dennys.com' },
    { name: 'Beam Therapeutics', domain: 'beamtx.com', website: 'https://beamtx.com' },
    { name: 'Allstate Foundation', domain: 'allstate.com', website: 'https://www.allstate.com' },
    { name: 'City of Spartanburg, South Carolina', domain: 'cityofspartanburg.org', website: 'https://www.cityofspartanburg.org' },
    { name: 'Community Mortuary, Inc.', domain: 'communitymortuaryinc.com', website: 'https://communitymortuaryinc.com' },
  ],

  leadership: [
    {
      name: 'Harriett Davis',
      title: 'Executive Director',
      bio: 'With over 20 years of nonprofit management experience, Harriett leads our organization\'s mission with compassion and strategic vision.',
      image: getAssetUrl('Harriett Headshot_PNG.png'),
    },
    {
      name: 'Joyce Williams',
      title: 'Director of Programs',
      bio: 'Joyce brings extensive experience in community health programs and youth development to ensure our services meet community needs.',
      image: getAssetUrl('Joyce Headshot_PNG.png'),
    },
    {
      name: 'Tamara Davis',
      title: 'Director of Development',
      bio: 'Tamara oversees fundraising and grant development, ensuring sustainable funding for our vital programs.',
      image: getAssetUrl('Tamara Davis Headshot_PNG.png'),
    },
    {
      name: 'Dr. Rhonda Young',
      title: 'Medical Director',
      bio: 'Dr. Young brings clinical expertise in sickle cell disease and ensures our programs meet the highest healthcare standards.',
      image: getAssetUrl('rhonda yound headshot.png'),
    },
  ],

  donationTiers: [
    { amount: 25, label: 'Hope', description: 'Supports one screening and referral' },
    { amount: 50, label: 'Care', description: 'Supports one support group meeting' },
    { amount: 100, label: 'Healing', description: 'Supports emergency financial assistance' },
    { amount: 250, label: 'Impact', description: 'Supports youth mentorship program' },
  ],

  volunteerRoles: [
    {
      role: 'Support Group Facilitator',
      description: 'Lead and facilitate safe, supportive meetings for patients and families.',
      commitment: '4 hours per month',
      requirements: 'Active listening skills, sensitivity to healthcare issues',
    },
    {
      role: 'Youth Mentor',
      description: 'Provide mentorship and guidance to young people with sickle cell disease.',
      commitment: '6-8 hours per month',
      requirements: 'Patience, enthusiasm, experience working with youth',
    },
    {
      role: 'Event Coordinator',
      description: 'Help plan and execute community events and fundraisers.',
      commitment: 'Flexible, event-dependent',
      requirements: 'Organizational skills, reliability, creativity',
    },
    {
      role: 'Administrative Support',
      description: 'Assist with office tasks, data entry, and program coordination.',
      commitment: '4-6 hours per week',
      requirements: 'Strong organizational skills, attention to detail',
    },
    {
      role: 'Community Educator',
      description: 'Help conduct educational outreach in schools and community centers.',
      commitment: '4 hours per month',
      requirements: 'Public speaking skills, passion for education',
    },
    {
      role: 'Grant Writer',
      description: 'Assist with grant research and proposal writing.',
      commitment: 'Project-based',
      requirements: 'Strong writing skills, research ability',
    },
  ],

  testimonials: [
    {
      quote: 'The foundation\'s support group has been a lifeline for our family. Knowing we\'re not alone in this journey makes all the difference.',
      author: 'Maria Rodriguez',
      role: 'Parent of child with SCD',
    },
    {
      quote: 'The youth mentorship program gave me confidence and hope for my future. I felt genuinely supported.',
      author: 'DeShawn Thompson',
      role: 'Youth Program Participant',
    },
    {
      quote: 'As a healthcare provider, the foundation\'s education programs have enhanced my understanding and ability to serve patients better.',
      author: 'Dr. Michael Chen',
      role: 'Primary Care Physician',
    },
  ],

  boardOfDirectors: [
    {
      id: 1,
      name: 'Sherrie A. Ballenger',
      title: 'Chair',
      affiliation: 'Spartanburg Regional',
    },
    {
      id: 2,
      name: 'Wersina Thompson',
      title: 'Co-Chair',
      affiliation: 'Prisma Health',
    },
    {
      id: 3,
      name: 'Deirdre Corbitt',
      title: 'Board Member',
      affiliation: 'South Carolina Community Member',
    },
    {
      id: 4,
      name: 'Tamaro D. Davis',
      title: 'Board Member',
      affiliation: 'Silver Hill Memorial',
    },
    {
      id: 5,
      name: 'Wandra J. McBrath',
      title: 'Board Member',
      affiliation: 'Silver Hill Memorial',
    },
    {
      id: 6,
      name: 'Patel J. Lann',
      title: 'Board Member',
      affiliation: 'Belk Corporate',
    },
    {
      id: 7,
      name: 'Sherilyn Lee',
      title: 'Board Member',
      affiliation: 'South Carolina Community Member',
    },
  ],

  communityAdvisoryBoard: [
    {
      id: 1,
      name: 'Sean Dogan',
      title: 'Chair',
      affiliation: 'Community Advocate',
    },
    {
      id: 2,
      name: 'Jillian Brockflemming',
      title: 'Co-Chair',
      affiliation: 'South Carolina Community Member',
    },
    {
      id: 3,
      name: 'Peggy B. Baxter',
      title: 'Community Advisory Member',
      affiliation: 'South Carolina Community Member',
    },
    {
      id: 4,
      name: 'Jabecca Banks',
      title: 'Community Advisory Member',
      affiliation: 'South Carolina Community Member',
    },
    {
      id: 5,
      name: 'Ruby Coleman',
      title: 'Community Advisory Member',
      affiliation: 'South Carolina Community Member',
    },
    {
      id: 6,
      name: 'Miranda Lilley',
      title: 'Community Advisory Member',
      affiliation: 'South Carolina Community Member',
    },
    {
      id: 7,
      name: 'Ruth Richburg',
      title: 'Community Advisory Member',
      affiliation: 'South Carolina Community Member',
    },
    {
      id: 8,
      name: 'Jenny Weidenbenner',
      title: 'Community Advisory Member',
      affiliation: 'South Carolina Community Member',
    },
  ],
}
