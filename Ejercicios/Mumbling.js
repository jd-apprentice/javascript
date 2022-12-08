function accum(s) {
  return s
    .split("")
    .map(
      (letter, i) => letter.toUpperCase() + letter.toLowerCase().repeat(i) + "-"
    )
    .join("")
    .slice(0, -1);
}
