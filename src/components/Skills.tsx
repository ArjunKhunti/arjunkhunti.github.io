import { motion } from 'framer-motion';
import { useState } from 'react';
import { SKILLS } from '../utils/constants';

// SVG Icon Component
const SkillIcon = ({ name }: { name: string }) => {
    // Simple placeholder SVG icons - you can replace with actual icons
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="9" y1="9" x2="15" y2="15"></line>
            <line x1="15" y1="9" x2="9" y2="15"></line>
        </svg>
    );
};

export default function Skills() {
    const [activeCategory, setActiveCategory] = useState<string>('all');

    const categories = [
        { id: 'all', label: 'All Skills' },
        { id: 'languages', label: 'Languages' },
        { id: 'frameworks', label: 'Frameworks' },
        { id: 'cloud', label: 'Cloud & DevOps' },
        { id: 'ai', label: 'AI & ML' },
        { id: 'tools', label: 'Tools' },
    ];

    const getAllSkills = () => {
        if (activeCategory === 'all') {
            return [
                ...SKILLS.languages,
                ...SKILLS.frameworks,
                ...SKILLS.cloud,
                ...SKILLS.ai,
                ...SKILLS.tools,
            ];
        }
        return SKILLS[activeCategory as keyof typeof SKILLS] || [];
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.4,
            },
        },
    };

    return (
        <section className="skills section" id="skills">
            <div className="container">
                <h2 className="section-title text-center">Skills & Expertise</h2>
                <p className="section-subtitle text-center">
                    Technologies and tools I work with
                </p>

                {/* Category Filters */}
                <div className="skills-filters">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
                            onClick={() => setActiveCategory(category.id)}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                {/* Skills Grid */}
                <motion.div
                    className="skills-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    key={activeCategory}
                >
                    {getAllSkills().map((skill, index) => (
                        <motion.div
                            key={`${skill.name}-${index}`}
                            className="skill-card"
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, y: -5 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="skill-icon">
                                <SkillIcon name={skill.icon} />
                            </div>
                            <h3 className="skill-name">{skill.name}</h3>
                            <span className="skill-level">{skill.level}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
