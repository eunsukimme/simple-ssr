import { useState } from "react"
import React from 'react';

export function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}> + </button>
        </div>
    )
}
