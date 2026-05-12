"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { FormErrorMessage } from "@/components/forms/form-error-message";
import { FormSuccessMessage } from "@/components/forms/form-success-message";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { consultationClientSchema, consultationMethods, ConsultationClientInput, projectTypes } from "@/lib/form-options";

const methodLabels: Record<string, string> = {
  WHATSAPP: "WhatsApp",
  PHONE_CALL: "Phone call",
  ONLINE_MEETING: "Online meeting"
};

const projectLabels: Record<string, string> = {
  BUSINESS_WEBSITE: "Business website",
  ECOMMERCE: "E-commerce",
  LANDING_PAGE: "Landing page",
  WEB_APPLICATION: "Web application",
  DASHBOARD_SYSTEM: "Dashboard system",
  GOVERNMENT_SYSTEM: "Government/agency system",
  WEBSITE_REDESIGN: "Website redesign",
  MAINTENANCE: "Maintenance",
  OTHER: "Other"
};

export function ConsultationForm() {
  const [serverError, setServerError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const form = useForm<ConsultationClientInput>({
    resolver: zodResolver(consultationClientSchema),
    defaultValues: {
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      preferredMethod: "WHATSAPP",
      preferredDate: "",
      preferredTime: "",
      projectType: "BUSINESS_WEBSITE",
      projectDescription: "",
      consent: true,
      website: ""
    }
  });

  async function onSubmit(values: ConsultationClientInput) {
    setServerError(null);
    setSuccess(null);
    const response = await fetch("/api/consultation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values)
    });
    const data = await response.json();
    if (!response.ok) {
      setServerError(data.message || "Unable to submit consultation request.");
      return;
    }
    setSuccess("Consultation request submitted successfully. We will confirm your slot soon.");
    form.reset();
  }

  return (
    <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
      <input type="text" className="hidden" tabIndex={-1} autoComplete="off" {...form.register("website")} />
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <Label htmlFor="fullName">Full name</Label>
          <Input id="fullName" {...form.register("fullName")} />
        </div>
        <div>
          <Label htmlFor="companyName">Company / organization name</Label>
          <Input id="companyName" {...form.register("companyName")} />
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" {...form.register("email")} />
        </div>
        <div>
          <Label htmlFor="phone">Phone number</Label>
          <Input id="phone" {...form.register("phone")} />
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <Label htmlFor="preferredMethod">Preferred consultation method</Label>
          <Select id="preferredMethod" {...form.register("preferredMethod")}>
            {consultationMethods.map((method) => (
              <option key={method} value={method}>
                {methodLabels[method]}
              </option>
            ))}
          </Select>
        </div>
        <div>
          <Label htmlFor="projectType">Project type</Label>
          <Select id="projectType" {...form.register("projectType")}>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {projectLabels[type]}
              </option>
            ))}
          </Select>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <Label htmlFor="preferredDate">Preferred date</Label>
          <Input id="preferredDate" type="date" {...form.register("preferredDate")} />
        </div>
        <div>
          <Label htmlFor="preferredTime">Preferred time</Label>
          <Input id="preferredTime" type="time" {...form.register("preferredTime")} />
        </div>
      </div>
      <div>
        <Label htmlFor="projectDescription">Short project description</Label>
        <Textarea id="projectDescription" {...form.register("projectDescription")} />
      </div>
      <label className="flex items-start gap-2 text-sm text-slate-700">
        <Checkbox {...form.register("consent")} />
        <span>I consent to be contacted for consultation follow-up.</span>
      </label>
      {serverError && <FormErrorMessage message={serverError} />}
      {success && <FormSuccessMessage message={success} />}
      <Button type="submit" disabled={form.formState.isSubmitting}>
        {form.formState.isSubmitting ? "Submitting..." : "Book Consultation"}
      </Button>
    </form>
  );
}