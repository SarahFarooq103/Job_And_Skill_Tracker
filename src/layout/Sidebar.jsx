import { NavLink } from "react-router";

function Sidebar() {
  return (
    <aside className="flex min-h-screen w-64 flex-col border-r border-slate-200 bg-white">

      {/* Logo */}
      <div className="border-b border-slate-200 px-6 py-5">
        <h1 className="text-xl font-bold text-indigo-600">
         CareerElevate
        </h1>

        <p className="mt-1 text-xs text-slate-400">
          Your career companion
        </p>
      </div>


      {/* Navigation */}
      <nav className="flex-1 px-4 py-6">

        {/* Main */}
        <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
          Main
        </p>

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `mb-1 flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition ${
              isActive
                ? "bg-indigo-50 text-indigo-600"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            }`
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/jobs/target"
          className={({ isActive }) =>
            `mb-1 flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition ${
              isActive
                ? "bg-indigo-50 text-indigo-600"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            }`
          }
        >
          Target Job
        </NavLink>

        <NavLink
          to="/jobs/analyzer"
          className={({ isActive }) =>
            `mb-1 flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition ${
              isActive
                ? "bg-indigo-50 text-indigo-600"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            }`
          }
        >
          Job Analyzer
        </NavLink>


        {/* Career */}
        <p className="mb-2 mt-7 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
          Career
        </p>

        <NavLink
          to="/skills/gaps"
          className={({ isActive }) =>
            `mb-1 flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition ${
              isActive
                ? "bg-indigo-50 text-indigo-600"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            }`
          }
        >
          Skill Gap
        </NavLink>

        <NavLink
          to="/skills"
          className={({ isActive }) =>
            `mb-1 flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition ${
              isActive
                ? "bg-indigo-50 text-indigo-600"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            }`
          }
        >
          My Skills
        </NavLink>

        <NavLink
          to="/roadmap"
          className={({ isActive }) =>
            `mb-1 flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition ${
              isActive
                ? "bg-indigo-50 text-indigo-600"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            }`
          }
        >
          Roadmap
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `mb-1 flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition ${
              isActive
                ? "bg-indigo-50 text-indigo-600"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            }`
          }
        >
          Projects
        </NavLink>

        <NavLink
          to="/jobs/match"
          className={({ isActive }) =>
            `mb-1 flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition ${
              isActive
                ? "bg-indigo-50 text-indigo-600"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            }`
          }
        >
          Job Match
        </NavLink>


        {/* AI Tools */}
        <p className="mb-2 mt-7 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
          AI Tools
        </p>

        <NavLink
          to="/ai-coach"
          className={({ isActive }) =>
            `mb-1 flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition ${
              isActive
                ? "bg-indigo-50 text-indigo-600"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            }`
          }
        >
          AI Coach
        </NavLink>

        <NavLink
          to="/interview"
          className={({ isActive }) =>
            `mb-1 flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition ${
              isActive
                ? "bg-indigo-50 text-indigo-600"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            }`
          }
        >
          Interview Prep
        </NavLink>

      </nav>


      {/* Settings */}
      <div className="border-t border-slate-200 p-4">

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition ${
              isActive
                ? "bg-indigo-50 text-indigo-600"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            }`
          }
        >
          Settings
        </NavLink>

      </div>

    </aside>
  );
}

export default Sidebar;
