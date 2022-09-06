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
          <div id="hero" className="md:w-6/12 w-11/12 m-auto pt-10">
            <h2 className="text-4xl">Social Docs</h2>
            <p>
              Explore our guides and examples to integrate Social easily into
              your apps.
            </p>
            <button
              type="button"
              class="text-white bg-social-blue hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none "
            >
              Get started
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
