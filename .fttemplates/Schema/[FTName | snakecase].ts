import {defineField, defineType} from 'sanity'

export const [FTName | snakecase] = defineType({
  title: '[FTName]',
  name: '[FTName | snakecase]',
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
      title: 'Description',
      name: 'description',
      type: 'string',
    }),
    defineField({
      title: 'Links',
      name: 'links',
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
