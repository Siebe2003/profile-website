import { cn } from "@/lib/utils"
import React from 'react'

interface InputFieldProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  errorMessages: string[] | undefined
}

function TextareaField({label, name, rows, errorMessages, className, defaultValue}: InputFieldProps) {
  return (
    <div className={cn("mb-4", className)}>
      <label className="text-sm leading-7">{label}</label>
      <textarea 
        name={name} 
        rows={rows} 
        defaultValue={defaultValue}
        className="resize-none"
      />
      {errorMessages && errorMessages.map((x, index) => 
        <p key={`${index}#${errorMessages}`} className="text-destructive base">{x}</p>
      )}
    </div>
  )
}

export default TextareaField