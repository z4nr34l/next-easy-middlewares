import { type ReactNode } from 'react';
import { DocsLayout } from 'fumadocs-ui/layout';
import { docs } from '@/app/source';
import { BookIcon, HomeIcon } from 'lucide-react';

export default function RootDocsLayout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      nav={{
        title: <HeaderLogo />,
      }}
      links={[
        {
          icon: <HomeIcon />,
          text: 'Home',
          url: '/',
        },
        {
          icon: <BookIcon />,
          text: 'Docs',
          url: '/docs',
          active: 'nested-url',
        },
      ]}
      tree={docs.pageTree as never}
    >
      {children}
    </DocsLayout>
  );
}

function HeaderLogo() {
  return (
    <div className="flex items-center gap-x-1">
      <img
        src="https://www.rescale.build/logo.svg"
        className="h-6"
        alt="Rescale logo"
      />
      <svg
        className="text-border h-6 w-6"
        fill="none"
        height="24"
        shapeRendering="geometricPrecision"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        width="24"
      >
        <path d="M16.88 3.549L7.12 20.451"></path>
      </svg>
      <span className="font-bold text-xl">NEMO</span>
    </div>
  );
}
