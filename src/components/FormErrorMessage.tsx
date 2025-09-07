export default function FormErrorMessage({ message }: { message: string }) {
  return (
    <p className="text-red-500 text-sm mt-2">{message}</p>
  )
}
