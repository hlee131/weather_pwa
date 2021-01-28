import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Webcam from '../elements/Webcam'
import SearchBar from '../elements/SearchBar'
import Temperature from '../elements/Temperature'
import FutureHr from '../elements/FutureHr'
import RainAmount from '../elements/RainAmount'

export default function Home() {
    const [data, setData] = useState('loading')
    const [loading, setLoading] = useState(true)
    const [location, setLocation] = useState()

    useEffect(() => {
        if (location !== undefined) {
            axios
                .get(
                    `https://api.openweathermap.org/data/2.5/onecall?lat=${location[0]}&lon=${location[1]}&exclude=minutely&appid=${process.env.REACT_APP_WEATHER_KEY}&units=metric`
                )
                .then((res) => {
                    setData(res.data)
                    setLoading(false)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }, [location])

    return (
        <div className="w-screen h-screen" style={{ background: '#f7feff' }}>
            <SearchBar setLocation={setLocation} />
            <div
                style={{ height: '90%' }}
                className="grid-phone w-full p-4 pt-2 box-border bottom-0 absolute"
            >
                <Webcam location={location} loading={loading} />
                <div className="flex flex-row items-center justify-between">
                    <Temperature data={data} loading={loading} />
                    <RainAmount data={data} loading={loading} />
                </div>
                <FutureHr data={data} loading={loading} />
            </div>
        </div>
    )
}
