import {defineField, defineType} from 'sanity'

export const social_link = defineType({
  name: 'social_link',
  type: 'document',
  title: 'Social Link',
  fields: [
    defineField({
      name: 'internalTitle',
      type: 'string',
      title: 'Internal Title',
      description: 'Used for CMS purposes only',
    }),
    defineField({
      name: 'url',
      type: 'url',
      title: 'URL',
      description: 'The external URL to link to',
    }),
    defineField({
      title: 'Logo',
      name: 'logo',
      type: 'array',
      of: [{type: 'media'}],
      validation: (rule) => rule.required().max(1),
    }),
  ],
  preview: {
    select: {
      title: 'internalTitle',
    },
  },
})
