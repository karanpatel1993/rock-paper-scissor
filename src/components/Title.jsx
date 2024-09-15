export default function Title({ title, icon }) {
  return (
    <h1 className="mb-8 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl">
      {icon && <span>{icon} </span>}
      <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
        {title}
      </span>
    </h1>
  );
}
