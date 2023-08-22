import React from 'react'
import './dataTable.scss'
import { DataGrid, GridToolbar, } from '@mui/x-data-grid';


export const DataTable = (props) => {


    const handleDelete=(id)=>{
        console.log(id +"Has been deleted")

    }
    const actionColumn={
        field:"action",
        headerName:"Action",
        width:200,
        renderCell:(params)=>{
            return (
                <div className="action">
                    <div className="delete" onClick={() => handleDelete(params.row.id)}>
                        <img src="/trash.svg" alt="" />
                    </div>
                </div>
            );
        }
    }
    return (
    <div className='dataTable'>
        <DataGrid className='dataGrid'
        rows={props.rows}
        columns={[...props.columns, actionColumn]}
        initialState={{
            pagination: {
            paginationModel: {
            pageSize: 10,
            },
        },
        }}
        slots={{toolbar:GridToolbar}}
        slotProps={{
            toolbar: {showQuickFilter : true,
                quickFilterProps: { debounceMs:500 }
            }
        }}
        pageSizeOptions={[9]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
    />
    </div>
)
}
