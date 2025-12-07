// Personal Information
export const PERSONAL_INFO = {
    name: 'Arjun Khunti',
    title: 'Senior Software Wizard',
    tagline: 'Brewing Scalable Solutions with AI & Full-Stack Sorcery',
    email: 'arjunvkhunti@gmail.com',
    phone: '+91 9714556094',
    location: 'Ahmedabad, Gujarat',
    linkedin: 'https://www.linkedin.com/in/arjunkhunti',
    github: 'https://github.com/arjunkhunti',
    resumeUrl: '/assets/personal/resume.pdf',
};

// Navigation Links
export const NAV_LINKS = [
    { label: 'The Wizard', href: '#about' },
    { label: 'Alliances', href: '#companies' },
    { label: 'Wizarding Proficiency', href: '#skills' },
    { label: 'Magical Creations', href: '#projects' },
    { label: 'Send Owl', href: '#contact' },
];

// Skills Data
export const SKILLS = {
    languages: [
        { name: 'Python', level: 'Expert', icon: 'python' },
        { name: 'GoLang', level: 'Expert', icon: 'golang' },
        { name: 'JavaScript', level: 'Advanced', icon: 'javascript' },
        { name: 'TypeScript', level: 'Advanced', icon: 'typescript' },
        { name: 'HTML/CSS', level: 'Advanced', icon: 'html' },
    ],
    frameworks: [
        { name: 'ReactJS', level: 'Advanced', icon: 'react' },
        { name: 'Flask', level: 'Advanced', icon: 'flask' },
        { name: 'FastAPI', level: 'Advanced', icon: 'fastapi' },
        { name: 'Gin', level: 'Advanced', icon: 'gin' },
        { name: 'Mux', level: 'Intermediate', icon: 'mux' },
    ],
    cloud: [
        { name: 'AWS', level: 'Advanced', icon: 'aws' },
        { name: 'Kubernetes', level: 'Advanced', icon: 'kubernetes' },
        { name: 'Terraform', level: 'Advanced', icon: 'terraform' },
        { name: 'Docker', level: 'Advanced', icon: 'docker' },
        { name: 'GitLab CI/CD', level: 'Advanced', icon: 'gitlab' },
        { name: 'Jenkins', level: 'Advanced', icon: 'jenkins' },
    ],
    ai: [
        { name: 'Machine Learning', level: 'Advanced', icon: 'ml' },
        { name: 'Deep Learning', level: 'Advanced', icon: 'dl' },
        { name: 'LLMs', level: 'Intermediate', icon: 'llm' },
        { name: 'AI Leadership', level: 'Advanced', icon: 'ai' },
    ],
    tools: [
        { name: 'Git/GitHub/GitLab', level: 'Expert', icon: 'git' },
        { name: 'VS Code', level: 'Expert', icon: 'vscode' },
        { name: 'Selenium', level: 'Advanced', icon: 'selenium' },
        { name: 'Jira', level: 'Advanced', icon: 'jira' },
    ],
};

// Companies
export const COMPANIES = [
    { name: 'Splunk', logo: '/assets/logos/splunk.svg' },
    { name: 'Netskope', logo: '/assets/logos/netskope.svg' },
    { name: 'Mimecast', logo: '/assets/logos/mimecast.svg' },
    { name: 'StrongDM', logo: '/assets/logos/strongdm.svg' },
    { name: 'Align Technology', logo: '/assets/logos/aligntech.svg' },
];

// Experience
export const EXPERIENCE = {
    company: 'Crest Data Systems',
    position: 'Senior Software Engineer',
    duration: 'Dec 2019 - Present',
    location: 'Ahmedabad, India',
    achievements: [
        {
            title: 'Microsoft Teams App Development',
            description: 'Engineered a popular Microsoft Teams app in GoLang, widely used by multiple teams and stakeholders',
            technologies: ['GoLang', 'Microsoft Graph API', 'REST APIs'],
        },
        {
            title: 'AI Project Leadership',
            description: 'Initiated and spearheaded AI projects, mentored employees, and managed an AI team',
            technologies: ['Python', 'Machine Learning', 'Team Management'],
        },
        {
            title: 'Secret Management Automation',
            description: 'Directed and executed automation project for secret creation and rotation, reducing manual efforts by 80%',
            technologies: ['GoLang', 'Automation', 'Security'],
        },
        {
            title: 'Security Standards Implementation',
            description: 'Established and managed team to implement CSI and DAST security standards',
            technologies: ['GoLang', 'AWS', 'GCP', 'Kubernetes'],
        },
        {
            title: 'Report Automation System',
            description: 'Developed ReactJS and Python web application to automate report generation and email distribution',
            technologies: ['ReactJS', 'Python', 'Flask'],
        },
        {
            title: 'Jira Worklog Sync',
            description: 'Built automated system to synchronize user worklogs between Jira servers, cutting manual efforts by 90%',
            technologies: ['ReactJS', 'GoLang', 'Jira API'],
        },
        {
            title: 'Security Content Validation',
            description: 'Architected automation framework integrated with GitLab CI for continuous security content validation',
            technologies: ['GitLab CI', 'Python', 'Attack Range'],
        },
        {
            title: 'CI/CD Pipeline Development',
            description: 'Coordinated with global teams to develop CI/CD pipelines for Splunk Add-ons, reducing manual testing by 75%',
            technologies: ['Jenkins', 'Selenium', 'Python'],
        },
    ],
};

