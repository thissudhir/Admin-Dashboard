import React, { useState } from 'react'
import { DataTable } from '../../components/dataTable/DataTable'
import { userRows, usercolumns } from '../../data';
import './users.scss'
import { Add } from '../../components/add/Add';




export const Users = () => {

    const [open, setOpen] = useState(false);
    return (
    <div className='users'>
        <div className="info">
            <button onClick={()=>setOpen(true)}>Add New user</button>
        </div>
        <DataTable slug="users" columns={usercolumns} rows={userRows}/>
        {open && <Add slug="user" columns={usercolumns} setOpen={setOpen}/>}
    </div>
)
}
