import * as React from "react";

import {
  DocumentTypeId,
  DocumentTypes,
  DocumentType
} from "../utils/constants/document-types";


export type LoginState = {
  docType: DocumentTypeId;
  docNumber: string;
  showErrorMessage: boolean;
  docNumberErrorDesc: string;
  isLoggingIn: boolean,
  title: string;
};

export type  DefaultDocumentType= {
  id: DocumentTypeId;
  title: DocumentType;
  minLength: 8;
  maxLength: 8;
}


const useSignIn = () => {


  const [defaultDocumentType] = DocumentTypes;
  const [state, setState] = React.useState<LoginState>({
    docNumber: "",
    docType: defaultDocumentType.id as DocumentTypeId,
    showErrorMessage: false,
    docNumberErrorDesc: "",
    isLoggingIn: false,
    title: "Inicio de sesión",
  });

  const [documentTypeInfo, setDocumentTypeInfo] =
    React.useState<DefaultDocumentType>({
  id: DocumentTypeId.DNI,
  title: DocumentType.DNI,
  minLength: 8,
  maxLength: 8,
    });


  const updater = (newState: Partial<LoginState>) =>
    setState((prevState) => ({ ...prevState, ...newState }));



 

  const handleDocTypeChange = (documentType: DocumentTypeId) => {
    const document = DocumentTypes.find((it) => documentType === it.id);
    setDocumentTypeInfo(document!);
    updater({ docType: documentType });
    updater({ docNumber: "" });
  };

  const handleDocNumberChange = (docNumber: string) => {
    if (!/^[a-z0-9]*$/i.test(docNumber)) {
      return;
    }

    if (docNumber.length <= documentTypeInfo.maxLength) {
      updater({ docNumber });
    } else {
      updater({ docNumber: docNumber.substring(0, documentTypeInfo.maxLength) });
    }

    let documentNumberError = "";
    if (!docNumber || docNumber === "") {
      documentNumberError = "*Completa este campo";
    } else if (docNumber.length < documentTypeInfo.minLength) {
      documentNumberError = `*Ingresa un Nro. de documento válido`;
    }

    updater({
      docNumberErrorDesc: documentNumberError,
    });
  };

  const sendData = (docNumber, phoneNumber) => {
    if (/^[0-9]{8,}$/.test(docNumber) && docNumber!== '') {
        if (/\d{9,}/.test(phoneNumber!)) {
          
        }
        else {
            console.log('Por favor ingresa un número de celular valido ');
           
        }
    } else {
      console.log('El número de documento es invalido.');
  
    }
};
 



  React.useEffect(() => {
    if (state.docNumber) {
      handleDocNumberChange(state.docNumber);
    }
  }, [state.docType]);



  return {
    state,
    updater,
    handleDocTypeChange,
    handleDocNumberChange,
    sendData
  };
};

export default useSignIn;
