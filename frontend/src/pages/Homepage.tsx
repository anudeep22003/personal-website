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
    <section className="w-full max-w-2xl mx-auto px-4 flex flex-col gap-4 text-black bg-green-200 m-4 rounded-sm">
      <header className="flex flex-col gap-2 mt-12 mb-4">
        <h1 className="text-2xl font-normal lowercase tracking-tight">
          anudeep yegireddi
        </h1>
        <p className="text-base text-neutral-600 lowercase">
          full stack applied ai engineer
        </p>
      </header>
      <p className="text-base leading-relaxed text-neutral-800">
        i'm a full stack applied ai engineer with a passion for building
        scalable and efficient systems. currently at amazon as a senior
        applied ai engineer.
        <br />
        <br />i love open source, music, and reading. always looking for
        new projects, tunes, and books.
      </p>
      <div className="flex flex-col gap-2">
        <span className="text-neutral-500 text-sm">
          my social links
        </span>
        <nav className="flex flex-wrap gap-4 mt-1">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-700 hover:text-black underline underline-offset-2 text-sm lowercase transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <section className="mt-8 text-base text-neutral-800 leading-relaxed">
        <span className="inline-block bg-black text-white text-sm mb-2 block p-1 rounded-sm">
          current stage
        </span>
        <p>
          hi, i'm anudeep. i used to work as a pm across fintech,
          insurtech, consumer, and saas. then i quit, trained as an
          engineer, taught myself ai full time, launched a couple of
          startups, and exited them. i now identify as an engineer with
          deep product understanding.
          <br />
          <br />
          i'm looking to join companies solving hard technical problems
          that need out-of-the-box thinking across product and
          engineering. i build full stack multimodal ai products with
          agents that learn.
        </p>
      </section>
      <div className="mt-8">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-700 hover:text-black underline underline-offset-2 text-base lowercase transition-colors"
        >
          see my resume
        </a>
      </div>
    </section>
  );
};

export default Homepage;
