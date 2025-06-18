import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import Translate, {translate} from "@docusaurus/core/lib/client/exports/Translate";

import styles from './index.module.css';

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <Heading as="h1" className="hero__title">
                    <Translate id="homepage.hero.title" description="首頁歡迎標題">
                        Welcome to Sean website
                    </Translate>
                </Heading>
                <Link
                    className="button button--secondary button--lg"
                    to="/cv">
                    <Translate id="homepage.button.cv" description="首頁 CV 按鈕">
                        My CV 👨🏼‍💻
                    </Translate>
                </Link>
            </div>
        </header>
    );
}

export default function Home(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">
            <HomepageHeader/>
            <main>
                <HomepageFeatures/>
            </main>
        </Layout>
    );
}
