import Image from "next/image";
import bg from "../../../../public/background/contact-background.png";
import Form from "@/components/contact/Form";

export const metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt="Next.js Portfolio website's contact page background image"
        priority
        sizes="100vw"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            summon the wizard
          </h1>
          <p className="text-center font-light text-sm xs:text-base">
            Yo, welcome to the ✨vibe zone✨ where chaos is the aesthetic and
            magic is the whole damn mood. Not gonna lie, if you’re here to squad
            up for collabs, spill the juiciest tea, or drop your most savage
            takes, you’re about to vibe like a whole skibidi. Your words?
            Straight-up rare Pokémon cards—undefeated and iconic. Drop your
            message below, and who knows, the universe might just slide back
            with some *straight fire*. Also, real talk: help a wizard out—I’m
            cooked out here battling the holy trinity of Gen Z struggles— TikTok
            brainrot, caffeine dependency, and a job market that’s *mid* af. The
            grind is savage, but this dragon of despair ain’t gonna slay itself.
            Let’s manifest that bag, get a LinkedIn glow-up, and level up our
            whole vibe. Cast your spell (or slide into the DMs, no cap), every
            bit helps. Let’s vibe and thrive, fam. 🪄💼✨
          </p>
        </div>
        <Form />
      </article>
    </>
  );
}
