"use server"

import { z } from "zod"
import { Resend } from "resend"

const contactSchema = z.object({
  firstName: z.string().trim().nonempty("Field cannot be empty.").max(35, "Name cannot be longer than 35 characters").regex(/^[^0-9]*$/, "Name cannot contain numbers."),
  lastName: z.string().trim().nonempty("Field cannot be empty.").max(35, "Name cannot be longer than 35 characters").regex(/^[^0-9]*$/, "Name cannot contain numbers."),
  email: z.email("Invalid email address.").trim().nonempty("Field cannot be empty."),
  message: z.string().trim().min(30, "The message is too short."),
})

export type ContactActionState = {
  success?: string,
  firstName?: string
  lastName?: string
  email?: string
  message?: string
  errors?: {
    firstName?: string[]
    lastName?: string[]
    email?: string[]
    message?: string[]
    resend?: string
  }
}

export async function sendMail(
  _prevState: ContactActionState,
  form: FormData
): Promise<ContactActionState> {
  const rawData = {
    firstName: form.get("firstName") as string,
    lastName: form.get("lastName") as string,
    email: form.get("email") as string,
    message: form.get("message") as string,
  }
  const result = contactSchema.safeParse(rawData)

  if (!result.success) {
    console.log(rawData.message)
    return {
      ...rawData,
      errors: z.flattenError(result.error).fieldErrors
    }
  }

  const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY || process.env.RESEND_API_KEY!)

  const { error } = await resend.emails.send({
    from: "Profile website <onboarding@resend.dev>",
    to: ["verhaegensiebe@gmail.com"],
    subject: "Contact form submission",
    html: `
      <ul>
        <li><strong>First name:</strong> ${rawData.firstName}</li>
        <li><strong>Last name:</strong> ${rawData.lastName}</li>
        <li><strong>Email:</strong> ${rawData.email}</li>
      </ul>
      <p>${rawData.message}</p>
    `
  })

  return error ? { errors: { resend: error.message } } : { success: "✓ The email has been sent" }
}
