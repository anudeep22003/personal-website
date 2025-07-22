import React, { useEffect, useState } from "react";

const About: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom > 100) {
          current = section.id;
        }
      });

      // If at the bottom of the page, highlight the last section
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 2 // allow for rounding errors
      ) {
        const lastSection = sections[sections.length - 1];
        if (lastSection) {
          current = lastSection.id;
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const tocItems = [
    { id: "intro", label: "Introduction" },
    { id: "early-days", label: "Early Days" },
    { id: "yale", label: "Yale & Transformation" },
    { id: "sf-journey", label: "San Francisco Journey" },
    { id: "turning-point", label: "The Turning Point" },
    { id: "building", label: "Building & Learning" },
    { id: "philosophy", label: "Philosophy" },
    { id: "interests", label: "Areas of Interest" },
    { id: "current", label: "Where I Am Now" },
  ];

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 flex gap-8">
      {/* Table of Contents */}
      <aside className="hidden lg:block w-64 sticky top-8 h-fit">
        <nav className="border-l border-neutral-200 pl-4">
          <h3 className="text-sm font-medium text-neutral-600 mb-4">
            On this page
          </h3>
          <ul className="space-y-2">
            {tocItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm text-left hover:text-green-600 transition-colors ${
                    activeSection === item.id
                      ? "text-green-600 font-medium"
                      : "text-neutral-600"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <article className="flex-1 max-w-2xl mx-auto pb-20">
        <section
          id="intro"
          className="flex flex-col gap-6 text-black mt-12 mb-16"
        >
          <header className="flex flex-col gap-2">
            <h1 className="text-3xl font-normal lowercase tracking-tight">
              hi, i'm anudeep
            </h1>
            <p className="text-lg text-neutral-600 lowercase italic">
              engineer, founder, late bloomer
            </p>
          </header>
          <h2 className="text-2xl font-semibold mb-4 text-neutral-900">
            Introduction
          </h2>
          <div className="flex flex-col gap-1 text-sm">
            <div className="flex items-center rounded-full px-3 py-1">
              <span className="inline-block bg-black text-white px-3 py-1 rounded-full text-xs font-medium w-16 text-center">
                current
              </span>
              <span className="text-neutral-800 ml-2">
                building ai agents that actually work
              </span>
            </div>
            <div className="flex items-center rounded-full px-3 py-1">
              <span className="inline-block bg-black text-white px-3 py-1 rounded-full text-xs font-medium w-16 text-center">
                prev
              </span>
              <span className="text-neutral-800 ml-2">
                yale mba • apple • two exits • founding engineer
              </span>
            </div>
          </div>
        </section>

        <div className="text-base leading-relaxed text-neutral-800 space-y-6">
          {/* 2014 Section */}
          <section
            id="early-days"
            className="shadow-md bg-white rounded-lg p-6"
          >
            <h2 className="text-2xl font-semibold mb-4 text-neutral-900">
              Early Days
            </h2>
            <p>
              <span className="inline-block bg-neutral-800 text-white px-2 py-1 rounded-full text-xs font-semibold mr-2">
                pre 2014
              </span>
              Grew up moving around a lot, switching curriculums and
              schools. Read a lot, participated in quizzes. Once, Dad
              bought me a microscope from a work trip to Germany and I
              brought it to school and set up samples, showing all my
              friends what blood, skin, and hair look like at the
              microscopic level. I was confident but undirected. In
              engineering, I studied computer science but yearned to be
              a mechanical engineer. I reluctantly accepted CS. Tried
              running away from tech by doing consulting, but slowly and
              surely I found my own way back to tech.
            </p>
            <p>
              <span className="inline-block bg-neutral-800 text-white px-2 py-1 rounded-full text-xs font-semibold mr-2">
                2014
              </span>
              Fell in love with product management from India, dreamed
              of San Francisco. Took me two years and countless
              rejections to get into Yale—the only school that gave me a
              shot.
            </p>
          </section>

          {/* Yale Section */}
          <section
            id="yale"
            className="shadow-md bg-white rounded-lg p-6"
          >
            <h2 className="text-2xl font-semibold mb-4 text-neutral-900">
              Yale & Transformation
            </h2>
            <p>
              At Yale, everything changed. Found a philosophy class that{" "}
              <span className="underline decoration-green-600 decoration-3 underline-offset-4">
                rewired how I think.{" "}
              </span>
              Spent 9 months forcing my brain to connect every new idea
              to something I already knew, decomposing thoughts until I
              hit first principles. Uncomfortable as hell, but it
              worked. Eventually all knowledge felt
              interconnected—biology, physics, AI, spirituality,
              everything resonating across the same trunk of truth.
            </p>
            <p>
              I also interned at Apple, and started a company one after
              the other. Worked on high-profile projects such as App
              Store Redesign and Single Sign-On, but still, the fun I
              had at the startup had my heart. Came back, knew that I
              wanted to work as a PM at an early-stage startup. It was
              not an easy decision.
            </p>
          </section>

          {/* 2017 Section */}
          <section
            id="sf-journey"
            className="shadow-md bg-white rounded-lg p-6"
          >
            <h2 className="text-2xl font-semibold mb-4 text-neutral-900">
              San Francisco Journey
            </h2>
            <p>
              <span className="inline-block bg-neutral-800 text-white px-2 py-1 rounded-full text-xs font-semibold mr-2">
                2017
              </span>
              Moved to SF with no job, slept on couches for 9 months.
              Everyone said "beggars can't be choosers," but I held out
              for what I wanted. Got it. Worked directly with founders
              and realized they're just human. Anyone can build
              something.
            </p>
          </section>

          {/* 2021 Section */}
          <section
            id="turning-point"
            className="shadow-md bg-white rounded-lg p-6"
          >
            <h2 className="text-2xl font-semibold mb-4 text-neutral-900">
              The Turning Point
            </h2>
            <p>
              <span className="inline-block bg-neutral-800 text-white px-2 py-1 rounded-full text-xs font-semibold mr-2">
                2021
              </span>
              The turning point. Pandemic hit, was deep in educating
              myself on biology when GPT-3 launched, and I saw
              transformer architecture mirroring Wernicke’s and Broca’s
              areas in the brain.{" "}
              <span className="underline decoration-green-600 decoration-3 underline-offset-4">
                Lightning strike of clarity
              </span>
              . I exited the company, abandoned all immediate plans to
              stay in SF, and flew back to India.
            </p>
            <p className="text-center italic text-neutral-600 my-8 text-lg">
              Spent the next four years becoming the person I needed to
              be
            </p>
          </section>

          {/* Now Section */}
          <section
            id="building"
            className="shadow-md bg-white rounded-lg p-6"
          >
            <h2 className="text-2xl font-semibold mb-4 text-neutral-900">
              Building & Learning
            </h2>
            <p>
              Taught myself programming, AI, mathematics. Built
              SideBrain (pre-ChatGPT RAG system), Rifflix
              (text-to-animation), and ReqPal (AI recruiting). Learned
              that the universe doesn't care about your cool ideas—only
              whether they solve real problems. Shut down what didn't
              work. Kept what did.
            </p>
            <p>
              Somewhere along the way, found my muse in biology, when I
              realized{" "}
              <span className="underline decoration-green-600 decoration-3 underline-offset-4">
                evolution is the ultimate algorithm
              </span>
              . Evolution creates order despite entropy, three and a
              half billion years of pattern reinforcement. When I get
              stuck on technical problems, I look to biology—it never
              fails me.
            </p>
            <p>
              <span className="inline-block bg-neutral-800 text-white px-2 py-1 rounded-full text-xs font-semibold mr-2">
                now
              </span>
              Building truly autonomous AI agents with event-driven
              architecture and conversational operating systems. No
              frameworks, just first principles. Working on elevating
              the long tail of human talent—those brilliant people whose
              resumes don't have the right stamps but whose potential is
              limitless.
            </p>
          </section>

          <section
            id="philosophy"
            className="shadow-md bg-white rounded-lg p-6 mt-12 pt-8 border-t border-neutral-200"
          >
            <h2 className="text-2xl font-semibold mb-4 text-neutral-900">
              Philosophy
            </h2>
            <p>
              I believe what we call creativity is a resonance of
              patterns already present in nature—from the elegant
              machinery of proteins acting as molecular motors, to their
              roles in signal transmission and threat detection. Our
              innovations are echoes of solutions that biology perfected
              eons ago. But that's the beauty. We're pattern matchers,
              connection makers, bridge builders between what is and
              what could be.
            </p>

            <p className="text-center italic text-neutral-600 my-8 text-lg">
              <span className="underline decoration-green-600 decoration-3 underline-offset-4">
                The distance from idea to creation should be zero
              </span>
            </p>

            <p>
              These days you'll find me thinking about reinforcement
              learning, reading molecular biology papers, or building
              systems that help talented people find opportunities.
              Still the same person who learned that love is permanent,
              not passing. Still betting on myself.
            </p>
          </section>

          <section
            id="interests"
            className="shadow-md bg-white rounded-lg p-6 mt-12 pt-8 border-t border-neutral-200"
          >
            <h2 className="text-2xl font-semibold mb-4 text-neutral-900">
              Areas of Interest
            </h2>
            <p>
              What truly captivates me right now is building
              self-improving agents and novel cognitive architectures.
              I'm particularly interested in memory as a symbolic
              representation of consciousness—where levels of
              association lead to different sparking intensities. I
              believe that in memory is where our self lives.
            </p>
            <p className="mt-4">
              Without a strong memory of the past, we wouldn't have a
              strong sense of identity. Identity is built on our memory.
              So building novel cognitive architectures that incorporate
              the neuroscience of how the brain works—understanding how
              degrees of life as a being begin—is something I'm deeply
              passionate about. This includes building reasoning models,
              self-improving agents, and memory architectures aligned
              with our understanding of the brain.
            </p>
          </section>

          <section
            id="current"
            className="shadow-md bg-white rounded-lg p-6 mt-12 pt-8 border-t border-neutral-200"
          >
            <h2 className="text-2xl font-semibold mb-4 text-neutral-900">
              Where I Am Right Now
            </h2>
            <p>
              I recently exited a startup where we built AI interviewer
              tools. Now I'm looking around for my next opportunity,
              noodling on some things I want to build, and open to
              opportunities where I get to bring both my product and
              engineering capabilities—the depth in both—to solve hard
              problems. Hard not just technically, but from a product
              and consumer standpoint as well.
            </p>
          </section>

          <div className="flex flex-wrap gap-4 mt-12 pt-8 border-t border-neutral-200">
            <a
              href="https://www.linkedin.com/in/anudeep-yegireddi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-700 underline underline-offset-2 text-sm lowercase transition-colors"
            >
              linkedin
            </a>
            <span className="text-neutral-400">•</span>
            <a
              href="mailto:anudeep@aya.yale.edu"
              className="text-green-600 hover:text-green-700 underline underline-offset-2 text-sm lowercase transition-colors"
            >
              email
            </a>
            <span className="text-neutral-400">•</span>
            <span className="text-neutral-600 text-sm lowercase">
              bay area, ca
            </span>
          </div>
        </div>
      </article>
    </div>
  );
};

export default About;
