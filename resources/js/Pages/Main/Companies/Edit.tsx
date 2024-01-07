import { Head, Link, useForm } from "@inertiajs/react";
import { PageProps } from "@/types";
import MainLayout from "@/Layouts/MainLayout";

import { Input } from "@/Components/ui/input";
import { Button, buttonVariants } from "@/Components/ui/button";
import { Label } from "@/Components/ui/label";
import { Switch } from "@/Components/ui/switch";
import { FormEvent } from "react";
import InputError from "@/Components/InputError";
import { Company } from "@/types/models";
import { toast } from "sonner";

const EditCompanyPage = ({ company }: { company: Company }) => {
    const { data, put, setData, errors, processing } = useForm({
        name: company.name,
        is_active: company.is_active,
    });

    function handleSubmit(e: FormEvent) {
        e.preventDefault();

        put(route("companies.update", { company: company.id }), {
            onSuccess: (res) => {
                toast.success("Record has been updated");
            },
        });
    }

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <Label htmlFor="name">Edit Name</Label>
                        <Input
                            value={data.name}
                            type="text"
                            className="sm:w-[500px] mt-1 w-full"
                            onChange={(e) => setData("name", e.target.value)}
                        />
                        <InputError message={errors.name} className="mt-2" />
                    </div>
                    <div className="flex items-center space-x-2 mt-4">
                        <Switch
                            checked={data.is_active}
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
                    <div className="mt-7 flex space-x-2 items-center">
                        <Button type="submit" disabled={processing}>
                            {!processing ? "Save changes" : "Saving..."}
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

EditCompanyPage.layout = (page: JSX.Element & PageProps) => (
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
                label: "Edit",
            },
        ]}
    />
);

export default EditCompanyPage;
