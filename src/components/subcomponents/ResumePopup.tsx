import React from "react";
import type { Resume } from "../../types/Resume";

interface Props {
    resume: Resume;
    onClick: () => void;
}

const ResumePopup: React.FC<Props> = ({ resume, onClick }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50" onClick={onClick}>
            <div
                className="relative rounded-lg shadow-lg max-w-md w-full p-8 overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="absolute inset-0 bg-neutral-900 rounded-lg" />

                <div className="absolute inset-0 bg-orange-100/20 rounded-lg" />

                <div className="relative z-10 text-orange-100">
                    <h3 className="text-xl font-semibold text-orange-300 mb-2">{resume.position}</h3>
                    <p className="text-md font-medium text-orange-200 mb-4">{resume.company}</p>
                    <p className="text-sm text-orange-100 mb-4">
                        {resume.startDate} – {resume.endDate}
                    </p>
                    <p className="text-sm text-orange-100 leading-loose">{resume.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ResumePopup;
