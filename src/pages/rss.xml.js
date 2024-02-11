import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import MarkdownIt from 'markdown-it'
import sanitizeHtml from 'sanitize-html'
import { config } from 'site.config'
const parser = new MarkdownIt()

export async function GET(context) {
  const posts = await getCollection('blog')
  return rss({
    title: config.siteTitle,
    description: config.siteDescription,
    site: context.site,
    items: posts.filter((entry) => entry.data.lang === "en").map((entry) => ({
      title: entry.data.title,
      link: `/posts/${entry.slug}`,
      pubDate: entry.data.date,
      description: entry.data.description,
      content: sanitizeHtml(parser.render(entry.body)),
    })),
    stylesheet: '/rss/styles.xsl',
  })
}
