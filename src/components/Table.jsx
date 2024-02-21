import {
    useReactTable,
    getCoreRowModel,
    flexRender,
    getPaginationRowModel,
    getSortedRowModel,
    getFilteredRowModel
} from '@tanstack/react-table';
import data from '../data/Enero.json';
import { Button } from './index';
import { RiArrowLeftFill, RiArrowRightFill } from 'react-icons/ri';
import { useState } from 'react';

export const Table = () => {

    const columns = [
        {
            header: 'Fecha',
            accessorKey: 'fecha',
            footer: 'Fecha'
        },
        {
            header: 'Máquina',
            accessorKey: 'maquina',
            footer: 'Máquina'
        },
        {
            header: 'Turno',
            accessorKey: 'turno',
            footer: 'Turno'
        },
        {
            header: 'Operador',
            accessorKey: 'operador',
            footer: 'Operador'
        },
        {
            header: 'Fabricante',
            accessorKey: 'fabricante',
            footer: 'Fabricante'
        },
        {
            header: 'Producto',
            accessorKey: 'producto',
            footer: 'Producto'
        },
        {
            header: 'Op',
            accessorKey: 'op',
            footer: 'Op'
        },
        {
            header: 'Np',
            accessorKey: 'np',
            footer: 'Np'
        },
        {
            header: 'Medida',
            accessorKey: 'medida',
            footer: 'Medida'
        },
        {
            header: 'Kilos extruidos',
            accessorKey: 'kilos extruidos',
            footer: 'Kilos extruidos'
        },
        {
            header: 'Scrap',
            accessorKey: 'scrap',
            footer: 'Scrap'
        },
        {
            header: 'Refil',
            accessorKey: 'refil',
            footer: 'Refil'
        },
        {
            header: 'Scrap + refil',
            accessorKey: 'scrap + refil',
            footer: 'Scrap + refill'
        },
        {
            header: '% scrap',
            accessorKey: '% scrap',
            footer: '% scrap',
            cell: (info) => Math.round(parseFloat(info.getValue()))
        },
        {
            header: 'Observaciones',
            accessorKey: 'observaciones',
            footer: 'Observaciones'
        },

    ]

    const [sorting, setSorting] = useState([]);
    const [filtering, setFiltering] = useState("");

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            sorting,
            globalFilter: filtering
        },
        onSortingChange: setSorting,
        onGlobalFilterChange: setFiltering
    })

    return (
        <div>
            <div className='flex justify-end mb-4'>
                <input
                    type="text"
                    className='bg-gray-100 py-2 pl-8 outline-none rounded-lg w-1/2'
                    placeholder='Buscar...'
                    onChange={(e) => setFiltering(e.target.value)}
                />
            </div>
            <table className='border-collapse border-spacing-0 w-full border-2 border-gray-200'>
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
                                        <td className='text-left p-2 text-xs border-2 border-gray-300'
                                        >
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </td>
                                    ))
                                }
                            </tr>

                        ))
                    }
                </tbody>
                <tfoot className='bg-blue-400 text-gray-100 text-[10px] '>
                    {
                        table.getFooterGroups().map((footerGroup) => (
                            <tr key={footerGroup.id}>
                                {
                                    footerGroup.headers.map((footer) => (
                                        <th key={footer.id}>
                                            {
                                                footer.column.columnDef.footer
                                            }
                                        </th>
                                    ))
                                }
                            </tr>

                        ))
                    }
                </tfoot>
            </table>
            <div className=' flex  items-center justify-end gap-2'>
                <Button
                    title={"Primer página"}
                    onClick={() => table.setPageIndex(0)}
                />
                <Button
                    children={<RiArrowLeftFill />}
                    onClick={() => table.previousPage()}
                />
                <Button
                    children={<RiArrowRightFill />}
                    onClick={() => table.nextPage()}
                />
                <Button
                    title={"Última página"}
                    onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                />
            </div>
        </div>
    )
}
