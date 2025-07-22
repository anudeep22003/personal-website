import { useEffect, useState } from "react";

export const useScrollSpy = () => {
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

  return { activeSection, scrollToSection };
};