import {
    useReactTable,
    getCoreRowModel,
    flexRender,
    getPaginationRowModel,
    getSortedRowModel,
    getFilteredRowModel
} from '@tanstack/react-table';
import { useEffect, useState } from 'react';
import { RiArrowLeftFill, RiArrowRightFill, RiDeleteBin2Fill, RiEdit2Fill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { useMaquinaStore } from '../../hooks';
import { useUiStore } from '../../hooks/useUiStore';
import Swal from 'sweetalert2';
import { onEditMaquinaId } from '../../store';
import { Button } from '../ui/Button';
import { Loader } from '../ui/Loader';

export const MaquinasTable = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState([])
    const [sorting, setSorting] = useState([]);
    const [filtering, setFiltering] = useState("");
    const { isloadingMaquinas } = useSelector(state => state.maquinas);
    const { openModal, onSetForm } = useUiStore();

    const { maquinas } = useSelector(state => state.maquinas);
    const { startLoadingMaquinas, startDeletingMaquina } = useMaquinaStore();

    const columns = [
        {
            header: 'Nombre',
            accessorKey: 'nombre',
            footer: 'nombre',
        },
        {
            header: 'Planta',
            accessorKey: 'planta',
            footer: 'planta',
        },
        {
            header: 'Editar',
            accessorKey: 'id',
            cell: (props) => (
                <div className='flex gap-2 justify-end'>
                    <Button
                        title=''
                        onClick={() => {
                            dispatch(onEditMaquinaId(props.getValue()));
                            onSetForm("maquinas")
                            openModal();
                        }}
                        children={<RiEdit2Fill />}
                    />
                    <Button
                        title=''
                        onClick={async () => {
                            const { isDenied } = await Swal.fire({
                                title: "Eliminar máquina",
                                text: "¿Estás seguro que deseas eliminar este registro?",
                                icon: "warning",
                                showDenyButton: true,
                                showConfirmButton: false,
                                showCancelButton: true,
                                cancelButtonText: "Cancelar",
                                denyButtonText: "Eliminar",
                                confirmButtonColor: "#3b82f6",
                            });
                            //TODO: ELIMINAR FABRICANTE SI ISDENIED = TRUE
                            if (isDenied === true) {
                                dispatch(onEditMaquinaId(''))
                                startDeletingMaquina(props.getValue());
                            }
                        }}
                        children={<RiDeleteBin2Fill />}
                        bg='bg-red-400'
                    />
                </div>
            ),
            show: false
        }
    ]

    useEffect(() => {
        startLoadingMaquinas();
    }, [])

    useEffect(() => {
        setData(maquinas)
    }, [maquinas])


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
        onGlobalFilterChange: setFiltering,
    })

    return (
        <div>
            {(isloadingMaquinas === true)
                ? (<div className='flex justify-center'>
                    <Loader />
                </div>)
                : (
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
                                                    <td
                                                        key={cell.id}
                                                        className='text-left p-2 text-xs border-2 border-gray-300'
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
                            <select
                                className='focus:border-gray-400 border-2 border-gray-200'
                                value={table.getState().pagination.pageSize}
                                onChange={e => {
                                    table.setPageSize(e.target.value)
                                }}
                            >
                                {[10, 20, 30, 40, 50].map(pageSize => (
                                    <option key={pageSize} value={pageSize}>
                                        Mostrar {pageSize}
                                    </option>
                                ))
                                }
                            </select>
                        </div>

                    </div>)
            }
        </div>)
}
