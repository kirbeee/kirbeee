import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import { ReactNode } from 'react';
import BucketList from "@site/src/components/BucketList";

const features = [
    {
        title: 'My CV',
        link: '/cv',
        description: 'Explore my professional journey, skills, and experiences.',
    },
    {
        title: 'Learn',
        link: '/docs',
        description: 'I have learn on various topics including software engineering, Machine Learning, and more.',
    },
    {
        title: 'Blog',
        link: '/blog',
        description: 'Read my latest blog posts about software, travel, and life reflections.',
    },
];

export default function Home(): ReactNode {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Sean Lin's personal site – CV, research publications, blog posts, and more."
        >
            <header className={clsx('hero', 'py-12 sm:py-20', styles.heroBanner)}>
                <div className="container text-center">
                    <Heading as="h1" className="hero__title text-3xl sm:text-5xl">
                        Welcome to Sean Lin's Space
                    </Heading>
                </div>
            </header>

            <main>
                <section className={styles.features}>
                    <div className="container">
                        <div className="flex flex-wrap justify-center gap-6">
                            {features.map(({ title, link, description }) => (
                                <div
                                    key={title}
                                    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
                                >
                                    <Link to={link} className={clsx(styles.card, 'block p-6')}>
                                        <h3 className="text-xl mb-2">{title}</h3>
                                        <p className="text-sm mb-4">{description}</p>
                                        <span className="text-primary font-medium">Learn more →</span>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className={styles.features}>
                    <div className="container max-w-2xl mx-auto px-4">
                        <h2 className="text-2xl sm:text-3xl mb-4">About Me</h2>
                        <p className="text-base leading-relaxed">
                            Hi, I’m Sean Lin, a passionate software engineer and researcher based in Taipei.
                            I love building high-quality web applications, exploring new cultures, and publishing my
                            findings. Feel free to explore my work below!
                        </p>
                    </div>
                </section>

                <section className={styles.features}>
                    <BucketList/>
                </section>

                <section className={styles.features}>
                    <div className="container max-w-md mx-auto px-4 text-center">
                        <h2 className="text-2xl sm:text-3xl mb-4">Get In Touch</h2>
                        <p>Email: <a href="mailto:pspsean1234@gmail.com" className="text-primary">pspsean1234@gmail.com</a></p>
                    </div>
                </section>
            </main>
        </Layout>
    );
}
