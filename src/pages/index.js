import React from 'react';
import Layout from '@theme/Layout';
import { useHistory } from '@docusaurus/router';

export default function Homepage() {
  const router = useHistory();

  return (
    <Layout
      description="Real-time audio & video SDKs, ready to launch 🚀"
      wrapperClassName="homepage"
    >
      <div className="pad">
        <div className="center homepage-content">
          <div id="hero" className="w-6/12 m-auto">
            <h2>Social Docs</h2>
            <p>
              Explore our guides and examples to integrate Dyte easily into your
              apps.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
