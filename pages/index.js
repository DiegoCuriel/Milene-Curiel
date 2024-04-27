import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Milene Curiel</title>
        <meta
          name="description"
        />
      </Head>
      <Main />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
