import React, { useEffect, useState } from 'react'

export const EditableCell = ({ getValue }) => {
    const initialValue = getValue();
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        setValue(initialValue)
    }, [initialValue])

    return (
        <input
            value={value}
            onChange={e => setValue(e.target.value)}
            className='w-full overflow-hidden text-nowrap text-sm border rounded-md focus:outline-none focus:border-blue-500'

        />
    )
}

