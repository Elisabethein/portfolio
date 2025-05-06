import type { TechItem } from "../../types/Stack";

interface Props {
    title: string;
    items: TechItem[];
}

const StackGroup = ({ title, items }: Props) => {
    const getLevelColor = (level: string) => {
        switch (level) {
            case "expert":
                return "text-green-500";
            case "intermediate":
                return "text-yellow-500";
            case "learning":
                return "text-blue-500";
            default:
                return "text-gray-500";
        }
    }

    return (
        <div className="bg-white dark:bg-gray-800 shadow rounded-xl p-4">
            <h3 className="text-xl font-semibold mb-4">{title}</h3>
            <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                <span key={item.name} className={getLevelColor(item.level)}>
                    {item.name}
                </span>
                ))}
            </div>
        </div>
    );
}

export default StackGroup;