'use client';

import { motion } from 'framer-motion';
import { Project } from '@/lib/types';
import { Github, ExternalLink } from 'lucide-react';
import Image from 'next/image';

interface ProjectCardProps {
    project: Project;
    index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="group relative glass rounded-xl overflow-hidden transition-all duration-300 hover:glow-effect"
        >
            {/* Project Image/Gradient Background */}
            <div className="h-48 bg-gradient-to-br from-primary/20 via-accent-purple/20 to-accent-cyan/20 relative overflow-hidden">
                {project.imageUrl ? (
                    <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover opacity-80 group-hover:scale-110 transition-transform duration-500"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-6xl font-bold gradient-text opacity-20">
                            {project.title.charAt(0)}
                        </div>
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background-secondary to-transparent"></div>
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-2xl font-bold text-text-primary mb-2 group-hover:gradient-text transition-all duration-300">
                    {project.title}
                </h3>
                <p className="text-text-secondary mb-4 line-clamp-3">
                    {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                        <span
                            key={i}
                            className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary-light rounded-full border border-primary/20"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors"
                        >
                            <Github size={20} />
                            <span className="text-sm">Code</span>
                        </a>
                    )}
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-text-secondary hover:text-accent-cyan transition-colors"
                        >
                            <ExternalLink size={20} />
                            <span className="text-sm">Live Demo</span>
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
