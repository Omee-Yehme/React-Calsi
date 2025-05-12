import React, { useState } from "react";
import './App.css'
export default function Calculator() {
    const [expression, setExpression] = useState("");
    const [result, setResult] = useState("");

    const handleClick = (value) => {
        setExpression((prev) => prev + value);
    };

    const handleClear = () => {
        setExpression("");
        setResult("");
    };

    const handleEqual = () => {
        if (!expression) {
            setResult("Error");
            return;
        }

        try {
            const evaluated = eval(expression);
            setResult(evaluated.toString());
        } catch {
            setResult("Error");
        }
    };

    const buttons = [
        "7", "8", "9", "+",
        "4", "5", "6", "-",
        "1", "2", "3", "*",
        "0", "C", "=", "/"
    ];

    return (
        <div className="app">
            <div className="rel">
                <h1>React Calculator</h1>
            <input
                type="text"
                value={expression}
                readOnly
                style={{ width: "100%", fontSize: "20px", marginBottom: "10px", textAlign: "left" }}
            />
            <div style={{ marginBottom: "15px", minHeight: "20px", fontSize:"25px", color:"grey"}}>{result}</div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px" }}>
                {buttons.map((btn, idx) => (
                    <button
                        key={idx}
                        onClick={() => {
                            if (btn === "=") handleEqual();
                            else if (btn === "C") handleClear();
                            else handleClick(btn);
                        }}
                        style={{ padding: "30px", fontSize: "30px", cursor: "pointer",borderRadius:"10px", border:"3px solid black" }}
                    >
                        {btn}
                    </button>
                ))}
            </div>
        </div>
    );
}
