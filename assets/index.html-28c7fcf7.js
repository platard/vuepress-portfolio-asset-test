import{_ as e,o as i,c as n,e as l}from"./app-5e0624c7.js";const d={},t=l(`<h1 id="vuepress-docs" tabindex="-1"><a class="header-anchor" href="#vuepress-docs" aria-hidden="true">#</a> Vuepress Docs</h1><h2 id="instalation" tabindex="-1"><a class="header-anchor" href="#instalation" aria-hidden="true">#</a> Instalation</h2><ol><li>Install VuePress locally</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install -D vuepress@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>Add these scripts to package.json</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;scripts&quot;: {
  &quot;docs:dev&quot;: &quot;vuepress dev docs&quot;,
  &quot;docs:build&quot;: &quot;vuepress build docs&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>Add the <code>default</code>, <code>temp</code> and <code>cache</code> to .gitignore file</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>echo &#39;node_modules&#39; &gt;&gt; .gitignore
echo &#39;.temp&#39; &gt;&gt; .gitignore
echo &#39;.cache&#39; &gt;&gt; .gitignore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>Create the <code>docs</code> folder</li><li>Inside <code>docs</code> folder, create a new .md file</li></ol><blockquote><p>index.md</p></blockquote><ol start="5"><li>Start the development server</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm run docs:dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="basic-configuration" tabindex="-1"><a class="header-anchor" href="#basic-configuration" aria-hidden="true">#</a> Basic configuration</h2><ol><li><p>Create a <code>.vuepress</code> folder inside the <code>docs</code></p></li><li><p>Inside .vuepress, create the config.js file using the default theme</p></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { defaultTheme } from &#39;vuepress&#39;

export default {
    lang: &#39;en-US&#39;,
    title: &#39;Hello VuePress&#39;,
    description: &#39;Just playing around&#39;,
    theme: defaultTheme({
        // default theme config
        navbar: [
          {
              text: &#39;Home&#39;,
              link: &#39;/&#39;,
          }
        ],
    }),
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="content" tabindex="-1"><a class="header-anchor" href="#content" aria-hidden="true">#</a> Content</h2><h3 id="files-and-routes" tabindex="-1"><a class="header-anchor" href="#files-and-routes" aria-hidden="true">#</a> Files and routes</h3><ol><li>In the <code>docs</code> folder, create a new folder with a new md file for your site</li></ol><blockquote><p>docs/guide/index.md</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Here the &#39;Guide&#39; page
## Developer Ipsum
- The trouble with programmers is that you can never tell what a programmer is doing until it’s too late. (Seymour Cray)
- That’s what’s cool about working with computers. They don’t argue, they remember everything, and they don’t drink all your beer. (Paul Leary) 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>In the config.js, define the navbar link</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  text: &#39;Guide&#39;,
  link: &#39;/guide&#39;,
},
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>Inside the <code>theme:defaultTheme({})</code> option, define the logo. Place the image.svg in a <code>public/images</code> folder inside .vuepress</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>logo: &#39;/images/iconmonstr-carousel-filled.svg&#39;,
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="frontmatter" tabindex="-1"><a class="header-anchor" href="#frontmatter" aria-hidden="true">#</a> Frontmatter</h3><ol><li>In the /contact.md, override title and description of current page via frontmatter</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>---
title: Contact title page
description: Description of the contact page
---

# Contact Us

We&#39;d love to hear from you! Here&#39;s how you can reach us...

## Get in Touch

- **Email**: [contact@example.com](mailto:contact@example.com)
- **Phone**: +1 (555) 123-4567
- **Address**: 123 VuePress St., Code City, 12345

## Social Media

- [Follow us on Twitter](https://twitter.com/)
- [Like us on Facebook](https://facebook.com/)
- [Connect with us on LinkedIn](https://linkedin.com/)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>In the /index.md, define the following home options</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>---
home: true
heroImage: &#39;/images/iconmonstr-carousel-filled.svg&#39;
heroText: Hero text
tagline: description here...
actions:
  - text: Get Started
    link: /guide/
    type: primary
  - text: Introduction
    link: /guide/
    type: secondary
features:
- title: Feature 1 Title
  details: Feature 1 Description
- title: Feature 2 Title
  details: Feature 2 Description
- title: Feature 3 Title
  details: Feature 3 Description
footer: Here my footer
---
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="layout" tabindex="-1"><a class="header-anchor" href="#layout" aria-hidden="true">#</a> Layout</h2><ol><li>Create the <code>layout</code> folder inside the <code>.vuepress</code> folder</li><li>Crate a layout component file</li></ol><blockquote><p>layout/CustomLayout.vue</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;div class=&quot;container&quot;&gt;
      &lt;header&gt;
        &lt;h1&gt;Layout&#39;s header&lt;/h1&gt;
      &lt;/header&gt;
      &lt;main&gt;
        &lt;Content /&gt; &lt;!-- built-in component that display the index.md  --&gt;
        &lt;!-- &lt;HelloVue /&gt; --&gt;
      &lt;/main&gt;
      &lt;footer&gt;
        &lt;p&gt;&amp;copy; {{ currentYear }} My VuePress Site&lt;/p&gt;
      &lt;/footer&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  
  &lt;script&gt;
  //import HelloVue from &quot;../components/HelloVue.vue&quot;
  export default {
    // components: {HelloVue},
    computed: {
      currentYear() {
        return new Date().getFullYear();
      },
    },
  }
  &lt;/script&gt;
  
  &lt;style scoped&gt;
  .container {
    max-width: 800px;
    margin: 0 auto;
  }
  h1, footer{
    text-align: center;
  }
  &lt;/style&gt;
  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>Create the client config file and register the layout</li></ol><blockquote><p>docs/.vuepress/client.ts</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { defineClientConfig } from &#39;@vuepress/client&#39;
import CustomLayout from &#39;./layouts/CustomLayout.vue&#39;

export default defineClientConfig({
  layouts: {
    CustomLayout,
  },
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>In the guide/index.md, call the layout using the layout option in the frontmatter</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>---
title: Using a layout
layout: CustomLayout
---
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="component" tabindex="-1"><a class="header-anchor" href="#component" aria-hidden="true">#</a> Component</h2><ol><li>Create <code>components</code> folder inside the <code>.vuepress</code> folder</li><li>Create the <code>HelloVue.vue</code> component</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;div&gt;
        &lt;h2&gt;Hello from the \`&#39;HelloVue&#39; component&lt;/h2&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
    export default{ }
&lt;/script&gt;

&lt;style&gt;
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>In the CustomLayout.vue, uncomment the component <code>&lt;HelloVue /&gt;</code></li></ol>`,42),s=[t];function a(r,o){return i(),n("div",null,s)}const v=e(d,[["render",a],["__file","index.html.vue"]]);export{v as default};
