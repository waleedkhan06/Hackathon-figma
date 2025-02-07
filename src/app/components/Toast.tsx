import { FiCheck } from "react-icons/fi"

interface ToastProps {
  message: string
}

export default function Toast({ message }: ToastProps) {
  return (
    <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center space-x-2 animate-fade-in-up">
      <FiCheck className="w-5 h-5" />
      <span>{message}</span>
    </div>
  )
}

