"use client";
import {
    motion,
} from "framer-motion";
import { Atom } from "lucide-react";

export const HeroParallax = ({
    characters,
}: {
    characters: {
        title: string;
        link: string;
        thumbnail: string;
    }[];
}) => {
    const firstRow = characters.slice(0, 15);
    const secondRow = characters.slice(15, 35);
    const thirdRow = characters.slice(35, 50);

    return (
        <div
            className=" overflow-hidden  antialiased relative flex flex-col self-auto group/hero "
        >
            <motion.div
                style={{
                    opacity: 0.2,
                    translateY: 0
                }}
                className=""
            >
                <div
                    className="flex space-x-20 group mb-20"
                >
                    <motion.div
                        className="group-hover:paused flex flex-row-reverse space-x-reverse space-x-20  animate-loop-scroll "
                    >
                        {firstRow.map((product) => (
                            <ProductCard
                                product={product}
                                key={product.title}
                            />
                        ))}
                    </motion.div>
                    <motion.div
                        className="group-hover:paused flex flex-row-reverse space-x-reverse space-x-20  animate-loop-scroll "
                    >
                        {firstRow.map((product) => (
                            <ProductCard
                                product={product}
                                key={product.title}
                            />
                        ))}

                    </motion.div>
                </div>
                <div
                    className="flex space-x-20 group mb-20"
                >
                    <motion.div
                        className="group-hover:paused flex  space-x-20 animate-loop-scroll2 "
                    >
                        {secondRow.map((product) => (
                            <ProductCard
                                product={product}
                                key={product.title}
                            />
                        ))}
                    </motion.div>
                    <motion.div
                        className="group-hover:paused flex space-x-20 animate-loop-scroll2 "
                    >
                        {secondRow.map((product) => (
                            <ProductCard
                                product={product}
                                key={product.title}
                            />
                        ))}
                    </motion.div>
                </div>
                <div
                    className="flex space-x-20 group"
                >
                    <motion.div
                        className="group-hover:paused flex flex-row-reverse space-x-reverse space-x-20 animate-loop-scroll "
                    >
                        {thirdRow.map((product) => (
                            <ProductCard
                                product={product}
                                key={product.title}
                            />
                        ))}
                    </motion.div>
                    <motion.div
                        className="group-hover:paused flex flex-row-reverse space-x-reverse space-x-20 animate-loop-scroll "
                    >
                        {thirdRow.map((product) => (
                            <ProductCard
                                product={product}
                                key={product.title}
                            />
                        ))}
                    </motion.div>
                </div>
            </motion.div>
            <Header />
        </div>
    );
};


export const Header = () => {
    return (
        <div
            className="group-hover/hero:opacity-10 transition-opacity duration-700 pointer-events-none absolute flex justify-start items-center h-[80vh] w-[100vh]">
            <div
                className="text-stroke-custom-main text-secondary duration-1000  animate-title font-display text-4xl xl:text-9xl font-bold flex justify-center items-center gap-2 pl-5"
            >
                CH<Atom
                    className={`animate-logo-color h-[3rem] w-[3rem] xl:h-[8rem] xl:w-[8rem] `}
                />R4CT3R5
            </div>
        </div>
    );
};

export const ProductCard = ({
    product,
}: {
    product: {
        title: string;
        link: string;
        thumbnail: string;
    };
}) => {

    return (
        <motion.div
            whileHover={{
                y: -20,
            }}
            key={product.title}
            className={"group/product h-56 w-[20rem] relative flex-shrink-0"}
        >
            <a
                href={product.link}
                className="block group-hover/product:shadow-2xl "
            >
                <img
                    src={product.thumbnail}
                    height={600}
                    width={600}
                    className="object-cover object-left-top absolute h-full w-full inset-0"
                    alt={product.title}
                />
            </a>
            <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
            <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
                {product.title}
            </h2>
        </motion.div>
    );
};