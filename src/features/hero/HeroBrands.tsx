import { brands } from "./hero.data";

export default function HeroBrands() {
  return (
    <div className="mt-10">
      <p className="mb-4 text-center text-sm uppercase tracking-widest text-gray-400">
        Kami Melayani
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2"
          >
            <span className={`h-3 w-3 rounded-full ${brand.color}`} />
            <span className="font-semibold text-white">{brand.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
