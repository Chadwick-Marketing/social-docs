import React from 'react';
import Layout from '@theme/Layout';
import { useHistory } from '@docusaurus/router';

export default function Homepage() {
  const router = useHistory();

  return (
    <Layout description="" wrapperClassName="homepage">
      <div className="pad">
        <div className="center homepage-content">
          <div
            id="hero"
            className="md:w-8/12 w-11/12 m-auto border-0 border-b border-solid border-gray-300 mb-10 pb-10 pt-10"
          >
            <h2 className="text-3xl">Social Docs</h2>
            <p>Explore our guides and examples to get started with Social.</p>
            <button
              onClick={() =>
                router.push('/category/getting-started-with-social')
              }
              type="button"
              class="text-white bg-social-blue cursor-pointer flex items-center border-none hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none "
            >
              Get started
              <svg
                aria-hidden="true"
                class="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div id="check" className="md:w-8/12 w-11/12 m-auto py-10">
            <h2 className="text-xl">Recommended articles</h2>
            <div className="grid grid-cols-1 gap-5">
              <div
                onClick={() =>
                  router.push('/tutorial-basics/install-social-on-your-site')
                }
                className="card padding--lg cursor-pointer cardContainer_node_modules-@docusaurus-theme-classic-lib-theme-DocCard-styles-module"
              >
                <h5>Installing Social on your site</h5>
                <p>
                  In this tutorial, we'll show you how to install Social on your
                  site.
                </p>
              </div>
              <div
                onClick={() =>
                  router.push('/tutorial-basics/links/creating-your-first-link')
                }
                className="card padding--lg cursor-pointer cardContainer_node_modules-@docusaurus-theme-classic-lib-theme-DocCard-styles-module"
              >
                <h5>Creating your first link</h5>
                <p>
                  After installing Social, it's time to create your first link.
                  We'll explain how.
                </p>
              </div>
              <div
                onClick={() =>
                  router.push('tutorial-basics/sharing-your-bio-link-page')
                }
                className="card padding--lg cursor-pointer cardContainer_node_modules-@docusaurus-theme-classic-lib-theme-DocCard-styles-module"
              >
                <h5>Sharing your bio link page</h5>
                <p>
                  Now that you've created your link in bio page, it's time to
                  share it with your audience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
