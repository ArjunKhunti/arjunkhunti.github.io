import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { PROJECTS } from '../utils/constants';

export default function Projects() {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextProject = () => {
        setActiveIndex((prev) => (prev + 1) % PROJECTS.length);
    };

    const prevProject = () => {
        setActiveIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
    };

    const currentProject = PROJECTS[activeIndex];

    return (
        <section className="projects section" id="projects">
            <div className="container">
                <h2 className="section-title text-center">Magical Creations</h2>
                <p className="section-subtitle text-center">
                    A collection of my most powerful spells and artifacts
                </p>

                <div className="carousel-container">
                    <button className="carousel-btn prev" onClick={prevProject} aria-label="Previous Project">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                    </button>

                    <div className="carousel-content">
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={currentProject.id}
                                className="project-card-large glass"
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="project-image-large">
                                    <div className="image-placeholder-large">
                                        <span className="project-category">{currentProject.category}</span>
                                        {/* In a real app, use actual images */}
                                        {/* <img src={currentProject.image} alt={currentProject.title} /> */}
                                    </div>
                                </div>

                                <div className="project-details">
                                    <h3 className="project-title-large">{currentProject.title}</h3>
                                    <p className="project-description-large">{currentProject.longDescription || currentProject.description}</p>

                                    <div className="project-tech-large">
                                        {currentProject.technologies.map((tech, index) => (
                                            <span key={index} className="tech-badge">{tech}</span>
                                        ))}
                                    </div>

                                    <div className="project-impact-large">
                                        <strong>Impact:</strong> {currentProject.impact}
                                    </div>

                                    <div className="project-features">
                                        <h4>Key Features:</h4>
                                        <ul>
                                            {currentProject.features?.map((feature, index) => (
                                                <li key={index}>{feature}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <button className="carousel-btn next" onClick={nextProject} aria-label="Next Project">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </button>
                </div>

                <div className="carousel-indicators">
                    {PROJECTS.map((_, index) => (
                        <button
                            key={index}
                            className={`indicator ${index === activeIndex ? 'active' : ''}`}
                            onClick={() => setActiveIndex(index)}
                            aria-label={`Go to project ${index + 1}`}
                        />
                    ))}
                </div>
            </div>


        </section>
    );
}
