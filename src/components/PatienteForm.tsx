import { useForm } from "react-hook-form"
import { v4 as uuid } from "uuid";

import type { DraftPatiente, Patient } from "../types";
import FormErrorMessage from "./FormErrorMessage";
import { userPatitenteStore } from "../store/store";

export default function PatientForm() {
  const { addPatiente } = userPatitenteStore();
  const { register, handleSubmit, formState: { isValid, errors }, reset } = useForm<DraftPatiente>(
    { mode: 'all' }
  );

  const onSubmit = (data: DraftPatiente) => {
    const patient: Patient = { ...data, id: uuid() }
    addPatiente(patient);
    reset();
  };
  
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
        <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

        <p className="text-lg mt-5 text-center mb-10">
            Añade Pacientes y {''}
            <span className="text-indigo-600 font-bold">Administralos</span>
        </p>

        <form 
            className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
        >
              <div className="mb-5">
                  <label htmlFor="name" className="text-sm uppercase font-bold">
                      Paciente 
                  </label>
                  <input  
                      id="name"
                      className="w-full p-3  border border-gray-100"  
                      type="text" 
                      placeholder="Nombre del Paciente" 
                      {...register('name', {
                        required: 'El nombre es obligatorio',
                        minLength: {
                          value: 3,
                          message: 'El nombre debe tener al menos 3 caracteres'
                        }
                      })}
                  />
                  { errors.name && <FormErrorMessage message={errors.name.message as string} /> }
              </div>

              <div className="mb-5">
                <label htmlFor="caretaker" className="text-sm uppercase font-bold">
                    Propietario 
                </label>
                <input  
                    id="caretaker"
                    className="w-full p-3  border border-gray-100"  
                    type="text" 
                    placeholder="Nombre del Propietario" 
                    {...register('caretaker', {
                      required: 'El propietario es obligatorio',
                      minLength: {
                        value: 3,
                        message: 'El propietario debe tener al menos 3 caracteres'
                      }
                    })}
                />
                { errors.caretaker && <FormErrorMessage message={errors.caretaker.message as string} /> }
              </div>

            <div className="mb-5">
              <label htmlFor="email" className="text-sm uppercase font-bold">
                  Email 
              </label>
              <input  
                  id="email"
                  className="w-full p-3  border border-gray-100"  
                  type="email" 
                  placeholder="Email de Registro" 
                  {...register('email', {
                    required: 'El email es obligatorio',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'El email debe ser válido'
                    }
                  })}
              />
              { errors.email && <FormErrorMessage message={errors.email.message as string} /> }
            </div>

            <div className="mb-5">
                <label htmlFor="date" className="text-sm uppercase font-bold">
                    Fecha Alta 
                </label>
                <input  
                    id="date"
                    className="w-full p-3  border border-gray-100"  
                    type="date" 
                    {...register('date', {
                      required: 'La fecha es obligatoria'
                    })}
                />
                { errors.date && <FormErrorMessage message={errors.date.message as string} /> }
            </div>
            
            <div className="mb-5">
                <label htmlFor="symptoms" className="text-sm uppercase font-bold">
                Síntomas 
                </label>
                <textarea  
                    id="symptoms"
                    className="w-full p-3  border border-gray-100"  
                    placeholder="Síntomas del paciente" 
                    {...register('symptoms', {
                      required: 'Los síntomas son obligatorios'
                    })}
                ></textarea>
                { errors.symptoms && <FormErrorMessage message={errors.symptoms.message as string} /> }
            </div>

            <input
                type="submit"
                disabled={!isValid}
                className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors disabled:cursor-not-allowed disabled:bg-indigo-300"
                value='Guardar Paciente'
            />
        </form> 
    </div>
  )
}