import { Heading } from "./Heading.tsx";
import { clsx } from "clsx";
import { useState, useRef, useEffect } from "react";
import {Pause, Play} from "lucide-react";

export const Slide = ({ title, desc, image, className }: { title: string, desc: string, image: string, className?: string }) => {
    return (
        <div className={clsx("flex flex-col gap-4", className)}>
            <img src={image} alt={title} className="w-full h-[500px] object-cover" />
            <div className="w-1/2 flex flex-col gap-4">
                <Heading type="h3">{title}</Heading>
                <Heading type="p">{desc}</Heading>
            </div>
        </div>
    );
};

export const Carousel = ({ slides }: { slides: { title: string, desc: string, image: string }[] }) => {
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
        let interval: NodeJS.Timeout;
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
        <div className="relative overflow-hidden w-full h-full pb-48">
            <div className="absolute right-0 flex bottom-12 justify-center items-center space-x-2">
                <button type="button" role="button" className="bg-custom-cartier text-white py-3 px-3"
                        onClick={togglePlayPause}>
                    {isPlaying ? <Pause /> : <Play />}
                </button>
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={clsx(
                            "relative h-4 w-12 flex items-center justify-center border-2 border-custom-cartier",
                        )}
                        onClick={() => goToSlide(index)}
                    >
                        <div
                            className={clsx("absolute left-0 top-0 h-full transition bg-custom-cartier hover:bg-custom-dark-cartier", currentSlide === index ? "transition-all duration-100" : "")}
                            style={{ width: currentSlide === index ? `${progress}%` : '100%' }}
                        ></div>
                    </button>
                ))}
            </div>
            <div ref={slideRef} className="flex overflow-x-hidden snap-x snap-mandatory h-full w-full">
                {slides.map((slide, index) => (
                    <div key={index} className="flex-shrink-0 w-full h-full snap-center">
                        <Slide title={slide.title} desc={slide.desc} image={slide.image} className="w-full h-full flex flex-col items-start" />
                    </div>
                ))}
            </div>
        </div>
    );
};
