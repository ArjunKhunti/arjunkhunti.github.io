import { motion } from 'framer-motion';
import { COMPANIES } from '../utils/constants';

export default function Companies() {
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
        <section className="companies section" id="companies">
            <div className="container">
                <h2 className="section-title text-center">Companies I've Worked With</h2>
                <p className="section-subtitle text-center">
                    Trusted by leading organizations in cybersecurity and technology
                </p>

                <motion.div
                    className="companies-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {COMPANIES.map((company, index) => (
                        <motion.div
                            key={index}
                            className="company-card"
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, y: -5 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="company-logo">
                                <img
                                    src={company.logo}
                                    alt={`${company.name} logo`}
                                    loading="lazy"
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
