import { useState } from "react";
import "./schedules.scss";
import {DataTable} from "../../components/dataTable/DataTable";
import {Add} from "../../components/add/Add";
import { schedules } from "../../data";

const columns = [
    {
        field: "event",
        type: "string",
        headerName: "Events",
        width: 300,
    },
    {
        field: "placeAt",
        type: "string",
        headerName: "Place At",
        width: 200,
    },
    {
        field: "from",
        type: "string",
        headerName: "From",
        width: 150,
    },
    {
        field: "to",
        headerName: "To",
        type: "string",
        width: 200,
    },
    {
        field: "date",
        headerName: "Date",
        width: 130,
        type: "string",
    },
    {
        field: "status",
        headerName: "Status",
        width: 150,
        type: "boolean",
    },
];

export const Schedules = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="products">
        <div className="info">
            <button onClick={() => setOpen(true)}>Add New Schedule</button>
        </div>
        <DataTable slug="products" columns={columns} rows={schedules} />
        {open && <Add slug="schedules" columns={columns} setOpen={setOpen} />}
        </div>
    );
};

