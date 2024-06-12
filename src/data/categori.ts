import JanjiTemuDokter from "../assets/kategori/janji-temu-dokter.svg";
import CekRekamMedis from "../assets/kategori/cek-jadwal.svg";
import PanggilAmbulan from "../assets/kategori/panggil-ambulan.svg";
import ForumKonsultasi from "../assets/kategori/forum-konsultasi.svg";
import CekJadwal from "../assets/kategori/cek-jadwal.svg";

export type Category = {
  id: number;
  name: string;
  image: any;
};

export const category: Category[] = [
  {
    id: 1,
    name: "Janji Temu Dokter",
    image: JanjiTemuDokter,
  },
  {
    id: 2,
    name: "Cek Rekam Medis",
    image: CekRekamMedis,
  },
  {
    id: 3,
    name: "Panggil Ambulan",
    image: PanggilAmbulan,
  },
  {
    id: 4,
    name: "Forum Konsultasi",
    image: ForumKonsultasi,
  },
  {
    id: 5,
    name: "Cek Jadwal",
    image: CekJadwal,
  },
];
