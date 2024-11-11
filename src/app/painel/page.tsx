import SectionHome from "app/Sections/Home";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Painel() {
  const session = await getServerSession();

  if (!session) {
    redirect("/");
  }

  return (
    <div className="text-dark">
      {" "}
      <>
        <SectionHome />
      </>
    </div>
  );
}
