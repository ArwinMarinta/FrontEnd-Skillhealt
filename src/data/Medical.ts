export type MedicalType = {
  id: number;
  title: string;
  date: string;
  medical_number: string;
  doctor: string;
};

export const MedicalRecord: MedicalType[] = [
  {
    id: 1,
    date: "Selasa, 05 - 09 - 2023 ",
    medical_number: "050920230123433",
    title: "Pemeriksaan Fisik Abdomen",
    doctor: "Dr. Jaydon Schleifer",
  },
  {
    id: 2,
    date: "Selasa, 05 - 09 - 2023 ",
    medical_number: "050920230123433",
    title: "Pemeriksaan Jantung",
    doctor: "Dr. Jaydon Schleifer",
  },
];
