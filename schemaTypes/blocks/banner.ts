import {defineField, defineType} from 'sanity'

export const banner = defineType({
  title: 'Banner',
  name: 'banner',
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
      title: 'Copy',
      name: 'copy',
      type: 'string',
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
