import Header from "../components/Header";
import PotCard from "../components/PotCard";
import Table from "../components/Table";
import style from "../styles/Home.module.css";

import { useMemo } from "react";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
require("@solana/wallet-adapter-react-ui/styles.css");

export default function Home() {
  const endpoint = "https://empty-icy-uranium.solana-devnet.discover.quiknode.pro/265fd54810637435a12cfb7108857693a7e8bb1d/";
  const wallets = useMemo(() => [new PhantomWalletAdapter()], []);
  return (
    <div className={style.wrapper}>
      <Header />
      <PotCard />
      <Table />
    </div>
  );
}

