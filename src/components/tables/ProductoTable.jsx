import {
    useReactTable,
    getCoreRowModel,
    flexRender,
    getPaginationRowModel,
    getSortedRowModel,
    getFilteredRowModel
} from '@tanstack/react-table';
import { Button } from '../ui/Button';
import { RiArrowLeftFill, RiArrowRightFill, RiDeleteBin2Fill, RiEdit2Fill } from 'react-icons/ri';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../ui/Loader';
import { useProductoStore } from '../../hooks';
import { useUiStore } from '../../hooks/useUiStore';
import Swal from 'sweetalert2';
import { onEditProductoId } from '../../store';

export const ProductosTable = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState([])
    const [sorting, setSorting] = useState([]);
    const [filtering, setFiltering] = useState("");
    const { openModal, onSetForm } = useUiStore();

    const { productos, isloadingProductos } = useSelector(state => state.productos);
    const { startLoadingProductos, startDeletingProducto } = useProductoStore();

    const columns = [
        {
            header: 'Op',
            accessorKey: 'op',
            footer: 'op',
        },
        {
            header: 'Np',
            accessorKey: 'np',
            footer: 'np',
        },
        {
            header: 'Tipo Material',
            accessorKey: 'tipoMaterial',
            footer: 'tipo material',
        },
        {
            header: 'Extrusión',
            accessorKey: 'extrusion',
            footer: 'extrusión',
        },
        {
            header: 'Descripción',
            accessorKey: 'descripcion',
            footer: 'descripcion',
        },
        {
            header: 'Medidas',
            accessorKey: 'medidas',
            footer: 'medidas',
        },
        {
            header: 'Kg solicitados',
            accessorKey: 'kgSolicitados',
            footer: 'kgSolicitados',
        },
        {
            header: 'Fabricante',
            accessorKey: 'fabricante',
            cell: (props) => props.getValue().nombre,
            footer: 'fabricante',
        },
        {
            header: 'Editar',
            accessorKey: 'id',
            cell: (props) => (
                <div className='flex gap-2 justify-end'>
                    <Button
                        title=''
                        onClick={() => {
                            dispatch(onEditProductoId(props.getValue()));
                            onSetForm("productos")
                            openModal();
                        }}
                        children={<RiEdit2Fill />}
                    />
                    <Button
                        title=''
                        onClick={async () => {
                            const { isDenied } = await Swal.fire({
                                title: "Eliminar producto",
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
                                dispatch(onEditProductoId(''))
                                startDeletingProducto(props.getValue());
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
        startLoadingProductos();
    }, [])

    useEffect(() => {
        setData(productos)
    }, [productos])


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
            {(isloadingProductos === true)
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
