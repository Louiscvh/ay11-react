import { Heading } from "./Heading.tsx";
import { clsx } from "clsx";
import { useState, useRef, useEffect } from "react";

export const Slide = ({ title, desc, image, date, className }: { title: string, desc: string, image: string, date: string, className?: string }) => {
    return (
        <div className={clsx("flex flex-col gap-4", className)}>
            <img src={image} alt={title} className="w-full h-[500px] object-cover" />
            <div className="md:w-1/2 flex flex-col gap-4">
                <Heading className="text-custom-cartier font-medium">#ÉVENEMENT</Heading>
                <div>
                    <Heading type="h3">{title}</Heading>
                    <Heading className="text-custom-cartier font-semibold">{date}</Heading>
                </div>
                <Heading className="md:w-2/3">{desc}</Heading>
            </div>
        </div>
    );
};

export const Carousel = ({ slides }: { slides: { title: string, desc: string, image: string, date: string }[] }) => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [progress, setProgress] = useState<number>(0);
    const [isPlaying, setIsPlaying] = useState<boolean>(true);
    const slideRef = useRef<HTMLDivElement>(null);

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
        //Easing to 0
       setProgress(0)
    };

    const togglePlayPause = () => {
        setIsPlaying((prev) => !prev);
    };

    useEffect(() => {
        let interval: number;
        if (isPlaying) {
            interval = setInterval(() => {
                setProgress((prev) => {
                    if (prev >= 100) {
                        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
                        return 0;
                    }
                    return prev + 2; // 2% progress per 0.1s, so 5s total for 100%
                });
            }, 100); // Update progress every 0.1s
        }
        return () => clearInterval(interval);
    }, [isPlaying, slides.length]);

    useEffect(() => {
        if (slideRef.current) {
            slideRef.current.scrollTo({
                left: slideRef.current.offsetWidth * currentSlide,
                behavior: "smooth",
            });
        }
    }, [currentSlide]);

    return (
        <div className="relative overflow-hidden w-full h-full pb-32">
            <div className="absolute right-2 flex bottom-16 justify-center items-center space-x-2">
                {slides.map((_, index) => (
                    <button
                        tabIndex={1}
                        key={index}
                        className={clsx(
                            "relative h-4 w-12 flex items-center justify-center border-2 border-custom-cartier focus:outline-custom-cartier focus:outline-offset-4",
                        )}
                        onClick={() => goToSlide(index)}
                    >
                        <div
                            className={clsx("absolute left-0 top-0 h-full transition bg-custom-cartier hover:bg-custom-dark-cartier", currentSlide === index ? "transition-all duration-100" : "")}
                            style={{width: currentSlide === index ? `${progress}%` : '100%'}}
                        ></div>
                    </button>
                ))}
                <button type="button" role="button"
                        className="unset-all focus:outline-custom-cartier focus:outline-offset-4"
                        tabIndex={1}
                        onClick={togglePlayPause}>
                    <img src={`/images/${isPlaying ? "play.svg" : "pause.svg"}`} alt="Play icon pour le carousel" className="size-5"/>
                </button>
            </div>
            <div ref={slideRef} className="flex overflow-x-hidden snap-x snap-mandatory h-full w-full">
                {slides.map((slide, index) => (
                    <div key={index} className="flex-shrink-0 w-full h-full snap-center">
                        <Slide title={slide.title} desc={slide.desc} image={slide.image} date={slide.date} className="w-full h-full flex flex-col items-start" />
                    </div>
                ))}
            </div>
        </div>
    );
};
