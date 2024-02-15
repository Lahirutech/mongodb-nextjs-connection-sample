import Image from "next/image";
import styles from "./page.module.css";
import Featured from "@/components/featured/Featured";
import { Category } from "@/components/category/Category";

export default function Home() {
  return (
    <>
      <Featured />
      <Category />
    </>
  );
}
