interface InstansiType {
  nama: string;
}

interface SpesialiType {
  nama: string;
}

export interface DoctorType {
  id: number;
  nama: string;
  image: string;
  status: boolean;
  Instansi: InstansiType;
  Spesiali: SpesialiType;
}
