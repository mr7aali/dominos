import type { Metadata } from "next";
import { HomeFooter } from "./HomeFooter";
import { HomeHeader } from "./HomeHeader";
import { HomeMain } from "./HomeMain";
import styles from "./HomePage.module.css";

export const homeMetadata: Metadata = {
  title: "Pizza Delivery & Carryout, Pasta, Wings & More | Domino's",
  description: "Order pizza, pasta, sandwiches & more online for carryout or delivery from Domino's. View menu, find locations, track orders. Sign up for Domino's email & text offers to get great deals on your next order.",
  alternates: {
    canonical: "/en"
  },
  robots: {
    index: true
  },
  verification: {
    google: "7A2futA4ANRrHW3XYV7Was86dFfRjZRaK8slEDlxSIs"
  }
};

export function HomePage() {
  return (
    <div className={styles.page}>
      <HomeHeader />
      <HomeMain />
      <HomeFooter />
    </div>
  );
}
