'use client';

import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
    const socialLinks = [
        { icon: Github, href: 'https://github.com/rickhaile', label: 'GitHub' },
        { icon: Linkedin, href: 'https://linkedin.com/in/dagimhaile', label: 'LinkedIn' },
        { icon: Mail, href: 'mailto:dagimhaileb@gmail.com', label: 'Email' },
    ];

    return (
        <footer className="bg-background-secondary border-t border-white/10 py-8">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center gap-6">
                    {/* Social Links */}
                    <div className="flex gap-6">
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-text-secondary hover:text-primary transition-colors duration-300"
                                whileHover={{ scale: 1.2, y: -5 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                aria-label={social.label}
                            >
                                <social.icon size={24} />
                            </motion.a>
                        ))}
                    </div>

                    {/* Copyright */}
                    <p className="text-text-muted text-sm">
                        © {new Date().getFullYear()} Dagim Haile Bekele. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
