import { SignIn } from "@clerk/nextjs"

export default function SignInPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <SignIn />
    </div>
  )
}

