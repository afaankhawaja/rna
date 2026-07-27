import React from 'react';

export default function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'RNA Traders',
    url: 'https://www.rna-ksa.com',
    description: 'RNA Traders is a trusted business group in Jeddah, Saudi Arabia, offering travel, hospitality, media production, and business support services.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Jeddah',
      addressCountry: 'SA',
    },
    brand: [
      {
        '@type': 'Brand',
        name: 'RNA Condotels',
      },
      {
        '@type': 'Brand',
        name: 'RNA Production',
      },
      {
        '@type': 'Brand',
        name: 'RNA Services',
      },
      {
        '@type': 'Brand',
        name: 'RNA Travels',
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
