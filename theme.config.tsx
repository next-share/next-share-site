import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – next-share'
      }
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="next-share" />
      <meta property="og:description" content="A social share buttons plugin for Next.js, Create React App, Gatsby.js as well as React apps." />
    </>
  ),
  logo: <span>next-share</span>,
  project: {
    link: 'https://github.com/bunlong/next-share',
  },
  // chat: {
  //   link: 'https://discord.com',
  // },
  docsRepositoryBase: 'https://github.com/next-share/next-share-site',
  footer: {
    text:
      <center>
        <span>
          next-share by <a href="https://github.com/bunlong" target="_blank">Bunlong</a> <br/> © 2022-{new Date().getFullYear()}
        </span>
      </center>
  }
}

export default config
