import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import sanitizeHtml from 'sanitize-html'
import MarkdownIt from 'markdown-it'
const parser = new MarkdownIt()

export async function GET(context) {
  const posts = await getCollection('blog')
  return rss({
    title: 'Wanderland',
    description: 'A digital shelter for my thoughts and ideas.',
    site: context.site,
    items: posts.map((entry) => ({
      ...entry.data,
      link: `/posts/${entry.slug}`,
      content: sanitizeHtml(parser.render(entry.body)),
    })),
    stylesheet: '/rss/styles.xsl',
  })
}
