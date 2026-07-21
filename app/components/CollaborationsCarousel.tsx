'use client'

type Project = {
    imageSrc: string;
    alt: string;
    backgroundColor?: string;
}

const projects: Project[] = [
    { imageSrc: '/projects/kite.svg', alt: 'Kite.Site' },
    { imageSrc: '/projects/betterlabs.svg', alt: 'KNKT', backgroundColor: '#2a70f2' },
    { imageSrc: '/projects/vendaly.png', alt: 'Vendaly' },
    { imageSrc: '/projects/knkt.png', alt: 'KNKT', backgroundColor: '#101010' },
    { imageSrc: '/projects/west-sure.png', alt: 'West-Sure', backgroundColor: '#233690' },
    { imageSrc: '/projects/scriptoai.svg', alt: 'ScriptoAI' },
    { imageSrc: '/projects/purple-circle.webp', alt: 'Purple Circle Financial Services' },
];

const ProjectCard = ({ project }: { project: Project }) => (
    <div
        className="w-[300px] h-[150px] sm:w-[200px] sm:h-[100px] md:w-[300px] md:h-[150px] flex items-center justify-center rounded-lg p-4 mx-4"
        style={{ backgroundColor: project.backgroundColor || 'white' }}
    >
        <img
            src={project.imageSrc}
            alt={project.alt}
            className="max-w-full max-h-full object-contain"
        />
    </div>
);

const ProjectSlideContainer = () => (
    <div className="flex shrink-0">
        {projects.map((project, index) => (
            <ProjectCard key={`${project.alt}-${index}`} project={project} />
        ))}
    </div>
);

export default function CollaborationsCarousel() {
    return (
        <section className="overflow-hidden py-16" aria-label="Project Carousel">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
                Our Collaborations
            </h2>
            <div className="relative">
                <div className="flex animate-infinite-scroll-xs sm:animate-infinite-scroll">
                    <ProjectSlideContainer />
                    <ProjectSlideContainer />
                </div>
            </div>
        </section>
    );
} 