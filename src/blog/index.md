---
aside: false
prev: false
next: false
---

<script setup>
  import { data as posts } from './blogs.data.js'
  import { VPFeatures } from 'vitepress/theme'

  const projects = posts.map((post) => {
    return {
      icon: post.frontmatter.icon,
      title: post.frontmatter.title,
      details: post.text,
      link: post.url,
      linkText: 'Read'
    }
  })
</script>

# Blog

Click on a card to read.

<CustomFeatures :features="projects" />