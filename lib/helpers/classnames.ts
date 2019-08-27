const classNames: (...names: (string | undefined)[]) => string = function(
  ...names
) {
  return names.filter(Boolean).join(" ");
};

export default classNames;

