import type { Patient } from "../types";
import PatientDetailItem from "./PatientDetailItem";

type PatientDetailsProps = {
    patient: Patient;
}

export default function PatientDetails({ patient }: PatientDetailsProps) {
  return (
    <div className="bg-white shadow-md rounded-lg py-10 px-5 mx-5 mb-5">
        <PatientDetailItem label="Nombre" value={patient.name} />
        <PatientDetailItem label="Propietario" value={patient.caretaker} />
        <PatientDetailItem label="Email" value={patient.email} />
        <PatientDetailItem label="Fecha Alta" value={patient.date} />
        <PatientDetailItem label="Síntomas" value={patient.symptoms} />

        <div className="flex justify-between mt-10 mt-5">
          <button type="button" className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 transition-colors text-white rounded-md font-bold">
            Editar
          </button>
          <button type="button" className="py-2 px-10 bg-red-600 hover:bg-red-700 transition-colors text-white rounded-md font-bold">
            Eliminar
          </button>
        </div>
    </div>
  )
}
