import PageHeader from "../../components/common/PageHeader";
import Card from "../../components/common/Card";
import Badge from "../../components/common/Badge";
import ProgressBar from "../../components/common/ProgressBar";

const JobMatch = () => {
  const matchedJobs = [
    {
      id: 1,
      role: "Junior Full Stack Developer",
      company: "TechNova",
      location: "Remote",
      match: 82,
      matchedSkills: ["React", "JavaScript", "HTML", "CSS", "Git"],
      missingSkills: ["Node.js", "PostgreSQL"],
    },
    {
      id: 2,
      role: "Frontend Developer",
      company: "PixelCraft",
      location: "Hybrid",
      match: 76,
      matchedSkills: ["React", "JavaScript", "HTML", "CSS"],
      missingSkills: ["TypeScript"],
    },
    {
      id: 3,
      role: "Junior Web Developer",
      company: "CodeLabs",
      location: "On-site",
      match: 69,
      matchedSkills: ["JavaScript", "HTML", "CSS", "Git"],
      missingSkills: ["React", "REST APIs"],
    },
  ];

  return (
    <div>
      <PageHeader
        title="Job Match"
        description="Compare your tracked skills with job requirements and discover where your current profile aligns."
      />

      {/* Information */}
      <Card className="mb-8 border-indigo-100 bg-indigo-50/40">
        <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
          How Matching Works
        </p>

        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
          Match percentages compare the skills currently stored in your
          profile with the requirements tracked for each job. They are not
          predictions of hiring outcomes.
        </p>
      </Card>

      {/* Matched Jobs */}
      <div className="space-y-5">
        {matchedJobs.map((job) => (
          <Card key={job.id} hover>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              {/* Job Information */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-lg font-semibold text-slate-900">
                    {job.role}
                  </h2>

                  <Badge variant="neutral">
                    {job.location}
                  </Badge>
                </div>

                <p className="mt-1 text-sm text-slate-500">
                  {job.company}
                </p>

                {/* Skills */}
                <div className="mt-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Skills You Match
                  </p>

                  <div className="mt-2 flex flex-wrap gap-2">
                    {job.matchedSkills.map((skill) => (
                      <Badge key={skill} variant="success">
                        ✓ {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Missing Skills */}
                <div className="mt-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Skills to Develop
                  </p>

                  <div className="mt-2 flex flex-wrap gap-2">
                    {job.missingSkills.map((skill) => (
                      <Badge key={skill} variant="warning">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Match Score */}
              <div className="w-full rounded-xl bg-slate-50 p-5 lg:w-64">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Tracked Skill Match
                </p>

                <p className="mt-2 text-3xl font-bold text-slate-900">
                  {job.match}%
                </p>

                <div className="mt-4">
                  <ProgressBar progress={job.match} />
                </div>

                <p className="mt-3 text-xs leading-5 text-slate-400">
                  Based on currently tracked skills and job requirements.
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default JobMatch;