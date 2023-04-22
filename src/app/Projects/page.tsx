import ProjectWindow from "@/components/ProjectWindow";

export default function Page() {
  return (
    <div className="main m-16 landscape:mt-20 w-2/3 self-center">
      <h1 className="text-5xl font-bold text-headline ">Projects</h1>
      <p>This page shows all my projects</p>
      <ProjectWindow />
    </div>
  );
}
