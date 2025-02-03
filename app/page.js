"use client"
import "./globals.css";
import Home from "./components/main";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import '../styles/fonts.css';

export default function App({ Component, pageProps }) {
  return (
    <div >
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}