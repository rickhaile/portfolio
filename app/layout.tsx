import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Dagim Haile Bekele - Data Scientist & AI Engineer",
    description: "Aspiring Data Scientist with expertise in Machine Learning, AI, RAG Pipelines, and Data Engineering. Graduate with 110/110 Cum Laude from Università Politecnica delle Marche.",
    keywords: ["data scientist", "AI engineer", "machine learning", "Python", "RAG", "LangChain", "portfolio"],
    authors: [{ name: "Dagim Haile Bekele" }],
    openGraph: {
        title: "Dagim Haile Bekele - Data Scientist & AI Engineer",
        description: "Aspiring Data Scientist with expertise in Machine Learning, AI, RAG Pipelines, and Data Engineering.",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}
