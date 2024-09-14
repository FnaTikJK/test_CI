import React, {useState} from 'react';
import axios from "axios";

function App() {
    const [text, setText] = useState("Здесь резы");

    return (
        <div>
            {text}
            <button onClick={async () => {
                const resp = await axios.get("Test");
                setText(resp.data)
            }}>
                Тест
            </button>
        </div>
    );
}

export default App;
