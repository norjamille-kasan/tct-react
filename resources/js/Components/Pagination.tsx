import { cn } from "@/lib/utils";
import { Link } from "@/types/models";
import { Link as Paginator } from "@inertiajs/react";
import { buttonVariants } from "./ui/button";

export default function Pagination({ links }: { links: Link[] }) {
    return (
        <>
            <div className=" w-full">
                {links.length > 3 && (
                    <div className="flex space-x-1 w-full justify-center">
                        {links.map((i, index) =>
                            i.url ? (
                                <Paginator
                                    key={index}
                                    href={i.url}
                                    className={cn(
                                        buttonVariants({
                                            variant: i.active
                                                ? "secondary"
                                                : "ghost",
                                        })
                                    )}
                                >
                                    {i.label
                                        .replace("&laquo;", "")
                                        .replace("&raquo;", "")}
                                </Paginator>
                            ) : (
                                <span
                                    key={index}
                                    className={cn(
                                        buttonVariants({
                                            variant: i.active
                                                ? "secondary"
                                                : "ghost",
                                        })
                                    )}
                                >
                                    {i.label
                                        .replace("&laquo;", "")
                                        .replace("&raquo;", "")}
                                </span>
                            )
                        )}
                    </div>
                )}
            </div>
        </>
    );
}
