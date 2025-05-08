import React from "react";
import StackComponent from "./subcomponents/StackComponent";
import { stackData } from "../data/Stack.ts";

const Stack: React.FC = () => {
    return (
        <section className="mt-40" id="stack">
            <h2 className="text-3xl font-bold text-orange-200 mb-6">My Tech Stack</h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stackData.map((group) => (
                    <StackComponent key={group.title} title={group.title} items={group.items} />
                ))}
            </div>
        </section>
    );
};

export default Stack;
