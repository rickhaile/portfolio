'use client';

import { motion } from 'framer-motion';
import { Code2, Database, Wrench, Brain, Award, GraduationCap } from 'lucide-react';

export default function About() {
    const skills = {
        ai: ['LangChain', 'Google Gemini API', 'HuggingFace', 'FAISS', 'RAG Pipelines', 'LLMs'],
        dataScience: ['Scikit-Learn', 'Pandas', 'NumPy', 'SciPy', 'Random Forest', 'Hypothesis Testing'],
        languages: ['Python (Advanced)', 'R (Intermediate)', 'SQL'],
        tools: ['Git', 'GitHub', 'VS Code', 'Streamlit', 'PowerBI', 'Matplotlib', 'Seaborn'],
    };

    const skillCategories = [
        { title: 'AI & GenAI', icon: Brain, skills: skills.ai, color: 'from-primary to-accent-cyan' },
        { title: 'Data Science', icon: Database, skills: skills.dataScience, color: 'from-accent-purple to-accent-pink' },
        { title: 'Languages', icon: Code2, skills: skills.languages, color: 'from-accent-cyan to-primary' },
        { title: 'DevTools & Viz', icon: Wrench, skills: skills.tools, color: 'from-accent-orange to-primary' },
    ];

    const certifications = [
        'Google Advanced Data Analytics Professional Certificate',
        'Google Data Analytics Professional Certificate',
        'Associate Data Engineer – DataCamp',
        'Associate Data Scientist – DataCamp',
    ];

    return (
        <section id="about" className="py-20 md:py-32 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0 opacity-50">
                <div className="absolute top-1/2 left-0 w-72 h-72 bg-accent-cyan/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent-purple/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-6xl mx-auto"
                >
                    {/* Section Title */}
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 mb-4"
                        >
                            <GraduationCap className="text-primary" size={28} />
                            <h2 className="text-4xl md:text-5xl font-bold gradient-text">About Me</h2>
                        </motion.div>
                        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                            Digital Economics graduate bridging the gap between economic theory and technical implementation
                        </p>
                    </div>

                    {/* Bio */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="glass rounded-2xl p-8 mb-12"
                    >
                        <p className="text-text-secondary text-lg leading-relaxed mb-4">
                            I am <span className="text-primary font-semibold">Dagim Haile Bekele</span>, a Digital Economics student at
                            Università Politecnica delle Marche with a passion for Data Science and AI. I graduated with
                            <span className="text-accent-cyan font-semibold"> 110/110 Cum Laude</span> (highest distinction) and was ranked
                            in the <span className="text-accent-purple font-semibold">top 0.5%</span> among 450,000+ students in Ethiopia&apos;s national examination.
                        </p>
                        <p className="text-text-secondary text-lg leading-relaxed">
                            My experience spans from building production-ready RAG systems with Hybrid AI architectures to conducting
                            longitudinal environmental economics research. I am committed to continuous learning with multiple professional
                            certifications in Data Engineering and Analytics from Google and DataCamp.
                        </p>
                    </motion.div>

                    {/* Experience Highlight */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="glass rounded-2xl p-8 mb-12"
                    >
                        <h3 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
                            <Award className="text-primary" size={24} />
                            Experience
                        </h3>
                        <div className="space-y-6">
                            <div className="border-l-2 border-primary pl-4">
                                <h4 className="text-lg font-semibold text-text-primary">Research Data Analyst Intern</h4>
                                <p className="text-primary-light text-sm">Department of Economics and Social Sciences, UnivPM • May 2025 – July 2025</p>
                                <p className="text-text-secondary mt-2">
                                    Conducted comprehensive longitudinal study on environmental economics. Achieved &quot;Excellent&quot; performance
                                    rating for problem-solving autonomy and technical competence.
                                </p>
                            </div>
                            <div className="border-l-2 border-accent-cyan pl-4">
                                <h4 className="text-lg font-semibold text-text-primary">Student Assistant</h4>
                                <p className="text-accent-cyan text-sm">Università Politecnica delle Marche • Oct 2024 – June 2025</p>
                                <p className="text-text-secondary mt-2">
                                    Provided technical mentorship to students, assisted with data analysis queries, and streamlined
                                    administrative workflows.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Skills */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        {skillCategories.map((category, index) => (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass rounded-xl p-6 hover:glow-effect transition-all duration-300"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color}`}>
                                        <category.icon size={24} className="text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-text-primary">{category.title}</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1 text-sm bg-background-tertiary text-text-secondary rounded-full border border-white/10 hover:border-primary hover:text-primary transition-all duration-300"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Certifications */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="glass rounded-2xl p-8"
                    >
                        <h3 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
                            <Award className="text-accent-cyan" size={24} />
                            Certifications
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {certifications.map((cert, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center gap-3 text-text-secondary"
                                >
                                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                                    <span>{cert}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
