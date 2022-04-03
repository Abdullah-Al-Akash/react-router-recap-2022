import { useEffect, useState } from "react"

const useTshirts = () => {
        const [tShirts, setTShirts] = useState([]);
        useEffect(() => {
                fetch('tShirt.json')
                        .then(res => res.json())
                        .then(data => setTShirts(data))
        }, [])

        return [tShirts, setTShirts];
}

export default useTshirts;