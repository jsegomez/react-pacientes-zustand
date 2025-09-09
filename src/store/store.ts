import { create } from "zustand";

import type { Patient } from "../types";

type PatienteState = {
    patients: Patient[];   
    addPatiente: (data: Patient) => void
}

export const userPatitenteStore = create<PatienteState>((set) => ({
    patients: [],
    addPatiente: (patient: Patient) => {
     set((state) => ({
        patients: [...state.patients, patient]
     }))
    }
}));



