

export default function CourseFacts() {
  return (
    <>
      <section
        className="grid grid-cols-2 gap-y-8 border-y border-divider py-10 sm:grid-cols-4 sm:py-12"
        aria-label="Repères de la formation"
      >
        {[
          ["01", "journée de formation"],
          ["07", "modules progressifs"],
          ["675–695", "nm · longueur d’onde indiquée"],
          ["2 ans", "garantie appareil indiquée dans la brochure"],
        ].map(([value, label]) => (
          <div className="px-3 sm:px-6" key={value}>
            <strong className="block text-3xl font-medium tracking-[-.07em] sm:text-4xl">
              {value}
            </strong>
            <span className="mt-2 block max-w-40 text-xs leading-5 text-neutral-500">
              {label}
            </span>
          </div>
        ))}
      </section>
    </>
  );
}
