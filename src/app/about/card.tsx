export const Card = ({
    title,
    subtitle,
    content
} : {
    title: string,
    subtitle: string,
    content: string
}) => {
    return (
        <div className="flex flex-col text-white gap-4 w-full h-full items-start justify-center rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold">{title}</h1>
            <h2 className="text-lg font-semibold">{subtitle}</h2>
            <p className="text-md">{content}</p>
        </div>
    )
}