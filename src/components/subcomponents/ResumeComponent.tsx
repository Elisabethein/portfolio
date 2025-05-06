import type { Resume } from "../../types/Resume";

const ResumeComponent = ({ resume }: { resume: Resume }) => {
    return (
        <div className="">
            <div className="">
                <h3 className="">{resume.position}</h3>
                <p className="">{resume.company}</p>
                <p className="">{resume.location}</p>
                <p className="">
                    {resume.startDate} - {resume.endDate}
                </p>
            </div>
            <p className="">{resume.description}</p>
        </div>
    );
};

export default ResumeComponent;