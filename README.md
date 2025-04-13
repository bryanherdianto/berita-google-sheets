# Google Sheets News Website

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Google Scripts

[Google Apps Script](https://developers.google.com/apps-script) is a JavaScript-based language that lets you add functionality to Google Sheets, Docs, and other G Suite apps. By adding a function in the google script editor, you can create custom functions, automate tasks, and integrate with other Google services. Next, you can deploy the script as a web app, which allows you to run the function from a URL. This is useful for creating custom APIs or webhooks that can be triggered by external services. You can also set up triggers to run the script automatically at specified intervals or in response to certain events, such as form submissions or changes to a spreadsheet.

## SEO

This project includes a dynamic sitemap generation feature to enhance SEO. The sitemap is created using a serverless API route in Next.js. It combines static pages and dynamic content fetched from Google Sheets to generate a comprehensive list of URLs for the website. The sitemap is formatted in XML and includes metadata such as the last modification date, change frequency, and priority for each URL. This ensures search engines can efficiently crawl and index the website, improving its visibility in search results. Dynamic posts are fetched from a Google Apps Script web app, which acts as an API to retrieve data from Google Sheets. The sitemap is updated weekly to reflect the latest content changes, ensuring the website remains optimized for search engines.

## Deploying to Vercel

This project is deployed on Vercel with the following link: https://berita-sederhana.vercel.app