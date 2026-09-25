import Card from "../../components/common/Card";
import ProgressBar from "../../components/common/ProgressBar";
import NextAction from "../../components/common/NextAction";
import StatusBadge from "../../components/common/StatusBadge";
import SectionHeader from "../../components/common/SectionHeader";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const careerData = {
    userName: "Sarah Farooq",
    targetRole: "Full Stack Developer",
    readiness: 42,

    skills: {
      completed: 8,
      total: 12,
    },

    roadmap: {
      progress: 34,
    },

    projects: {
      completed: 2,
      target: 5,
    },

    interview: {
      status: "Not started",
    },
  };
  const skillGaps = [
    {
      id: 1,
      name: "React",
      category: "Frontend",
      progress: 72,
      status: "in-progress",
      recommendation: "Strengthen component patterns and state management.",
    },
    {
      id: 2,
      name: "REST APIs",
      category: "Backend",
      progress: 35,
      status: "needs-work",
      recommendation: "Practice consuming and building APIs through projects.",
    },
    {
      id: 3,
      name: "TypeScript",
      category: "Development",
      progress: 18,
      status: "critical",
      recommendation:
        "Start with types, interfaces, and typed React components.",
    },
  ];
  return (
    <div>
      {/* Dashboard Header */}
      <div>
        <p className="text-sm font-medium text-indigo-600">
          Your Career Journey
        </p>

        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          Good morning, {careerData.userName}
        </h1>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
          Here's where you are on your journey to becoming job-ready.
        </p>
      </div>

      {/* Career Readiness */}
      <Card className="mt-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Target Role
            </p>

            <h2 className="mt-2 text-2xl font-bold text-slate-900">
              {careerData.targetRole}{" "}
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Your current career goal
            </p>
          </div>

          <div className="rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-600">
            Your Goal
          </div>
        </div>

        <div className="mt-8">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <h3 className="text-sm font-semibold text-slate-900">
                Career readiness
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                Based on your current skills and progress
              </p>
            </div>
            <span className="text-2xl font-bold text-slate-900">
              {careerData.readiness}%
            </span>{" "}
          </div>

          <ProgressBar progress={careerData.readiness} size="large" />
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 border-t border-slate-100 pt-6 sm:grid-cols-4">
          <div>
            <p className="text-xs text-slate-400">Skills</p>

            <p className="mt-1 text-sm font-semibold text-slate-900">{careerData.skills.completed} / {careerData.skills.total}</p>
          </div>

          <div>
            <p className="text-xs text-slate-400">Roadmap</p>

            <p className="mt-1 text-sm font-semibold text-slate-900">{careerData.roadmap.progress}%</p>
          </div>

          <div>
            <p className="text-xs text-slate-400">Projects</p>

            <p className="mt-1 text-sm font-semibold text-slate-900">{careerData.projects.completed} / {careerData.projects.total}</p>
          </div>

          <div>
            <p className="text-xs text-slate-400">{careerData.interview.status}</p>

            <p className="mt-1 text-sm font-semibold text-slate-900">
              Not started
            </p>
          </div>
        </div>
      </Card>

      {/* Next Move */}
      <div className="mt-6">
        <NextAction
          title="Analyze a real job to discover your skill gaps"
          description="Paste a job description and JobReady AI will identify the skills employers are asking for and compare them with your current profile."
          actionLabel="Analyze a Job"
          onAction={() => navigate("/jobs/analyzer")}
        />
      </div>
      {/* Skill Gaps */}
      <section className="mt-10">
        <SectionHeader
          title="Discover Your Skill Gaps"
          description="Skills that need more attention for your target career."
          action={
            <button
              type="button"
              onClick={() => navigate("/skills/gaps")}
              className="text-sm font-medium text-indigo-600 transition hover:text-indigo-700"
            >
              Explore all →
            </button>
          }
        />

        <div className="grid gap-4 md:grid-cols-3">
          {skillGaps.map((skill) => (
            <Card key={skill.id} hover>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-medium text-slate-400">
                    {skill.category}
                  </p>

                  <h3 className="mt-1 text-lg font-semibold text-slate-900">
                    {skill.name}
                  </h3>
                </div>

                <span className="text-lg font-bold text-slate-900">
                  {skill.progress}%
                </span>
              </div>

              <div className="mt-5">
                <ProgressBar progress={skill.progress} />
              </div>

              <div className="mt-4">
                <StatusBadge status={skill.status} />
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-500">
                {skill.recommendation}
              </p>
            </Card>
          ))}
        </div>
      </section>
      {/* Continue Roadmap */}
      <section className="mt-10">
        <SectionHeader
          title="Continue Your Roadmap"
          description="Pick up where you left off and keep building toward your target role."
          action={
            <button
              type="button"
              onClick={() => navigate("/roadmap")}
              className="text-sm font-medium text-indigo-600 transition hover:text-indigo-700"
            >
              View roadmap →
            </button>
          }
        />

        <Card>
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                Current Module
              </p>

              <h3 className="mt-2 text-xl font-semibold text-slate-900">
                React Fundamentals
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                Learn components, props, state, and event handling to build
                interactive React applications.
              </p>
            </div>

            <StatusBadge status="in-progress" />
          </div>

          <div className="mt-7">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm font-medium text-slate-700">
                Module progress
              </span>

              <span className="text-sm font-semibold text-slate-900">68%</span>
            </div>

            <ProgressBar progress={68} size="large" />
          </div>

          <div className="mt-6 flex flex-col gap-4 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-slate-500">
              <span className="font-semibold text-slate-900">6 of 9</span>{" "}
              lessons completed
            </p>

            <button
              type="button"
              className="
          inline-flex
          items-center
          justify-center
          gap-2
          rounded-lg
          bg-indigo-600
          px-4
          py-2.5
          text-sm
          font-medium
          text-white
          transition
          hover:bg-indigo-700
          active:scale-95
        "
            >
              Continue
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </Card>
      </section>
    </div>
  );
}

export default Dashboard;
