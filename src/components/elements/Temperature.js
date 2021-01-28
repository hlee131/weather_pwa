import React, { Fragment, useEffect, useState } from 'react'

export default function Temperature({ data, loading }) {
    const [description, setDescription] = useState('')
    const [temperature, setTemperature] = useState('')

    useEffect(() => {
        if (!loading) {
            setDescription(data.current.weather[0].description)
            setTemperature(Math.round(data.current.temp))
        }
    }, [loading, data])

    return (
        <div
            className={`${
                loading ? '' : 'cursor-pointer'
            } w-3/6 h-full flex flex-col items-center justify-center neu-tl-dr p-2`}
        >
            {loading ? (
                <p>Loading...</p>
            ) : (
                <Fragment>
                    <h1 className="text-8xl text-blue-800">
                        {temperature}
                        <span className="text-6xl">°C</span>
                    </h1>
                    <p className="text-sm text-blue-500">{description}</p>
                </Fragment>
            )}
        </div>
    )
}
