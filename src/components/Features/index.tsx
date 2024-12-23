import { Code2, RefreshCw, Zap } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "JSON Beautifier",
    description:
      "Format and validate JSON with syntax highlighting and error detection.",
  },
  {
    icon: RefreshCw,
    title: "cURL Converter",
    description:
      "Convert cURL commands to various programming languages and back.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Native macOS app built for speed and efficiency.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-20 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
          Everything You Need
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-secondary p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-border"
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-foreground/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
