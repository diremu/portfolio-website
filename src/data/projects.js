// Add or edit projects here. Set `href` to make a card clickable.
// color: k1 blue, k2 pink, k3 yellow, k4 mint. size: "wide" | "narrow".
const projects = [
  {
    title: "Anomaly detection for correctional facilities",
    status: "Live · Bachelor's project",
    big: "0.76 AUC",
    blurb:
      "A ResNet18 + LSTM autoencoder that flags unusual behavior in surveillance video without labeled examples. Tested on 1,151 clips across three datasets, then shipped as a web platform.",
    stack: "Python · PyTorch · ONNX · Web app",
    color: "k1",
    size: "wide",
    href: "https://inmateanomalydetectionapp.vercel.app",
  },
  {
    title: "Task management system",
    status: "Full-stack",
    blurb:
      "Built to a Figma design, with guest access, Google sign-in and JWT sessions.",
    stack: "Next.js · NestJS · MongoDB",
    color: "k2",
    size: "narrow",
    href: "https://github.com/diremu/ablespace-assessment",
  },
  {
    title: "Quote finder",
    status: "In progress",
    blurb:
      "Paste a line, find which public domain books contain it. Exact and fuzzy matching.",
    stack: "Search · Project Gutenberg",
    color: "k3",
    size: "narrow",
    href: "", // add repo or demo link
  },
  {
    title: "TechBridge program site",
    status: "Vanilla JS",
    blurb:
      "A multi-page, responsive site with an interactive internship roadmap where visitors switch between the Data Analytics and Web Development tracks. No frameworks, just DOM code.",
    stack: "HTML · CSS · JavaScript",
    color: "k4",
    size: "wide",
    href: "", // add repo or live link
  },
];

export default projects;