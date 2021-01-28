import { useState, useEffect } from 'react'
import axios from 'axios'

export default function useLocation(input) {
    const [coords, setCoords] = useState()
    const [verbose, setVerbose] = useState('(loading)')

    useEffect(() => {
        if (input !== undefined) {
            // Occurs any other time when user searches
            axios
                .get(
                    `https://api.opencagedata.com/geocode/v1/json?q=${input}&key=${process.env.REACT_APP_GEOCODE_KEY}&no_annotations=1`
                )
                .then((res) => {
                    setVerbose(res.data.results[0].formatted.split(',')[0])
                    let lat = res.data.results[0].geometry.lat.toFixed(2)
                    let lng = res.data.results[0].geometry.lng.toFixed(2)
                    setCoords([lat, lng])
                })
                .catch((err) => {
                    console.log(err)
                })
        } else {
            // Ocuurs on mount
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (pos) => {
                        let location = [
                            pos.coords.latitude.toFixed(2),
                            pos.coords.longitude.toFixed(2),
                        ]
                        setCoords(location)
                        axios
                            .get(
                                `https://api.opencagedata.com/geocode/v1/json?q=${location[0]}+${location[1]}&key=${process.env.REACT_APP_GEOCODE_KEY}&no_annotations=1`
                            )
                            .then((res) => {
                                setVerbose(res.data.results[0].components.town)
                            })
                            .catch((err) => {
                                console.log(err)
                            })
                    },
                    () => {
                        setCoords([47.62, -122.34])
                        setVerbose('Seattle')
                    }
                )
            }
        }
    }, [input])

    return { coords, verbose }
}