// Projects
export const PROJECTS = [
    {
        id: 1,
        title: 'Microsoft Teams Integration App',
        description: 'Scalable Teams app used by multiple stakeholders for improved team collaboration and workflow efficiency',
        longDescription: 'Developed a comprehensive Microsoft Teams integration application using GoLang that serves multiple teams across the organization. The app features real-time messaging capabilities, intelligent bot integration, and custom command processing.',
        technologies: ['GoLang', 'Microsoft Graph API', 'REST APIs', 'WebSockets'],
        impact: 'Improved team collaboration and workflow efficiency across multiple departments',
        features: ['Real-time messaging', 'Bot integration', 'Custom commands', 'User authentication'],
        image: '/assets/projects/teams-app.png',
        category: 'Integration',
    },
    {
        id: 2,
        title: 'AI-Powered Automation Platform',
        description: 'Led AI team to develop intelligent automation solutions, reducing manual efforts by 80% in secret management',
        longDescription: 'Spearheaded the development of an AI-powered automation platform that revolutionized secret management processes. The platform uses machine learning algorithms to predict and automate secret rotation schedules.',
        technologies: ['Python', 'Machine Learning', 'ReactJS', 'TensorFlow'],
        impact: 'Reduced manual efforts by 80% in secret management operations',
        features: ['Automated secret rotation', 'Intelligent monitoring', 'Predictive alerts', 'Audit trails'],
        image: '/assets/projects/ai-automation.png',
        category: 'AI/ML',
    },
    {
        id: 3,
        title: 'Security Compliance Framework',
        description: 'CSI and DAST security standards implementation ensuring compliance across multi-cloud environments',
        longDescription: 'Designed and implemented a comprehensive security compliance framework that automates security scanning and compliance reporting across AWS, GCP, and Kubernetes environments.',
        technologies: ['GoLang', 'AWS', 'GCP', 'Kubernetes', 'Security Tools'],
        impact: 'Ensured compliance across multi-cloud environments with automated monitoring',
        features: ['Automated security scanning', 'Compliance reporting', 'Vulnerability detection', 'Multi-cloud support'],
        image: '/assets/projects/security-framework.png',
        category: 'Security',
    },
    {
        id: 4,
        title: 'Jira Worklog Sync System',
        description: 'Automated worklog synchronization between Jira servers with 90% reduction in manual effort',
        longDescription: 'Built a robust synchronization system that automatically syncs worklogs between multiple Jira servers, handling conflict resolution and maintaining comprehensive audit trails.',
        technologies: ['ReactJS', 'GoLang', 'Jira API', 'PostgreSQL'],
        impact: '90% reduction in manual effort for worklog management',
        features: ['Real-time sync', 'Conflict resolution', 'Audit trails', 'Batch processing'],
        image: '/assets/projects/jira-sync.png',
        category: 'Automation',
    },
    {
        id: 5,
        title: 'CI/CD Pipeline Automation',
        description: 'Comprehensive testing and deployment pipelines for Splunk Add-ons with 75% reduction in manual testing',
        longDescription: 'Developed end-to-end CI/CD pipelines for Splunk Add-ons, incorporating automated testing, deployment orchestration, and intelligent rollback mechanisms.',
        technologies: ['Jenkins', 'Selenium', 'Python', 'GitLab CI', 'Docker'],
        impact: '75% reduction in manual testing efforts',
        features: ['Automated testing', 'Deployment orchestration', 'Rollback mechanisms', 'Test reporting'],
        image: '/assets/projects/cicd-pipeline.png',
        category: 'DevOps',
    },
    {
        id: 6,
        title: 'Report Generation System',
        description: 'Automated report generation and email distribution system significantly enhancing reporting efficiency',
        longDescription: 'Created a flexible report generation system with custom templates, scheduled report generation, and automated email distribution capabilities.',
        technologies: ['ReactJS', 'Python', 'Flask', 'Celery', 'PostgreSQL'],
        impact: 'Significantly enhanced reporting efficiency and reduced manual work',
        features: ['Custom templates', 'Scheduled reports', 'Email automation', 'Data visualization'],
        image: '/assets/projects/report-system.png',
        category: 'Automation',
    },
];

// Typing Animation Skills
export const TYPING_SKILLS = [
    'Python',
    'GoLang',
    'React',
    'AI/ML',
    'Cloud Architecture',
    'Kubernetes',
    'DevOps',
    'Full-Stack Development',
];
