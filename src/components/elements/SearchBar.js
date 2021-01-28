import React, { useState, useEffect, useRef } from 'react'
import { useSpring, animated, config } from 'react-spring'

import useLocation from '../../hooks/useLocation'

export default function SearchBar({ setLocation }) {
    const [city, setCity] = useState('')
    const [focused, setFocused] = useState(false)
    const [query, setQuery] = useState(undefined)
    const { verbose, coords } = useLocation(query)
    const input = useRef(null)
    const button = useRef(null)

    const inputSpring = useSpring({
        to: {
            height: focused ? 145 : 0,
            opacity: focused ? '100%' : '0%',
            display: focused ? 'block' : 'none',
        },
        from: {
            height: 0,
            opacity: '0%',
            display: 'none',
        },
    })

    useEffect(() => setLocation(coords), [coords])

    useEffect(() => {
        if (input && input.current) {
            input.current.addEventListener('keypress', submitSearch)
            return () =>
                input.current.removeEventListener('keypress', submitSearch)
        }
    }, [])

    function submitSearch(e) {
        if (e.key === 'Enter') {
            button.current.click()
            input.current.blur()
        }
    }

    const handleClick = () => {
        if (city !== '') {
            setQuery(city)
            setCity('')
        } else alert('Must have input')
    }

    return (
        <div
            className="neu-t-d p-2 
                        z-10 fixed inset-x-4 top-4"
        >
            <input
                className="placeholder-blue-500 text-blue-600 w-full outline-none"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                style={{ background: '#f7feff' }}
                placeholder={`Current Location: ${verbose}`}
                ref={input}
            ></input>
            <button
                className="rounded absolute border border-blue-600 p-2 top-0 text-blue-600 right-0 outline-none hover:text-white"
                onClick={handleClick}
                ref={button}
            >
                Search
            </button>
            <animated.ul style={inputSpring}>
                <li className="font-semibold">Popular Cities</li>
                <li
                    className="cursor-pointer"
                    data-index="0"
                    onClick={(e) => setQuery(e.target.innerHTML)}
                >
                    New York City, USA
                </li>
                <li
                    className="cursor-pointer"
                    data-index="1"
                    onClick={(e) => setQuery(e.target.innerHTML)}
                >
                    London, England
                </li>
                <li
                    className="cursor-pointer"
                    data-index="2"
                    onClick={(e) => setQuery(e.target.innerHTML)}
                >
                    Beijing, China
                </li>
                <li
                    className="cursor-pointer"
                    data-index="3"
                    onClick={(e) => setQuery(e.target.innerHTML)}
                >
                    Sydney, Australia
                </li>
                <li
                    className="cursor-pointer"
                    data-index="4"
                    onClick={(e) => setQuery(e.target.innerHTML)}
                >
                    Cape Town, South Africa
                </li>
            </animated.ul>
        </div>
    )
}
