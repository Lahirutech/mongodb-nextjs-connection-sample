import Image from "next/image";
import styles from "./page.module.css";
import Featured from "@/components/featured/Featured";
import { Category } from "@/components/category/Category";
import Navbar from "@/components/navbar/Navbar";
import Card from "@/components/card/Card";
import Menu from "@/components/menu/Menu";

export default function Home() {
  return (
    <>
      <Featured />
      <Category />
      Recent Hilights
      <div className="feature-menu">
        <Card />
        <Menu />
      </div>
    </>
  );
}
