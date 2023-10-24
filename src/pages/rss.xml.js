import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import { config } from 'site.config'
import sanitizeHtml from 'sanitize-html'
import MarkdownIt from 'markdown-it'
const parser = new MarkdownIt()

export async function GET(context) {
  const posts = await getCollection('blog')
  return rss({
    title: config.siteTitle,
    description: config.siteDescription,
    site: context.site,
    items: posts.map((entry) => ({
      title: entry.data.title,
      link: `/posts/${entry.slug}`,
      pubDate: entry.data.date,
      description: entry.data.description,
      content: sanitizeHtml(parser.render(entry.body)),
    })),
    stylesheet: '/rss/styles.xsl',
  })
}
