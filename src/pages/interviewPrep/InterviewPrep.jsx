import { useState } from "react";
import PageHeader from "../../components/common/PageHeader";
import Card from "../../components/common/Card";
import Badge from "../../components/common/Badge";

const InterviewPrep = () => {
  const [interviewType, setInterviewType] = useState("Technical");

  const interviewTypes = [
    "Technical",
    "Behavioral",
    "HR",
    "Mixed",
  ];

  const practiceAreas = [
    {
      id: 1,
      title: "Technical Interview",
      description:
        "Practice questions based on your target role and technical skills.",
      questions: 10,
      type: "Technical",
    },
    {
      id: 2,
      title: "Behavioral Interview",
      description:
        "Practice communication, teamwork, problem-solving, and workplace scenarios.",
      questions: 8,
      type: "Behavioral",
    },
    {
      id: 3,
      title: "Project Discussion",
      description:
        "Prepare to explain your projects, decisions, challenges, and technical contributions.",
      questions: 6,
      type: "Projects",
    },
  ];

  return (
    <div>
      <PageHeader
        title="Interview Prep"
        description="Practice interview questions and prepare for conversations around your skills, projects, and target role."
      />

      {/* Main Interview Card */}
      <Card className="mb-8 overflow-hidden border-indigo-100">
        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          
          <div>
            <Badge>AI Mock Interview</Badge>

            <h2 className="mt-4 text-2xl font-bold text-slate-900">
              Practice before the real interview.
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
              Choose an interview type and practice answering questions
              relevant to your career preparation.
            </p>

            {/* Interview Type */}
            <div className="mt-6">
              <p className="mb-3 text-sm font-medium text-slate-700">
                Interview Type
              </p>

              <div className="flex flex-wrap gap-2">
                {interviewTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setInterviewType(type)}
                    className={`rounded-lg border px-4 py-2 text-sm font-medium transition ${
                      interviewType === type
                        ? "border-indigo-600 bg-indigo-600 text-white"
                        : "border-slate-200 bg-white text-slate-600 hover:border-indigo-200 hover:text-indigo-600"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              className="mt-6 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-700 active:scale-95"
            >
              Start Mock Interview →
            </button>
          </div>

          {/* Session Info */}
          <div className="rounded-2xl bg-slate-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Session Setup
            </p>

            <div className="mt-5 space-y-4">
              <div>
                <p className="text-xs text-slate-400">
                  Target Role
                </p>

                <p className="mt-1 text-sm font-semibold text-slate-900">
                  Full Stack Developer
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-400">
                  Interview Type
                </p>

                <p className="mt-1 text-sm font-semibold text-slate-900">
                  {interviewType}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-400">
                  Questions
                </p>

                <p className="mt-1 text-sm font-semibold text-slate-900">
                  10 Questions
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Practice Areas */}
      <div>
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-slate-900">
            Practice Areas
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Focus on a specific part of your interview preparation.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {practiceAreas.map((area) => (
            <Card key={area.id} hover>
              <Badge variant="neutral">
                {area.type}
              </Badge>

              <h3 className="mt-4 text-base font-semibold text-slate-900">
                {area.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {area.description}
              </p>

              <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                <span className="text-xs text-slate-400">
                  {area.questions} questions
                </span>

                <button
                  type="button"
                  className="text-sm font-medium text-indigo-600 transition hover:text-indigo-700"
                >
                  Practice →
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InterviewPrep;