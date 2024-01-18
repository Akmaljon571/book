import { useState } from "react";
import { createContext } from "react";

export const State = createContext()

export const StatePriveder = ({ children }) => {
    const [modal, setModal] = useState({ status: 'none' });
    const data = { modal, setModal }

    return <State.Provider value={data}>{children}</State.Provider>
}