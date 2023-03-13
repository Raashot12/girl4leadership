export type LaboratoryType = {
  id: number;
  patientName: string;
  hospitalNumber: string;
  age: string;
  gender: string;
  image?: string;
  ward: string;
  prescriptionDoctor: string;
  unit: string;
  timeIssued: string;
  prescribedLab: LaboratoryUnit[];
};
export type LaboratoryUnit = {
  id: number;
  testName: {
    drugName: string;
    prescriptionDoctor: string;
    unit: string;
  };
  category: string;
  specimen: string;
  specificOrganism: string;
  price: string;
  date: {
    status: string;
    day: string;
  };
  status: {
    type: string;
  };
};
