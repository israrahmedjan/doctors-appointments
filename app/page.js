import CategorySearch from "./_components/CategorySearch";
import DoctorList from "./_components/DoctorList";
import Hero from "./_components/Hero";
import { wait } from "./_utils/GlobalApi";

export default async function Home() {
  await wait(1000);
  return (
    <>
      <Hero />
      <CategorySearch />
      <DoctorList />
    </>
  );
}
