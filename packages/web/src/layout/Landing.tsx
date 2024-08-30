import { Button } from "@/components/ui/button";

export function Landing() {
  return (
    <div className="max-w-[50rem] mx-auto pt-40 pb-4">
      <div className="w-full flex flex-col items-start justify-center">
        <h1 className="text-[50pt] font-extrabold antialiased mb-[-0.3em] bg-gradient-to-b from-gray-100 to-gray-400 inline-block text-transparent bg-clip-text">
          Innovating on the web
        </h1>
        <h2 className="text-[30pt] font-extrabold antialiased bg-gradient-to-b from-gray-300 to-gray-600 inline-block text-transparent bg-clip-text leading-none">
          From concept to culmination
        </h2>
        <div className="w-full flex flex-col items-start gap-4 mt-4">
          <p className="text-xl font-thin">
            I'm a full stack developer with a passion for building scalable,
            performant, and secure web applications. Currently using
            technologies like Next.js, TypeScript, Postgresql, and tRPC to
            create innovative solutions that push the boundaries of modern web
            development.
          </p>
          <p className="text-xl font-thin">
            With a plethora of other skills on standby, I'm always ready to take
            on new challenges and explore new frontiers in the world of web
            development.
          </p>
          <div className="w-full flex flex-col items-start gap-4">
            <Button size="2xl">Let's get to work</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
