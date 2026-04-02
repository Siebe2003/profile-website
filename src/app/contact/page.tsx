"use client"

import React, { useActionState } from "react"
import { sendMail } from "@/lib/actions"
import InputField from "@/components/custom/InputField"
import TextareaField from "@/components/custom/TextareaField"
import { cn } from "@/lib/utils"

function Contact() {
  const [result, action, isPending] = useActionState(sendMail, {})

  return (
    <div className="w-full px-6 md:px-0 md:w-[80%] md:mx-auto lg:w-[60%] 2xl:w-[50%]">
      <h1 className="header text-4xl font-bold mb-10 md:text-5xl xl:mb-20">Contact me</h1>
      <form action={action}>
        <div className="flex gap-4 lg:gap-10">
          <InputField 
            label="First name" 
            type="text" 
            name="firstName" 
            className="flex-1" 
            errorMessages={result.errors?.firstName} 
            defaultValue={result.firstName} 
          />
          <InputField 
            label="Last name" 
            type="text" 
            name="lastName"
            className="flex-1" 
            errorMessages={result.errors?.lastName} 
            defaultValue={result.lastName} 
          />
        </div>
        <InputField 
          label="Email" 
          type="email" 
          name="email" 
          errorMessages={result.errors?.email} 
          defaultValue={result.email} 
        />
        <TextareaField 
          label="Message" 
          name="message" 
          rows={8}
          errorMessages={result.errors?.message} 
          defaultValue={result.message} 
        />
        <p className={cn("text-success text-center font-medium opacity-0 transition-all duration-200 delay-200", result.success && "opacity-100")}>{result.success}</p>
        <button type="submit" className="button mx-auto block px-6 mt-6" disabled={isPending}>{isPending ? "Sending..." : "Send"}</button>
      </form>
    </div>
  )
}

export default Contact
