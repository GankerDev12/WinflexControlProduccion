import React from 'react'
import { MutatingDots } from 'react-loader-spinner'

export const Loader = () => {
    return (
        <MutatingDots
            visible={true}
            height="100"
            width="100"
            color="#22d3ee"
            secondaryColor="#0ea5e9"
            radius="12.5"
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
        />
    )
}
