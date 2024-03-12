import React, { useState } from 'react'
import DATA from '../../data/Enero.json'
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'

const columns = [
    {
        accessorKey: 'fecha',
        header: 'Fecha',
        cell: (props) => <p>{props.getValue()} </p>
    },
    {
        accessorKey: 'maquina',
        header: 'Máquina',
        cell: (props) => <p>{props.getValue()} </p>
    },
    {
        accessorKey: 'turno',
        header: 'Turno',
        cell: (props) => <p>{props.getValue()} </p>
    },
    {
        accessorKey: 'operador',
        header: 'Operador',
        cell: (props) => <p>{props.getValue()} </p>
    },
    {
        accessorKey: 'fabricante',
        header: 'Fabricante',
        cell: (props) => <p>{props.getValue()} </p>
    },
    {
        accessorKey: 'producto',
        header: 'Producto',
        cell: (props) => <p>{props.getValue()} </p>
    },
    {
        accessorKey: 'op',
        header: 'Op',
        cell: (props) => <p>{props.getValue()} </p>
    },
    {
        accessorKey: 'np',
        header: 'Np',
        cell: (props) => <p>{props.getValue()} </p>
    },
    {
        accessorKey: 'medida',
        header: 'Medida',
        cell: (props) => <p>{props.getValue()} </p>
    },
    {
        accessorKey: 'kilos extruidos',
        header: 'Kilos extruidos',
        cell: (props) => <p>{props.getValue()} </p>
    },
    {
        accessorKey: 'scrap',
        header: 'Scrap',
        cell: (props) => <p>{props.getValue()} </p>
    },
    {
        accessorKey: 'refil',
        header: 'Refil',
        cell: (props) => <p>{props.getValue()} </p>
    },
    {
        accessorKey: 'scrap + refil',
        header: 'Scrap + refil',
        cell: (props) => <p>{props.getValue()} </p>
    },
    {
        accessorKey: '% scrap',
        header: '% scrap',
        cell: (props) => <p>{Math.round(parseFloat(props.getValue()))}%</p>
    },
]

export const TestTable = () => {
    const [data, setData] = useState(DATA)

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel()
    });

    return (
        <table className={`border-collapse border-spacing-0 border-2 w-[${table.getTotalSize()}] border-gray-200`}>
            <thead className='bg-blue-500 text-white text-sm'>
                {
                    table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id} >
                            {
                                headerGroup.headers.map(header => (
                                    <th key={header.id}
                                        onClick={header.column.getToggleSortingHandler()}
                                    >
                                        {flexRender(header.column.columnDef.header, header.getContext())}
                                        {
                                            { asc: "⬆", desc: "⬇" }[
                                            header.column.getIsSorted() ?? null
                                            ]
                                        }
                                    </th>
                                ))

                            }
                        </tr>
                    ))
                }
            </thead>
            <tbody>
                {
                    table.getRowModel().rows.map((row) => (
                        <tr key={row.id}>
                            {
                                row.getVisibleCells().map((cell) => (
                                    <td
                                        key={cell.id}
                                        className={`text-left p-2 text-xs border-2 border-gray-300 w-[${cell.column.getSize()}]`}
                                    >
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))
                            }
                        </tr>

                    ))
                }
            </tbody>
        </table>
    )
}
