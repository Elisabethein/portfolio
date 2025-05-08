import type { TechItem } from "../../types/Stack";

interface Props {
    title: string;
    items: TechItem[];
}

const StackGroup = ({ title, items }: Props) => {

    return (
        <div className="bg-orange-100/20 shadow rounded-xl p-4">
            <h3 className="text-xl text-orange-200 font-semibold mb-8 mt-4">{title}</h3>
            <div className="flex flex-wrap gap-3 justify-center items-center mb-8">
            {items.map((item) => {
                    const Icon = item.icon;

                    return (
                        <span
                            key={item.name}
                            className="inline-flex items-center gap-2 text-orange-100 bg-orange-100/20 font-medium px-4 py-2 rounded-full m-1 transition-transform duration-200 hover:scale-105 hover:animate-wiggle"
                            >
                            {Icon && <Icon className="w-5 h-5" />}
                            {item.name}
                        </span>
                    );
                })}
            </div>
        </div>
    );
}

export default StackGroup;