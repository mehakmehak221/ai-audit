"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";
import ContactFormModal from "@/components/ContactFormModal";

type ContactFormContextValue = {
  openForm: () => void;
  closeForm: () => void;
  isOpen: boolean;
};

const ContactFormContext = createContext<ContactFormContextValue | null>(null);

export function ContactFormProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openForm = useCallback(() => setIsOpen(true), []);
  const closeForm = useCallback(() => setIsOpen(false), []);

  return (
    <ContactFormContext.Provider value={{ openForm, closeForm, isOpen }}>
      {children}
      <ContactFormModal isOpen={isOpen} onClose={closeForm} />
    </ContactFormContext.Provider>
  );
}

export function useContactForm() {
  const context = useContext(ContactFormContext);
  if (!context) {
    throw new Error("useContactForm must be used within ContactFormProvider");
  }
  return context;
}
