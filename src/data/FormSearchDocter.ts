export type DayType = {
  id: number;
  name: string;
};

export type SpecialistType = {
  id: number;
  specialty: string;
};

export type MeetingMethodType = {
  id: number;
  meeting: string;
};

export const Days: DayType[] = [
  {
    id: 1,
    name: "Senin",
  },
  {
    id: 2,
    name: "Selasa",
  },
  {
    id: 3,
    name: "Rabu",
  },
  {
    id: 4,
    name: "Kamis",
  },
  {
    id: 5,
    name: "Jum'at",
  },
  {
    id: 6,
    name: "Sabtu",
  },
  {
    id: 7,
    name: "Minggu",
  },
];

export const Specialis: SpecialistType[] = [
  {
    id: 1,
    specialty: "Spesialis Bedah Jantung",
  },
  {
    id: 2,
    specialty: "Spesialis Onkologi",
  },
  {
    id: 3,
    specialty: "Spesialis Bedah Saraf",
  },
  {
    id: 4,
    specialty: "Spesialis Anak",
  },
  {
    id: 5,
    specialty: "Spesialis Gastroenterologi",
  },
  {
    id: 6,
    specialty: "Spesialis Endokrinologi",
  },
  {
    id: 7,
    specialty: "Spesialis Ortopedi",
  },
  {
    id: 8,
    specialty: "Spesialis Dermatologi",
  },
  {
    id: 9,
    specialty: "Spesialis Penyakit Dalam",
  },
  {
    id: 10,
    specialty: "Spesialis Obstetri dan Ginekologi",
  },
];

export const Metting: MeetingMethodType[] = [
  {
    id: 1,
    meeting: "Reguler",
  },
  {
    id: 2,
    meeting: "Online",
  },
  {
    id: 3,
    meeting: "Homecare",
  },
];
