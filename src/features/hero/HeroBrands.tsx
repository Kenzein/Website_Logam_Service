import { brands } from "./hero.data";

export default function HeroBrands() {
  return (
    <div className="mt-10">
      <p className="mb-4 text-center text-sm uppercase tracking-widest text-shadow-black">
        Kami Melayani
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-4 py-2"
          >
            <span className={`h-3 w-3 rounded-full ${brand.color}`} />
            <span className="font-semibold text-slate-800">{brand.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
