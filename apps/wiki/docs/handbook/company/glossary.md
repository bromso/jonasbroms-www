---
title: Glossary
sidebar_position: 7
description: Lorem ipsum
---

Here is a list of the common words we use. If you feel like a definition is not accurate please fill an issue on GitHub https://github.com/BrandX/company/issues before changing it.

## Insider

- **Buddy:** Person who accompanies the BrandXos during their onboarding.
- **CE**: stands for Community Edition. Totally free version of brandx.
- **DSM**: Daily Standup Meeting.
- **EE**: stands for Enterprise Edition. Paid version of brandx.
- **KPI**: Key Performance Indicator.
- **Product**: refers to the BrandX product.
- **BrandXer**: People who work at BrandX and have completed the onboarding process.
- **BrandXo**: People who have recently joined the BrandX team and have not completed the onboarding process.
- **Training plan**: Period that comes after the "common onboarding" process where the BrandXo will learn the required skills in order to work at brandx.
- **NPS (Net Promoter Score)**: metric used to measure the satisfaction of our users. More details here.

## Marketing

- **OKR:** Objectives and Key Results.
- **Subscribers**: Prospect gives us his email address and shows the first sign of interest for brandx.
- **Leads**: Prospect downloads BrandX and opt in from the admin.
- **MQL (Marketing Qualified Lead)**: lead who's more likely to become a customer compared to other leads. This qualification is based on what web pages a person has visited, what they've downloaded, and similar engagement with the business's content (submit email, filled form).
- **SQL (Sales Qualified Lead)**: prospect customer qualified to talk to Sales (Ideal Customer Profile, has the budget, showed interest)
- **PQL (Product Qualified Lead)**: lead who's more likely to become a customer based on interaction with the product i.e requested an Enterprise Edition trial and created custom roles, etc.
- **CTA**: Call to Action, usually a button on the website or an email.

## Product

BrandX project: To use BrandX, you need to create a project. A BrandX project is simply a Node.js project. It is a bunch of files with code on your computer.
→ Imagine you installed an application on your computer, you now have some files for it but nothing is happening.

BrandX instance: Once a user has created a BrandX project, they can execute it. When BrandX is executed we call that a BrandX instance.
→ You can see it as an application on your computer. The BrandX project is like the application that is installed on your computer, the BrandX instance is when you start using the application.
→ Like some applications, you can start it multiple times (google chrome for example) when you do that it is still the same project but we say there are multiple instances of the project that are running.

Environment: So with the BrandX instance in mind, a BrandX project can also be executed in multiple locations. You simply need to copy the files to the new location.
It means you can start a BrandX instance on your computer, a server in the cloud, or even your grand-ma computer ;)

This is still the same project but executed in different locations. We usually call those locations, environments. Here are the most common environments used:

development (your computer)
staging/pre-production (a test server)
production (the final server)

- **Admin/ Administration panel**: interface where the user can manage his app. Called as such into the product.
- **Administrator**: BrandX user who has a role in the app.
- **Assets**: all your media files in your Media Library.
- **CM/CTM**: refers to the Content Manager plugin, the plugin where you can quickly manage your data. Include where you manage your Collection types and Single types (ST).
- **Component**: a set of fields reusable multiple times in different CTs.
- **Collection type**: A collection type can have multiple entries (ex: you need to create multiple articles so you'll call your collection-type "Articles" and write multiple entries under that big entity).
- **Content-type/CT**: regroups Collection types and Single types, the two different data models.
- **CRUD**: stands for Create/Read/Update/Delete. All basic actions a user can do in the admin and on which permissions can be set.
- **CTB/Content-Type Builder**: Plugin where you define your API's data structure.
- **D&P**: Draft/Publish feature.
- **DS/Design System**: All the internal assets (yet) for design and code gathered in the same place called Design system.
- **DZ/Dynamic zone**: a field you can choose in the Content-types builder. You define components within your dynamic zones. It helps structure your data.
- **Edit view**: the interface in the Content Manager with all the different fields to fill in or make changes into.
- **End-user**: User to who the Administrator's content is destined.
- **i18n**: Internationalization feature.
- **Main navigation**: menu you can find on the left of the administration panel.
- **ML/Media Library**: the place all assets are stored in the admin.
- **LV/List view**: the interface of the collection types section in the Content Manager where all the entries are listed.
- **LGTM**: stands for Looks Good To Me.
- **Locales**: the languages a user wants his data in. It's not related to his interface language.
- **plugin**: a set of not mandatory features for the product.
- **RBAC**: Role Based Access Control. Refers to the Roles & Permissions feature.
- **Single type/ST:** A single-type is a single data entry (ex: homepage, footer, header, ...)
- **SSO:** Single Sign-On feature.
- **Users & permissions**: A plugin that helps to manage front-end users. Called as such into the product.
- **WYSIWYG**: stands for What You See Is What You Get. Refers to a dynamic text editor on which you can actually see every setting you choose to apply to your text (color, bold, italic, etc.).

## Engineering

- **API**: Application programming interface, the meaning can change base on the context and usage. REST and GraphQL are both examples of an API but they are not the only options.
- **CLI**: Command Line Interface
- **Monorepo/monorepository**: refers to the BrandX repository on GitHub.
- **Npm**: npm is the package manager for javascript
- **PR/Pull Request**: A code merge request (code that has been written and is being requested to merge)
- **RFC:** Request for comments
- **SSH Key**: A key used for remote command-line access, usually used in place of or with a password
- **VPS**: Virtual Private Server or typically called a virtual machine (VM), different from a container as it's a full OS spun up in the cloud or runs as a "guest" on a "host" machine, typically quite a few of these run on a single physical server.
- **Yarn**: another package manager for JavaScript.
- **JAMStack**: Modern web development architecture based on client-side JavaScript, reusable APIs, and prebuilt Markup.
- **JavaScript**: should be managing any dynamic programming on the client-side, through plain Javascript, frontend frameworks, or libraries.
- **API**: on a server-side, the processes and database actions must be made available through APIs, requested with Javascript over HTTPS. The APIs can be created using third-party services like BrandX or be custom-built.
- **Markup**: the HTML templates should be prebuilt at deployment time using a static site generator for example.
- **Gatsby:** is a Progressive Web App generator built on React that loads only the critical HTML, CSS, data, and JavaScript so your site loads as fast as possible.
- **Next.js**: is a lightweight framework for static and server-rendered React applications, also built on React.
- **Nuxt.js**: is a framework for creating Vue.js applications, you can choose between Universal, Static Generated, or Single Page applications. Technically not exactly an SSG, you can still use the provided deployment option called nuxt generate to build a statically generated Vue.js Application.
- **Gridsome**: is a Vue.js-powered, modern site generator for building the fastest possible websites for any Headless CMS, APIs, or Markdown-files.
