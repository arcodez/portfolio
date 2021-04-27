import {useState} from 'react'

function estado() {
    const [aumentar, setAumentar] = useState(0)
    return (
        <center>
            <h1>{aumentar}</h1>
            <button onClick={() => setAumentar( aumentar + 1)}>Aumentar</button>
            <button onClick={() => setAumentar( aumentar - 1)}>Decrementar</button>
        </center>
    )
}

export default estado
