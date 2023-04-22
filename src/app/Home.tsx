import ProjectWindow from "@/components/ProjectWindow";

export const Home = () => {
  return (
    <>
      <div className="main m-16 landscape:mt-20 w-2/3 self-center">
        <div className="mb-72 ">
          <h1 className="text-5xl font-bold text-headline ">
            Hi, <br></br>I&apos;m Tim!
          </h1>
          <p>This page is still in progress</p>
        </div>
        <div className="mt-16">
          <a href="/Projects">
            <h2 className="text-5xl font-bold text-headline hover:underline ">
              Projects
            </h2>
          </a>
          <p>
            See my newest two projects. to see all{" "}
            <a href="/Projects" className="hover:underline text-headline">
              click here
            </a>
          </p>
          <ProjectWindow items={2} />
        </div>
      </div>
    </>
  );
};
