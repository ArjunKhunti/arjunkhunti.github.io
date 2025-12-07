import { useState } from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../utils/constants';
import './Contact.module.css';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        honeypot: '', // Anti-spam field
    });

    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Honeypot check - if filled, it's a bot
        if (formData.honeypot) {
            return;
        }

        setFormStatus('submitting');
        setErrorMessage('');

        try {
            const accessKey = import.meta.env.PUBLIC_WEB3FORMS_ACCESS_KEY;

            if (!accessKey) {
                throw new Error('Web3Forms access key not configured');
            }

            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    access_key: accessKey,
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    from_name: 'Portfolio Contact Form',
                    to_email: 'arjunvkhunti@gmail.com',
                }),
            });

            const result = await response.json();

            if (result.success) {
                setFormStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' });
                setTimeout(() => setFormStatus('idle'), 5000);
            } else {
                throw new Error(result.message || 'Failed to send message');
            }
        } catch (error) {
            setFormStatus('error');
            setErrorMessage(error instanceof Error ? error.message : 'Failed to send message. Please try again.');
            setTimeout(() => setFormStatus('idle'), 5000);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <section className="contact section" id="contact">
            <div className="container">
                <h2 className="section-title text-center">Send me an Owl</h2>
                <p className="section-subtitle text-center">
                    Have a magical inquiry or just want to say hello?
                </p>

                <div className="contact-content">
                    {/* Contact Form */}
                    <motion.div
                        className="contact-form-wrapper"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <form className="contact-form" onSubmit={handleSubmit}>
                            {/* Honeypot field - hidden from users */}
                            <input
                                type="text"
                                name="honeypot"
                                value={formData.honeypot}
                                onChange={handleChange}
                                style={{ display: 'none' }}
                                tabIndex={-1}
                                autoComplete="off"
                            />

                            <div className="form-group">
                                <label htmlFor="name">Wizard Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Harry Potter"
                                    required
                                    minLength={2}
                                    maxLength={100}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Owl Address (Email)</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="harry@hogwarts.edu"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Subject of Scroll</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Regarding the Dark Arts..."
                                    required
                                    minLength={3}
                                    maxLength={200}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Scroll Content</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Write your magical message here..."
                                    required
                                    minLength={10}
                                    maxLength={1000}
                                ></textarea>
                            </div>

                            <motion.button
                                type="submit"
                                className="btn btn-primary"
                                disabled={formStatus === 'submitting'}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {formStatus === 'submitting' ? (
                                    <>
                                        <span>Sending Owl...</span>
                                        <svg className="spinner" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="10"></circle>
                                        </svg>
                                    </>
                                ) : (
                                    <>
                                        <span>Send Owl</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <line x1="22" y1="2" x2="11" y2="13"></line>
                                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                        </svg>
                                    </>
                                )}
                            </motion.button>

                            {formStatus === 'success' && (
                                <motion.div
                                    className="form-message success"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                >
                                    ✨ Owl sent successfully! I'll get back to you soon.
                                </motion.div>
                            )}

                            {formStatus === 'error' && (
                                <motion.div
                                    className="form-message error"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                >
                                    ⚠️ {errorMessage || 'The owl got lost! Please try again later.'}
                                </motion.div>
                            )}
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="info-card">
                            <div className="info-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                            </div>
                            <div className="info-content">
                                <h4>Owl Post</h4>
                                <a href={`mailto:${PERSONAL_INFO.email}`}>{PERSONAL_INFO.email}</a>
                            </div>
                        </div>

                        <div className="info-card">
                            <div className="info-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                    <rect x="2" y="9" width="4" height="12"></rect>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg>
                            </div>
                            <div className="info-content">
                                <h4>Wizarding Network</h4>
                                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer">
                                    LinkedIn Profile
                                </a>
                            </div>
                        </div>

                        <div className="info-card">
                            <div className="info-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                </svg>
                            </div>
                            <div className="info-content">
                                <h4>Code Grimoire</h4>
                                <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer">
                                    GitHub Profile
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <style>{`
                .spinner {
                    animation: spin 1s linear infinite;
                }

                @keyframes spin {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }
            `}</style>
        </section>
    );
}
