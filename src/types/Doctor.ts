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

export type DetailDoctorType = {
  id: number;
  nama: string;
  status: boolean;
  deskripsi: string;
  skd: string;
  pengalaman: string;
  images: string;
  pendidikan: string;
  Instansi: InstansiType;
  Spesiali: SpesialiType;
  jadwal: any;
};
