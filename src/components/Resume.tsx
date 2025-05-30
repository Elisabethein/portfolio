import React from "react";
import ResumeComponent from "./subcomponents/ResumeComponent";
import ResumePopup from "./subcomponents/ResumePopup";
import { resumeData } from "../data/Resume";
import type { Resume as ResumeType } from "../types/Resume";

const Resume: React.FC = () => {
    const [selectedResume, setSelectedResume] = React.useState<ResumeType | null>(null);

    return (
        <section className="mt-20" id="resume">
            <div> 
                <h2 className="text-3xl font-bold text-orange-200 mb-4">My Resume</h2>
                <a href="/Elisabet_Hein_CV_2025.pdf"
                    download
                    className="inline-flex items-center gap-2 bg-orange-100/20 font-medium px-4 py-2 rounded-full m-1 transition-transform duration-200 hover:scale-105 hover:animate-wiggle"
                    >
                        Download PDF
                </a>
            </div>

            <div className="relative mt-16 flex justify-center">

                <div className="relative w-full max-w-3xl px-4">
                    <div className="absolute left-[10%] top-0 bottom-0 w-0.5 bg-orange-100/30 z-0">
                        <div className="absolute -top-[8px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-b-8 border-l-transparent border-r-transparent border-b-orange-100/30" />
                        <div className="absolute inset-0 w-full h-full bg-orange-100 blur-sm opacity-20 animate-pulse" />
                    </div>
                    
                    {/* Resume Items */}
                    <div className="flex flex-col space-y-16">
                        {resumeData.map((resume, index) => (
                        <ResumeComponent key={index} resume={resume} onClick={() => setSelectedResume(resume)} />
                        ))}
                    </div>
                </div>

            </div>

            { selectedResume && (
                <ResumePopup resume={selectedResume} onClick={() => setSelectedResume(null)} />
            )}

        </section>
    );
};

export default Resume;