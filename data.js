/*
  EDIT THIS FILE ONLY. The page (index.html) builds itself from it.
  - Add an item: copy a { ... } block inside a list and change the text.
  - Remove a section: make its list empty, e.g. projects: []  (empty sections are hidden).
  - Tags on projects create the filter buttons automatically.
*/
const SITE = {
  name: "Your Name",
  title: "Your job title",
  location: "City, Country",
  summary: "Two or three sentences on what you do, who you do it for, and what you want next.",

  links: [
    { label: "Email",    url: "mailto:you@example.com" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/your-handle" },
    { label: "GitHub",   url: "https://github.com/your-handle" }
  ],

  // Short headline numbers under the hero. Delete the list to hide.
  highlights: [
    { value: "00 years", label: "Experience" },
    { value: "00",       label: "Projects delivered" }
  ],

  experience: [
    {
      role: "Job title",
      company: "Company name",
      period: "2020 to present",
      points: [
        "What you owned or delivered, with a number if you have one.",
        "Another result or responsibility."
      ]
    }
  ],

  skills: [
    { group: "Group name", items: ["Skill one", "Skill two", "Skill three"] }
  ],

  projects: [
    {
      title: "Project name",
      description: "One or two sentences on what it is and why it matters.",
      tags: ["Tag one"],          // used for filter buttons
      stack: ["Tool one", "Tool two"],
      details: ["Optional bullet with more detail."],   // shown when the card is opened
      link: { label: "View project", url: "" }          // leave url empty to hide
    }
  ],

  certifications: [
    { name: "Certification name", issuer: "Issuer", year: "2026" }
  ],

  education: [
    { name: "Degree or course", institution: "Institution", year: "2015" }
  ]
};
