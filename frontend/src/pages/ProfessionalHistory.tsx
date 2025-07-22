import React from 'react';
import { TableOfContents } from '@/components/TableOfContents';
import { ContentSection } from '@/components/ContentSection';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import type { TocItem } from '@/types';

const ProfessionalHistory = () => {
  const { activeSection, scrollToSection } = useScrollSpy();

  const tocItems: TocItem[] = [
    { id: 'reqpal', label: 'Reqpal (2024-2025)' },
    { id: 'rifflix', label: 'Rifflix (2023-2024)' },
    { id: 'sidebrain', label: 'Sidebrain (2021-2022)' },
    { id: 'aura', label: 'Aura (2019-2021)' },
    { id: 'zendrive', label: 'Zendrive (2017-2019)' },
    { id: 'education', label: 'Education' },
  ];

  const TimelineConnector = ({ isLast = false }: { isLast?: boolean }) => (
    <div className="absolute left-8 top-16 w-px bg-gradient-to-b from-neutral-300 via-neutral-200 to-transparent" 
         style={{ 
           height: isLast ? '0' : '120px',
           transform: 'translateX(-0.5px)',
           opacity: isLast ? 0 : 0.6 
         }} 
    />
  );

  const TimelineNode = () => (
    <div className="absolute left-6 top-8 w-4 h-4 bg-white border-2 border-neutral-400 rounded-full shadow-sm" />
  );

  const ExperienceCard = ({ 
    id, 
    company, 
    role, 
    period, 
    location, 
    narrative, 
    stack,
    isLast = false 
  }: { 
    id: string; 
    company: string; 
    role: string; 
    period: string; 
    location: string; 
    narrative: string; 
    stack?: string;
    isLast?: boolean;
  }) => (
    <div className="relative mb-16">
      <TimelineNode />
      <TimelineConnector isLast={isLast} />
      
      <ContentSection
        id={id}
        title=""
        className="ml-20 bg-white border border-neutral-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
      >
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-neutral-900 mb-1">{company}</h3>
          <p className="text-neutral-600 text-sm mb-1">{role}</p>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-xs text-neutral-500">
            <span>{period}</span>
            <span className="mt-1 sm:mt-0">{location}</span>
          </div>
        </div>
        
        <div className="prose prose-neutral max-w-none">
          <p className="text-neutral-700 leading-relaxed whitespace-pre-line">{narrative}</p>
        </div>
        
        {stack && (
          <div className="mt-4 pt-4 border-t border-neutral-100">
            <p className="text-xs text-neutral-500 font-medium mb-1">Technology Stack</p>
            <p className="text-xs text-neutral-600">{stack}</p>
          </div>
        )}
      </ContentSection>
    </div>
  );

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Main Timeline Content */}
          <main className="flex-1">
            <div className="mb-12">
              <h1 className="text-3xl font-bold text-neutral-900 mb-4">Professional Journey</h1>
              <p className="text-neutral-600 leading-relaxed max-w-2xl">
                A timeline of experiences that shaped my path through technology, entrepreneurship, and product development. 
                Each chapter represents not just professional growth, but the evolution of ideas and the connections between them.
              </p>
            </div>

            <div className="relative">
              <ExperienceCard
                id="reqpal"
                company="Reqpal (formerly Audition)"
                role="Co-Founder, Product and Engineering Lead"
                period="Jun 2024 – May 2025"
                location="San Francisco, CA"
                narrative={`At Reqpal, I architected an AI-driven recruiting platform that reimagined how companies could build custom recruiters. The vision was ambitious: enable organizations to configure their own hiring agents with custom prompts, rubrics, and decision rules that could evolve through real-time conversation trees.

The technical foundation rested on an event-driven multi-agent architecture, with WebSocket-based interview systems enabling seamless real-time interactions. I built a neural matching engine that could process and rank over 500 resumes in under 20 seconds using structured extraction and multi-parameter scoring—a critical breakthrough for scalable talent assessment.

Perhaps most innovative was our voice-first interview experience, complete with screen sharing, webcam integration, and sophisticated fraud prevention through separated video storage per question-answer pair. We successfully conducted over 1,000 distributed interviews, validating the platform's real-world utility.

The backend featured an asynchronous processing pipeline built with SQLAlchemy ORM, designed for high-throughput resume analysis. A real-time admin dashboard provided event timeline visualization, giving recruiters unprecedented insight into their hiring processes.

After six months of intense development and market validation, we made the strategic decision to exit due to challenging market conditions, transitioning the platform to auto-pilot mode with an external sales partnership.`}
                stack="TypeScript (React); Python (FastAPI, Pydantic); Unix, OpenAI, Gemini, PostgreSQL"
              />

              <ExperienceCard
                id="rifflix"
                company="Rifflix"
                role="Founding Engineer, Product Lead"
                period="Apr 2023 – May 2024"
                location="Remote"
                narrative={`Rifflix emerged from a fascinating technical challenge: solving video generation controllability in the early diffusion model era. While everyone was chasing generative video, we took a different path—building a text-to-animation platform using Unity's game engine.

I architected a natural language transpilation engine that felt almost magical in use. Through context-free grammar and function calling, we could extract entities from user scripts and convert plain English into Unity code that controlled character movement, camera angles, and lighting. Users could write "The character walks to the door and turns on the light" and watch it happen.

The full-stack infrastructure was comprehensive: authentication systems, database management, credit systems, and most remarkably, deploying Unity engine with interactive capabilities directly on the web. This required deep integration work that bridged game development with web technologies.

Our AI pipeline generated characters and backgrounds using Stable Diffusion with custom LoRA fine-tuning, deployed on private RunPod infrastructure with Modal orchestrating the workloads. The audio-video pipeline was equally sophisticated, integrating ElevenLabs for dialogue generation, WebRTC for screen recording, and FFmpeg for post-processing optimized for social media.

The architecture's elegance lay in its publisher-subscriber queue system, enabling non-blocking video processing. Users could generate complete animated stories with synchronized audio, record them, and download polished content—all from a simple text description.`}
                stack="TypeScript (React); Python (FastAPI, Pydantic); MongoDB, Unix, ffmpeg, Docker, GCP"
              />

              <ExperienceCard
                id="sidebrain"
                company="Sidebrain"
                role="Founder & Applied AI Engineer"
                period="Jan 2021 – Dec 2022"
                location="San Francisco, CA → Bengaluru, India"
                narrative={`Sidebrain was born from a prescient thesis: that knowledge retrieval and exploration would fundamentally shift to conversation-driven interactions. This was 2021, well before ChatGPT made conversational AI mainstream, yet we were building what would later be recognized as a complete RAG (Retrieval-Augmented Generation) system.

I architected the entire system from scratch, implementing embedding-based semantic search with cosine similarity, intelligent document chunking, and context-aware response generation. The technical foundation required deep understanding of how human knowledge could be computationally indexed and retrieved through natural conversation.

Our metadata extraction pipeline eliminated the tedious manual tagging that plagued knowledge management systems. Using TF-IDF, lemmatization, and stemming algorithms, we could automatically understand document relationships while maintaining data integrity through rule-based semantic merging.

The knowledge graph component was particularly innovative, employing NLP techniques like tokenization and dependency parsing with Neo4j to extract semantic triples and map complex relationships between concepts. This created a living, interconnected web of knowledge that grew more intelligent with each interaction.

We shipped both a Chrome extension and iOS app with voice and text interfaces, enabling users to capture context-rich information and retrieve it naturally. The system preserved structured metadata while feeling effortlessly conversational.

This journey required intense self-teaching—I absorbed Python, spaCy, and NLP fundamentals through a concentrated three-month immersion, then immediately applied this knowledge to production systems serving real users.`}
                stack="Python, spaCy, Neo4j, NLP, TF-IDF, iOS, Chrome Extensions"
              />

              <ExperienceCard
                id="aura"
                company="Aura"
                role="Senior Product Manager (Acting Director of Product)"
                period="2019 – 2021"
                location="San Francisco, CA"
                narrative={`At Aura, a Series D fintech with $580M in funding, I led consumer products and backend systems focused on providing credit access to unbanked populations—a mission that combined technical innovation with social impact.

Before AI-powered document processing became standard, I built and deployed OCR systems combined with human-in-the-loop workflows for document verification. Working closely with operations teams, we automated data labeling, parsing, and fraud detection, dramatically reducing processing times while improving conversion rates.

My product vision extended beyond single-use lending to create a comprehensive consumer platform. I launched credit score updates, personalized offers, and rewards systems designed to drive sustained user engagement and financial empowerment.

During the company's most challenging period, I was retained as core technical staff through 80% layoffs—a testament to the critical nature of the systems I'd built. In this role, I led the CARES Act project, rapidly developing infrastructure to deliver emergency funds to thin-file small and medium businesses during the early months of the pandemic.

This experience taught me how product leadership in fintech requires balancing regulatory compliance, fraud prevention, and user experience while serving populations that traditional financial services often overlook.`}
              />

              <ExperienceCard
                id="zendrive"
                company="Zendrive"
                role="Product Manager"
                period="2017 – 2019"
                location="San Francisco, CA"
                narrative={`Zendrive, later acquired by CreditKarma after raising $88M, was pioneering insurtech focused on behavior-based insurance pricing—a concept that seems obvious now but was revolutionary then.

I led the consumer experience for an auto insurance platform that priced policies based on actual driver behavior rather than demographic proxies. This required building iOS and Android applications that could seamlessly collect and analyze driving patterns while maintaining user trust and engagement.

The technical challenges were immense. We developed an insurance backend that integrated sensor data, behavioral analytics, and crime statistics to enable dynamic pricing. This real-time risk assessment represented a fundamental shift from traditional actuarial models to predictive, personalized insurance.

Our collision detection system was trained on over 150 billion miles of driving data—a dataset that few companies could match even today. The machine learning models could identify potential accidents with remarkable accuracy, enabling proactive interventions and more precise risk assessment.

This experience showed me how data-driven products could transform entire industries by challenging fundamental assumptions about risk, pricing, and user behavior.`}
              />

              <ExperienceCard
                id="education"
                company="Education & Early Experience"
                role="Foundation Years"
                period="2011 – 2017"
                location="New Haven, CT & India"
                narrative={`My educational journey laid the technical and philosophical foundation for everything that followed.

At Yale's MBA program, I focused on the intersection of technology, entrepreneurship, and philosophy—a combination that shaped my approach to building products that matter. During this time, I interned at Apple, contributing to the launch of Apple Single Sign-On and the iOS App Store redesign, experiencing firsthand how thoughtful design and technical excellence could reach billions of users.

An experience that particularly shaped my worldview was building and launching a healthtech product in Sierra Leone to improve malaria drug adherence rates. This project required converting text messages sent from basic feature phones at point of diagnosis into structured medication plans—essentially parsing JSON before it was trendy, but more importantly, using technology to directly save lives.

My undergraduate years at Birla Institute of Technology provided the computational foundation: data structures, algorithms, C++, and assembly language. These weren't just academic concepts but tools that would later enable me to architect complex systems and think systematically about computational problems.

This educational foundation taught me that technology's true power lies not in its sophistication, but in its ability to solve meaningful human problems at scale.`}
                isLast
              />
            </div>
          </main>

          {/* Table of Contents */}
          <TableOfContents
            items={tocItems}
            activeSection={activeSection}
            onSectionClick={scrollToSection}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfessionalHistory;