import { cn } from "@/lib/utils"
import React from 'react'

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  errorMessages: string[] |undefined
}

function InputField({label, name, type, defaultValue, errorMessages, className}: InputFieldProps) {
  return (
    <div className={cn("mb-4", className)}>
      <label className="text-sm leading-7">{label}</label>
      <input type={type} name={name} defaultValue={defaultValue} />
      {errorMessages && errorMessages.map((x, index) => 
        <p key={`${index}#${errorMessages}`} className="text-destructive base">{x}</p>
      )}
    </div>
  )
}

export default InputField
