import { motion } from 'framer-motion';
import { useState } from 'react';
import { PROJECTS } from '../utils/constants';

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState('all');
    const [selectedProject, setSelectedProject] = useState<number | null>(null);

    const categories = ['all', 'Integration', 'AI/ML', 'Security', 'Automation', 'DevOps'];

    const filteredProjects =
        activeFilter === 'all'
            ? PROJECTS
            : PROJECTS.filter((project) => project.category === activeFilter);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
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
        <section className="projects section" id="projects">
            <div className="container">
                <h2 className="section-title text-center">Featured Projects</h2>
                <p className="section-subtitle text-center">
                    Showcasing my best work and impactful solutions
                </p>

                {/* Category Filters */}
                <div className="project-filters">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
                            onClick={() => setActiveFilter(category)}
                        >
                            {category === 'all' ? 'All Projects' : category}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <motion.div
                    className="projects-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    key={activeFilter}
                >
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            className="project-card"
                            variants={itemVariants}
                            whileHover={{ y: -8 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="project-image">
                                <div className="image-placeholder">
                                    <span className="project-category">{project.category}</span>
                                </div>
                            </div>

                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>

                                <div className="project-tech">
                                    {project.technologies.slice(0, 3).map((tech, index) => (
                                        <span key={index} className="tech-badge">{tech}</span>
                                    ))}
                                    {project.technologies.length > 3 && (
                                        <span className="tech-badge">+{project.technologies.length - 3}</span>
                                    )}
                                </div>

                                <div className="project-impact">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                                    </svg>
                                    <span>{project.impact}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
