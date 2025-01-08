import { About } from "./_components/About";
import { Header } from "./_components/Header";
import { Profile } from "./_components/Profile";
import { Projects } from "./_components/Projects";
import { Songs } from "./_components/Songs";
import { Techs } from "./_components/Techs";
export default function page() {
  return (
    <main>
      <Header />
      <Profile />
      <About />
      <Projects />
      <Techs />
      <Songs />
    </main>
  );
}
