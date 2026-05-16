"use client";

import { ContactFormProvider } from "@/context/ContactFormContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <ContactFormProvider>{children}</ContactFormProvider>;
}
