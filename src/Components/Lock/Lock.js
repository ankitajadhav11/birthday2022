import { Input } from "@mui/material";
import { useEffect, useState } from "react";
import "./Lock.css"

function Lock({ setIsUnlocked }) {
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (password === "23112023") {
            setIsUnlocked(true);
        }
    }, [password, setIsUnlocked])

    return <div className="passwordDiv">
        <Input
            placeholder="Enter Password"
            color="secondary"
            className="inputBox"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
    </div>
}

export default Lock;