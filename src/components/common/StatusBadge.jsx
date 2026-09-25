function StatusBadge({ status }) {
  const styles = {
    completed: {
      label: "Completed",
      className: "bg-green-50 text-green-700 border-green-100",
    },

    "in-progress": {
      label: "In Progress",
      className: "bg-indigo-50 text-indigo-700 border-indigo-100",
    },

    "needs-work": {
      label: "Needs Work",
      className: "bg-amber-50 text-amber-700 border-amber-100",
    },

    "not-started": {
      label: "Not Started",
      className: "bg-slate-100 text-slate-600 border-slate-200",
    },

    critical: {
      label: "Critical Gap",
      className: "bg-red-50 text-red-700 border-red-100",
    },
  };

  const currentStatus = styles[status] || styles["not-started"];

  return (
    <span
      className={`
        inline-flex
        items-center
        gap-1.5
        rounded-full
        border
        px-3
        py-1
        text-xs
        font-medium
        ${currentStatus.className}
      `}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current"></span>

      {currentStatus.label}
    </span>
  );
}

export default StatusBadge;