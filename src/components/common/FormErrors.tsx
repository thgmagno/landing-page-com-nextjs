import { AlertTriangleIcon } from 'lucide-react'

export function FormErrors({ errors }: { errors: string }) {
  return (
    <p className="text-sm text-red-500 font-bold rounded-md border border-red-400 bg-red-100 p-2 flex items-center">
      <AlertTriangleIcon className="w-4 h-4 mr-2" />
      {errors}
    </p>
  )
}
