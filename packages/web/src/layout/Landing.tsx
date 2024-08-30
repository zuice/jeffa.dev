import { Button } from "@/components/ui/button";

export function Landing() {
  return (
    <div className="max-w-[60rem] mx-auto pt-40 pb-4 max-md:max-w-[90%]">
      <div className="w-full flex flex-col items-start justify-center">
        <div className="w-full flex flex-col items-start justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 bg-clip-text leading-none">
          <h1 className="text-[5rem] font-extrabold antialiased mb-[-0.2em] inline-block text-transparent bg-clip-text leading-none">
            Innovating on the web
          </h1>
          <h2 className="text-[4rem] font-extrabold antialiased inline-block text-transparent bg-clip-text leading-none">
            From concept to culmination
          </h2>
        </div>
        <div className="w-full flex flex-col items-start gap-4 mt-4 text-xl font-thin max-md:text-2xl">
          <p>
            I'm a full stack developer with a passion for building scalable,
            performant, and secure web applications. Currently using
            technologies like Next.js, TypeScript, Postgresql, and tRPC to
            create innovative solutions that push the boundaries of modern web
            development.
          </p>
          <p>
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
