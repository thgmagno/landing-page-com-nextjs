import { AlertTriangleIcon } from 'lucide-react'

export function FormErrors({ errors }: { errors: string }) {
  return (
    <p className="flex items-center rounded-md border border-red-400 bg-red-100 p-2 text-sm font-bold text-red-500">
      <AlertTriangleIcon className="mr-2 h-4 w-4" />
      {errors}
    </p>
  )
}
