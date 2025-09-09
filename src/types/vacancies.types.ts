interface WorkType {
  id: number;
  name: string;
  nameGt5: string;
  nameLt5: string;
  nameOne: string;
}

interface Coordinates {
  longitude: number;
  latitude: number;
}

export interface CompanyData {
  id: string;
  logo: string;
  coordinates: Coordinates;
  address: string;
  companyName: string;
  dateStartByCity: string; 
  timeStartByCity: string; 
  timeEndByCity: string; 
  currentWorkers: number;
  planWorkers: number;
  workTypes: WorkType[];
  priceWorker: number;
  bonusPriceWorker: number;
  customerFeedbacksCount: string; 
  customerRating: number | null;
  isPromotionEnabled: boolean;
}

interface ApiResponse {
  data: CompanyData[];
}
