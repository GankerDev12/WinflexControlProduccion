import React, { useEffect, useState } from 'react'

export const EditableCell = ({ getValue, row, column, table }) => {
    const initialValue = getValue();
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        setValue(initialValue)
    }, [initialValue])

    const onBlur = () => {
        table.options.meta?.updateData(row.index, column.id, value);
    }

    return (
        <input
            className='w-f ull overflow-hidden text-nowrap text-sm border rounded-md focus:outline-none focus:border-blue-500'
            value={value}
            onChange={e => setValue(e.target.value)}
            onBlur={onBlur}

        />
    )
}

