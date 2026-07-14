import type { IconType } from "react-icons";

interface FeatureCardProps {
  icon: IconType;
  title: string;
}

export default function FeatureCard({ icon: Icon, title }: FeatureCardProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:shadow-lg">
      <Icon className="mx-auto text-4xl text-blue-600" />

      <h3 className="mt-4 font-semibold text-slate-800">{title}</h3>
    </div>
  );
}
