import { Terminal, GitCommit, Cpu, Mail, Download } from "lucide-vue-next";
import type { CommandItem } from "~/types/portfolio";

export const usePortfolio = () => {
  // --- Global State ---
  const isCmdOpen = useState("isCmdOpen", () => false);
  const emailCopied = useState("emailCopied", () => false);
  // Track the currently active section ID
  const activeSection = useState("activeSection", () => "about");

  // --- Scroll Logic ---

  // 1. Manual Scroll (Click)
  const scrollTo = (id: string) => {
    if (import.meta.client) {
      const element = document.getElementById(id);
      if (element) {
        const offset = 100; // Navbar height + padding
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
        activeSection.value = id;
        isCmdOpen.value = false;
      }
    }
  };

  // 2. Auto Scroll Spy (Observer)
  // Initializes an IntersectionObserver to track visible sections
  const initScrollSpy = () => {
    if (import.meta.client) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Update active section when it enters the viewport "sweet spot"
              activeSection.value = entry.target.id;
            }
          });
        },
        {
          // rootMargin defines the "sweet spot"
          // -40% from top, -60% from bottom means the element activates
          // when it crosses the upper-middle part of the screen.
          rootMargin: "-40% 0px -60% 0px",
        }
      );

      // Observe all main sections
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        observer.observe(section);
      });
    }
  };

  // --- Actions ---
  const copyEmail = () => {
    if (import.meta.client) {
      navigator.clipboard.writeText("peyman@example.com");
      emailCopied.value = true;
      setTimeout(() => (emailCopied.value = false), 2000);
      isCmdOpen.value = false;
    }
  };

  // --- Command Palette Items ---
  const cmdItems = computed<CommandItem[]>(() => [
    {
      id: "nav-about",
      label: "Go to About",
      icon: Terminal,
      action: () => scrollTo("about"),
      group: "Navigation",
    },
    {
      id: "nav-exp",
      label: "Go to Experience",
      icon: GitCommit,
      action: () => scrollTo("experience"),
      group: "Navigation",
    },
    {
      id: "nav-proj",
      label: "Go to Projects",
      icon: Cpu,
      action: () => scrollTo("projects"),
      group: "Navigation",
    },
    {
      id: "act-email",
      label: "Copy Email Address",
      icon: Mail,
      action: copyEmail,
      group: "Actions",
    },
    {
      id: "act-resume",
      label: "Download Resume.pdf",
      icon: Download,
      action: () => (isCmdOpen.value = false),
      group: "Actions",
    },
  ]);

  return {
    isCmdOpen,
    emailCopied,
    activeSection, // Exposed to components
    cmdItems,
    scrollTo,
    initScrollSpy, // Exposed to initialize on mount
    copyEmail,
  };
};
