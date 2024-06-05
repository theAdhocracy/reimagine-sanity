import {defineField, defineType} from 'sanity'

export const menu = defineType({
  name: 'menu',
  type: 'document',
  title: 'Menu',
  fields: [
    defineField({
      name: 'internalTitle',
      type: 'string',
      title: 'Internal Title',
      description: 'Used for CMS purposes only',
    }),
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      title: 'Links',
      name: 'links',
      type: 'array',
      of: [{type: 'cta'}],
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'internalTitle',
    },
  },
})
