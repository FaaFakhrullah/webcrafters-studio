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
import {
  budgetRanges,
  preferredContactMethods,
  projectTypes,
  quotationClientSchema,
  quotationFeatureOptions,
  QuotationClientInput,
  timelines
} from "@/lib/form-options";

const labels: Record<string, string> = {
  BUSINESS_WEBSITE: "Business website",
  ECOMMERCE: "E-commerce",
  LANDING_PAGE: "Landing page",
  WEB_APPLICATION: "Web application",
  DASHBOARD_SYSTEM: "Dashboard system",
  GOVERNMENT_SYSTEM: "Government/agency system",
  WEBSITE_REDESIGN: "Website redesign",
  MAINTENANCE: "Maintenance",
  OTHER: "Other",
  EMAIL: "Email",
  PHONE_CALL: "Phone call",
  WHATSAPP: "WhatsApp"
};

export function QuotationForm() {
  const [serverError, setServerError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const form = useForm<QuotationClientInput>({
    resolver: zodResolver(quotationClientSchema),
    defaultValues: {
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      preferredContactMethod: "EMAIL",
      projectType: "BUSINESS_WEBSITE",
      budgetRange: budgetRanges[1],
      timeline: timelines[2],
      requiredFeatures: [],
      existingWebsiteUrl: "",
      projectDescription: "",
      fileUrl: "",
      consent: true,
      website: ""
    }
  });

  async function onSubmit(values: QuotationClientInput) {
    setServerError(null);
    setSuccess(null);
    const response = await fetch("/api/quotation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values)
    });
    const data = await response.json();
    if (!response.ok) {
      setServerError(data.message || "Submission failed. Please try again.");
      return;
    }
    setSuccess("Your quotation request has been received. We will contact you soon.");
    form.reset();
  }

  const formErrors = form.formState.errors;

  return (
    <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
      <input type="text" className="hidden" tabIndex={-1} autoComplete="off" {...form.register("website")} />
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <Label htmlFor="fullName">Full name</Label>
          <Input id="fullName" {...form.register("fullName")} />
          {formErrors.fullName ? <p className="mt-1 text-xs text-red-600">{formErrors.fullName.message}</p> : null}
        </div>
        <div>
          <Label htmlFor="companyName">Company / organization name</Label>
          <Input id="companyName" {...form.register("companyName")} />
          {formErrors.companyName ? <p className="mt-1 text-xs text-red-600">{formErrors.companyName.message}</p> : null}
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" {...form.register("email")} />
          {formErrors.email ? <p className="mt-1 text-xs text-red-600">{formErrors.email.message}</p> : null}
        </div>
        <div>
          <Label htmlFor="phone">Phone number</Label>
          <Input id="phone" {...form.register("phone")} />
          {formErrors.phone ? <p className="mt-1 text-xs text-red-600">{formErrors.phone.message}</p> : null}
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <Label htmlFor="preferredContactMethod">Preferred contact method</Label>
          <Select id="preferredContactMethod" {...form.register("preferredContactMethod")}>
            {preferredContactMethods.map((method) => (
              <option key={method} value={method}>
                {labels[method]}
              </option>
            ))}
          </Select>
        </div>
        <div>
          <Label htmlFor="projectType">Project type</Label>
          <Select id="projectType" {...form.register("projectType")}>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {labels[type]}
              </option>
            ))}
          </Select>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <Label htmlFor="budgetRange">Budget range</Label>
          <Select id="budgetRange" {...form.register("budgetRange")}>
            {budgetRanges.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </Select>
        </div>
        <div>
          <Label htmlFor="timeline">Timeline</Label>
          <Select id="timeline" {...form.register("timeline")}>
            {timelines.map((timeline) => (
              <option key={timeline} value={timeline}>
                {timeline}
              </option>
            ))}
          </Select>
        </div>
      </div>
      <div>
        <Label>Required features</Label>
        <div className="mt-2 grid gap-2 md:grid-cols-2">
          {quotationFeatureOptions.map((feature) => (
            <label key={feature} className="flex items-center gap-2 rounded-md border border-border bg-white p-2 text-sm">
              <Checkbox
                checked={form.watch("requiredFeatures").includes(feature)}
                onChange={(event) => {
                  const checked = event.target.checked;
                  const current = form.getValues("requiredFeatures");
                  if (checked) {
                    form.setValue("requiredFeatures", [...current, feature]);
                  } else {
                    form.setValue(
                      "requiredFeatures",
                      current.filter((item) => item !== feature)
                    );
                  }
                }}
              />
              {feature}
            </label>
          ))}
        </div>
        {formErrors.requiredFeatures ? (
          <p className="mt-1 text-xs text-red-600">Select at least one required feature.</p>
        ) : null}
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <Label htmlFor="existingWebsiteUrl">Existing website URL</Label>
          <Input id="existingWebsiteUrl" placeholder="https://example.com" {...form.register("existingWebsiteUrl")} />
          {formErrors.existingWebsiteUrl ? (
            <p className="mt-1 text-xs text-red-600">{formErrors.existingWebsiteUrl.message}</p>
          ) : null}
        </div>
        <div>
          <Label htmlFor="fileUpload">File upload (local placeholder)</Label>
          <Input
            id="fileUpload"
            type="file"
            onChange={(event) => {
              const file = event.target.files?.[0];
              form.setValue("fileUrl", file ? `local-upload://${file.name}` : "");
            }}
          />
        </div>
      </div>
      <div>
        <Label htmlFor="projectDescription">Project description</Label>
        <Textarea id="projectDescription" {...form.register("projectDescription")} />
        {formErrors.projectDescription ? (
          <p className="mt-1 text-xs text-red-600">{formErrors.projectDescription.message}</p>
        ) : null}
      </div>
      <label className="flex items-start gap-2 text-sm text-slate-700">
        <Checkbox {...form.register("consent")} />
        <span>I consent to be contacted by WebCrafters Studio regarding this project request.</span>
      </label>
      {formErrors.consent ? <p className="text-xs text-red-600">Please provide consent before submitting.</p> : null}

      {Object.keys(formErrors).length > 0 ? (
        <FormErrorMessage message="Please fix the highlighted fields before submitting your quotation request." />
      ) : null}

      {serverError && <FormErrorMessage message={serverError} />}
      {success && <FormSuccessMessage message={success} />}

      <Button type="submit" disabled={form.formState.isSubmitting}>
        {form.formState.isSubmitting ? "Submitting..." : "Submit Quotation Request"}
      </Button>
    </form>
  );
}
