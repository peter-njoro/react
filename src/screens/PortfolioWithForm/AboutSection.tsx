import * as React from "react";
import { Card, CardContent } from "../../components/ui/card";
import { about } from "../../data/data";

export default function AboutSection() {
    const [aboutExpanded, setAboutExpanded] = React.useState(false);
    const aboutWords = about[0].description.split(' ');
    const aboutPreview = aboutWords.slice(0, 20).join(' ') + (aboutWords.length > 20 ? '...' : '');

    return (
        <section className="flex flex-col items-center justify-center py-24 bg-transparent mt-0 md:mt-0 w-full px-4 sm:px-8 lg:px-16" id="about">
            <div className="flex flex-col items-center gap-1 mb-10">
                <h2 className="font-title-h2 text-font-high-emphasis text-center">{about[0].title}</h2>
                <div className="w-[100px] h-1 bg-[#fdc435] rounded-sm" />
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 w-full max-w-4xl">
                <Card className="w-full bg-white rounded-3xl shadow-lg animate-fade-in">
                    <CardContent className="p-8 w-full h-full flex flex-col md:flex-row">
                        <div className="flex-1 pr-0 md:pr-8 mb-8 md:mb-0">
                            <p className="font-normal text-font-medium-emphasis text-lg leading-[27px]">{aboutExpanded ? about[0].description : aboutPreview}</p>
                            {aboutWords.length > 20 && (
                                <button className="mt-4 px-4 py-2 bg-brand-yellow text-black rounded-2xl font-semibold shadow hover:bg-yellow-400 transition-colors" onClick={() => setAboutExpanded((prev) => !prev)}>
                                    {aboutExpanded ? 'Show Less' : 'Read More'}
                                </button>
                            )}
                        </div>
                        <div className="flex-1 pl-0 md:pl-8 flex justify-center items-center">
                            <iframe className="w-full h-48 md:h-64 rounded-2xl" src={about[0].video} title="About Me Video" width="640" height="360" allow="accelerometer; autoplay; clipboard-write encrypted-media; gyroscope; picture-in-picture" allowFullScreen frameBorder="0"></iframe>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
