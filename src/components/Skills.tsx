import { motion } from 'framer-motion';
import { SKILLS } from '../utils/constants';

export default function Skills() {
    const skillCategories = [
        { id: 'languages', label: 'Programming Languages', skills: SKILLS.languages, icon: '💻' },
        { id: 'frameworks', label: 'Frameworks & Libraries', skills: SKILLS.frameworks, icon: '⚡' },
        { id: 'cloud', label: 'Cloud & DevOps', skills: SKILLS.cloud, icon: '☁️' },
        { id: 'ai', label: 'AI & Machine Learning', skills: SKILLS.ai, icon: '🤖' },
        { id: 'tools', label: 'Development Tools', skills: SKILLS.tools, icon: '🛠️' },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <section className="skills section" id="skills">
            <div className="container">
                <h2 className="section-title text-center">Wizarding Proficiency</h2>
                <p className="section-subtitle text-center">
                    Magical abilities and enchantments I've mastered
                </p>

                <motion.div
                    className="skills-cards"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {skillCategories.map((category) => (
                        <motion.div
                            key={category.id}
                            className="skill-category-card glass"
                            variants={cardVariants}
                            whileHover={{ y: -8, scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="card-header">
                                <span className="category-icon">{category.icon}</span>
                                <h3 className="category-title">{category.label}</h3>
                            </div>
                            <ul className="skills-list">
                                {category.skills.map((skill, index) => (
                                    <li key={index} className="skill-item">
                                        <span className="skill-bullet">✦</span>
                                        <span className="skill-name">{skill.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <style>{`
                .skills-cards {
                    display: grid;
                    grid-template-columns: repeat(5, 1fr);
                    gap: var(--space-4);
                    margin-top: var(--space-12);
                }

                @media (max-width: 1200px) {
                    .skills-cards {
                        grid-template-columns: repeat(3, 1fr);
                    }
                }

                @media (max-width: 768px) {
                    .skills-cards {
                        grid-template-columns: 1fr;
                    }
                }

                .skill-category-card {
                    background: rgba(255, 255, 255, 0.8);
                    border-radius: var(--radius-xl);
                    padding: var(--space-4);
                    transition: all var(--transition-base);
                    border: 1px solid rgba(116, 0, 1, 0.1);
                }

                .card-header {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: var(--space-2);
                    margin-bottom: var(--space-4);
                    padding-bottom: var(--space-3);
                    border-bottom: 2px solid var(--accent-gold);
                }

                .category-icon {
                    font-size: var(--text-2xl);
                }

                .category-title {
                    font-family: var(--font-heading);
                    font-size: var(--text-sm);
                    color: var(--primary-navy);
                    margin: 0;
                    text-align: center;
                    line-height: 1.2;
                }

                .skills-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    gap: var(--space-1);
                }

                .skill-item {
                    display: flex;
                    align-items: center;
                    gap: var(--space-2);
                    padding: var(--space-1);
                    border-radius: var(--radius-md);
                    transition: background var(--transition-base);
                }

                .skill-item:hover {
                    background: rgba(116, 0, 1, 0.05);
                }

                .skill-bullet {
                    color: var(--accent-purple);
                    font-size: var(--text-sm);
                    flex-shrink: 0;
                }

                .skill-name {
                    font-weight: var(--font-medium);
                    color: var(--gray-800);
                    font-size: var(--text-sm);
                    line-height: 1.3;
                }
            `}</style>
        </section>
    );
}
