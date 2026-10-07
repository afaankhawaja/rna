import React from 'react';
import { PHONE_TEL } from '../Shared/contact';

export default function JsonLd() {
  const baseUrl = 'https://www.rna-ksa.com';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${baseUrl}/#organization`,
    name: 'RNA Traders',
    alternateName: 'Rising New Arabia Traders',
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    image: `${baseUrl}/opengraph-image.png`,
    description: 'RNA Traders is a trusted business group in Jeddah, Saudi Arabia, offering travel, hospitality, media production, and business support services.',
    telephone: PHONE_TEL,
    email: 'contact@rna-ksa.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '8376 Hail St. Al Baghdadia',
      addressLocality: 'Jeddah',
      addressCountry: 'SA',
    },
    areaServed: 'SA',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: PHONE_TEL,
        email: 'contact@rna-ksa.com',
        contactType: 'customer service',
        areaServed: 'SA',
      },
    ],
    sameAs: [
      'https://www.facebook.com/profile.php?id=61594794484647',
      'https://www.instagram.com/rna__traders/',
      'https://www.facebook.com/profile.php?id=61594993436026',
      'https://www.instagram.com/rna__production/',
    ],
    brand: [
      { '@type': 'Brand', name: 'RNA Travels', url: `${baseUrl}/rna-travels` },
      { '@type': 'Brand', name: 'RNA Condotels', url: `${baseUrl}/rna-condotels` },
      { '@type': 'Brand', name: 'RNA Production', url: `${baseUrl}/rna-production` },
      { '@type': 'Brand', name: 'RNA Services', url: `${baseUrl}/rna-services` },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
