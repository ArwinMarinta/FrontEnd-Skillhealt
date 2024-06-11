export type ForumItem = {
  id: number;
  status: string;
  title: string;
  from: string;
  answerFrom: string;
};

export const TopicForum: ForumItem[] = [
  {
    id: 1,
    status: "Sudah Terjawab",
    title: "Susah Tidur Dimalam Hari",
    from: "Fulan",
    answerFrom: "Dr. Mira Iskandar",
  },
  {
    id: 2,
    status: "Belum Terjawab",
    title: "Nyeri Sendi Setelah Olahraga",
    from: "Ali",
    answerFrom: "Dr. Rina Puspitasari",
  },
  {
    id: 3,
    status: "Sudah Terjawab",
    title: "Bagaimana Menurunkan Berat Badan?",
    from: "Aisyah",
    answerFrom: "Dr. Budi Santoso",
  },
  {
    id: 4,
    status: "Sudah Terjawab",
    title: "Mengatasi Stres di Tempat Kerja",
    from: "Dewi",
    answerFrom: "Dr. Siti Nurhaliza",
  },
  {
    id: 5,
    status: "Belum Terjawab",
    title: "Gatal-Gatal pada Kulit",
    from: "Budi",
    answerFrom: "Dr. Rina Puspitasari",
  },
  {
    id: 6,
    status: "Sudah Terjawab",
    title: "Tips Mengatasi Insomnia",
    from: "Andi",
    answerFrom: "Dr. Rina Puspitasari",
  },
];
