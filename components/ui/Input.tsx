'use client';

import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

interface InputProps {
    label: string;
    error?: string;
    isTextarea?: boolean;
    rows?: number;
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    className?: string;
}

export default function Input({
    label,
    error,
    isTextarea = false,
    rows = 4,
    className = '',
    ...props
}: InputProps) {
    const baseStyles = 'w-full px-4 py-3 bg-background-secondary border border-white/10 rounded-lg text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300';

    return (
        <div className="w-full">
            <label className="block text-sm font-medium text-text-secondary mb-2">
                {label}
            </label>
            {isTextarea ? (
                <textarea
                    className={`${baseStyles} ${error ? 'border-red-500' : ''} ${className}`}
                    rows={rows}
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={props.onChange}
                />
            ) : (
                <input
                    className={`${baseStyles} ${error ? 'border-red-500' : ''} ${className}`}
                    type={props.type}
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={props.onChange}
                />
            )}
            {error && (
                <p className="mt-1 text-sm text-red-500">{error}</p>
            )}
        </div>
    );
}
