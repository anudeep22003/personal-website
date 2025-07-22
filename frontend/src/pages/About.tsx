import React from "react";

const About: React.FC = () => {
  return (
    <section className="w-full max-w-2xl mx-auto px-4 flex flex-col gap-6 text-black m-4">
      <header className="flex flex-col gap-2 mt-12 mb-8">
        <h1 className="text-3xl font-normal lowercase tracking-tight">
          hi, i'm anudeep
        </h1>
        <p className="text-lg text-neutral-600 lowercase italic">
          engineer, founder, late bloomer
        </p>
      </header>

      <div className="flex flex-wrap items-center gap-2 text-sm">
        <span className="inline-block bg-black text-white px-3 py-1 rounded-full text-xs font-medium">
          current
        </span>
        <span className="text-neutral-800">
          building ai agents that actually work •
        </span>
        <span className="inline-block bg-black text-white px-3 py-1 rounded-full text-xs font-medium">
          ex
        </span>
        <span className="text-neutral-800">
          yale mba • apple • two exits • founding engineer
        </span>
      </div>

      <blockquote className="border-l-4 border-black bg-neutral-50 pl-6 py-4 my-6 italic text-neutral-700">
        "if you don't want to take a bet on yourself, who will?"
      </blockquote>

      <div className="text-base leading-relaxed text-neutral-800 space-y-6">
        <p>
          i'm a{" "}
          <span className="bg-neutral-100 px-1 py-0.5 rounded font-medium">
            romantic about human potential
          </span>
          . grew up moving around a lot, which made my education
          piecemeal—always catching up, never quite complete. wasn't the
          math olympiad kid or the coding prodigy. just someone who
          learned early that{" "}
          <span className="bg-neutral-100 px-1 py-0.5 rounded font-medium">
            new ideas only stick when you connect them to what you
            already know
          </span>
          .
        </p>

        <p>
          <span className="inline-block bg-neutral-800 text-white px-2 py-1 rounded-full text-xs font-semibold mr-2">
            2014
          </span>
          fell in love with product management from india, dreamed of
          san francisco. took me two years and countless rejections to
          get into yale—the only school that gave me a shot.
        </p>

        <p>
          at yale, everything changed. found a philosophy class that{" "}
          <span className="bg-neutral-100 px-1 py-0.5 rounded font-medium">
            rewired how i think
          </span>
          . spent 9 months forcing my brain to connect every new idea to
          something i already knew, decomposing thoughts until i hit
          first principles. uncomfortable as hell, but it worked.
          suddenly all knowledge felt interconnected—biology, physics,
          ai, spirituality, everything resonating across the same trunk
          of truth.
        </p>

        <p>
          <span className="inline-block bg-neutral-800 text-white px-2 py-1 rounded-full text-xs font-semibold mr-2">
            2017
          </span>
          moved to sf with no job, slept on couches for 9 months.
          everyone said "beggars can't be choosers," but i held out for
          what i wanted: pm at an early-stage startup. got it. worked
          directly with founders, realized they're just human. anyone
          can build something.
        </p>

        <p>
          <span className="inline-block bg-neutral-800 text-white px-2 py-1 rounded-full text-xs font-semibold mr-2">
            2021
          </span>
          the turning point. pandemic hit, gpt-3 launched, and i saw
          transformer architecture mirroring wernicke's and broca's
          areas in the brain.{" "}
          <span className="bg-neutral-100 px-1 py-0.5 rounded font-medium">
            lightning strike of clarity
          </span>
          . within a week, abandoned my $300k salary and flew back to
          india.
        </p>

        <blockquote className="border-l-4 border-black bg-neutral-50 pl-6 py-4 my-6 italic text-neutral-700 text-center">
          spent the next four years becoming the person i needed to be
        </blockquote>

        <p>
          taught myself programming, ai, mathematics. built sidebrain
          (pre-chatgpt rag system), rifflix (text-to-animation), reqpal
          (ai recruiting). learned that{" "}
          <span className="bg-neutral-100 px-1 py-0.5 rounded font-medium">
            the universe doesn't care about your cool ideas
          </span>
          —only whether they solve real problems. shut down what didn't
          work. kept what did.
        </p>

        <p>
          somewhere along the way, fell deeply in love with{" "}
          <span className="bg-neutral-100 px-1 py-0.5 rounded font-medium">
            biology as the ultimate algorithm
          </span>
          . evolution creates order despite entropy—three and a half
          billion years of pattern reinforcement. when i get stuck on
          technical problems, i look to biology. it never fails me.
        </p>

        <p>
          <span className="inline-block bg-neutral-800 text-white px-2 py-1 rounded-full text-xs font-semibold mr-2">
            now
          </span>
          building truly autonomous ai agents with event-driven
          architecture and conversational operating systems. no
          frameworks, just first principles. working on elevating the
          long tail of human talent—those brilliant people whose resumes
          don't have the right stamps but whose potential is limitless.
        </p>

        <p>
          i believe{" "}
          <span className="bg-neutral-100 px-1 py-0.5 rounded font-medium">
            human beings can't create truly innovative thoughts
          </span>
          —everything we build is analogous to something that already
          exists. but that's the beauty. we're pattern matchers,
          connection makers, bridge builders between what is and what
          could be.
        </p>

        <blockquote className="border-l-4 border-black bg-neutral-50 pl-6 py-4 my-6 italic text-neutral-700 text-center">
          the distance from idea to creation should be zero
        </blockquote>

        <p>
          these days you'll find me thinking about reinforcement
          learning, reading molecular biology papers, or building
          systems that help talented people find opportunities. still
          the same person who learned that{" "}
          <span className="bg-neutral-100 px-1 py-0.5 rounded font-medium">
            love is permanent, not passing
          </span>
          . still betting on myself.
        </p>

        <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-neutral-200">
          <a
            href="https://www.linkedin.com/in/anudeep-yegireddi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-700 hover:text-black underline underline-offset-2 text-sm lowercase transition-colors"
          >
            linkedin
          </a>
          <span className="text-neutral-400">•</span>
          <a
            href="mailto:anudeep@aya.yale.edu"
            className="text-neutral-700 hover:text-black underline underline-offset-2 text-sm lowercase transition-colors"
          >
            email
          </a>
          <span className="text-neutral-400">•</span>
          <span className="text-neutral-600 text-sm lowercase">
            bay area, ca
          </span>
        </div>
      </div>
    </section>
  );
};

export default About;
