import PageHeader from "../../components/common/PageHeader";
import Card from "../../components/common/Card";
import ProgressBar from "../../components/common/ProgressBar";

const Skills = () => {
  const skillProfile = {
    totalSkills: 12,
    developed: 8,
    inProgress: 2,
    notStarted: 2,
  };

  const developedPercentage = Math.round(
    (skillProfile.developed / skillProfile.totalSkills) * 100
  );

  return (
    <div>
      <PageHeader
        title="My Skills"
        description="Manage your skill profile and track what you've developed, what you're currently learning, and what you want to work on next."
      />

      {/* Skill Profile Overview */}
      <Card>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          {/* Progress */}
          <div className="flex-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
              Skill Profile
            </p>

            <div className="mt-2 flex items-end gap-2">
              <span className="text-3xl font-bold text-slate-900">
                {developedPercentage}%
              </span>

              <span className="pb-1 text-sm text-slate-500">
                developed
              </span>
            </div>

            <div className="mt-4 max-w-xl">
              <ProgressBar progress={developedPercentage} />
            </div>

            <p className="mt-3 text-xs text-slate-400">
              {skillProfile.developed} of {skillProfile.totalSkills} tracked
              skills marked as developed
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-3 gap-3 lg:min-w-[420px]">
            <div className="rounded-xl bg-green-50 p-4">
              <p className="text-2xl font-bold text-green-700">
                {skillProfile.developed}
              </p>

              <p className="mt-1 text-xs font-medium text-green-700">
                Developed
              </p>
            </div>

            <div className="rounded-xl bg-indigo-50 p-4">
              <p className="text-2xl font-bold text-indigo-700">
                {skillProfile.inProgress}
              </p>

              <p className="mt-1 text-xs font-medium text-indigo-700">
                In Progress
              </p>
            </div>

            <div className="rounded-xl bg-slate-100 p-4">
              <p className="text-2xl font-bold text-slate-700">
                {skillProfile.notStarted}
              </p>

              <p className="mt-1 text-xs font-medium text-slate-600">
                Not Started
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Skills;