import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Metadata } from 'next';
import { Section } from '@/components/ui/section';
import { GlobeIcon, MailIcon, PhoneIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { RESUME_DATA } from '@/data/resume-data';
import { ProjectCard } from '@/components/resume/project-card';

import Header from '@/components/Header';
import { PrintButton } from '@/components/PrintButton';

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
};

export default function Page() {
  return (
    <main>
      <div className="print:hidden">
        <Header />
        <PrintButton />
      </div>
      <div className="container relative mx-auto overflow-auto p-4 pt-0 md:p-16 md:pt-4 print:p-0">
        <section className="mx-auto w-full max-w-2xl space-y-8 print:space-y-6 print:bg-white print:text-black">
          <div className="flex items-center justify-between">
            <div className="flex-1 space-y-1.5">
              <h1 className="text-2xl font-bold">{RESUME_DATA.name}</h1>
              <p className="text-muted-foreground max-w-md text-pretty font-mono text-sm">
                {RESUME_DATA.about}
              </p>
              <p className="text-muted-foreground max-w-md items-center text-pretty font-mono text-xs">
                <a
                  className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                  href={RESUME_DATA.locationLink}
                  target="_blank"
                >
                  <GlobeIcon className="h-3 w-3" />
                  {RESUME_DATA.location}
                </a>
              </p>
              <div className="text-muted-foreground flex gap-x-1 pt-1 font-mono text-sm print:hidden">
                {RESUME_DATA.contact.email ? (
                  <Button
                    className="h-8 w-8"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a href={`mailto:${RESUME_DATA.contact.email}`}>
                      <MailIcon className="h-4 w-4" />
                    </a>
                  </Button>
                ) : null}
                {RESUME_DATA.contact.tel ? (
                  <Button
                    className="h-8 w-8"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a href={`tel:${RESUME_DATA.contact.tel}`}>
                      <PhoneIcon className="h-4 w-4" />
                    </a>
                  </Button>
                ) : null}
                {RESUME_DATA.contact.social.map((social) => (
                  <Button
                    key={social.name}
                    className="h-8 w-8"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a href={social.url}>
                      <social.icon className="h-4 w-4" />
                    </a>
                  </Button>
                ))}
              </div>
              <div className="text-muted-foreground hidden flex-col gap-x-1 font-mono text-sm print:flex">
                {RESUME_DATA.contact.email ? (
                  <a href={`mailto:${RESUME_DATA.contact.email}`}>
                    <span className="underline">
                      {RESUME_DATA.contact.email}
                    </span>
                  </a>
                ) : null}
                {RESUME_DATA.contact.tel ? (
                  <a href={`tel:${RESUME_DATA.contact.tel}`}>
                    <span className="underline">{RESUME_DATA.contact.tel}</span>
                  </a>
                ) : null}
              </div>
            </div>

            <Avatar className="h-28 w-28">
              <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} />
              <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
            </Avatar>
          </div>
          <Section>
            <h2 className="text-xl font-bold">About</h2>
            <p className="text-muted-foreground text-pretty font-mono text-sm">
              {RESUME_DATA.summary}
            </p>
          </Section>
          <Section>
            <h2 className="text-xl font-bold">Work Experience</h2>
            {RESUME_DATA.work.map(
              (
                work: Omit<(typeof RESUME_DATA)['work'][number], 'link'> & {
                  link?: string;
                }
              ) => {
                return (
                  <Card key={work.company}>
                    <CardHeader>
                      <div className="flex items-center justify-between gap-x-2 text-base">
                        <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                          {work?.link ? (
                            <a
                              className="hover:underline"
                              href={work.link}
                              target="_blank"
                            >
                              {work.company}
                            </a>
                          ) : (
                            <span>{work.company}</span>
                          )}

                          <span className="inline-flex gap-x-1">
                            {work.badges.map((badge) => (
                              <Badge
                                variant="secondary"
                                className="align-middle text-xs"
                                key={badge}
                              >
                                {badge}
                              </Badge>
                            ))}
                          </span>
                        </h3>
                        <div className="text-sm tabular-nums text-gray-500">
                          {work.start} - {work.end}
                        </div>
                      </div>

                      <h4 className="font-mono text-sm leading-none">
                        {work.title}
                      </h4>
                    </CardHeader>
                    <CardContent className="mt-2 text-xs">
                      {work.description}
                    </CardContent>
                  </Card>
                );
              }
            )}
          </Section>
          {/* <Section>
            <h2 className="text-xl font-bold">Education</h2>
            {RESUME_DATA.education.map((education) => {
              return (
                <Card key={education.school}>
                  <CardHeader>
                    <div className="flex items-center justify-between gap-x-2 text-base">
                      <h3 className="font-semibold leading-none">
                        {education.school}
                      </h3>
                      <div className="text-sm tabular-nums text-gray-500">
                        {education.start} - {education.end}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="mt-2">{education.degree}</CardContent>
                </Card>
              );
            })}
          </Section> */}
          <Section className="break-before-page">
            <h2 className="text-xl font-bold">Skills</h2>
            <div className="flex flex-wrap gap-1">
              {RESUME_DATA.skills.map((skill) => {
                return <Badge key={skill}>{skill}</Badge>;
              })}
            </div>
          </Section>

          {RESUME_DATA.projects.length > 0 && (
            <Section className="scroll-mb-16">
              <div className="print:m-4">
                <h2 className="text-xl font-bold print:mb-2">Projects</h2>
                <div className="-mx-3 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 print:gap-2">
                  {RESUME_DATA.projects.map((project) => {
                    return (
                      <ProjectCard
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        tags={project.techStack}
                        link={'link' in project ? project.link.href : undefined}
                      />
                    );
                  })}
                </div>
              </div>
            </Section>
          )}
        </section>
      </div>
    </main>
  );
}
