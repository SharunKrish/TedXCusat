/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Speakers from "./components/Speakers";
import Registration from "./components/Registration";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative overflow-x-hidden selection:bg-ted-red selection:text-white bg-noise">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Speakers />
        <Registration />
      </main>
      <Footer />
    </div>
  );
}

