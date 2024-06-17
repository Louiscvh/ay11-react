import {createElement, ReactNode} from "react";
import clsx from "clsx";

type HeadingProps = {
    type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p",
    title?: string,
    children: ReactNode,
    className?: string
}

const defaultStyles = {
    h1: "text-4xl md:text-6xl",
    h2: "text-5xl font-normal font-georgia",
    h3: "text-4xl font-medium",
    h4: "text-xl font-medium",
    h5: "text-lg font-medium",
    h6: "text-base font-normal",
    p: "text-base font-normal",
}

export const Heading = ({ type = "p", title, children, className}: HeadingProps) => {
    return createElement(type, { className: clsx(defaultStyles[type], className), title: title}, children)
}