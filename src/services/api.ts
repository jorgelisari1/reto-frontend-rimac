// api.ts
import {ApiPersonRequest, ApiPersonResponse,ApiPlansResponse} from '../typins/data';
import { fetchJson } from '../utils/fetch';

const apiUrl = 'https://rimac-front-end-challenge.netlify.app/api/user.json';
const apiPlansUrl = 'https://rimac-front-end-challenge.netlify.app/api/plans.json';



export const fetchApiPerson = async (): Promise<ApiPersonResponse> => {
  const url = apiUrl;
  return fetchJson(url);
};

export const fetchApiPlans = async (): Promise<ApiPlansResponse> => {
  const url = apiPlansUrl;
  return fetchJson(url);
};




