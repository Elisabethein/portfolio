import type { Resume } from "../../types/Resume";

const ResumeComponent = ({ resume, onClick }: { resume: Resume; onClick: () => void; }) => {
    return (
       <div className="relative flex items-center cursor-pointer transition" onClick={onClick}>
        <div className="absolute left-[8.5%] top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-orange-200 rounded-full shadow-orange-100 shadow-sm z-10" />

        <div className="ml-[10%] w-full hover:bg-orange-100/10 rounded-lg">
            <div className="p-4">
            <h3 className="text-xl font-semibold text-orange-300">{resume.position}</h3>
            <p className="text-md font-medium text-orange-200">{resume.company}</p>
            <p className="text-sm italic text-orange-100">
                {resume.startDate} – {resume.endDate}
            </p>
            </div>
        </div>
        </div>
    );
};

export default ResumeComponent;
