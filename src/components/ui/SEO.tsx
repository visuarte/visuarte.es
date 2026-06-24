import { useEffect } from 'react';

interface SEOProps {
    title?: string;
    description?: string;
    canonical?: string;
    ogImage?: string;
    ogType?: string;
    jsonLd?: object;
}

const DEFAULT_DESCRIPTION = "VISUARTE - Productora Audiovisual & Digital. Creamos experiencias inmersivas que fusionan tecnología y arte. Especialistas en WebGL y diseño interactivo.";
const SITE_NAME = "VISUARTE";
const DEFAULT_OG_IMAGE = "https://replicateweb.vercel.app/og-image.jpg"; // Placeholder path

export function SEO({
    title,
    description = DEFAULT_DESCRIPTION,
    canonical = "https://visuarte.es",
    ogImage = DEFAULT_OG_IMAGE,
    ogType = "website",
    jsonLd
}: SEOProps) {
    useEffect(() => {
        // Update Title
        const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Digital Experiences`;
        document.title = fullTitle;

        // Update Meta Tags
        const updateMeta = (name: string, content: string, property: boolean = false) => {
            let el = document.querySelector(property ? `meta[property="${name}"]` : `meta[name="${name}"]`);
            if (!el) {
                el = document.createElement('meta');
                if (property) el.setAttribute('property', name);
                else el.setAttribute('name', name);
                document.head.appendChild(el);
            }
            el.setAttribute('content', content);
        };

        updateMeta('description', description);
        updateMeta('og:title', fullTitle, true);
        updateMeta('og:description', description, true);
        updateMeta('og:image', ogImage, true);
        updateMeta('og:type', ogType, true);
        updateMeta('og:url', window.location.href, true);
        updateMeta('twitter:card', 'summary_large_image');
        updateMeta('twitter:title', fullTitle);
        updateMeta('twitter:description', description);
        updateMeta('twitter:image', ogImage);

        // Canonical Link
        let link: HTMLLinkElement | null = document.querySelector('link[rel="canonical"]');
        if (!link) {
            link = document.createElement('link');
            link.setAttribute('rel', 'canonical');
            document.head.appendChild(link);
        }
        link.setAttribute('href', canonical);

        // JSON-LD
        if (jsonLd) {
            let script = document.querySelector('script[type="application/ld+json"]');
            if (!script) {
                script = document.createElement('script');
                script.setAttribute('type', 'application/ld+json');
                document.head.appendChild(script);
            }
            script.textContent = JSON.stringify(jsonLd);
        }

    }, [title, description, canonical, ogImage, ogType, jsonLd]);

    return null; // Component only handles side effects
}
