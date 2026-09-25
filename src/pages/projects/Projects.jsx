import PageHeader from "../../components/common/PageHeader";
import Card from "../../components/common/Card";
import Badge from "../../components/common/Badge";
import ProgressBar from "../../components/common/ProgressBar";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "JobReady AI",
      description:
        "An AI-powered career platform that analyzes job requirements, identifies skill gaps, and creates personalized learning paths.",
      skills: ["React", "Tailwind CSS", "REST APIs"],
      progress: 65,
      status: "In Progress",
    },
    {
      id: 2,
      title: "E-Commerce Frontend",
      description:
        "A responsive product browsing interface with reusable components and modern frontend practices.",
      skills: ["React", "JavaScript", "CSS"],
      progress: 100,
      status: "Completed",
    },
    {
      id: 3,
      title: "Full-Stack Task Manager",
      description:
        "Build a complete task management application with authentication, APIs, and persistent data.",
      skills: ["React", "Node.js", "REST APIs", "PostgreSQL"],
      progress: 0,
      status: "Recommended",
    },
  ];

  return (
    <div>
      <PageHeader
        title="Projects"
        description="Build and track projects that turn your skills into practical evidence of what you can do."
      />

      {/* Project Summary */}
      <div className="mb-8 grid gap-4 sm:grid-cols-3">
        <Card>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Total Projects
          </p>

          <p className="mt-3 text-3xl font-bold text-slate-900">
            {projects.length}
          </p>
        </Card>

        <Card>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Completed
          </p>

          <p className="mt-3 text-3xl font-bold text-green-600">
            {projects.filter((project) => project.status === "Completed").length}
          </p>
        </Card>

        <Card>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            In Progress
          </p>

          <p className="mt-3 text-3xl font-bold text-indigo-600">
            {
              projects.filter(
                (project) => project.status === "In Progress"
              ).length
            }
          </p>
        </Card>
      </div>

      {/* Project Cards */}
      <div className="grid gap-5 xl:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.id} hover>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">
                  {project.title}
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {project.description}
                </p>
              </div>

              <Badge
                variant={
                  project.status === "Completed"
                    ? "success"
                    : project.status === "In Progress"
                      ? "default"
                      : "warning"
                }
              >
                {project.status}
              </Badge>
            </div>

            {/* Skills */}
            <div className="mt-5 flex flex-wrap gap-2">
              {project.skills.map((skill) => (
                <Badge key={skill} variant="neutral">
                  {skill}
                </Badge>
              ))}
            </div>

            {/* Progress */}
            <div className="mt-6">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-500">
                  Project Progress
                </span>

                <span className="text-xs font-semibold text-slate-700">
                  {project.progress}%
                </span>
              </div>

              <ProgressBar progress={project.progress} />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;