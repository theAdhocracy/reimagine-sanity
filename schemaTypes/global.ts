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
      name: 'footer_logo',
      type: 'array',
      of: [{type: 'media'}],
      validation: (rule) => rule.required().max(1),
      group: 'footer',
    }),
    defineField({
      title: 'Description',
      name: 'footer_description',
      type: 'string',
      group: 'footer',
    }),
    defineField({
      title: 'Newsletter Title',
      name: 'footer_newsletter',
      type: 'string',
      group: 'footer',
    }),
    defineField({
      title: 'Social Links',
      name: 'footer_socials',
      type: 'array',
      description: 'Links to currently active social media services and third party sites.',
      of: [{type: 'social_link'}],
      group: 'footer',
    }),
    defineField({
      title: 'Menus',
      name: 'footer_menus',
      type: 'array',
      description: 'Columns of links with a heading.',
      of: [{type: 'menu'}],
      group: 'footer',
    }),
    defineField({
      title: 'Copyright',
      name: 'footer_copyright',
      type: 'string',
      group: 'footer',
    }),
    defineField({
      title: 'Terms & Conditions',
      name: 'footer_terms',
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
