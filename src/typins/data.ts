export interface ApiPersonRequest {
    docType: string;
    doc: string;
    phone: string;
  }
  
  export interface ApiPersonResponse {
    name: string;
    lastName: string;
    birthDay: string;
  }
  
 export interface Plan {
    name: string;
    price: number;
    description: string[];
    age: number;
  }
  export interface ApiPlansResponse {
    list: Plan[];
  }