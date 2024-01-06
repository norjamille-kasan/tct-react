import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import MainLayout from "@/Layouts/MainLayout";

const RolesAndPermissionsPage = ({ auth }: PageProps) => {
    return (
        <>
            <Head title="Users" />
            <div>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci hic voluptatibus veniam atque debitis officiis rem iste
                suscipit repellendus repellat nesciunt, aliquam omnis corporis
                eos non accusantium id inventore numquam.
            </div>
        </>
    );
};

RolesAndPermissionsPage.layout = (page: JSX.Element & PageProps) => (
    <MainLayout children={page} user={page.props.auth.user} />
);

export default RolesAndPermissionsPage;
