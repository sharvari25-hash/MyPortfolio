import profileImage from '../assets/Profile-Pic.jpg'
import resumeFile from '../assets/Sharvari Resume.pdf'
import quickEatsImage from '../assets/quickeats-banner.svg'
import veloraImage from '../assets/velora-banner.svg'
import wanderWiseImage from '../assets/wanderwise-banner.svg'

export const personalInfo = {
  name: 'Sharvari Karnase',
  role: 'Full Stack Java Developer',
  location: 'Amravati, Maharashtra, India',
  email: 'sharvarikarnase4@gmail.com',
  phone: '+91-9028985983',
  linkedin: 'https://www.linkedin.com/in/sharvari-karnase-8a415734a/',
  github: 'https://github.com/sharvari25-hash',
  resume: resumeFile,
  profileImage,
  summary:
    'Passionate Full Stack Java Developer skilled in building scalable and secure web applications using Java, Spring Boot, and React.js. Experienced in designing REST APIs, implementing authentication systems, and delivering clean, efficient code.',
}

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]

export const heroHighlights = [
  { value: '3', label: 'Flagship apps designed and built' },
  { value: '2025', label: 'Hands-on full-stack internship' },
  { value: 'API-first', label: 'Secure backend mindset' },
]

export const aboutHighlights = [
  {
    title: 'Problem-Solving Mindset',
    description:
      'I enjoy translating product ideas into thoughtful user journeys and reliable engineering decisions that scale cleanly.',
  },
  {
    title: 'REST API Development',
    description:
      'From database design to authentication, I build backend systems that are structured, secure, and easy to extend.',
  },
  {
    title: 'Full-Stack Delivery',
    description:
      'I work comfortably across responsive React interfaces, Spring Boot services, and MySQL-backed application flows.',
  },
]

export const skillGroups = [
  {
    title: 'Frontend',
    accent: 'from-fuchsia-500/80 via-indigo-500/70 to-sky-400/80',
    items: [
      { name: 'React.js', level: 92 },
      { name: 'Tailwind CSS', level: 88 },
      { name: 'HTML, CSS, Bootstrap', level: 90 },
    ],
  },
  {
    title: 'Backend',
    accent: 'from-indigo-500/80 via-violet-500/70 to-fuchsia-400/80',
    items: [
      { name: 'Java', level: 94 },
      { name: 'Spring Boot', level: 90 },
      { name: 'REST APIs', level: 91 },
    ],
  },
  {
    title: 'Database',
    accent: 'from-sky-500/80 via-cyan-500/70 to-indigo-400/80',
    items: [{ name: 'MySQL', level: 86 }],
  },
  {
    title: 'Tools',
    accent: 'from-blue-500/80 via-indigo-500/70 to-fuchsia-500/80',
    items: [
      { name: 'GitHub', level: 88 },
      { name: 'Postman', level: 83 },
      { name: 'IntelliJ IDEA', level: 87 },
      { name: 'VS Code', level: 90 },
    ],
  },
  {
    title: 'Concepts',
    accent: 'from-fuchsia-500/80 via-sky-500/60 to-blue-500/80',
    items: [
      { name: 'OOPs', level: 92 },
      { name: 'DBMS', level: 85 },
    ],
  },
]

export const projects = [
  {
    title: 'Velora',
    description:
      'Full-stack e-commerce platform with product browsing, cart management, secure JWT-based authentication, and streamlined ordering workflows.',
    tech: ['React.js', 'Spring Boot', 'MySQL', 'JWT', 'Spring Security'],
    github: 'https://github.com/itizzakir/ECommerceApplication',
    live: 'https://e-commerce-application-demo-live.vercel.app/',
    image: veloraImage,
    accent: 'from-fuchsia-500 via-indigo-500 to-sky-400',
  },
  {
    title: 'QuickEats',
    description:
      'Responsive food delivery experience focused on fast browsing, intuitive ordering, and polished UI interactions across devices.',
    tech: ['React.js', 'Tailwind CSS', 'Spring Boot', 'MySQL'],
    github: 'https://github.com/ankulsingh221/Food-Delivery-App',
    live: 'https://quick-eats-demo.vercel.app/',
    image: quickEatsImage,
    accent: 'from-orange-400 via-pink-500 to-fuchsia-500',
  },
  {
    title: 'WanderWise',
    description:
      'Travel booking platform with itinerary discovery, admin and user dashboards, and a structured multi-role planning experience.',
    tech: ['React.js', 'Spring Boot', 'MySQL', 'Tailwind CSS'],
    github: 'https://github.com/sharvari25-hash/Travel-Planner',
    live: 'https://travel-planner-demo-beige.vercel.app/',
    image: wanderWiseImage,
    accent: 'from-sky-400 via-indigo-500 to-violet-500',
  },
]

export const experience = {
  company: 'Aivariant',
  role: 'Full Stack Java Developer Intern',
  duration: 'Mar 2025 - Dec 2025',
  points: [
    'Built full-stack applications using React.js and Spring Boot.',
    'Developed RESTful APIs with MySQL and Hibernate.',
    'Worked on debugging, testing, and deployment.',
    'Used GitHub for version control and collaborative delivery.',
  ],
  certificate:
    'https://drive.google.com/file/d/1d_rZ817LRzz2edPZSAk5I2TVm1wjRB7b/view?usp=drivesdk',
}

export const education = [
  {
    title: 'Bachelor of Computer Applications (BCA)',
    duration: '2023 - 2025',
    detail: 'CGPA: 7.73',
  },
  {
    title: '12th Science',
    duration: 'Higher Secondary',
    detail: 'Percentage: 80.33%',
  },
]

export const certifications = [
  {
    title: 'Full Stack Java Developer',
    issuer: 'ExcelR',
    year: '2025',
    link: 'https://drive.google.com/file/d/18DNpoWWl_EHWPF_8p2qCg_phk6ie68Z8/view?usp=drivesdk',
  },
  {
    title: 'Web Development',
    issuer: 'IMS Mahavidyalaya',
    year: 'Credential',
    link: 'https://docs.google.com/document/d/1DXOlcydkUiW6sAwWKGMZxsIiwP3fd64M/edit',
  },
  {
    title: 'Techno Event 2024',
    issuer: 'Participation Certificate',
    year: '2024',
    link: 'https://drive.google.com/file/d/1layA3x_0-4YVfB2iFnrEIPh_W0qzJu7Y/view',
  },
]
