import { useState } from "react";
import "./transactions.scss";
import {DataTable} from "../../components/dataTable/DataTable";
import {Add} from "../../components/add/Add";
import { transactions } from "../../data";

const columns = [
  { field: "id", headerName: "Transaction ID", width: 150 },
  
  {
    field: "credit",
    type: "boolean",
    headerName: "Credit",
    width: 150,
  },
  {
    field: "debit",
    type: "boolean",
    headerName: "Debit",
    width: 150,
  },
  {
    field: "amount",
    type: "string",
    headerName: "Amount",
    width: 200,
  },
  {
    field: "product",
    headerName: "Product",
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
    headerName: "status",
    width: 150,
    type: "boolean",
  },
];

export const Transactions = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="products">
        <div className="info">
            <button onClick={() => setOpen(true)}>Add New Transactions</button>
        </div>
        <DataTable slug="products" columns={columns} rows={transactions} />
        {open && <Add slug="product" columns={columns} setOpen={setOpen} />}
        </div>
    );
};

