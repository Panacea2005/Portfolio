export default function StructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Panacea',
    alternateName: 'Thiên Nguyễn Lê Trương',
    url: 'https://panacea-dev.vercel.app',
    image: 'https://panacea-dev.vercel.app/og-image.png',
    email: 'ng.t.thien01@gmail.com',
    telephone: '+84931549083',
    jobTitle: 'AI Engineer & Web Developer',
    worksFor: {
      '@type': 'EducationalOrganization',
      name: 'Swinburne University of Technology',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ho Chi Minh City',
      addressCountry: 'VN',
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Swinburne University of Technology',
    },
    knowsAbout: [
      'Artificial Intelligence',
      'Machine Learning',
      'Web Development',
      'Blockchain',
      'Web3',
      'Solana',
      'Ethereum',
      'React',
      'Next.js',
      'Python',
      'JavaScript',
      'TypeScript',
    ],
    sameAs: [
      'https://github.com/Panacea2005',
      'https://www.linkedin.com/in/panaceadev',
      'https://x.com/panacea___005',
      'https://www.youtube.com/@Panacea2005',
      'https://www.instagram.com/__tthien/',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
