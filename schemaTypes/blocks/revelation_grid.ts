import {defineField, defineType} from 'sanity'

export const revelation_grid = defineType({
  title: 'Revelation Grid',
  name: 'revelation_grid',
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
      title: 'Description',
      name: 'description',
      type: 'string',
    }),
    defineField({
      title: 'Header Link',
      name: 'header_link',
      type: 'array',
      description: 'Optional link to appear alongside the description.',
      of: [{type: 'cta'}],
      validation: (rule) => rule.max(1),
    }),
    defineField({
      title: 'Cards',
      name: 'cards',
      type: 'array',
      description: 'Up to 8 cards that appear as a grid, with optional links to additional pages.',
      of: [{type: 'revelation_card'}],
      validation: (rule) => rule.min(2).max(8),
    }),
  ],
  preview: {
    select: {
      title: 'internalTitle',
    },
  },
})
