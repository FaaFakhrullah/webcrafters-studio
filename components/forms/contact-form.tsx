"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { FormErrorMessage } from "@/components/forms/form-error-message";
import { FormSuccessMessage } from "@/components/forms/form-success-message";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactClientSchema, ContactClientInput } from "@/lib/form-options";

export function ContactForm() {
  const [serverError, setServerError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const form = useForm<ContactClientInput>({
    resolver: zodResolver(contactClientSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      website: ""
    }
  });

  async function onSubmit(values: ContactClientInput) {
    setServerError(null);
    setSuccess(null);
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values)
    });
    const data = await response.json();
    if (!response.ok) {
      setServerError(data.message || "Failed to send message.");
      return;
    }
    setSuccess("Message sent successfully. Our team will reply soon.");
    form.reset();
  }

  return (
    <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
      <input type="text" className="hidden" tabIndex={-1} autoComplete="off" {...form.register("website")} />
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" {...form.register("name")} />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" {...form.register("email")} />
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" {...form.register("phone")} />
        </div>
      </div>
      <div>
        <Label htmlFor="subject">Subject</Label>
        <Input id="subject" {...form.register("subject")} />
      </div>
      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" {...form.register("message")} />
      </div>
      {serverError && <FormErrorMessage message={serverError} />}
      {success && <FormSuccessMessage message={success} />}
      <Button type="submit" disabled={form.formState.isSubmitting}>
        {form.formState.isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}