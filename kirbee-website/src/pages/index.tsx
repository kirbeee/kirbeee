import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import {ReactNode} from 'react';
import Translate ,{translate} from "@docusaurus/Translate";

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

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return(
        <header className={clsx(styles.heroBanner)}>
            <Heading as="h1" className="hero__title">
                <Translate id="homepage.title">Welcome to Sean Lin's Space</Translate>
            </Heading>
        </header>
    )
}

export default function Home(): ReactNode {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Sean Lin's personal site – CV, research publications, blog posts, and more."
        >
            <HomepageHeader/>

            <main>
                <section className={styles.features}>
                    {/* 加入 container 確保內容在大螢幕時不會無限展開，並保持水平置中 */}
                    <div className="container">
                        {/* 使用 row 讓子元素可以水平排列 */}
                        <div className="row">
                            {features.map(({title, link, description}) => (
                                <div key={title} className={clsx('col col--4')}>
                                    <Link to={link} className={clsx('card', styles.featureCard)}>
                                        <div className="card__header">
                                            <h3>{title}</h3>
                                        </div>
                                        <div className="card__body">
                                            <p>{description}</p>
                                        </div>
                                        <div className="card__footer">
                                            <span className="button button--secondary button--block">
                                                Learn more →
                                            </span>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
}
