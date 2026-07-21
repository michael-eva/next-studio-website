type Client = {
    imageSrc: string;
    alt: string;
    backgroundColor?: string;
    imgClassName?: string;
}

const clients: Client[] = [
    { imageSrc: '/projects/kite.svg', alt: 'Kite.Site' },
    { imageSrc: '/projects/betterlabs.svg', alt: 'BetterLabs', backgroundColor: '#2a70f2' },
    { imageSrc: '/projects/vendaly.png', alt: 'Vendaly' },
    { imageSrc: '/projects/knkt.png', alt: 'KNKT', backgroundColor: '#101010' },
    { imageSrc: '/projects/west-sure.png', alt: 'West-Sure', backgroundColor: '#233690' },
    { imageSrc: '/projects/scriptoai.svg', alt: 'ScriptoAI' },
    { imageSrc: '/projects/purple-circle.webp', alt: 'Purple Circle Financial Services' },
    { imageSrc: '/projects/coursebox.webp', alt: 'Coursebox AI', backgroundColor: '#AD24E7' },
    { imageSrc: '/projects/dr-analytics.webp', alt: 'DR Analytics' },
    { imageSrc: '/projects/epca-white.png', alt: 'EPCA — Electric Power Conversions Australia', backgroundColor: '#0E1B2C' },
];

const ClientLogo = ({ client }: { client: Client }) => (
    <div
        className="flex items-center justify-center rounded-lg p-6 transition-transform hover:scale-105"
        style={{ backgroundColor: client.backgroundColor || 'white' }}
    >
        <img
            src={client.imageSrc}
            alt={client.alt}
            className={`max-w-full max-h-full object-contain ${client.imgClassName || 'h-16 w-auto'}`}
        />
    </div>
);

export default function ClientLogos() {
    return (
        <section className="py-12 sm:py-16 bg-[--card] border-y border-[--line]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-8 sm:mb-10">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[--ink] mb-2 font-display">
                        Businesses I've worked with
                    </h2>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 items-center">
                    {clients.map((client, index) => (
                        <ClientLogo key={`${client.alt}-${index}`} client={client} />
                    ))}
                </div>
            </div>
        </section>
    );
}
