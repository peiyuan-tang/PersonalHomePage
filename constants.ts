import { Job, Education, Project, SkillData } from './types';

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/peiyuan-tang-313204a6/",
  email: "mailto:town9628@gmail.com",
  website: "https://xiangzhoujushi.github.io/",
  github: "https://github.com/Xiangzhoujushi",
  personalProjects: "https://github.com/peiyuan-tang"
};

export const EXPERIENCE_DATA: Job[] = [
  {
    id: "personal-startup",
    title: "Principal (Engineer + Product Manager)",
    company: "Personal App/Tool Developer (Stealth)",
    period: "Sep 2024 - Present",
    description: "Building Tools & Services with OpenSource Architecture to increase living efficiency. (Pre-Startup Loading, Part-time)",
    achievements: [
      "<a href=\"https://github.com/peiyuan-tang/StockTrendEsimator\" target=\"_blank\" rel=\"noreferrer\" class=\"text-blue-600 hover:underline font-medium\">Stock Prediction</a>: integrating LSTM and (2 Tower DNN X Attention) modeling to predict stock trends in Web Apps.",
      "<a href=\"https://event-horizon-lilac.vercel.app/\" target=\"_blank\" rel=\"noreferrer\" class=\"text-blue-600 hover:underline font-medium\">Event-Horizon</a>: AI Powered Event Organizer/Participation/Event Explorer & Event Recommendation.",
      "<a href=\"https://fire-planner-flax.vercel.app/\" target=\"_blank\" rel=\"noreferrer\" class=\"text-blue-600 hover:underline font-medium\">FireBuddy.AI</a>: AI Powered Financial Advisor/Financial Accountant for Asset Management and FIRE goal Timeline Tracking."
    ],
    technologies: ["LSTM", "2-Tower DNN", "Attention Models", "AI/LLM", "Full Stack"]
  },
  {
    id: "staff-swe",
    title: "Staff Software Engineer, Tech Lead",
    company: "Google (Map Ads Serving & Format)",
    period: "Current",
    description: "Led the Search Campaigns and formats optimization team (8+ Engineers). Growing revenue from 0 to $300M ARR by integrating Search Campaign Inventory.",
    achievements: [
      "Pioneered integration of new ad campaigns (T1 Search, PMax Shadow) and data sources (GSS Photos, LSA Photos) to enhance ad offerings.",
      "Directed critical Map Ads launches, optimizing serving infrastructure and ensuring seamless integration across formats.",
      "Provided comprehensive technical leadership and direct mentorship to junior and mid-level team members.",
      "Consistently delivered insightful analysis and strategic proposals on format quality to guide product direction."
    ],
    technologies: ["C++", "Java", "Python", "Serving Infra", "Distributed Systems"]
  },
  {
    id: "senior-swe",
    title: "Senior Software Engineer / ML Engineer",
    company: "Google (Map Ads Serving & Quality)",
    period: "Nov 2021 - Oct 2024",
    description: "Technical lead for Map Ads Serving Quality, overseeing Formats Enhancement and ML Feature Pipeline Strategy.",
    achievements: [
      "Engineered a novel system using LLMs (Gemini) to enhance Promoted Pin performance, targeting 20% CTR lift and $50M revenue.",
      "Designed V0 Ads Query limiting Model reducing machine costs by 30%.",
      "Led Search Campaigns workstream growing revenue to $15M ARR for search mode.",
      "Implemented Multi-head ERPM Query Limiting Model improving ROI for Google Map Ads.",
      "Spearheaded expansion of Promoted Places to Entity Mode (+3.5% revenue uplift) and Cat Search Surface."
    ],
    technologies: ["Gemini Models", "Jax on Beam", "TensorFlow", "LLMs", "ML Pipelines"]
  },
  {
    id: "ml-swe",
    title: "ML Engineer / Ads Quality",
    company: "Google (Search Ads Quality)",
    period: "Oct 2018 - Nov 2021",
    description: "Contributed to Desktop Frontend development, Ads Serving, Auction, Rendering, and ML modeling.",
    achievements: [
      "Launched end-to-end retrieval for Smart Campaigns on Maps, increasing revenue by +100%.",
      "Launched V0 Local Ads PCTR/PCVR models achieving +18% View Rate improvement.",
      "Developed Pview Model Training and Serving infrastructure using Lattice Model framework (AUC > 0.8).",
      "Boosted conversion rates (CVR) by 50% and CTR by 20% through sophisticated ML models."
    ],
    technologies: ["TensorFlow", "Lattice Models", "Frontend", "Ad Serving"]
  }
];

