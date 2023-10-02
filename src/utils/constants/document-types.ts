
export enum DocumentType {
  DNI = 'DNI',
  CE = 'CE',
}

export enum DocumentTypeId {
  DNI = '2',
  CE = '4',
}

export const DocumentTypes = [
  { id: DocumentTypeId.DNI, title: DocumentType.DNI, minLength: 8, maxLength: 8 },
  { id: DocumentTypeId.CE, title: DocumentType.CE, minLength: 8, maxLength: 8 },
] as const
