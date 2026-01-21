export const skills = {
    ai: ['OpenAI API', 'LangChain', 'RAG Systems', 'Vector Databases', 'Prompt Engineering'],
    languages: ['Java', 'Python', 'JavaScript', 'TypeScript'],
    backend: ['Node.js', 'Express.js', 'Spring Boot', 'Spring MVC', 'Spring Hibernate', 'JSP', 'RESTful APIs'],
    frontend: ['React', 'HTML5', 'CSS3', 'Tailwind', 'SASS', 'jQuery', 'JSON'],
    database: ['MySQL', 'PostgreSQL', 'MongoDB', 'Oracle', 'SQL Server'],
    tools: ['Git', 'GitHub', 'Docker', 'Jenkins', 'Maven', 'VS Code', 'Postman']
  };
  
  export const projects = [
    {
      id: 1,
      title: 'University Knowledge Chatbot',
      type: 'RAG System',
      date: 'May 2025 - Jun 2025',
      highlights: [
        'Architected end-to-end RAG pipeline processing 3+ university web pages with 1000+ text chunks through LangChain framework',
        'Configured ChromaDB with OpenAI embeddings to enable semantic search and retrieval for LLM-powered document querying',
        'Designed text chunking strategy (1000 tokens, 200 overlap), enhancing answer relevance by 30% via contextual retrieval'
      ],
      tech: ['Python', 'LangChain', 'ChromaDB', 'OpenAI API', 'RAG']
    },
    {
      id: 2,
      title: 'Inventory Management System',
      type: 'Full-Stack',
      date: 'Mar 2025 - Apr 2025',
      highlights: [
        'Built scalable inventory system with Java, Spring Boot framework, and MySQL, applying Facade, Command, and Singleton design patterns',
        'Streamlined invoice workflows and alerts, expediting transaction processing by 35% and minimizing user errors by 25%',
        'Utilized GitHub Copilot and Claude AI to boost backend development by 35% and dynamically generate product descriptions'
      ],
      tech: ['Java', 'Spring Boot', 'MySQL', 'AI Tools']
    },
    {
      id: 3,
      title: 'Attendance Management System',
      type: 'Full-Stack',
      date: 'Mar 2024 - Apr 2024',
      highlights: [
        'Developed comprehensive full-stack system with Spring Boot, Hibernate, and JSP to automate attendance tracking for 300+ students',
        'Optimized data processing through Spring Data JPA implementation, achieving 30% faster response time',
        'Enforced referential integrity in MySQL database to prevent deletion of students with associated attendance records'
      ],
      tech: ['Spring Boot', 'Hibernate', 'JSP', 'MySQL']
    }
  ];
  
  export const experience = [
    {
      id: 1,
      role: 'Software Developer Intern',
      company: 'IpersLab',
      location: 'Mountain View, CA',
      date: 'Sep 2024 - Dec 2024',
      achievements: [
        'Developed interactive quiz interface with dynamic question rendering and real-time progress tracking through ReactJS and JavaScript, boosting user engagement by 40% while cutting quiz abandonment rate by 35%',
        'Constructed results dashboard leveraging state management, elevating user satisfaction by 45% and accelerating result load by 60%',
        'Enhanced backend API integration for quiz data fetching via RESTful services with PostgreSQL, streamlining data exchange efficiency by 20% while minimizing API response time to under 300ms',
        'Crafted quiz navigation system with bookmarking functionality through React hooks, decreasing user confusion by 50% and improving cross-device usability'
      ]
    },
    {
      id: 2,
      role: 'Software Developer',
      company: 'Vistaar Digital Communications',
      location: 'Mumbai, IN',
      date: 'Aug 2021 - Nov 2022',
      achievements: [
        'Engineered enterprise web solutions for pharmaceutical clients with JavaScript and Node.js, enhancing UI responsiveness and increasing client engagement by 25%',
        'Reduced page load times by 30% by optimizing frontend with image compression, script bundling, and lazy loading techniques',
        'Integrated APIs for real-time pharmaceutical content delivery with caching optimization, extending user session time by 35% and supporting 5,000+ concurrent users',
        'Automated CI/CD pipelines using Jenkins and Git, cutting release time by 40% across dev, staging, and production environments'
      ]
    }
  ];
  
  export const education = [
    {
      id: 1,
      degree: 'Master of Science in Software Engineering Systems',
      school: 'Northeastern University',
      location: 'Boston, MA',
      date: 'Jan 2023 - May 2025'
    },
    {
      id: 2,
      degree: 'Bachelor of Engineering in Computer Engineering',
      school: 'Mumbai University',
      location: 'Mumbai, India',
      date: 'Aug 2018 - Jun 2021'
    }
  ];
  
  export const contactInfo = [
    { 
      label: 'Email', 
      value: 'rodrigues.ch@northeastern.edu', 
      href: 'mailto:rodrigues.ch@northeastern.edu' 
    },
    { 
      label: 'Phone', 
      value: '(857) 264-8431', 
      href: 'tel:8572648431' 
    },
    { 
      label: 'LinkedIn', 
      value: 'christ-rodrigues', 
      href: 'https://linkedin.com/in/christ-rodrigues/' 
    }
  ];