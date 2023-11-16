import remarkGfm from 'remark-gfm';
import remarkEmbedder from '@remark-embedder/core'
import oembedTransformer from '@remark-embedder/transformer-oembed'
import rehypeSlug from 'rehype-slug';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLink from 'rehype-external-links';
import rehypeShiftHeading from 'rehype-shift-heading';
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';
import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the blog',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the blog',
      required: true,
    },
    summary: {
      type: 'string',
      description: 'The summary of the blog',
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (blog) => `/blog/${blog._raw.flattenedPath}`,
    },
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath,
    },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Blog],
  mdx: {
    remarkPlugins: [
      remarkGfm,
      [
        remarkEmbedder.default,
        {
          transformers: [
            [
              oembedTransformer.default,
              {
                params: {
                  dnt: true,
                  theme: 'dark',
                  omit_script: true,
                }
              }
            ]
          ]
        }
      ]
    ],
    rehypePlugins: [
      rehypeSlug,
      rehypeAccessibleEmojis,
      [
        rehypePrettyCode,
        {
          theme: 'one-dark-pro',
          onVisitLine(node) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push('line--highlighted');
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ['word--highlighted'];
          },
        }
      ],
      [
        rehypeShiftHeading,
        {
          shift: 1,
        }
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
          },
        },
      ],
      [
        rehypeExternalLink,
        {
          target: '_blank',
        }
      ],
    ],
  },
})
