import React from "react";

const socialLinks = [
  {
    label: "linkedin",
    url: "https://www.linkedin.com/in/anudeep-yegireddi/",
  },
  { label: "github", url: "https://github.com/anudeep-yegireddi" },
  { label: "twitter", url: "https://x.com/anudeep_yegireddi" },
  {
    label: "instagram",
    url: "https://www.instagram.com/anudeep_yegireddi/",
  },
  {
    label: "youtube",
    url: "https://www.youtube.com/@anudeep_yegireddi",
  },
  { label: "tiktok", url: "https://www.tiktok.com/@anudeep_yegireddi" },
];

const Homepage: React.FC = () => {
  return (
    <section className="w-full max-w-2xl mx-auto px-4 flex flex-col gap-6 text-black m-4">
      {/* Elegant background treatment */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-white to-neutral-100 -z-10 rounded-lg opacity-60" />
      <div className="relative border border-neutral-200/50 rounded-lg p-6 bg-white/80 backdrop-blur-sm shadow-sm">
        <header className="flex flex-col gap-3 mt-4 mb-6">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-normal lowercase tracking-tight">
              anudeep yegireddi
            </h1>
            <div className="h-2 w-2 bg-neutral-400 rounded-full animate-pulse" />
          </div>
          <p className="text-base text-neutral-600 lowercase italic">
            engineer, founder, late bloomer
          </p>
        </header>

        {/* Badge layer - current status */}
        <div className="flex flex-wrap items-center gap-2 mb-6 text-sm">
          <span className="inline-block bg-black text-white px-3 py-1 rounded-full text-xs font-medium">
            building
          </span>
          <span className="text-neutral-700">
            ai agents that actually work •
          </span>
          <span className="inline-block bg-neutral-800 text-white px-2 py-0.5 rounded text-xs">
            open to inquiries
          </span>
        </div>

        {/* Badge layer - experience */}
        <div className="flex flex-wrap items-center gap-2 mb-6 text-sm">
          <span className="inline-block bg-neutral-100 text-neutral-800 px-2 py-1 rounded-full text-xs border border-neutral-300">
            ex
          </span>
          <span className="text-neutral-700">
            yale mba • apple • two exits
          </span>
        </div>

        <div className="text-base leading-relaxed text-neutral-800 space-y-4">
          <p>
            i'm a{" "}
            <span className="bg-neutral-100 px-1 py-0.5 rounded font-medium">
              romantic about human potential
            </span>
            . went from pm dreaming in india to founding engineer in san
            francisco. somewhere between rejections and revelations,
            taught myself to see{" "}
            <span className="bg-neutral-100 px-1 py-0.5 rounded font-medium">
              biology as the ultimate algorithm
            </span>
            .
          </p>

          <p>
            built sidebrain (pre-chatgpt rag), rifflix
            (text-to-animation), reqpal (ai recruiting). learned that
            the universe doesn't care about cool ideas—only whether they
            solve real problems. these days i treat{" "}
            <span className="bg-neutral-100 px-1 py-0.5 rounded font-medium">
              code like functional art
            </span>
            .
          </p>
        </div>

        {/* Social links with refined styling */}
        <div className="flex flex-col gap-3 mt-8 pt-6 border-t border-neutral-200">
          <span className="text-neutral-500 text-sm lowercase">
            find me here
          </span>
          <nav className="flex flex-wrap gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-700 hover:text-black underline underline-offset-2 text-sm lowercase transition-colors hover:bg-neutral-50 px-2 py-1 rounded"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Current stage section with enhanced badge styling */}
        <section className="mt-8 pt-6 border-t border-neutral-200">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block bg-black text-white px-3 py-1 rounded-full text-xs font-medium">
              current stage
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-neutral-300 to-transparent" />
          </div>

          <div className="text-base text-neutral-800 leading-relaxed space-y-4">
            <p>
              i used to work as a pm across fintech, insurtech,
              consumer, and saas. then i quit, trained as an engineer,
              taught myself ai full time, launched a couple of startups,
              and exited them. i now identify as an engineer with deep
              product understanding.
            </p>

            <div className="bg-neutral-50 border-l-4 border-neutral-400 pl-4 py-3 italic text-neutral-700">
              <p>
                i'm looking to join companies solving hard technical
                problems that need out-of-the-box thinking across
                product and engineering. i build full stack multimodal
                ai products with agents that learn.
              </p>
            </div>
          </div>
        </section>

        {/* Resume link with enhanced styling */}
        <div className="mt-8 pt-6 border-t border-neutral-200">
          <div className="flex items-center justify-between">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-neutral-700 hover:text-black text-base lowercase transition-colors"
            >
              <span className="underline underline-offset-2">
                see my resume
              </span>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                →
              </span>
            </a>
            <span className="inline-block bg-neutral-200 text-neutral-600 px-2 py-1 rounded-full text-xs">
              pdf
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
