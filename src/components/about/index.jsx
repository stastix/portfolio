import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  const githubStatsUrl = process.env.NEXT_PUBLIC_GITHUB_STATS_URL;
  const githubStreakStatsUrl = process.env.NEXT_PUBLIC_GITHUB_STREAK_STATS_URL;

  return (
    <section className=" w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-8  md:gap-8 w-full">
        <ItemLayout className="col-span-full lg:col-span-8 row-span-2 flex-col items-start">
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            Architect of Enchantment
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base">
            My journey in web development is powered by an array of mystical
            tools and languages, with JavaScript casting the core of my
            enchantments. I wield frameworks like React.js and Next.js with
            precision, crafting seamless portals (websites) that connect realms
            (users) across the digital universe. The ancient arts of the
            Jamstack empower me to create fast, secure, and dynamic experiences,
            while my design skills ensure every creation is not only functional
            but visually captivating. Join me as I continue to explore new
            spells and technologies to shape the future of the web.
          </p>
        </ItemLayout>
        <ItemLayout className="col-span-full xs:col-span-4 lg:col-span-4 text-accent">
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            2 <sub className="font-semibold text-base">clients</sub>
          </p>
        </ItemLayout>

        <ItemLayout className="col-span-full xs:col-span-4 text-accent">
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            7+ <sub className="font-semibold text-base">projects</sub>
          </p>
        </ItemLayout>

        <ItemLayout className="lg:col-span-3">
          <img
            className="w-full h-full"
            src={`${githubStatsUrl}/api/top-langs?username=stastix&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="Achraf"
          />
        </ItemLayout>

        <ItemLayout className="col-span-full md:col-span-4">
          <img
            className="w-full h-full"
            style={{ height: "100%" }}
            src={`${githubStatsUrl}/api?username=stastix&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="Achraf github stats"
          />
        </ItemLayout>

        <ItemLayout className="col-span-full">
          <img
            className="w-full h-full"
            src={`https://skillicons.dev/icons?i=babel,bootstrap,css,docker,figma,firebase,git,github,graphql,html,js,jquery,linux,mongodb,mysql,netlify,nextjs,nodejs,npm,postgres,react,supabase,tailwind,threejs,vercel,vite,vscode,yarn,angular,java,symfony,php,c,jenkins,prometheus,grafana,spring,c#,nodejs,expressjs,flutter`}
            alt="Tech Stack"
          />
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
