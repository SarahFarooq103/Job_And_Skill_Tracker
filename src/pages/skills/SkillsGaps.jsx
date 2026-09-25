import PageHeader from "../../components/common/PageHeader";
import Card from "../../components/common/Card";
import ProgressBar from "../../components/common/ProgressBar";

const SkillsGap = () => {
  const skillGapData = {
    targetRole: "Full Stack Developer",
    matchPercentage: 67,
    totalRequirements: 9,
    matchedSkills: 5,
    skillGaps: 4,
  };
  const skillGaps = [
    {
      id: 1,
      name: "REST APIs",
      category: "Backend",
      priority: "High",
      reason:
        "Required for connecting frontend applications with backend services.",
    },
    {
      id: 2,
      name: "Node.js",
      category: "Backend",
      priority: "High",
      reason: "Needed to build server-side applications and APIs.",
    },
    {
      id: 3,
      name: "TypeScript",
      category: "Frontend",
      priority: "Medium",
      reason:
        "Helps you write safer and more maintainable JavaScript applications.",
    },
    {
      id: 4,
      name: "PostgreSQL",
      category: "Database",
      priority: "Medium",
      reason: "Useful for storing and managing application data.",
    },
  ];
  return (
    <div>
      <PageHeader
        title="Skill Gap Analysis"
        description="See which skills are already represented in your profile and what you should focus on developing next."
      />

      {/* Analysis Summary */}
      <div className="grid gap-4 md:grid-cols-3">
        {/* Target Role */}
        <Card>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Target Role
          </p>

          <h2 className="mt-3 text-lg font-semibold text-slate-900">
            {skillGapData.targetRole}
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Based on your latest job analysis
          </p>
        </Card>

        {/* Tracked Match */}
        <Card>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Tracked Skill Match
          </p>

          <div className="mt-3 flex items-end gap-2">
            <span className="text-3xl font-bold text-slate-900">
              {skillGapData.matchPercentage}%
            </span>

            <span className="pb-1 text-xs text-slate-400">
              of tracked requirements
            </span>
          </div>

          <div className="mt-4">
            <ProgressBar progress={skillGapData.matchPercentage} />
          </div>
        </Card>

        {/* Skill Gaps */}
        <Card>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Skills to Develop
          </p>

          <p className="mt-3 text-3xl font-bold text-slate-900">
            {skillGapData.skillGaps}
          </p>

          <p className="mt-2 text-sm text-slate-500">
            requirements not currently represented in your profile
          </p>
        </Card>
        {/* Priority Skill Gaps */}
        <section className="mt-8">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Priority Skill Gaps
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Focus on the skills most relevant to the requirements identified
              in your latest analysis.
            </p>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {skillGaps.map((skill) => (
              <Card key={skill.id} hover>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-indigo-500">
                      {skill.category}
                    </p>

                    <h3 className="mt-2 text-base font-semibold text-slate-900">
                      {skill.name}
                    </h3>
                  </div>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      skill.priority === "High"
                        ? "bg-red-50 text-red-600"
                        : "bg-amber-50 text-amber-600"
                    }`}
                  >
                    {skill.priority} Priority
                  </span>
                </div>

                <p className="mt-4 text-sm leading-6 text-slate-500">
                  {skill.reason}
                </p>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default SkillsGap;
