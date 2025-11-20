import Image from "next/image";

interface Step {
  number: string;
  title: string;
  description: string;
  details: string[];
  svgPath: string;
}

interface StepCardProps {
  step: Step;
  index: number;
}

export function StepCard({ step, index }: StepCardProps) {
  return (
    <div className="relative flex items-center justify-center p-4 min-h-[300px]">
      {/* Giant Background Number - Always white */}
      <div
        className={`absolute -top-12 -left-4 sm:-top-16 sm:-left-6 md:-top-20 md:-left-8 lg:-top-28 lg:-left-6 text-[120px] sm:text-[160px] md:text-[200px] font-heading-variant font-bold leading-none pointer-events-none select-none z-0 italic lg:-left-12
        } z-50 `}
        style={{
     background:
         "linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.3) 100%)",
        WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {step.number}
      </div>

      {/* Card */}
      <div
        className="relative z-10 rounded-xl border border-white/20 backdrop-blur-sm overflow-hidden w-full h-full"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
        }}
      >
        {/* Card Content */}
        <div className="p-5 flex flex-col relative z-10 min-h-[450px]">
          {/* SVG Pattern */}
          <div className="flex items-center justify-center mb-5 relative h-[120px]">
            <div className="w-full h-full flex items-center justify-center">
              <Image
                src={step.svgPath}
                alt={`${step.title} pattern`}
                width={140}
                height={140}
                className="w-full h-full max-w-[120px] max-h-[120px] object-contain opacity-70"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 flex flex-col">
            <h3 className="text-xl font-heading font-bold text-white mb-2 leading-tight">
              {step.title}
            </h3>
            <p className="text-sm text-gray-300 mb-2 leading-relaxed">
              {step.description}
            </p>

            {step.details.length > 0 && (
              <div className="space-y-1.5 mt-3">
                {step.details.map((detail, i) => (
                  <p
                    key={i}
                    className="text-xs text-gray-400 italic leading-relaxed"
                  >
                    {detail}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
