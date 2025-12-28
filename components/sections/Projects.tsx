'use client';

import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';
import ProjectCard from '@/components/ui/ProjectCard';
import { Project } from '@/lib/types';

export default function Projects() {
    const projects: Project[] = [
        {
            id: 1,
            title: 'AI-Powered Document Assistant',
            description: 'Production-ready Retrieval-Augmented Generation (RAG) system capable of ingesting and querying complex PDF documents in real-time. Features a Hybrid AI Architecture that decouples the embedding layer (HuggingFace) from the inference layer (Google Gemini Cloud), resulting in zero embedding costs.',
            technologies: ['Python', 'LangChain', 'Gemini', 'FAISS', 'Streamlit', 'HuggingFace'],
            githubUrl: 'https://github.com/rickhaile',
        },
        {
            id: 2,
            title: 'Geospatial Air Quality Pipeline',
            description: 'End-to-end ETL Pipeline to extract 10 years of satellite environmental data from the Copernicus CAMS API. Solved the complex "Grid-to-Point" mismatch problem using KDTree spatial indexing, reducing computational complexity from O(N²) to O(N log N) for 7,900+ municipalities.',
            technologies: ['Python', 'KDTree', 'NetCDF', 'Pandas', 'Xarray', 'Copernicus API'],
            githubUrl: 'https://github.com/rickhaile',
        },
        {
            id: 3,
            title: 'Clinical Smoking Status Prediction',
            description: 'Scientific study on 55,000+ health records to predict smoking status using machine learning. Optimized Random Forest classifier achieving AUC of 0.85, identifying critical biomarkers through feature importance analysis with formal statistical hypothesis testing.',
            technologies: ['Python', 'Scikit-Learn', 'Pandas', 'Hypothesis Testing', 'Random Forest'],
            githubUrl: 'https://github.com/rickhaile',
        },
        {
            id: 4,
            title: 'Social Network Analysis & Community Detection',
            description: 'Leveraged Graph Theory and R igraph library to model complex social interactions within the AddHealth dataset. Benchmarked community detection algorithms (Walktrap, Louvain, Edge Betweenness) and quantified node influence through centrality analysis.',
            technologies: ['R', 'igraph', 'Graph Theory', 'Statistical Modeling', 'Community Detection'],
            githubUrl: 'https://github.com/rickhaile',
        },
    ];

    return (
        <section id="projects" className="py-20 md:py-32 bg-background-secondary relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0 opacity-30">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Section Title */}
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 mb-4"
                        >
                            <Rocket className="text-primary" size={24} />
                            <h2 className="text-4xl md:text-5xl font-bold gradient-text">Featured Projects</h2>
                        </motion.div>
                        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                            Data Science, AI, and Machine Learning projects showcasing end-to-end solutions
                        </p>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {projects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
