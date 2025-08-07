import { createContentLoader } from 'vitepress'

export default createContentLoader('blog/!(*index).md', {
  includeSrc: true,
  transform(pages) {
    return pages.sort((a, b) => {
      return +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date)
    })
    .map(p => ({
      url: p.url,
      frontmatter: p.frontmatter,
      text: p.frontmatter.date + '<br><br>' + toPlainText(p.src ?? '').split(' ').slice(0, 29).join(' ') + '...'
    }))
  }
})

function toPlainText(markdown) {
  return markdown
    // remove frontmatter
    .replace(/---[\s\S]*?---/g, ' ')
    // remove fenced code blocks
    .replace(/```[\s\S]*?```/g, ' ')
    // scripts
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    // remove HTML comments
    .replace(/<!--[\s\S]*?-->/g, ' ')
    // strip HTML tags
    .replace(/<[^>]+>/g, ' ')
    // strip Vue-style interpolations
    .replace(/{{[\s\S]*?}}/g, ' ')
    // inline code
    .replace(/`[^`]*`/g, ' ')
    // images: ![alt](url) -> (remove entirely)
    .replace(/!\[[^\]]*\]\([^)]+\)/g, ' ')
    // links: [text](url) -> text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    // leading heading markers (“# ”, “## ”, …) but keep the heading text
    .replace(/^#{1,6}\s*(.+)$/gm, '')
    // list markers, blockquotes, emphasis, HR, etc.
    .replace(/^\s*([-*+]|\d+\.)\s+/gm, '')      // list bullets/numbers
    .replace(/^[>]+\s*/gm, '')                  // blockquotes
    .replace(/[*_~#`>|]+/g, ' ')                // leftover md symbols
    // collapse whitespace
    .replace(/\r?\n+/g, ' ')
    .replace(/\s{2,}/g, ' ')
    .trim()
}