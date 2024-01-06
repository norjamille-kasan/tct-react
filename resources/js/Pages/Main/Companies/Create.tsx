import { Head, Link, useForm } from "@inertiajs/react";
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
import { InfoIcon, PlusIcon } from "lucide-react";
import { Badge } from "@/Components/ui/badge";
import { Label } from "@/Components/ui/label";
import { Switch } from "@/Components/ui/switch";
import { Alert, AlertDescription, AlertTitle } from "@/Components/ui/alert";
import { FormEvent } from "react";
import InputError from "@/Components/InputError";
import { toast } from "sonner";

const CreateCompanyPage = () => {
    const { data, post, setData, errors, processing } = useForm({
        name: "",
        is_active: false,
    });

    function handleSubmit(e: FormEvent) {
        e.preventDefault();

        post(route("companies.store"), {
            onSuccess: (res) => {
                toast.success("Record has been saved");
            },
        });
    }

    return (
        <>
            <Head title="Create Company" />
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <Label htmlFor="name">Company Name</Label>
                        <Input
                            type="text"
                            className="sm:w-[500px] mt-1 w-full"
                            onChange={(e) => setData("name", e.target.value)}
                        />
                        <InputError message={errors.name} className="mt-2" />
                    </div>
                    <div className="flex items-center space-x-2 mt-4">
                        <Switch
                            onCheckedChange={() =>
                                setData("is_active", !data.is_active)
                            }
                            id="active-status"
                        />
                        <Label htmlFor="active-status">
                            Set company status to Active
                        </Label>
                        <InputError
                            message={errors.is_active}
                            className="mt-2"
                        />
                    </div>
                    <div className="mt-4 sm:w-[500px] w-full">
                        <Alert>
                            <InfoIcon className="h-4 w-4" />
                            <AlertTitle>Heads up!</AlertTitle>
                            <AlertDescription>
                                It is suggested to complete all neccessary data
                                and setup before setting the status to active
                            </AlertDescription>
                        </Alert>
                    </div>
                    <div className="mt-7 flex space-x-2 items-center">
                        <Button type="submit" disabled={processing}>
                            {!processing ? "Save" : "Saving..."}
                        </Button>
                        <Link
                            href="/companies"
                            className={buttonVariants({ variant: "outline" })}
                        >
                            Cancel
                        </Link>
                    </div>
                </form>
            </div>
        </>
    );
};

CreateCompanyPage.layout = (page: JSX.Element & PageProps) => (
    <MainLayout
        children={page}
        user={page.props.auth.user}
        breadcrumbs={[
            {
                link: "/companies",
                label: "Companies",
            },
            {
                link: "#",
                label: "Create",
            },
        ]}
    />
);

export default CreateCompanyPage;
