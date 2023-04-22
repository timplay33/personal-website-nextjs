const projects = [
  {
    title: "Personal Website nextjs",
    content: "The Open Source repository for this project",
    url: "https://github.com/timplay33/personal-website-nextjs",
  },
  {
    title: "JavaTicTacToe",
    content: "A simple TicTacToe game programmed in Java",
    url: "https://github.com/timplay33/JavaTicTacToe",
  },
  {
    title: "Rechner",
    content:
      "Small calculator program, which I create in computer science class",
    url: "https://github.com/timplay33/Rechner",
  },
  {
    title: "Wer Wird Millionär Minigame",
    content: "Wer Wird Millionär in Visual Basic",
    url: "https://github.com/timplay33/Wer-Wird-Millionaer-Minigame-Visual-Basic",
  },
];

export default function ProjectWindow(props: any) {
  return (
    <div>
      {projects.slice(0, props.items).map((project) => (
        <div key={project.title} className="m-16">
          <a href={project.url}>
            <h2 className="text-3xl font-bold text-headline hover:underline">
              {project.title}
            </h2>
          </a>
          <p>{project.content}</p>
        </div>
      ))}
    </div>
  );
}
