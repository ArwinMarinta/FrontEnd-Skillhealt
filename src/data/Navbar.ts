type NavbarItem = {
  id: number;
  name: string;
  url: string;
};

export const Navbar: NavbarItem[] = [
  {
    id: 1,
    name: "Home",
    url: "/",
  },
  {
    id: 2,
    name: "Cari Dokter",
    url: "/search-doctor",
  },
  {
    id: 3,
    name: "Forum",
    url: "/",
  },
];
