'use client';

import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
    label: string;
    error?: string;
    isTextarea?: boolean;
}

export default function Input({
    label,
    error,
    isTextarea = false,
    className = '',
    ...props
}: InputProps) {
    const baseStyles = 'w-full px-4 py-3 bg-background-secondary border border-white/10 rounded-lg text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300';

    const Component = isTextarea ? 'textarea' : 'input';

    return (
        <div className="w-full">
            <label className="block text-sm font-medium text-text-secondary mb-2">
                {label}
            </label>
            <Component
                className={`${baseStyles} ${error ? 'border-red-500' : ''} ${className}`}
                {...(props as any)}
            />
            {error && (
                <p className="mt-1 text-sm text-red-500">{error}</p>
            )}
        </div>
    );
}
