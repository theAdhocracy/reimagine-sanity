import {defineField, defineType} from 'sanity'

export const homepage = defineType({
  title: 'Homepage',
  name: 'homepage',
  type: 'document',
  fields: [
    defineField({
      title: 'Internal Title',
      name: 'internalTitle',
      type: 'string',
      description: 'Used for CMS purposes only',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Page Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'copy',
      title: 'Hero Copy',
      type: 'string',
    }),
    defineField({
      name: 'links',
      title: 'Hero Links',
      type: 'array',
      description: 'Up to two links to internal pages.',
      of: [{type: 'cta'}],
      validation: (rule) => rule.max(2),
    }),
    defineField({
      name: 'highlights',
      title: 'Highlights',
      type: 'array',
      description: 'Three pieces of highlighted content e.g. case studies.',
      of: [{type: 'case_study'}],
      validation: (rule) => rule.min(3).max(3),
    }),
    defineField({
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [{type: 'banner'}, {type: 'logo_grid'}, {type: 'revelation_grid'}],
    }),
  ],
  preview: {
    select: {
      title: 'internalTitle',
    },
  },
})
