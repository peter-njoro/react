import * as React from "react";
import { caseStudies } from "../../data/data";
import { Card, CardContent } from "../../components/ui/card";

export default function CaseStudiesSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-24 bg-transparent" id="case-studies">
      <div className="flex flex-col items-center gap-1 mb-10">
        <h2 className="font-title-h2 text-font-high-emphasis text-center">Case Studies</h2>
        <div className="w-[100px] h-1 bg-[#fdc435] rounded-sm" />
      </div>

      <div className="flex justify-center w-full max-w-4xl">
        <Card className="w-full bg-white rounded-3xl shadow-lg animate-fade-in">
          <CardContent className="p-8 w-full h-full">
            {caseStudies.map((cs, index) => (
              <div key={cs.id} className="mb-12 last:mb-0 animate-fade-in" style={{ "--animation-delay": `${4200 + index * 200}ms` } as React.CSSProperties}>
                <h3 className="text-2xl font-semibold mb-2">{cs.title}</h3>
                <p className="text-gray-700 mt-2">{cs.overview}</p>
                {cs.features && cs.features.length > 0 && (
                  <>
                    <h4 className="font-semibold mt-4">Key Features:</h4>
                    <ul className="list-disc ml-6">
                      {cs.features.map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
