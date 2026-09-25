import PageHeader from "../../components/common/PageHeader";
import Card from "../../components/common/Card";
import Badge from "../../components/common/Badge";
import { useState } from "react";

const TargetJob = () => {
  const [selectedRole, setSelectedRole] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");
  const [workPreference, setWorkPreference] = useState("");
  const [savedTarget, setSavedTarget] = useState(null);

  const handleSaveTarget = () => {
    if (!selectedRole || !experienceLevel || !workPreference) {
      return;
    }

    setSavedTarget({
      role: selectedRole,
      experienceLevel,
      workPreference,
    });
  };
  const targetJob = {
    role: "Full Stack Developer",
    experienceLevel: "Junior / Entry Level",
    workPreference: "Remote / Hybrid",
    industry: "Software Development",

    coreSkills: [
      "React",
      "JavaScript",
      "REST APIs",
      "Node.js",
      "PostgreSQL",
      "Git",
    ],
  };

  return (
    <div>
      <PageHeader
        title="Target Job"
        description="Define the role you're preparing for so JobReady AI can personalize your skill analysis, roadmap, and project recommendations."
      />
      <Card className="mb-6">
        <h2 className="text-lg font-semibold text-slate-900">
          Choose Your Target
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Tell us which role you want to prepare for.
        </p>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {/* Target Role */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Target Role
            </label>

            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-indigo-500"
            >
              <option value="">Select a role</option>
              <option value="Frontend Developer">Frontend Developer</option>
              <option value="Backend Developer">Backend Developer</option>
              <option value="Full Stack Developer">Full Stack Developer</option>
              <option value="React Developer">React Developer</option>
              <option value="Java Developer">Java Developer</option>
              <option value="Software Engineer">Software Engineer</option>
            </select>
          </div>

          {/* Experience */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Experience Level
            </label>

            <select
              value={experienceLevel}
              onChange={(e) => setExperienceLevel(e.target.value)}
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-indigo-500"
            >
              <option value="">Select level</option>
              <option value="Entry Level">Entry Level</option>
              <option value="Junior">Junior</option>
              <option value="Mid Level">Mid Level</option>
              <option value="Senior">Senior</option>
            </select>
          </div>

          {/* Work Preference */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Work Preference
            </label>

            <select
              value={workPreference}
              onChange={(e) => setWorkPreference(e.target.value)}
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-indigo-500"
            >
              <option value="">Select preference</option>
              <option value="Remote">Remote</option>
              <option value="Hybrid">Hybrid</option>
              <option value="On-site">On-site</option>
              <option value="No Preference">No Preference</option>
            </select>
          </div>
        </div>

        <button
          type="button"
          onClick={handleSaveTarget}
          disabled={!selectedRole || !experienceLevel || !workPreference}
          className="
    mt-6
    rounded-lg
    bg-indigo-600
    px-5
    py-2.5
    text-sm
    font-medium
    text-white
    transition
    hover:bg-indigo-700
    active:scale-95
    disabled:cursor-not-allowed
    disabled:bg-slate-300
  "
        >
          Save Target Job
        </button>
      </Card>
      {/* Target Role */}
      {savedTarget && (
        <Card className="mb-6">
          <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                Your Active Target
              </p>

              <h2 className="mt-2 text-2xl font-bold text-slate-900">
                {savedTarget.role}
              </h2>

              <div className="mt-3 flex flex-wrap gap-2">
                <Badge variant="neutral">{savedTarget.experienceLevel}</Badge>

                <Badge variant="neutral">{savedTarget.workPreference}</Badge>
              </div>
            </div>

            <Badge variant="success">Active Target</Badge>
          </div>
        </Card>
      )}

      {/* Job Preferences */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Experience Level
          </p>

          <p className="mt-3 text-base font-semibold text-slate-900">
            {targetJob.experienceLevel}
          </p>
        </Card>

        <Card>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Work Preference
          </p>

          <p className="mt-3 text-base font-semibold text-slate-900">
            {targetJob.workPreference}
          </p>
        </Card>

        <Card>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Industry
          </p>

          <p className="mt-3 text-base font-semibold text-slate-900">
            {targetJob.industry}
          </p>
        </Card>
      </div>

      {/* Core Skills */}
      <Card className="mt-6">
        <h2 className="text-lg font-semibold text-slate-900">
          Core Skills for Your Target
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Skills currently associated with your target role.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {targetJob.coreSkills.map((skill) => (
            <Badge key={skill}>{skill}</Badge>
          ))}
        </div>
      </Card>

      {/* Next Step */}
      <div
        className="
          mt-6
          rounded-2xl
          border
          border-indigo-100
          bg-indigo-50/40
          p-6
        "
      >
        <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
          Next Step
        </p>

        <h2 className="mt-2 text-lg font-semibold text-slate-900">
          Analyze a real job description
        </h2>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
          Compare the requirements of a specific job with your current profile
          to identify the skills you should focus on next.
        </p>
      </div>
    </div>
  );
};

export default TargetJob;
