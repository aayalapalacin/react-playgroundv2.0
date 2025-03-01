import * as motion from "motion/react-client";
import type { Variants } from "motion/react";
import { tutorialsArray } from "@/app/assets/tutorials";
import { Tutorial } from "@/app/assets/types";

interface CategoryCardProps {
    selectedCategoryProp: string;
}

export default function CategoryCard({ selectedCategoryProp }: CategoryCardProps) {
    const tutorialsOfCategory: Tutorial[] = tutorialsArray.filter(
        (tutorial) => tutorial.category === selectedCategoryProp
    );

    return (
        <div className="relative flex justify-center items-center min-h-[600px]">
            {/* Soft background for better UX */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-gray-200 opacity-50 rounded-xl" />

            {/* Scrollable Container */}
            <div className="relative w-[500px] max-w-full max-h-[600px] overflow-y-auto scroll-smooth p-5 rounded-xl shadow-lg border border-gray-300">
                {tutorialsOfCategory.map((tutorial, i) => {
                    const tutorialNameReduced: string = tutorial.name.split(":")[0];
                    return (
                        <Card
                            tutorialProp={tutorialNameReduced}
                            tutorialIcon={tutorial.icon}
                            key={i + tutorialNameReduced}
                        />
                    );
                })}
            </div>
        </div>
    );
}

interface CardProps {
    tutorialProp: string;
    tutorialIcon: string;
}

function Card({ tutorialProp, tutorialIcon }: CardProps) {
    return (
        <motion.div
            className="overflow-hidden flex justify-center items-center relative pt-5 -mb-[120px]"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.6 }}
        >
            <div className="absolute inset-0" style={{ background, clipPath: clipPathStyle }} />
            <motion.div
                className="text-[2rem] font-bold w-[300px] h-[430px] p-5 flex justify-center items-center rounded-[20px] bg-gray-100"
                style={{
                    boxShadow:
                        "0px 0px 59px 16px rgb(0 0 0 / 0.1), 0 36px 34px -4px rgb(0 0 0 / 0.1)",
                }}
                variants={cardVariants}
            >
                {tutorialProp}
                {tutorialIcon}
            </motion.div>
        </motion.div>
    );
}

const cardVariants: Variants = {
    offscreen: {
        y: 300,
    },
    onscreen: {
        y: 50,
        rotate: -10,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
        },
    },
};

const background = `linear-gradient(306deg, #61DAFB, #001333)`;

const clipPathStyle = `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`;
