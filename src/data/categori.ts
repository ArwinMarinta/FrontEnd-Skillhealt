import JanjiTemuDokter from "../assets/kategori/janji-temu-dokter.svg";
import CekRekamMedis from "../assets/kategori/cek-jadwal.svg";
import PanggilAmbulan from "../assets/kategori/panggil-ambulan.svg";
import ForumKonsultasi from "../assets/kategori/forum-konsultasi.svg";
import CekJadwal from "../assets/kategori/cek-jadwal.svg";

import AmbulanceBiasa from "../assets/ambulan/biasa.svg";
import AmbulanceDarurat from "../assets/ambulan/darurat.svg";

export type Category = {
  id: number;
  name: string;
  image: string;
  url: string;
};

export const category: Category[] = [
  {
    id: 1,
    name: "Janji Temu Dokter",
    image: JanjiTemuDokter,
    url: "/search-doctor",
  },
  {
    id: 2,
    name: "Cek Rekam Medis",
    image: CekRekamMedis,
    url: "",
  },
  {
    id: 3,
    name: "Panggil Ambulan",
    image: PanggilAmbulan,
    url: "/ambulance",
  },
  {
    id: 4,
    name: "Forum Konsultasi",
    image: ForumKonsultasi,
    url: "/discussion",
  },
  {
    id: 5,
    name: "Cek Jadwal",
    image: CekJadwal,
    url: "",
  },
];

export const Ambulance: Category[] = [
  {
    id: 1,
    name: "Biasa",
    image: AmbulanceBiasa,
    url: "",
  },
  {
    id: 2,
    name: "Darurat",
    image: AmbulanceDarurat,
    url: "",
  },
];
