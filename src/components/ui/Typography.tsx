import { cn } from "../../lib/utils"

interface TypographyProps {
    title: string;
    className?: string
}

export function TypographyH1({title="hello"}: TypographyProps) {
    return (
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            {title}
        </h1>
    )
}


export function TypographyH2({title="hello"}: TypographyProps) {
    return (
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            {title}
        </h2>
    )
}

export function TypographyH3({title="hello"}: TypographyProps) {
    return (
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            {title}
        </h3>
    )
}

export function TypographyH4({title="hello", className=""}: TypographyProps) {
    return (
        <h4 className={cn("scroll-m-20 text-xl font-semibold tracking-tight",className)}>
            {title}
        </h4>
    )
}

export function TypographyH5({title="hello", className=""}: TypographyProps) {
    return (
        <h4 className={cn("scroll-m-20 text-md font-semibold tracking-tight", className)}>
            {title}
        </h4>
    )
}

export function TypographyP({title="hello"}: TypographyProps) {
    return (
        <p className="leading-7 [&:not(:first-child)]:mt-6">
            {title}
        </p>
    )
}

