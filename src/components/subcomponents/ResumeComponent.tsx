import type { Resume } from "../../types/Resume";

const ResumeComponent = ({ resume }: { resume: Resume }) => {
    return (
        <div className="relative">
            <div className="absolute -inset-1 rounded-xl bg-orange-100 blur-lg opacity-10"></div>
            <div className="bg-orange-100/20 shadow-lg shadow-orange-300/10 rounded-xl p-6 space-y-3 relative overflow-hidden h-full">
                <div className="absolute inset-0 rounded-xl pointer-events-none shadow-inner shadow-orange-200/10"></div>
                <div className="space-y-1 relative z-10">
                    <h3 className="text-2xl font-semibold text-orange-300">{resume.position}</h3>
                    <p className="text-md font-medium text-orange-200">{resume.company}</p>
                    <p className="text-sm text-orange-100 italic">
                        {resume.startDate} – {resume.endDate}
                    </p>
                </div>
                <p className="text-base text-white leading-relaxed relative z-10">{resume.description}</p>
            </div>
        </div>
    );
};

export default ResumeComponent;
