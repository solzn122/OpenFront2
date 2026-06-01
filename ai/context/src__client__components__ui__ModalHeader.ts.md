# src/client/components/ui/ModalHeader.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 2477 bytes
- Dependencies: lit
- Public interfaces: modalHeader
- Important implementation details: Functions/methods: withClasses, modalHeader Content notes: import { html, TemplateResult } from "lit"; export interface ModalHeaderProps { title?: string | TemplateResult; titleContent?: TemplateResult; onBack: (event: MouseEvent) => void; ariaLabel?: string; rightContent?: TemplateResult; leftClassName?: string;

