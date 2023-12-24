import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

import { Sponsors } from '@/components/Sponsors';

export async function generateMetadata({
    params: { locale },
}: {
    params: { locale: string };
}) {
    const t = await getTranslations({ locale, namespace: 'Index' });

    return {
        title: t('meta_title'),
        description: t('meta_description'),
    };
}

export default function Index() {
    return (
        <>
            <Image
                src="/assets/images/nextjs-starter-banner.png"
                alt="Nextjs starter banner"
                width={600}
                height={315}
                unoptimized
            />
            GitHub repository:{' '}
            <a href="https://github.com/ixartz/Next-js-Boilerplate">
                NextJS Boilerplate
            </a>
            <h2 className="mt-5 text-2xl font-bold">Sponsors</h2>
            <Sponsors />
            <h2 className="mt-5 text-2xl font-bold">
                Boilerplate code for your Nextjs project with Tailwind CSS
            </h2>
            <p>
                <span role="img" aria-label="rocket">
                    🚀
                </span>{' '}
                Next.js Boilerplate is a starter code for your Next js project
                by putting developer experience first .{' '}
                <span role="img" aria-label="zap">
                    ⚡️
                </span>{' '}
                Made with Next.js, TypeScript, ESLint, Prettier, Husky,
                Lint-Staged, VSCode, Netlify, PostCSS, Tailwind CSS,
                Authentication with Clerk, Database with DrizzleORM (SQLite,
                PostgreSQL, and MySQL) and Turso.
            </p>
            <h3 className="text-lg font-semibold">
                Next js Boilerplate Features
            </h3>
            <p>Developer experience first:</p>
            <ul>
                <li>
                    <span role="img" aria-label="fire">
                        🔥
                    </span>{' '}
                    <a href="https://nextjs.org" rel="nofollow">
                        Next.js
                    </a>{' '}
                    for Static Site Generator
                </li>
                <li>
                    <span role="img" aria-label="art">
                        🎨
                    </span>{' '}
                    Integrate with{' '}
                    <a href="https://tailwindcss.com" rel="nofollow">
                        Tailwind CSS
                    </a>
                </li>
                <li>
                    <span role="img" aria-label="nail_care">
                        💅
                    </span>{' '}
                    PostCSS for processing Tailwind CSS
                </li>
                <li>
                    <span role="img" aria-label="tada">
                        🎉
                    </span>{' '}
                    Type checking Typescript
                </li>
                <li>
                    <span role="img" aria-label="pencil2">
                        ✏️
                    </span>{' '}
                    Linter with{' '}
                    <a href="https://eslint.org" rel="nofollow">
                        ESLint
                    </a>
                </li>
                <li>
                    <span role="img" aria-label="hammer_and_wrench">
                        🛠
                    </span>{' '}
                    Code Formatter with{' '}
                    <a href="https://prettier.io" rel="nofollow">
                        Prettier
                    </a>
                </li>
                <li>
                    <span role="img" aria-label="fox_face">
                        🦊
                    </span>{' '}
                    Husky for Git Hooks
                </li>
                <li>
                    <span role="img" aria-label="no_entry_sign">
                        🚫
                    </span>{' '}
                    Lint-staged for running linters on Git staged files
                </li>
                <li>
                    <span role="img" aria-label="lock">
                        🔒
                    </span>{' '}
                    Authentication with{' '}
                    <a href="https://clerk.com?utm_source=github&utm_medium=sponsorship&utm_campaign=nextjs-boilerplate">
                        Clerk
                    </a>
                </li>
                <li>
                    <span role="img" aria-label="package">
                        📦
                    </span>{' '}
                    Type-safe ORM with DrizzleORM, compatible with SQLite,
                    PostgreSQL, and MySQL
                </li>
                <li>
                    <span role="img" aria-label="computer_disk">
                        💽
                    </span>{' '}
                    Global Database with{' '}
                    <a href="https://turso.tech/?utm_source=nextjsstarterbp">
                        Turso
                    </a>
                </li>
                <li>
                    <span role="img" aria-label="no_entry_sign">
                        🗂
                    </span>{' '}
                    VSCode configuration: Debug, Settings, Tasks and extension
                    for PostCSS, ESLint, Prettier, TypeScript
                </li>
                <li>
                    <span role="img" aria-label="robot">
                        🤖
                    </span>{' '}
                    SEO metadata, JSON-LD and Open Graph tags with Next SEO
                </li>
                <li>
                    <span role="img" aria-label="robot">
                        ⚙️
                    </span>{' '}
                    <a
                        href="https://www.npmjs.com/package/@next/bundle-analyzer"
                        rel="nofollow"
                    >
                        Bundler Analyzer
                    </a>
                </li>
                <li>
                    <span role="img" aria-label="rainbow">
                        🌈
                    </span>{' '}
                    Include a FREE minimalist theme
                </li>
                <li>
                    <span role="img" aria-label="hundred">
                        💯
                    </span>{' '}
                    Maximize lighthouse score
                </li>
            </ul>
            <p>Built-in feature from Next.js:</p>
            <ul>
                <li>
                    <span role="img" aria-label="coffee">
                        ☕
                    </span>{' '}
                    Minify HTML &amp; CSS
                </li>
                <li>
                    <span role="img" aria-label="dash">
                        💨
                    </span>{' '}
                    Live reload
                </li>
                <li>
                    <span role="img" aria-label="white_check_mark">
                        ✅
                    </span>{' '}
                    Cache busting
                </li>
            </ul>
            <h3 className="text-lg font-semibold">
                Our Starter code Philosophy
            </h3>
            <ul>
                <li>Minimal code</li>
                <li>SEO-friendly</li>
                <li>
                    <span role="img" aria-label="rocket">
                        🚀
                    </span>{' '}
                    Production-ready
                </li>
            </ul>
            <p>
                Check our GitHub project for more information about{' '}
                <a href="https://github.com/ixartz/Next-js-Boilerplate">
                    Nextjs Boilerplate
                </a>
                .
            </p>
        </>
    );
}
