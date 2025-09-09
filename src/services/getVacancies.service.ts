import { BACKEND_URL } from '../constants/api';
import { CompanyData } from '../types/vacancies.types';
import axios from 'axios';

class Vacancies {
  async getVacancies(): Promise<CompanyData[]> {
    const response = await axios.get<{ data: CompanyData[] }>(BACKEND_URL);

    return response.data.data;
  }
}

export const vacanciesService = new Vacancies();
