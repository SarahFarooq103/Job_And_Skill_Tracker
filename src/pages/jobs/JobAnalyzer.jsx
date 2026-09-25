import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Card from "../../components/common/Card";
import PageHeader from "../../components/common/PageHeader";
import ProgressBar from "../../components/common/ProgressBar";
import Badge from "../../components/common/Badge";

function JobAnalyzer() {
  const navigate = useNavigate();

  const [jobDescription, setJobDescription] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);

  const minimumCharacters = 100;

  const isJobDescriptionValid =
    jobDescription.trim().length >= minimumCharacters;

  const handleAnalyze = () => {
    if (!isJobDescriptionValid) return;

    setIsAnalyzing(true);
    setAnalysisResult(null);

    setTimeout(() => {
      const result = {
        detectedRole: "Full Stack Developer",
        experienceLevel: "Junior / Entry Level",

        requiredSkills: [
          "React",
          "JavaScript",
          "REST APIs",
          "Git",
          "HTML",
          "CSS",
        ],

        preferredSkills: [
          "TypeScript",
          "Node.js",
          "PostgreSQL",
        ],

        matchPercentage: 67,

        matchedSkills: [
          "React",
          "JavaScript",
          "Git",
          "HTML",
          "CSS",
        ],

        missingSkills: [
          "REST APIs",
          "TypeScript",
          "Node.js",
          "PostgreSQL",
        ],
      };

      setAnalysisResult(result);
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <div>
      {/* Page Header */}
      <PageHeader
        title="Job Analyzer"
        description="Paste a job description to discover the skills employers are looking for and compare them with your current profile."
      />

      {/* Job Description Input */}
      <Card>
        <div>
          <label
            htmlFor="job-description"
            className="text-sm font-semibold text-slate-900"
          >
            Job Description
          </label>

          <p className="mt-1 text-sm text-slate-500">
            Copy the complete job description from a job posting.
          </p>

          <textarea
            id="job-description"
            value={jobDescription}
            onChange={(event) =>
              setJobDescription(event.target.value)
            }
            placeholder="Paste the job description here..."
            rows={12}
            className="
              mt-5
              w-full
              resize-y
              rounded-xl
              border
              border-slate-200
              bg-white
              px-4
              py-3
              text-sm
              leading-6
              text-slate-900
              outline-none
              transition
              placeholder:text-slate-400
              focus:border-indigo-400
              focus:ring-4
              focus:ring-indigo-50
            "
          />

          {/* Validation */}
          <div className="mt-3 flex items-start justify-between gap-4">
            <div>
              <p className="text-xs text-slate-400">
                Include responsibilities, requirements, and preferred
                skills for better analysis.
              </p>

              {jobDescription.length > 0 &&
                !isJobDescriptionValid && (
                  <p className="mt-1 text-xs font-medium text-amber-600">
                    Add at least {minimumCharacters} characters for a
                    useful analysis.
                  </p>
                )}
            </div>

            <span
              className={`shrink-0 text-xs ${
                isJobDescriptionValid
                  ? "font-medium text-green-600"
                  : "text-slate-400"
              }`}
            >
              {jobDescription.length} / {minimumCharacters} minimum
            </span>
          </div>

          {/* Analyze Button */}
          <div className="mt-6 flex justify-end">
            <button
              type="button"
              onClick={handleAnalyze}
              disabled={!isJobDescriptionValid || isAnalyzing}
              className="
                rounded-lg
                bg-indigo-600
                px-5
                py-2.5
                text-sm
                font-semibold
                text-white
                transition
                hover:bg-indigo-700
                active:scale-95
                disabled:cursor-not-allowed
                disabled:bg-slate-300
                disabled:active:scale-100
              "
            >
              {isAnalyzing ? (
                <span className="flex items-center gap-2">
                  <span
                    className="
                      h-4
                      w-4
                      animate-spin
                      rounded-full
                      border-2
                      border-white/40
                      border-t-white
                    "
                  ></span>

                  Analyzing...
                </span>
              ) : (
                <>
                  Analyze Job

                  <span
                    className="ml-2"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </>
              )}
            </button>
          </div>
        </div>
      </Card>

      {/* Analysis Results */}
      {analysisResult && (
        <section className="mt-8">
          {/* Results Header */}
          <div className="mb-5">
            <p className="text-sm font-medium text-indigo-600">
              Analysis Complete
            </p>

            <h2 className="mt-1 text-xl font-bold text-slate-900">
              Job Analysis
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Here's what we identified from the job description.
            </p>
          </div>

          {/* Summary Cards */}
          <div className="grid gap-4 lg:grid-cols-3">
            {/* Detected Role */}
            <Card>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Detected Role
              </p>

              <h3 className="mt-3 text-lg font-semibold text-slate-900">
                {analysisResult.detectedRole}
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                {analysisResult.experienceLevel}
              </p>
            </Card>

            {/* Tracked Skill Match */}
            <Card>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Tracked Skill Match
              </p>

              <div className="mt-3 flex items-end gap-2">
                <span className="text-3xl font-bold text-slate-900">
                  {analysisResult.matchPercentage}%
                </span>

                <span className="pb-1 text-xs text-slate-400">
                  of tracked requirements
                </span>
              </div>

              <div className="mt-4">
                <ProgressBar
                  progress={analysisResult.matchPercentage}
                />
              </div>
            </Card>

            {/* Skill Gaps */}
            <Card>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Skill Gaps
              </p>

              <p className="mt-3 text-3xl font-bold text-slate-900">
                {analysisResult.missingSkills.length}
              </p>

              <p className="mt-2 text-sm text-slate-500">
                skills need further development
              </p>
            </Card>
          </div>

          {/* Job Requirements */}
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {/* Required Skills */}
            <Card>
              <h3 className="text-base font-semibold text-slate-900">
                Required Skills
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Core skills identified from the job description.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {analysisResult.requiredSkills.map((skill) => (
                  <Badge key={skill}>
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Preferred Skills */}
            <Card>
              <h3 className="text-base font-semibold text-slate-900">
                Preferred Skills
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Additional skills that may strengthen your fit for this
                role.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {analysisResult.preferredSkills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="neutral"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>

          {/* Skill Comparison */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-slate-900">
              Your Skill Comparison
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              See which tracked requirements match your current profile
              and where you may need more development.
            </p>

            <div className="mt-4 grid gap-4 lg:grid-cols-2">
              {/* Matched Skills */}
              <Card>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Skills You Match
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Skills already represented in your profile.
                    </p>
                  </div>

                  <Badge variant="success">
                    {analysisResult.matchedSkills.length} matched
                  </Badge>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {analysisResult.matchedSkills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="success"
                    >
                      ✓ {skill}
                    </Badge>
                  ))}
                </div>
              </Card>

              {/* Missing Skills */}
              <Card>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Skills to Develop
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Requirements not currently represented in your
                      profile.
                    </p>
                  </div>

                  <Badge variant="warning">
                    {analysisResult.missingSkills.length} gaps
                  </Badge>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {analysisResult.missingSkills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="warning"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </div>
          </div>

          {/* Recommended Next Step */}
          <div
            className="
              mt-8
              rounded-2xl
              border
              border-indigo-100
              bg-gradient-to-br
              from-indigo-50
              via-white
              to-white
              p-6
            "
          >
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                  Recommended Next Step
                </p>

                <h3 className="mt-2 text-lg font-semibold text-slate-900">
                  Turn your skill gaps into a learning plan
                </h3>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                  Build a focused roadmap around the skills identified
                  in this analysis instead of learning everything at
                  once.
                </p>
              </div>

              <button
                type="button"
                onClick={() => navigate("/roadmap")}
                className="
                  shrink-0
                  rounded-lg
                  bg-indigo-600
                  px-5
                  py-2.5
                  text-sm
                  font-semibold
                  text-white
                  transition
                  hover:bg-indigo-700
                  active:scale-95
                "
              >
                Build My Roadmap

                <span
                  className="ml-2"
                  aria-hidden="true"
                >
                  →
                </span>
              </button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default JobAnalyzer;