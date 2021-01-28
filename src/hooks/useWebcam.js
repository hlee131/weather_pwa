import { useState, useEffect } from 'react'
import axios from 'axios'

export default function useWebcam(location) {
    const [cam0, setCam0] = useState({ image: undefined, title: undefined })
    const [cam1, setCam1] = useState({ image: undefined, title: undefined })
    const [cam2, setCam2] = useState({ image: undefined, title: undefined })
    const [cams, setCams] = useState(0)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (location === undefined) {
            return { cam0, cam1, cam2, loading, cams }
        }

        setCam0({ image: undefined, title: undefined })
        setCam1({ image: undefined, title: undefined })
        setCam2({ image: undefined, title: undefined })

        axios
            .get(
                `https://api.windy.com/api/webcams/v2/list/category=meteo/nearby=${location[0]}, ${location[1]}, 50/orderby=distance/limit=3?show=webcams:image`,
                {
                    headers: {
                        'x-windy-key': process.env.REACT_APP_WEBCAM_KEY,
                    },
                }
            )
            .then((res) => {
                res = res.data
                setCams(Math.min(3, res.result.total))
                for (let i = 0; i < Math.min(3, res.result.total); i++) {
                    let image = res.result.webcams[i].image.current.preview
                    let title = res.result.webcams[i].title
                    switch (i) {
                        case 0:
                            setCam0({ image, title })
                            break
                        case 1:
                            setCam1({ image, title })
                            break
                        case 2:
                            setCam2({ image, title })
                            break
                        default:
                    }
                }
                setLoading(false)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [location])

    return { cam0, cam1, cam2, loading, cams }
}
