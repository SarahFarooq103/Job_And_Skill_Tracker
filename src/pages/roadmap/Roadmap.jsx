import { useState } from "react";
import PageHeader from "../../components/common/PageHeader";
import Card from "../../components/common/Card";
import ProgressBar from "../../components/common/ProgressBar";

const milestones = [
  {
    title: "Learn HTML & CSS Fundamentals",
    description:
      "Master semantic HTML, responsive layouts, and modern CSS including Flexbox and Grid.",
    status: "completed",
    duration: "2 weeks",
    phase: "Foundation",
    skills: ["Semantic HTML", "CSS", "Flexbox", "Grid", "Responsive Design"],
  },
  {
    title: "JavaScript Core Concepts",
    description: "DOM manipulation, ES6+, async/await, and working with APIs.",
    status: "completed",
    duration: "3 weeks",
    phase: "Foundation",
    skills: ["JavaScript", "DOM", "ES6+", "Async/Await", "APIs"],
  },
  {
    title: "React Fundamentals",
    description:
      "Components, hooks, state management, and routing with React Router.",
    status: "in-progress",
    duration: "3 weeks",
    phase: "Frontend Development",
    skills: ["React", "Components", "Hooks", "State", "React Router"],
  },
  {
    title: "Backend Basics with Node.js",
    description:
      "REST APIs, Express, authentication, and connecting to a database.",
    status: "locked",
    duration: "4 weeks",
    phase: "Backend Development",
    skills: ["Node.js", "Express", "REST APIs", "Authentication", "Database"],
  },
  {
    title: "Build & Deploy a Full-Stack Project",
    description:
      "Combine frontend and backend skills into one portfolio-ready application.",
    status: "locked",
    duration: "2 weeks",
    phase: "Portfolio Project",
    skills: ["Frontend", "Backend", "Database", "Git", "Deployment"],
  },
];
const statusStyles = {
  completed: {
    dot: "bg-indigo-600",
    line: "bg-indigo-600",
    badge: "bg-indigo-50 text-indigo-600",
    label: "Completed",
  },
  "in-progress": {
    dot: "bg-amber-500",
    line: "bg-slate-200",
    badge: "bg-amber-50 text-amber-600",
    label: "In Progress",
  },
  locked: {
    dot: "bg-slate-300",
    line: "bg-slate-200",
    badge: "bg-slate-100 text-slate-500",
    label: "Locked",
  },
};
const recommendedProject = {
  title: "Full-Stack Task Manager",
  description:
    "Build a task management application where users can create accounts, organize tasks, update progress, and manage their own data.",
  skills: ["React", "REST APIs", "Node.js", "PostgreSQL"],
  difficulty: "Intermediate",
};
const Roadmap = () => {
  const [selected, setSelected] = useState(null);
  const currentMilestone = milestones.find(
    (milestone) => milestone.status === "in-progress",
  );
  const completedCount = milestones.filter(
    (m) => m.status === "completed",
  ).length;
  const progressPercent = Math.round(
    (completedCount / milestones.length) * 100,
  );

  return (
    <div>
      <PageHeader
        title="Your Roadmap"
        description="A personalized learning path designed around your target role and current skill gaps."
      />

      <Card className="mb-10">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-slate-900">
              Overall Progress
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Keep completing milestones to move closer to your target role.
            </p>
          </div>

          <span className="text-2xl font-bold text-indigo-600">
            {progressPercent}%
          </span>
        </div>

        <div className="mt-5">
          <ProgressBar progress={progressPercent} />
        </div>

        <p className="mt-3 text-xs text-slate-400">
          {completedCount} of {milestones.length} milestones completed
        </p>
      </Card>
      {currentMilestone && (
        <Card className="mb-10 border-indigo-100 bg-indigo-50/40">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                Current Focus
              </p>

              <h2 className="mt-2 text-lg font-semibold text-slate-900">
                {currentMilestone.title}
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                {currentMilestone.description}
              </p>
            </div>

            <div className="shrink-0">
              <p className="text-xs text-slate-400">Estimated duration</p>

              <p className="mt-1 text-sm font-semibold text-slate-700">
                {currentMilestone.duration}
              </p>
            </div>
          </div>
        </Card>
      )}
      <div className="relative">
        {milestones.map((milestone, index) => {
          const style = statusStyles[milestone.status];
          const isLast = index === milestones.length - 1;

          return (
            <div key={index} className="relative flex gap-5 pb-10">
              <div className="flex flex-col items-center">
                <div
                  className={`z-10 h-4 w-4 rounded-full ring-4 ring-white ${style.dot}`}
                />
                {!isLast && <div className={`w-0.5 flex-1 ${style.line}`} />}
              </div>

              <button
                onClick={() => setSelected(selected === index ? null : index)}
                className={`flex-1 rounded-xl border bg-white p-5 text-left transition ${
                  selected === index
                    ? "border-indigo-300 shadow-sm"
                    : "border-slate-200 hover:border-slate-300"
                }`}
              >
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-indigo-500">
                    {milestone.phase}
                  </p>
                  {selected === index && (
                    <div className="mt-5 border-t border-slate-100 pt-4">
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Skills Covered
                      </p>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {milestone.skills.map((skill) => (
                          <span
                            key={skill}
                            className="
            rounded-full
            border
            border-slate-200
            bg-slate-50
            px-3
            py-1
            text-xs
            font-medium
            text-slate-600
          "
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  <h3 className="text-sm font-semibold text-slate-800">
                    {milestone.title}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {milestone.description}
                  </p>
                </div>
                <p className="mt-3 text-xs text-slate-400">
                  Estimated duration: {milestone.duration}
                </p>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Roadmap;
