import { User } from "@/types";
import { PropsWithChildren, ReactNode, useState, Fragment } from "react";
import {
    AlignLeftIcon,
    BarChartBigIcon,
    BellIcon,
    Building2Icon,
    MessageSquareIcon,
    RocketIcon,
    UnlockKeyholeIcon,
    User2Icon,
    UsersRoundIcon,
    XIcon,
} from "lucide-react";
import { Link } from "@inertiajs/react";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/Components/ui/button";
import { UserDropdown } from "@/Pages/Main/Partials/UserDropdown";
import { Separator } from "@/Components/ui/separator";
import { Transition } from "@headlessui/react";

type Breadcrumb = {
    link: string;
    label: string;
};
export default function AdminLayout({
    user,
    breadcrumbs,
    children,
}: PropsWithChildren<{ user: User; breadcrumbs?: Breadcrumb[] }>) {
    const [openMobileNav, setOpenMobileNav] = useState(false);

    return (
        <>
            <div>
                <Transition
                    show={openMobileNav}
                    className="relative z-50 lg:hidden"
                    role="dialog"
                    aria-modal="true"
                >
                    <Transition.Child
                        as="div"
                        className="fixed inset-0 bg-gray-900/80"
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    ></Transition.Child>
                    <div className="fixed inset-0 flex">
                        <Transition.Child
                            as="div"
                            className="relative mr-16 flex w-full max-w-xs flex-1"
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            {/* Entering: "" From:
                            "" To: "" Leaving: "" From: "" To: "" */}
                            <Transition.Child
                                as="div"
                                enter="ease-in-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in-out duration-300"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                                className="absolute left-full top-0 flex w-16 justify-center pt-5"
                            >
                                <button
                                    onClick={() => setOpenMobileNav(false)}
                                    type="button"
                                    className="-m-2.5 p-2.5"
                                >
                                    <span className="sr-only">
                                        Close sidebar
                                    </span>
                                    <XIcon className="h-6 w-6 " />
                                </button>
                            </Transition.Child>
                            <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-background pb-4">
                                <div className="flex h-14 shrink-0 items-center  px-6 border-b">
                                    <RocketIcon className="h-7 text-primary w-7 mr-3" />
                                    <span className="text-xl font-extrabold">
                                        TCT-APP
                                    </span>
                                </div>
                                <nav
                                    onClick={() => setOpenMobileNav(false)}
                                    className="flex space-y-3  flex-1 flex-col"
                                >
                                    <div className="px-6">
                                        <div className="uppercase mb-2 text-xs">
                                            <span>Analytics</span>
                                        </div>
                                        <ul
                                            role="list"
                                            className="-mx-2 space-y-1"
                                        >
                                            <Link
                                                href={route("dashboard")}
                                                className={cn(
                                                    buttonVariants({
                                                        variant: route()
                                                            .current()
                                                            ?.startsWith(
                                                                "dashboard"
                                                            )
                                                            ? "secondary"
                                                            : "ghost",
                                                    }),
                                                    "w-full justify-start",
                                                    route()
                                                        .current()
                                                        ?.startsWith(
                                                            "dashboard"
                                                        )
                                                        ? "text-primary"
                                                        : ""
                                                )}
                                            >
                                                <BarChartBigIcon className="h-5 w-5 mr-2" />
                                                Dashboard
                                            </Link>
                                        </ul>
                                    </div>
                                    <div className="px-6">
                                        <div className="uppercase mb-2 text-xs">
                                            <span>Manage</span>
                                        </div>
                                        <ul
                                            role="list"
                                            className="-mx-2 space-y-1"
                                        >
                                            <Link
                                                href={route("companies.index")}
                                                className={cn(
                                                    buttonVariants({
                                                        variant: route()
                                                            .current()
                                                            ?.startsWith(
                                                                "companies"
                                                            )
                                                            ? "secondary"
                                                            : "ghost",
                                                    }),
                                                    "w-full justify-start",
                                                    route()
                                                        .current()
                                                        ?.startsWith(
                                                            "companies"
                                                        )
                                                        ? "text-primary"
                                                        : ""
                                                )}
                                            >
                                                <Building2Icon className="h-5 w-5 mr-2" />
                                                Companies
                                            </Link>
                                            <Link
                                                href={route("users.index")}
                                                className={cn(
                                                    buttonVariants({
                                                        variant: route()
                                                            .current()
                                                            ?.startsWith(
                                                                "users"
                                                            )
                                                            ? "secondary"
                                                            : "ghost",
                                                    }),
                                                    "w-full justify-start",
                                                    route()
                                                        .current()
                                                        ?.startsWith("users")
                                                        ? "text-primary"
                                                        : ""
                                                )}
                                            >
                                                <UsersRoundIcon className="h-5 w-5 mr-2" />
                                                Users
                                            </Link>
                                            <Link
                                                href={route(
                                                    "roles-and-permissions.index"
                                                )}
                                                className={cn(
                                                    buttonVariants({
                                                        variant: route()
                                                            .current()
                                                            ?.startsWith(
                                                                "roles-and-permissions"
                                                            )
                                                            ? "secondary"
                                                            : "ghost",
                                                    }),
                                                    "w-full justify-start",
                                                    route()
                                                        .current()
                                                        ?.startsWith(
                                                            "roles-and-permissions"
                                                        )
                                                        ? "text-primary"
                                                        : ""
                                                )}
                                            >
                                                <UnlockKeyholeIcon className="h-5 w-5 mr-2" />
                                                Roles & Permissions
                                            </Link>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </Transition.Child>
                    </div>
                </Transition>
                <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col border-r">
                    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-background pb-4">
                        <div className="flex h-14 shrink-0 items-center  px-6 border-b">
                            <RocketIcon className="h-7 text-primary w-7 mr-3" />
                            <span className="text-xl font-extrabold">
                                TCT-APP
                            </span>
                        </div>
                        <nav className="flex space-y-3  flex-1 flex-col">
                            <div className="px-6">
                                <div className="uppercase mb-2 text-xs">
                                    <span>Analytics</span>
                                </div>
                                <ul role="list" className="-mx-2 space-y-1">
                                    <Link
                                        href={route("dashboard")}
                                        className={cn(
                                            buttonVariants({
                                                variant: route()
                                                    .current()
                                                    ?.startsWith("dashboard")
                                                    ? "secondary"
                                                    : "ghost",
                                            }),
                                            "w-full justify-start",
                                            route()
                                                .current()
                                                ?.startsWith("dashboard")
                                                ? "text-primary"
                                                : ""
                                        )}
                                    >
                                        <BarChartBigIcon className="h-5 w-5 mr-2" />
                                        Dashboard
                                    </Link>
                                </ul>
                            </div>
                            <div className="px-6">
                                <div className="uppercase mb-2 text-xs">
                                    <span>Manage</span>
                                </div>
                                <ul role="list" className="-mx-2 space-y-1">
                                    <Link
                                        href={route("companies.index")}
                                        className={cn(
                                            buttonVariants({
                                                variant: route()
                                                    .current()
                                                    ?.startsWith("companies")
                                                    ? "secondary"
                                                    : "ghost",
                                            }),
                                            "w-full justify-start",
                                            route()
                                                .current()
                                                ?.startsWith("companies")
                                                ? "text-primary"
                                                : ""
                                        )}
                                    >
                                        <Building2Icon className="h-5 w-5 mr-2" />
                                        Companies
                                    </Link>
                                    <Link
                                        href={route("users.index")}
                                        className={cn(
                                            buttonVariants({
                                                variant: route()
                                                    .current()
                                                    ?.startsWith("users")
                                                    ? "secondary"
                                                    : "ghost",
                                            }),
                                            "w-full justify-start",
                                            route()
                                                .current()
                                                ?.startsWith("users")
                                                ? "text-primary"
                                                : ""
                                        )}
                                    >
                                        <UsersRoundIcon className="h-5 w-5 mr-2" />
                                        Users
                                    </Link>
                                    <Link
                                        href={route(
                                            "roles-and-permissions.index"
                                        )}
                                        className={cn(
                                            buttonVariants({
                                                variant: route()
                                                    .current()
                                                    ?.startsWith(
                                                        "roles-and-permissions"
                                                    )
                                                    ? "secondary"
                                                    : "ghost",
                                            }),
                                            "w-full justify-start",
                                            route()
                                                .current()
                                                ?.startsWith(
                                                    "roles-and-permissions"
                                                )
                                                ? "text-primary"
                                                : ""
                                        )}
                                    >
                                        <UnlockKeyholeIcon className="h-5 w-5 mr-2" />
                                        Roles & Permissions
                                    </Link>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>

                <div className="lg:pl-72">
                    <div className="sticky top-0 z-40 flex h-14 shrink-0 items-center gap-x-4 border-b  bg-background px-4  sm:gap-x-6 sm:px-6 lg:px-8">
                        <button
                            onClick={() => setOpenMobileNav(true)}
                            type="button"
                            className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
                        >
                            <span className="sr-only">Open sidebar</span>
                            <AlignLeftIcon className="h-6 w-6" />
                        </button>

                        <div
                            className="h-6 w-px bg-gray-900/10 lg:hidden"
                            aria-hidden="true"
                        ></div>

                        <div className="flex flex-1 gap-x-4 justify-between items-center self-stretch   lg:gap-x-6">
                            <div className="flex items-center gap-x-4 lg:gap-x-6">
                                {breadcrumbs && breadcrumbs.length > 0 && (
                                    <div className="flex items-center gap-2 text-lg">
                                        {breadcrumbs.map((path, index) => (
                                            <Fragment key={index}>
                                                {index > 0 && <span>/</span>}
                                                {path.link ? (
                                                    <Link
                                                        className={`${
                                                            index ===
                                                            breadcrumbs.length -
                                                                1
                                                                ? "text-gray-900 dark:text-white"
                                                                : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                                                        }`}
                                                        href={path.link}
                                                    >
                                                        {path.label}
                                                    </Link>
                                                ) : (
                                                    <span
                                                        className={`${
                                                            index ===
                                                            breadcrumbs.length -
                                                                1
                                                                ? "text-white"
                                                                : "text-gray-900 dark:text-gray-50"
                                                        }`}
                                                    >
                                                        {path.label}
                                                    </span>
                                                )}
                                            </Fragment>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div className="flex items-center">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="mr-1"
                                >
                                    <BellIcon className="h-5 w-5 " />
                                </Button>
                                <Button
                                    variant="ghost"
                                    className=" mr-1"
                                    size="icon"
                                >
                                    <MessageSquareIcon className="h-5 w-5 " />
                                </Button>
                                <Separator
                                    className="h-8 mr-3"
                                    orientation="vertical"
                                />
                                <UserDropdown
                                    name={user.name}
                                    email={user.email}
                                />
                            </div>
                        </div>
                    </div>

                    <main className="py-4">
                        <div className="px-4 sm:px-6 lg:px-8">{children}</div>
                    </main>
                </div>
            </div>
        </>
    );
}
