import {defineField, defineType} from 'sanity'

export const case_study = defineType({
  name: 'case_study',
  title: 'Case Study',
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
      title: 'Slug',
      name: 'slug',
      type: 'slug',
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
      title: 'Category',
      name: 'category',
      type: 'string',
      options: {
        list: [
          {title: 'Health', value: 'health'},
          {title: 'Financial', value: 'financial'},
          {title: 'Retail', value: 'retail'},
        ],
      },
    }),
    defineField({
      title: 'Thumbnail',
      name: 'thumbnail',
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
