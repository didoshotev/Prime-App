import { useEffect } from "react"
import Navigation from "./navigation";

const App = () => {

    useEffect(() => {
        console.log('use effect in App');
        let developers = []
        localStorage.setItem('developers', JSON.stringify(developers))
    }, [])
    return (
        <>
            <Navigation />
        </>
    )
}

export default App