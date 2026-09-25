import { Link } from "react-router-dom";

const Home = () => {
  const features = [
    {
      number: "01",
      title: "Analyze Any Job",
      description:
        "Paste a job description and identify the skills, technologies, and experience the role requires.",
    },
    {
      number: "02",
      title: "Discover Skill Gaps",
      description:
        "Compare job requirements with your current skills and see exactly where you need to improve.",
    },
    {
      number: "03",
      title: "Get Your Roadmap",
      description:
        "Turn your skill gaps into a structured learning path focused on your target role.",
    },
    {
      number: "04",
      title: "Build Proof",
      description:
        "Create projects that demonstrate the skills employers are looking for.",
    },
    {
      number: "05",
      title: "Prepare for Interviews",
      description:
        "Practice technical, behavioral, and project-based interview questions.",
    },
    {
      number: "06",
      title: "Ask Your AI Coach",
      description:
        "Get contextual guidance about what to learn, build, and improve next.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">

      {/* Navbar */}
      <header className="border-b border-slate-100">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <Link
            to="/"
            className="text-xl font-bold tracking-tight text-indigo-600"
          >
            CareerElevate
          </Link>

          <nav className="flex items-center gap-3">
            <Link
              to="/login"
              className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
            >
              Log in
            </Link>

            <Link
              to="/register"
              className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-700"
            >
              Get Started
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <main>
        <section className="relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute left-1/2 top-0 -z-10 h-125 w-200 -translate-x-1/2 rounded-full bg-indigo-100/50 blur-3xl" />

          <div className="mx-auto max-w-7xl px-6 pb-24 pt-20 text-center lg:px-8 lg:pb-32 lg:pt-28">

            <div className="mx-auto mb-6 inline-flex rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-xs font-semibold text-indigo-700">
              AI-powered career preparation
            </div>

            <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Stop guessing what to learn.
              <span className="block text-indigo-600">
                Build toward the job you want.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
              Turn any job description into a personalized path from your
              current skills to the skills, projects, and interview preparation
              your target role requires.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/register"
                className="w-full rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-md sm:w-auto"
              >
                Build My Career Path →
              </Link>

              <a
                href="#how-it-works"
                className="w-full rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 sm:w-auto"
              >
                See How It Works
              </a>
            </div>

            <p className="mt-5 text-xs text-slate-400">
              Target role → skill gaps → roadmap → projects → interview prep
            </p>
          </div>
        </section>

        {/* Product Preview */}
        <section className="px-6 pb-24 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-3xl border border-slate-200 bg-slate-950 p-3 shadow-2xl shadow-slate-200/60">

              <div className="rounded-2xl bg-white p-6 sm:p-8">
                <div className="flex flex-col justify-between gap-6 border-b border-slate-100 pb-6 sm:flex-row sm:items-center">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                      Career Readiness
                    </p>

                    <h2 className="mt-2 text-xl font-bold">
                      Full Stack Developer
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                      Your personalized preparation overview
                    </p>
                  </div>

                  <div>
                    <span className="text-3xl font-bold text-indigo-600">
                      67%
                    </span>

                    <p className="text-xs text-slate-400">
                      tracked requirements
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {[
                    ["Skills Matched", "8 / 12"],
                    ["Roadmap", "34%"],
                    ["Projects", "2 / 5"],
                    ["Interview", "Not started"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-xl bg-slate-50 p-4"
                    >
                      <p className="text-xs text-slate-400">
                        {label}
                      </p>

                      <p className="mt-2 font-semibold text-slate-900">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section
          id="how-it-works"
          className="bg-slate-50 px-6 py-24 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-indigo-600">
                HOW IT WORKS
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                One path from job description to job-ready.
              </h2>

              <p className="mt-4 leading-7 text-slate-500">
                Instead of using separate tools for learning, projects, and
                interview preparation, RolePath AI connects them around the
                role you're targeting.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.number}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg hover:shadow-slate-200/50"
                >
                  <span className="text-sm font-bold text-indigo-500">
                    {feature.number}
                  </span>

                  <h3 className="mt-5 text-lg font-semibold text-slate-900">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Journey */}
        <section className="px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-sm font-semibold text-indigo-600">
              YOUR JOURNEY
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              Know exactly what comes next.
            </h2>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-3 text-sm font-medium">
              {[
                "Target Role",
                "Job Analysis",
                "Skill Gaps",
                "Roadmap",
                "Projects",
                "Interview",
                "Job Ready",
              ].map((step, index, array) => (
                <div
                  key={step}
                  className="flex items-center gap-3"
                >
                  <span className="rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-indigo-700">
                    {step}
                  </span>

                  {index < array.length - 1 && (
                    <span className="text-slate-300">
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 pb-24 lg:px-8">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-linear-to-br from-indigo-600 to-violet-600 px-6 py-14 text-center text-white sm:px-12">

            <h2 className="text-3xl font-bold tracking-tight">
              Start building toward your target role.
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-indigo-100">
              Define where you want to go, understand what's missing, and turn
              that gap into a clear path forward.
            </p>

            <Link
              to="/register"
              className="mt-7 inline-flex rounded-xl bg-white px-6 py-3 text-sm font-semibold text-indigo-700 transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Get Started Free →
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <span className="font-semibold text-slate-700">
            SkillBridge AI
          </span>

          <span>
            Build skills. Prove them. Get ready.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Home;