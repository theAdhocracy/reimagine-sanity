import {defineField, defineType} from 'sanity'

export const global = defineType({
  title: 'Global',
  name: 'global',
  type: 'document',
  groups: [
    {
      name: 'footer',
      title: 'Footer',
    },
  ],
  fields: [
    defineField({
      title: 'Internal Title',
      name: 'internalTitle',
      type: 'string',
      description: 'Used for CMS purposes only',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Logo',
      name: 'logo',
      type: 'array',
      of: [{type: 'media'}],
      validation: (rule) => rule.required().max(1),
      group: 'footer',
    }),
    defineField({
      title: 'Description',
      name: 'description',
      type: 'string',
      group: 'footer',
    }),
    defineField({
      title: 'Newsletter Title',
      name: 'newsletter',
      type: 'string',
      group: 'footer',
    }),
    defineField({
      title: 'Social Links',
      name: 'socials',
      type: 'array',
      description: 'Links to currently active social media services and third party sites.',
      of: [{type: 'social_link'}],
      group: 'footer',
    }),
    defineField({
      title: 'Menus',
      name: 'menus',
      type: 'array',
      description: 'Columns of links with a heading.',
      of: [{type: 'menu'}],
      group: 'footer',
    }),
    defineField({
      title: 'Copyright',
      name: 'copyright',
      type: 'string',
      group: 'footer',
    }),
    defineField({
      title: 'Terms & Conditions',
      name: 'terms',
      type: 'array',
      description: 'A list of links to legal and miscellaneous pages.',
      of: [{type: 'menu'}],
      validation: (rule) => rule.required().max(1),
      group: 'footer',
    }),
  ],
  preview: {
    select: {
      title: 'internalTitle',
    },
  },
})
