import { createContext, useContext, useState } from 'react'; 

const RouteContext = createContext();

const labs = [
    { id: "lab01", name: "3Dental Studio" },
    { id: "lab02", name: "Adelantado" },
    { id: "lab03", name: "Betera Dental" },
    { id: "lab04", name: "Rafi Aragones" },
    { id: "lab05", name: "Guerola" },
    { id: "lab06", name: "Gnatodent" },
    { id: "lab07", name: "Honda" },
    { id: "lab08", name: "Dos Rodes" },
    { id: "lab09", name: "Rodriguez Vidal" },
    { id: "lab10", name: "Tecnident" },
    { id: "lab11", name: "Orto MD" }
];

const clinics = [
    { id: "c01", name: "clinica 01", labId: "lab01" },
    { id: "c02", name: "clinica 02", labId: "lab01" },
    { id: "c03", name: "clinica 03", labId: "lab01" },
    { id: "c04", name: "clinica 04", labId: "lab02" },
    { id: "c05", name: "clinica 05", labId: "lab02" },
    { id: "c06", name: "clinica 06", labId: "lab02" },
    { id: "c07", name: "clinica 07", labId: "lab03" },
    { id: "c08", name: "clinica 08", labId: "lab03" },
    { id: "c09", name: "clinica 09", labId: "lab04" },
    { id: "c10", name: "clinica 10", labId: "lab04" },
    { id: "c11", name: "clinica 11", labId: "lab04" },
    { id: "c12", name: "clinica 12", labId: "lab05" },
    { id: "c13", name: "clinica 13", labId: "lab05" },
    { id: "c14", name: "clinica 14", labId: "lab06" },
    { id: "c15", name: "clinica 15", labId: "lab06" },
    { id: "c16", name: "clinica 16", labId: "lab06" },
    { id: "c17", name: "clinica 17", labId: "lab07" },
    { id: "c18", name: "clinica 18", labId: "lab07" },
    { id: "c19", name: "clinica 19", labId: "lab08" },
    { id: "c20", name: "clinica 20", labId: "lab09" },
    { id: "c15", name: "clinica 15", labId: "lab09" },
    { id: "c16", name: "clinica 16", labId: "lab10" },
    { id: "c17", name: "clinica 17", labId: "lab11" },
    { id: "c18", name: "clinica 18", labId: "lab11" },
    { id: "c19", name: "clinica 19", labId: "lab11" },
    { id: "c20", name: "clinica 20", labId: "lab11" }
]

export function RouteProvider({ children }) {
    

    const [activeWorkerId, setActiveWorkerId] = useState("w1");
    /* const [routes, setRoutes] = useState({ w1: [], w2: [] }); */
    const [selectedLabId, setSelectedLabId] = useState(null);

    const value = {
        activeWorkerId, 
        setActiveWorkerId,
        labs,
        clinics,
        selectedLabId,
        setSelectedLabId
    };

return (
        <RouteContext.Provider value={value}> 
            { children }
        </RouteContext.Provider>
    );
}

export function useRoute() {
    return useContext(RouteContext);
}