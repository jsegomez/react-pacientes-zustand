import { create } from "zustand";
import { devtools } from 'zustand/middleware'

import type { Patient } from "../types";

type PatienteState = {
    patients: Patient[];
    patientToEdit : Patient | null;
    addPatiente: (data: Patient) => void
    deletePatient: (id: string) => void
    setPatientToEdit: (patient: Patient | null) => void, 
    updatePatient: (patient: Patient) => void
}

export const userPatitenteStore = create<PatienteState>()(devtools(
    (set) => ({
        patients: [],
        patientToEdit: null,
        addPatiente: (patient: Patient) => {
         set((state) => ({
            patients: [...state.patients, patient]
         }))
        },
        deletePatient: (id: string) => {
         set((state) => ({
            patients: state.patients.filter((patient) => patient.id !== id)
         }))
        },
        setPatientToEdit: (patient: Patient | null) => {
         set(() => ({        
            patientToEdit: patient
         }))
        },
        updatePatient: (changes: Patient) => {
         set((state) => ({
            patients: state.patients.map((patient) => patient.id === changes.id ? changes : patient),
            patientToEdit: null
         }))
        }
    })
));


