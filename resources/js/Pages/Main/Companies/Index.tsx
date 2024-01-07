import { Head, Link, router } from "@inertiajs/react";
import { PageProps } from "@/types";
import MainLayout from "@/Layouts/MainLayout";
import { Company, Paginate } from "@/types/models";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/ui/table";
import { Input } from "@/Components/ui/input";
import { Button, buttonVariants } from "@/Components/ui/button";
import { CogIcon, PencilIcon, PlusIcon } from "lucide-react";
import { Badge } from "@/Components/ui/badge";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/Components/ui/tooltip";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { pickBy } from "lodash";
import Pagination from "@/Components/Pagination";

const CompaniesPage = ({
    companies,
    filters,
}: PageProps & {
    companies: Paginate<Company>;
    filters: { search: string };
}) => {
    const [search, setSearch] = useState("");

    const debounced = useDebouncedCallback((value) => {
        setSearch(value);
        router.get(route("companies.index"), pickBy({ search: value }), {
            preserveScroll: true,
            replace: true,
            preserveState: true,
        });
    }, 1000);

    return (
        <>
            <div className="flex justify-between items-center mb-5">
                <div className="">
                    <Input
                        defaultValue={filters.search ?? ""}
                        className="sm:w-80"
                        type="search"
                        placeholder="Search..."
                        onChange={(e) => debounced(e.target.value)}
                    />
                </div>
                <div>
                    <Link
                        href={route("companies.create")}
                        className={buttonVariants({ variant: "default" })}
                    >
                        <PlusIcon className="h-5 w-5 mr-1" />
                        New Company
                    </Link>
                </div>
            </div>
            <div className="border rounded-lg overflow-hidden">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Added At</TableHead>
                            <TableHead className="text-right"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {companies.data.map((company) => (
                            <TableRow key={company.id}>
                                <TableCell className="font-medium">
                                    {company.name}
                                </TableCell>
                                <TableCell>
                                    {company.is_active ? (
                                        <Badge variant="success">Active</Badge>
                                    ) : (
                                        <Badge variant="destructive">
                                            Inactive
                                        </Badge>
                                    )}
                                </TableCell>
                                <TableCell>{company.created_at}</TableCell>
                                <TableCell className="text-right">
                                    <div className="-my-2 flex justify-end space-x-1 items-center">
                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <Link
                                                        href={route(
                                                            "companies.edit",
                                                            {
                                                                company:
                                                                    company.id,
                                                            }
                                                        )}
                                                        className={buttonVariants(
                                                            {
                                                                variant:
                                                                    "ghost",
                                                                size: "sm",
                                                            }
                                                        )}
                                                    >
                                                        <PencilIcon className="h-4 w-4" />
                                                    </Link>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Edit</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <Link
                                                        href={route(
                                                            "companies.show",
                                                            {
                                                                company:
                                                                    company.id,
                                                            }
                                                        )}
                                                        className={buttonVariants(
                                                            {
                                                                variant:
                                                                    "ghost",
                                                                size: "sm",
                                                            }
                                                        )}
                                                    >
                                                        <CogIcon className="h-4 w-4" />
                                                    </Link>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Manage</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                        {companies.data.length === 0 && (
                            <TableRow>
                                <TableCell className="font-medium">
                                    INV001
                                </TableCell>
                                <TableCell>Paid</TableCell>
                                <TableCell>Credit Card</TableCell>
                                <TableCell className="text-right">
                                    $250.00
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="mt-3">
                <Pagination links={companies.links} />
            </div>
        </>
    );
};

CompaniesPage.layout = (page: JSX.Element & PageProps) => (
    <MainLayout
        children={page}
        user={page.props.auth.user}
        breadcrumbs={[
            {
                link: "/companies",
                label: "Companies",
            },
            {
                link: "/companies",
                label: "List",
            },
        ]}
    />
);

export default CompaniesPage;
