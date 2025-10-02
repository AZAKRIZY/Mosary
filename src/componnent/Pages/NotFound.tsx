import { BadgeX } from "lucide-react"

const NotFound = () => {
    return (
        <div className="flex flex-col gap-4 justify-center w-full h-screen items-center">
            <h1 className="font-bold  text-5xl animate-bounce flex">
                <BadgeX className="size-10 " /> 404
            </h1>
            <h1 className="text-lg">This is an Uknown area</h1>
            <p className="hover:underline">Go back</p>
        </div>
    )
}

export default NotFound
