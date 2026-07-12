import { ThemeProvider } from "./components/ThemeProvider";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ThreeScene } from "./components/ThreeScene";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Skills } from "./sections/Skills";
import { Education } from "./sections/Education";
import { Experience } from "./sections/Experience";
import { Projects } from "./sections/Projects";
import { Achievements } from "./sections/Achievements";
import { Contact } from "./sections/Contact";
import { ScrollArea } from "./components/ui/scroll-area";

export function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
      <div className="relative min-h-screen text-foreground antialiased selection:bg-primary/30">
        <ThreeScene />
        <Navbar />
        
        <ScrollArea className="h-screen w-full">
          <main>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Education />
            <Projects />
            <Achievements />
            <Contact />
          </main>
          <Footer />
        </ScrollArea>
      </div>
    </ThemeProvider>
  );
}

export default App;
