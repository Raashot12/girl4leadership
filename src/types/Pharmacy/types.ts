export type PrescriptionType = {
  id: number;
  patientName: string;
  hospitalNumber: string;
  age: string;
  gender: string;
  image?: string;
  ward: string;
  weight: string;
  prescriptionDoctor: string;
  unit: string;
  timeIssued: string;
  prescribedMedications: PrescriptionUnit[];
};
export type PrescriptionUnit = {
  id: number;
  medication: {
    drugName: string;
    prescriptionDoctor: string;
    unit: string;
  };
  dosage: {
    period: string;
  };
  drandName: string[];
  quantity: {
    amount: number;
    amountyType: string[];
  };
  price: {
    total: number | string;
    divisor: {
      amount: number | string;
      quantityType: string;
    };
  };
  date: {
    status: string;
    day: string;
  };
  status: {
    type: string;
  };
};

export type RecordSaleType = {
  recordRow: RecordSaleRowTypes[];
  total: string;
};

export type RecordSaleRowTypes = {
  id: number;
  product: {
    drugName: string;
    status: {
      firstStatus: string;
      SecondStatus: string;
    };
  };
  quantity: number;
  dispensingUnit: string[];
  price: {
    amount: string;
    level: string;
  };
  subTotal: string;
};

export type InventoryPropsType = {
  productName: InventoryOutterPropsType[];
  products: InventoryInnerPropsType[];
};

export type InventoryOutterPropsType = {
  inventoryId: number;
  productName: string;
  genericName: string;
  quantity: string;
  salePrice: string[];
  category: string;
  pharmacyCategory: string;
  expireDate: string;
};

export type InventoryInnerPropsType = {
  productId: number;
  inventoryId: number;
  productName: string;
  qty: string;
  timeStamp: string;
  expireDate: string;
  batchNumber: string;
  status: string;
};

export type ReviewOutterPropsType = {
  inventoryId: number;
  productName: string;
  ProductQty: string;
  quantityLost: { amount: string; type: string };
  batchNumber: string;
  category: string;
  submittyBy: { name: string; timeStamp: string };
  expireDate: string;
  status: string;
};
export type ReviewInnerPropsType = {
  productId: number;
  inventoryId: number;
  productType: string;
  pharmacyCategory: string;
  causesOfLoss: string;
};

export type CompoundMedicationPropsType = {
  compoundId: number;
  compoundName: string;
  qty: string;
  salePrice: string;
  expireDate: string;
  constituents: string[];
  submittyBy: { name: string; timeStamp: string };
  status: string;
};
export type CompoundMedicationInnerPropsType = {
  id: number;
  compoundId: number;
  constituent: string;
  batchNumber: string;
  expireDate: string;
  currentqtyOfBatch: string;
  quantitySelected: string;
};

export type TransferMedicationPropsType = {
  transferredId: number;
  productName: string;
  productQty: string;
  qtyTransferred: string;
  transferTo: string;
  batchNumber: string;
  expireDate: string;
  submittyBy: { name: string; timeStamp: string };
  status: string;
};
