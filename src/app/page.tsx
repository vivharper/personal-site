import Header from "../components/Header";
import Footer from "../components/Footer";

import Home from "./home";

export default function Page() {
  return (
    <div>
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
}
