import { Container } from '@/components/section';

/**
 * 法律文本页通用排版
 */
export function LegalSections({
  updated,
  sections,
}: {
  updated: string;
  sections: { id?: string; title: string; paragraphs: (string | string[])[] }[];
}) {
  return (
    <article className="py-16 sm:py-20">
      <Container className="max-w-[860px]">
        <p className="text-[13px] text-[#8a7680]">最近更新日期：{updated}</p>
        <div className="mt-8 space-y-10">
          {sections.map((section, index) => (
            <section key={section.title} id={section.id} className="scroll-mt-24">
              <h2 className="flex gap-3 text-[19px] font-bold text-[#fbf3f6]">
                <span className="text-[#ff9dc9]">{index + 1}.</span>
                {section.title}
              </h2>
              <div className="mt-3 space-y-3 pl-8 text-[14.5px] leading-8 text-[#c2acb4]">
                {section.paragraphs.map((paragraph, pIndex) =>
                  Array.isArray(paragraph) ? (
                    <ul key={pIndex} className="list-disc space-y-1.5 pl-5">
                      {paragraph.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p key={pIndex}>{paragraph}</p>
                  ),
                )}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </article>
  );
}
