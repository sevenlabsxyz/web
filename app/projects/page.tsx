import { Navigation } from "../components/nav";
import { ExternalLink } from "lucide-react";
import { Card } from "../components/card";
import Link from "next/link";
import React from "react";

export const revalidate = 60;
export default async function ProjectsPage() {
  return (
    <div className='relative pb-16'>
      <Navigation />
      <div className='px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32'>
        <div className='max-w-2xl mx-auto lg:mx-0'>
          <h2 className='text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl'>
            Projects
          </h2>
          <p className='mt-4 text-zinc-400'>
            Products and services by Seven Labs.
          </p>
        </div>
        <div className='w-full h-px bg-zinc-800' />

        <div className='grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 '>
          <Card>
            <Link href={`https://evento.so`}>
              <article className='relative w-full h-full p-4 md:p-8'>
                <div className='flex items-center justify-between gap-2'>
                  <div className='text-xs text-zinc-100'>
                    <span>BETA</span>
                  </div>
                  <span className='flex items-center gap-1 text-xs text-zinc-500'>
                    <ExternalLink className='w-4 h-4' />
                  </span>
                </div>

                <h2
                  id='featured-post'
                  className='mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display'
                >
                  Evento
                </h2>
                <p className='mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300 mb-12'>
                  User-friendly social events app -- evento.so
                </p>
                <div className='absolute bottom-4 md:bottom-8'>
                  <p className='hidden text-zinc-200 hover:text-zinc-50 lg:block'>
                    Read more <span aria-hidden='true'>&rarr;</span>
                  </p>
                </div>
              </article>
            </Link>
          </Card>

          {/* <div className='flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 '>
            {[top2, top3].map((project) => (
              <Card key={project.slug}>
                <Article
                  project={project}
                  views={views[project.slug] ?? 0}
                />
              </Card>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
}
