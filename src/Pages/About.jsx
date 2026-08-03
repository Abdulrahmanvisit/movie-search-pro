function About() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-slate-900">About Movie Explorer Pro</h1>

      <p className="mt-4 text-slate-600 leading-relaxed">
        Movie Explorer Pro is a movie discovery application that lets you search
        for films, view detailed information about each one, and save your
        favorites to a personal watchlist that stays saved on your device.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-slate-900">Built With</h2>
      <ul className="mt-3 space-y-2 text-slate-600">
        <li>React 19</li>
        <li>Vite</li>
        <li>Tailwind CSS v4</li>
        <li>React Router DOM</li>
        <li>OMDb API</li>
        <li>Local Storage</li>
      </ul>
    </section>
  )
}

export default About