'use client'
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "../../page.module.css";
import { usePathname } from 'next/navigation';
import { TopSection, TopSectionProps } from "./topSection";

export default function Page() {
  const pathname = usePathname();
  let arrayPath = pathname.split('/');
  let id = arrayPath[2];


  return (
      <>
        Hello
      </>
  );
}
