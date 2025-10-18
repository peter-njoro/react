import * as React from "react";
import { achievements } from "../../data/data";
import { Card, CardContent } from "../../components/ui/card";

export default function AchievementsSection(): React.ReactElement {
  return (
    <section className="w-full flex flex-col items-center justify-center py-24 bg-transparent" id="achievements">
      <div className="flex flex-col items-center gap-1 mb-10">
        <h2 className="font-title-h2 text-font-high-emphasis text-center">Achievements</h2>
        <div className="w-[100px] h-1 bg-[#fdc435] rounded-sm" />
        <p className="text-font-medium-emphasis mt-2">A snapshot of projects, innovations, and recognitions that shaped my journey.</p>
      </div>
      <div className="flex justify-center w-full max-w-4xl">
        <Card className="w-full bg-white rounded-3xl shadow-lg animate-fade-in">
          <CardContent className="p-8 w-full h-full">
            <div className="grid gap-8 md:grid-cols-2">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-300 animate-fade-in"
                  style={{ "--animation-delay": `${3200 + index * 200}ms` } as React.CSSProperties}
                >
                  <h3 className="text-xl font-semibold mb-2 text-primary-600">{achievement.title}</h3>
                  <p className="text-gray-700 mb-4">{achievement.description}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{achievement.date}</span>
                    {achievement.link && (
                      <a
                        href={achievement.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline font-medium"
                      >
                        View
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
