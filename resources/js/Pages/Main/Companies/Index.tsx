import { Head, Link } from "@inertiajs/react";
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

const CompaniesPage = ({
    companies,
}: PageProps & { companies: Paginate<Company> }) => {
    return (
        <>
            <Head title="Companies" />
            <div className="flex justify-between items-center mb-5">
                <div className="">
                    <Input
                        type="search"
                        className="sm:w-80"
                        placeholder="Search..."
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
                                                    <p>Edit Company</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                    >
                                                        <CogIcon className="h-4 w-4" />
                                                    </Button>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Advance Settings</p>
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
