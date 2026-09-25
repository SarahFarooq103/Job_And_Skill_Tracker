function NextAction({
  eyebrow = "Your Next Move",
  title,
  description,
  actionLabel = "Continue",
  onAction,
}) {
  return (
    <div
      className="
        overflow-hidden
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
      <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
        {eyebrow}
      </p>

      <h2 className="mt-2 text-lg font-semibold text-slate-900">
        {title}
      </h2>

      <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
        {description}
      </p>

      <button
        type="button"
        onClick={onAction}
        className="
          mt-5
          inline-flex
          items-center
          gap-2
          rounded-lg
          bg-indigo-600
          px-4
          py-2.5
          text-sm
          font-medium
          text-white
          transition
          duration-200
          hover:bg-indigo-700
          active:scale-95
        "
      >
        {actionLabel}
        <span aria-hidden="true">→</span>
      </button>
    </div>
  );
}

export default NextAction;