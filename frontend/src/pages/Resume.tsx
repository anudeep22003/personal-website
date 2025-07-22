import React from "react";
import { Button } from "../components/ui/button";

/**
 * ResumePage displays the user's resume PDF and provides a download button.
 * The header is at the top, the iframe always shows at least one full PDF page,
 * and there is no excessive vertical space above or below the iframe.
 */
const ResumePage: React.FC = () => {
  return (
    <section className="w-screen min-h-[100dvh] flex flex-col items-center text-black overflow-hidden">
      {/* <header className="w-full flex flex-col items-center gap-2 bg-green-300 pt-8 pb-2">
        <h1 className="text-2xl font-normal lowercase tracking-tight">
          resume
        </h1>
        <p className="text-base text-neutral-600 lowercase">
          download or view my resume
        </p>
      </header> */}
      <div className="my-4">
        <a href="/resume.pdf" download>
          <Button variant="outline" size="lg" asChild>
            <span>download pdf</span>
          </Button>
        </a>
      </div>
      <div className="w-full flex flex-col items-center max-w-2xl mx-auto px-2">
        <iframe
          src="/resume.pdf"
          title="anudeep yegireddi resume"
          className="w-full min-h-[60vh] h-[80vh] max-h-[calc(100vh-200px)] border border-neutral-200 rounded bg-white"
          style={{ minHeight: 0 }}
        />
      </div>
    </section>
  );
};

export default ResumePage;
