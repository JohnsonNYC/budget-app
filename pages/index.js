import Head from "next/head";
import DashboardPage from "../components/DashboardPage";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Budgeting App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DashboardPage />

      <Footer />
    </div>
  );
}
