import { PageProps } from "@/types";
import MainLayout from "@/Layouts/MainLayout";
import { Company, Segment } from "@/types/models";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/ui/table";
import { FoldersIcon, PlusIcon } from "lucide-react";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog";
import { Button } from "@/Components/ui/button";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/Components/ui/accordion";
import { useForm } from "@inertiajs/react";
import { FormEvent, useState } from "react";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import InputError from "@/Components/InputError";

const ShowCompanyPage = ({
    company,
    segments,
}: {
    company: Company;
    segments: Segment[];
}) => {
    const {
        data: create_segment_data,
        errors: create_segment_error,
        processing: create_segment_processing,
        post: create_segment,
        setData: create_segment_set_data,
        reset: create_segment_reset,
    } = useForm({
        company_id: company.id,
        name: "",
    });

    const {
        data: create_task_data,
        errors: create_task_error,
        processing: create_task_processing,
        post: create_task,
        setData: create_task_set_data,
        reset: create_task_reset,
    } = useForm({
        segment_id: 0,
        title: "",
    });

    const [openCreateSegmentModal, setOpenCreateSegmentModal] = useState(false);

    const [openCreateTaskModal, setOpenCreateTaskModal] = useState(false);

    const handleCreateSegment = (e: FormEvent) => {
        e.preventDefault();
        create_segment(route("segments.store"), {
            onSuccess() {
                create_segment_reset();
                setOpenCreateSegmentModal(false);
            },
            preserveScroll: true,
            preserveState: true,
        });
    };

    const handleOpenCreateTaskModal = (segmentId: number) => {
        setOpenCreateTaskModal(true);
        create_task_set_data("segment_id", segmentId);
    };

    return (
        <>
            <div className="mb-5 flex space-x-2 items-center justify-between">
                <div className="">
                    <span className="text-xl font-extrabold">
                        Segments List
                    </span>
                </div>
                <div>
                    <Dialog
                        open={openCreateSegmentModal}
                        onOpenChange={setOpenCreateSegmentModal}
                    >
                        <DialogTrigger asChild>
                            <Button variant="outline">
                                <PlusIcon className="h-5 w-5 mr-2" />
                                New Segment
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Create New Segment</DialogTitle>
                            </DialogHeader>
                            <form onSubmit={handleCreateSegment}>
                                <div className="mb-3">
                                    <Label htmlFor="name">Name</Label>
                                    <Input
                                        id="name"
                                        type="text"
                                        name="name"
                                        value={create_segment_data.name}
                                        className="mt-1 block w-full"
                                        onChange={(e) =>
                                            create_segment_set_data(
                                                "name",
                                                e.target.value
                                            )
                                        }
                                    />

                                    <InputError
                                        message={create_segment_error.name}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="mt-4 flex items-center space-x-2">
                                    <Button>Save</Button>
                                    <Button variant="outline" type="button">
                                        Cancel
                                    </Button>
                                </div>
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
            <div>
                <Accordion type="multiple">
                    {segments.map((segment) => (
                        <AccordionItem value={segment.id.toString()}>
                            <AccordionTrigger>
                                <div className="flex space-x-2 items-center">
                                    <FoldersIcon className="h-5 w-5" />
                                    <span>{segment.name}</span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <hr />
                                <div className="">
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead colSpan={4}>
                                                    <div className="flex space-x-4 items-center">
                                                        <span> Task List</span>
                                                        <Button
                                                            size="sm"
                                                            variant="ghost"
                                                        >
                                                            <PlusIcon className="h-4 w-4" />
                                                        </Button>
                                                    </div>
                                                </TableHead>
                                                {/* <TableHead>
                                            <div className="flex justify-end">
                                                
                                            </div>
                                        </TableHead> */}
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell className="font-medium">
                                                    INV001
                                                </TableCell>
                                                <TableCell>Paid</TableCell>
                                                <TableCell>
                                                    Credit Card
                                                </TableCell>
                                                <TableCell className="text-right">
                                                    $250.00
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
            <Dialog
                open={openCreateTaskModal}
                onOpenChange={setOpenCreateTaskModal}
            >
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Create Task</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleCreateSegment}>
                        <div className="mb-3">
                            <Label htmlFor="name">Title</Label>
                            <Input
                                id="name"
                                type="text"
                                name="name"
                                value={create_task_data.title}
                                className="mt-1 block w-full"
                                onChange={(e) =>
                                    create_task_set_data(
                                        "title",
                                        e.target.value
                                    )
                                }
                            />
                            <InputError
                                message={create_task_error.title}
                                className="mt-2"
                            />
                        </div>
                        <div className="mt-4 flex items-center space-x-2">
                            <Button>Save</Button>
                            <Button variant="outline" type="button">
                                Cancel
                            </Button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    );
};

ShowCompanyPage.layout = (page: JSX.Element & (PageProps & Company)) => {
    return (
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
                    label: page.props.company.name,
                },
            ]}
        />
    );
};

export default ShowCompanyPage;