export const EDUCATION_DATA: Education[] = [
  {
    id: "stanford",
    degree: "MS in Computer Science (HCP)",
    institution: "Stanford University",
    period: "2022 - Paused",
    details: [
      "CS231N: CNNs for developmental phases in embryology (PyTorch).",
      "CS230N: Deep Neural Networks for advanced weather trend prediction."
    ]
  },
  {
    id: "osu",
    degree: "BS in Engineering & Arts/Sciences (Dual Degree)",
    institution: "The Ohio State University",
    period: "Sept 2014 - June 2018",
    details: [
      "Majors: Computer Science & Engineering, Theoretical Mathematics.",
      "GPA: 3.93. Summa Cum Laude.",
      "Ranked 2nd out of 247 graduates in CSE.",
      "Extraordinary Graduates of Math Department."
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "semantics",
    title: "Semantics Processing (NLP)",
    description: "Developed a sophisticated quantifier scoping algorithm simulating human cognitive processes. Implemented LSTM neural networks to narrow scope ranges, enhancing semantic analysis precision.",
    tags: ["NLP", "LSTM", "Algorithms", "Research"]
  },
  {
    id: "dataviz",
    title: "Information Design (Data Visualization)",
    description: "Created comprehensive text-mining and data-visualization tools for I-Ching using D3. Presented at Information+ Conference (2018) and RSD7 Conference (2018).",
    tags: ["D3.js", "Data Viz", "Text Mining", "Research"]
  }
];

// Data for D3 Visualization
export const SKILL_NETWORK_DATA: SkillData = {
  nodes: [
    { id: "David Tang", group: 1, radius: 20 },
    { id: "Languages", group: 2, radius: 10 },
    { id: "C++", group: 3, radius: 8 },
    { id: "Java", group: 3, radius: 8 },
    { id: "Python", group: 3, radius: 8 },
    { id: "TypeScript", group: 3, radius: 8 },
    { id: "JavaScript", group: 3, radius: 8 },
    { id: "Domains", group: 2, radius: 10 },
    { id: "Ad Serving", group: 4, radius: 8 },
    { id: "Machine Learning", group: 4, radius: 8 },
    { id: "Full Stack", group: 4, radius: 8 },
    { id: "Data Viz", group: 4, radius: 8 },
    { id: "Infrastructure", group: 4, radius: 8 },
    { id: "Tools", group: 2, radius: 10 },
    { id: "TensorFlow", group: 5, radius: 6 },
    { id: "React", group: 5, radius: 6 },
    { id: "D3.js", group: 5, radius: 6 },
    { id: "Gemini/LLMs", group: 5, radius: 8 },
    { id: "GRPC", group: 5, radius: 6 }
  ],
  links: [
    { source: "David Tang", target: "Languages", value: 1 },
    { source: "David Tang", target: "Domains", value: 1 },
    { source: "David Tang", target: "Tools", value: 1 },
    { source: "Languages", target: "C++", value: 2 },
    { source: "Languages", target: "Java", value: 2 },
    { source: "Languages", target: "Python", value: 2 },
    { source: "Languages", target: "TypeScript", value: 2 },
    { source: "Languages", target: "JavaScript", value: 2 },
    { source: "Domains", target: "Ad Serving", value: 2 },
    { source: "Domains", target: "Machine Learning", value: 2 },
    { source: "Domains", target: "Full Stack", value: 2 },
    { source: "Domains", target: "Data Viz", value: 2 },
    { source: "Domains", target: "Infrastructure", value: 2 },
    { source: "Tools", target: "TensorFlow", value: 2 },
    { source: "Tools", target: "React", value: 2 },
    { source: "Tools", target: "D3.js", value: 2 },
    { source: "Tools", target: "Gemini/LLMs", value: 3 },
    { source: "Tools", target: "GRPC", value: 2 },
    { source: "Ad Serving", target: "C++", value: 1 },
    { source: "Machine Learning", target: "Python", value: 1 },
    { source: "Machine Learning", target: "TensorFlow", value: 1 },
    { source: "Full Stack", target: "TypeScript", value: 1 },
    { source: "Data Viz", target: "D3.js", value: 1 },
  ]
};

// Data for Recharts
export const PROFICIENCY_DATA = [
  { subject: 'C++', A: 100, fullMark: 100 },
  { subject: 'Java', A: 90, fullMark: 100 },
  { subject: 'Python', A: 95, fullMark: 100 },
  { subject: 'ML/AI', A: 90, fullMark: 100 },
  { subject: 'System Design', A: 95, fullMark: 100 },
  { subject: 'Frontend (TS/JS)', A: 85, fullMark: 100 },
];