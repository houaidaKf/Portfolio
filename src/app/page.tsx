import { About } from "./_components/About";
import { Header } from "./_components/Header";
import { Profile } from "./_components/Profile";
import { Projects } from "./_components/Projects";
export default function page() {
  return (
    <main>
      <Header />
      <Profile />
      <About />
      <Projects />
    </main>
  );
}
