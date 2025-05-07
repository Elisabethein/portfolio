import type { TechItem } from "../../types/Stack";

interface Props {
    title: string;
    items: TechItem[];
}

const StackGroup = ({ title, items }: Props) => {
    const getLevelColor = (level: string) => {
        switch (level) {
            case "expert":
                return "text-green-400";
            case "intermediate":
                return "text-amber-300";
            case "learning":
                return "text-sky-400";
            default:
                return "text-gray-400";
        }
    }

    return (
        <div className="bg-zinc-700 dark:bg-gray-800 shadow rounded-xl p-4">
            <h3 className="text-xl font-semibold mb-4">{title}</h3>
            <div className="flex flex-wrap gap-2 justify-start">
                {items.map((item) => (
                <span
                    key={item.name}
                    className={`inline-block ${getLevelColor(item.level)} px-2 py-1 rounded-md`}
                >
                    {item.name}
                </span>
                ))}
            </div>
        </div>
    );
}

export default StackGroup;