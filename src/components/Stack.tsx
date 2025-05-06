import React from "react";
import StackComponent from "./subcomponents/StackComponent";
import { stackData } from "../data/Stack.ts";

const Stack: React.FC = () => {
    return (
        <section className="">
            <h2 className="">My Tech Stack</h2>
            <div className="">
                {stackData.map((group) => (
                    <StackComponent key={group.title} title={group.title} items={group.items} />
                ))}
            </div>
        </section>
    );
};

export default Stack;
