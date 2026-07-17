import { HiOutlineUserCircle } from "react-icons/hi2";
import type { Review } from "./reviews.types";

export const reviews: Review[] = [
  {
    id: 1,
    name: "Andi Rizky",
    rating: 5,
    comment:
      "Servis di sini sangat memuaskan! Teknisinya ramah dan cepat. Motor Beat saya yang sebelumnya susah distarter sekarang sudah normal kembali. Harga juga sangat terjangkau.",
    motorcycle: "Honda",
    icon: HiOutlineUserCircle,
  },
  {
    id: 2,
    name: "Hendra Ardrianto",
    rating: 5,
    comment:
      "Sudah 3 tahun jadi pelanggan setia Logam Service. Selalu puas dengan hasilnya. Harga transparan, tidak ada biaya tersembunyi. Teknisinya jujur dan profesional.",
    motorcycle: "Honda",
    icon: HiOutlineUserCircle,
  },
  {
    id: 3,
    name: "Fajar Pratama",
    rating: 5,
    comment:
      "Pasang aksesori lampu LED di sini hasilnya rapi sekali. Teknisinya teliti dan tidak asal-asalan. Motor Ninja saya sekarang makin keren! Sangat rekomendasikan.",
    motorcycle: "Honda",
    icon: HiOutlineUserCircle,
  },
  {
    id: 4,
    name: "Yoga Saputra",
    rating: 5,
    comment:
      "Pasang cover jok dan spion baru di sini. Pengerjaannya rapi dan cepat. Harganya juga wajar banget. Tempat parkir luas dan nyaman untuk menunggu. ",
    motorcycle: "Honda",
    icon: HiOutlineUserCircle,
  },
];
