import { createServerSupabaseClient } from "@/app/lib/supabase";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function submitContactForm(formData: ContactFormData) {
  // Get server-side Supabase client
  const supabase = await createServerSupabaseClient();

  // First, try to insert into contacts (will silently fail if email exists)
  await supabase
    .from("email_list")
    .insert([
      {
        name: formData.name,
        email: formData.email,
      },
    ])
    .select();

  // Then insert the submission
  const { error } = await supabase
    .from("contact_submissions")
    .insert([
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        submitted_at: new Date().toISOString(),
      },
    ])
    .select();

  if (error) {
    throw new Error("Failed to store submission");
  }
}
