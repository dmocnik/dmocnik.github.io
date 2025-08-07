---
aside: false
prev: false
next: false
---

<script setup>
  import { data as posts } from './projects.data.js'
  import { VPFeatures } from 'vitepress/theme'

  const projects = posts.map((post) => {
    return {
      icon: post.frontmatter.icon,
      title: post.frontmatter.title,
      details: post.frontmatter.details,
      link: post.url,
      linkText: 'Details'
    }
  })
</script>

# Projects

Click on a card to view the details.

<CustomFeatures :features="projects" />