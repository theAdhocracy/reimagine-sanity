import {defineField, defineType} from 'sanity'

export const logo_grid = defineType({
  title: 'Logo Grid',
  name: 'logo_grid',
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
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Subtitle',
      name: 'subtitle',
      type: 'string',
    }),
    defineField({
      title: 'Logos',
      name: 'logos',
      type: 'array',
      description: 'Between 3 and 8 logos.',
      of: [{type: 'media'}],
      validation: (rule) => rule.min(3).max(8),
    }),
    defineField({
      title: 'Link',
      name: 'link',
      type: 'array',
      of: [{type: 'cta'}],
      validation: (rule) => rule.max(1),
    }),
  ],
  preview: {
    select: {
      title: 'internalTitle',
    },
  },
})
