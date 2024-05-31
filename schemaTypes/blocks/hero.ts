import {defineField, defineType} from 'sanity'

export const hero = defineType({
  name: 'hero',
  type: 'document',
  title: 'Hero',
  fields: [
    defineField({
      name: 'internalTitle',
      title: 'Internal Title',
      type: 'string',
      description: 'Used for CMS purposes only',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'copy',
      title: 'Copy',
      type: 'string',
    }),
    defineField({
      name: 'Links',
      title: 'links',
      type: 'array',
      description: 'Up to two links to internal pages.',
      of: [{type: 'cta'}],
      validation: (rule) => rule.max(2),
    }),
  ],
  preview: {
    select: {
      title: 'internalTitle',
    },
  },
})
