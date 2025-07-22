import { TableOfContents } from "@/components/TableOfContents";
import { ContentSection } from "@/components/ContentSection";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import type { TocItem } from "@/types";

const ProfessionalHistory = () => {
  const { activeSection, scrollToSection } = useScrollSpy();

  const tocItems: TocItem[] = [
    { id: "reqpal", label: "Reqpal (2024-2025)" },
    { id: "rifflix", label: "Rifflix (2023-2024)" },
    { id: "sidebrain", label: "Sidebrain (2021-2022)" },
    { id: "aura", label: "Aura (2019-2021)" },
    { id: "zendrive", label: "Zendrive (2017-2019)" },
    { id: "education", label: "Education" },
  ];

  const TimelineConnector = ({
    isLast = false,
  }: {
    isLast?: boolean;
  }) => (
    <div
      className="absolute left-4 md:left-8 top-16 w-px bg-gradient-to-b from-neutral-300 via-neutral-200 to-transparent"
      style={{
        height: isLast ? "0" : "120px",
        transform: "translateX(-0.5px)",
        opacity: isLast ? 0 : 0.6,
      }}
    />
  );

  const TimelineNode = () => (
    <div className="absolute left-2 md:left-6 top-8 w-4 h-4 bg-white border-2 border-neutral-400 rounded-full shadow-sm" />
  );

  const ExperienceCard = ({
    id,
    company,
    role,
    period,
    location,
    narrative,
    stack,
    tldr,
    isLast = false,
  }: {
    id: string;
    company: string;
    role: string;
    period: string;
    location: string;
    narrative: string;
    stack?: string;
    tldr?: string;
    isLast?: boolean;
  }) => (
    <div className="relative mb-12 md:mb-16">
      <TimelineNode />
      <TimelineConnector isLast={isLast} />

      <ContentSection
        id={id}
        title=""
        className="ml-8 md:ml-20 bg-white border border-neutral-200 rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
      >
        <div className="mb-4">
          <h3 className="text-lg md:text-xl font-semibold text-neutral-900 mb-1">
            {company}
          </h3>
          <p className="text-neutral-600 text-xs md:text-sm mb-1">
            {role}
          </p>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-xs text-neutral-500">
            <span>{period}</span>
            <span className="mt-1 sm:mt-0">{location}</span>
          </div>
        </div>

        {tldr && (
          <div className="mb-4 md:mb-6 p-3 md:p-4 bg-gradient-to-r from-green-50 to-neutral-50 border-l-4 border-green-500 rounded-r-lg">
            <div className="flex items-center mb-2">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span className="text-xs font-semibold text-green-700 uppercase tracking-wide">
                TL;DR
              </span>
            </div>
            <p className="text-xs md:text-sm font-medium text-neutral-800 leading-relaxed">
              {tldr}
            </p>
          </div>
        )}

        <div className="prose prose-neutral max-w-none">
          <p className="text-xs md:text-sm text-neutral-700 leading-relaxed whitespace-pre-line">
            {narrative}
          </p>
        </div>

        {stack && (
          <div className="mt-4 pt-4 border-t border-neutral-100">
            <p className="text-xs text-neutral-500 font-medium mb-1">
              Technology Stack
            </p>
            <p className="text-xs text-neutral-600">{stack}</p>
          </div>
        )}
      </ContentSection>
    </div>
  );

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Timeline Content */}
          <main className="flex-1">
            <div className="mb-8 md:mb-12">
              <h1 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
                Professional Journey
              </h1>
              <p className="text-neutral-600 leading-relaxed max-w-2xl text-sm md:text-base">
                A timeline of experiences that shaped my path through
                technology, entrepreneurship, and product development.
                Each experience helped me grow.
              </p>
            </div>

            <div className="relative">
              <ExperienceCard
                id="reqpal"
                company="Reqpal (formerly Audition)"
                role="Co-Founder, Product and Engineering Lead"
                period="Jun 2024 – May 2025"
                location="San Francisco, CA"
                tldr="Built AI recruiting platform with multi-agent architecture. Processed 500+ resumes in <20s, conducted 1,000+ voice interviews with fraud prevention. Full-stack TypeScript/Python, real-time WebSocket systems, neural matching engine. Strategic exit after market validation."
                narrative={`I built an AI recruiting platform where companies could configure custom hiring agents with prompts, rubrics, and decision rules that evolved through conversation trees.

The platform used an event-driven multi-agent architecture with WebSocket-based interviews. The neural matching engine processed and ranked 500+ resumes in under 20 seconds using structured extraction and multi-parameter scoring.

The voice interview system included screen sharing, webcam integration, and fraud prevention through separated video storage per question-answer pair. We conducted over 1,000 distributed interviews across the platform.

The backend ran asynchronous processing pipelines with SQLAlchemy ORM for high-throughput resume analysis. The admin dashboard provided real-time event timeline visualization for recruiters.

After six months of development and market validation, we transitioned to auto-pilot mode with an external sales partnership due to market conditions.`}
                stack="TypeScript (React); Python (FastAPI, Pydantic); Unix, OpenAI, Gemini, PostgreSQL"
              />

              <ExperienceCard
                id="rifflix"
                company="Rifflix"
                role="Founding Engineer, Product Lead"
                period="Apr 2023 – May 2024"
                location="Remote"
                tldr="Built text-to-animation platform pre-Sora. Natural language → Unity code transpilation, Stable Diffusion + LoRA fine-tuning, web-deployed Unity engine. Full AI pipeline: script parsing, character generation, voice synthesis, video processing. Pub-sub architecture, RunPod/Modal orchestration."
                narrative={`We built a text-to-animation platform using Unity's game engine to solve video generation controllability before Sora existed.

I architected a natural language transpilation engine using context-free grammar and function calling. Users could write "The character walks to the door and turns on the light" and watch Unity code execute those actions in real-time.

The infrastructure included authentication, database management, credit systems, and deploying Unity engine with interactive capabilities on the web. This required bridging game development with web technologies.

Our AI pipeline generated characters and backgrounds using Stable Diffusion with custom LoRA fine-tuning on RunPod infrastructure, orchestrated through Modal. The audio-video pipeline integrated ElevenLabs for dialogue, WebRTC for screen recording, and FFmpeg for social media optimization.

The publisher-subscriber queue system enabled non-blocking video processing. Users generated complete animated stories with synchronized audio from text descriptions.`}
                stack="TypeScript (React); Python (FastAPI, Pydantic); MongoDB, Unix, ffmpeg, Docker, GCP"
              />

              <ExperienceCard
                id="sidebrain"
                company="Sidebrain"
                role="Founder & Applied AI Engineer"
                period="Jan 2021 – Dec 2022"
                location="San Francisco, CA → Bengaluru, India"
                tldr="Built full RAG system 2 years before ChatGPT. Embedding-based semantic search, knowledge graphs with Neo4j, automated metadata extraction (TF-IDF, NLP). Shipped Chrome extension + iOS app. Self-taught Python/spaCy/NLP in 3 months, immediately deployed to production."
                narrative={`I built a conversation-driven knowledge retrieval system two years before ChatGPT launched. The platform implemented embedding-based semantic search with cosine similarity, document chunking, and context-aware response generation.

The metadata extraction pipeline automated document tagging using TF-IDF, lemmatization, and stemming algorithms. Rule-based semantic merging maintained data integrity while understanding document relationships automatically.

The knowledge graph component used NLP techniques like tokenization and dependency parsing with Neo4j to extract semantic triples and map concept relationships. This created an interconnected knowledge web that improved with each interaction.

We shipped Chrome extension and iOS apps with voice and text interfaces. Users could capture context-rich information and retrieve it through natural conversation while the system preserved structured metadata.

I learned Python, spaCy, and NLP fundamentals in three months, then immediately deployed these systems to production serving real users.`}
                stack="Python, spaCy, Neo4j, NLP, TF-IDF, iOS, Chrome Extensions"
              />

              <ExperienceCard
                id="aura"
                company="Aura"
                role="Senior Product Manager (Acting Director of Product)"
                period="2019 – 2021"
                location="San Francisco, CA"
                tldr="Series D fintech ($580M funding), unbanked lending platform. Built OCR + human-in-loop document verification, fraud detection systems. Retained through 80% layoffs. Led CARES Act SMB emergency funding infrastructure. Consumer credit platform with personalized offers."
                narrative={`At this Series D fintech with $580M funding, I led consumer products and backend systems providing credit access to unbanked populations.

I built OCR systems with human-in-the-loop workflows for document verification before AI document processing became standard. Working with operations teams, we automated data labeling, parsing, and fraud detection, reducing processing times while improving conversion rates.

I launched credit score updates, personalized offers, and rewards systems to create a comprehensive consumer platform beyond single-use lending.

During 80% layoffs, I was retained as core technical staff and led the CARES Act project, rapidly building infrastructure to deliver emergency funds to thin-file small and medium businesses during early pandemic months.

The role required balancing regulatory compliance, fraud prevention, and user experience while serving populations traditional financial services overlook.`}
              />

              <ExperienceCard
                id="zendrive"
                company="Zendrive"
                role="Product Manager"
                period="2017 – 2019"
                location="San Francisco, CA"
                tldr="Insurtech acquired by Credit Karma ($88M raised). Behavior-based auto insurance pricing using 150B+ miles driving data. ML collision detection, real-time risk assessment, sensor data analytics. iOS/Android apps for seamless data collection. Pre-telematics mainstream adoption."
                narrative={`Zendrive was building behavior-based insurance pricing before telematics became mainstream. After raising $88M, CreditKarma acquired the company.

I led consumer experience for an auto insurance platform that priced policies based on actual driver behavior rather than demographics. This required building iOS and Android apps that collected and analyzed driving patterns while maintaining user trust.

We developed an insurance backend integrating sensor data, behavioral analytics, and crime statistics for dynamic pricing. This shifted from traditional actuarial models to predictive, personalized insurance.

Our collision detection system trained on over 150 billion miles of driving data. The ML models identified potential accidents with high accuracy, enabling proactive interventions and precise risk assessment.

This showed me how data-driven products could transform industries by challenging fundamental assumptions about risk, pricing, and user behavior.`}
              />

              <ExperienceCard
                id="education"
                company="Education & Early Experience"
                role="Foundation Years"
                period="2011 – 2017"
                location="New Haven, CT & India"
                tldr="Yale MBA (tech/entrepreneurship focus), Apple intern (SSO, App Store redesign). Built healthtech for malaria adherence in Sierra Leone. CS foundation: algorithms, data structures, C++. Early product experience reaching billions of users."
                narrative={`At Yale's MBA program, I focused on technology, entrepreneurship, and philosophy. I interned at Apple, contributing to Apple Single Sign-On launch and iOS App Store redesign.

I built and launched a healthtech product in Sierra Leone for malaria drug adherence. The system converted text messages from basic feature phones at diagnosis into structured medication plans—parsing JSON to save lives.

My undergraduate years at Birla Institute provided computational foundations: data structures, algorithms, C++, and assembly language. These became tools for architecting complex systems and thinking systematically about problems.

This foundation taught me that technology's power lies in solving meaningful human problems at scale.`}
                isLast
              />
            </div>
          </main>

          {/* Table of Contents - Hidden on mobile, shown on large screens */}
          <div className="lg:block">
            <TableOfContents
              items={tocItems}
              activeSection={activeSection}
              onSectionClick={scrollToSection}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalHistory;
