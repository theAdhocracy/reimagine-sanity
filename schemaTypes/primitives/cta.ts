import {defineField, defineType} from 'sanity'

export const cta = defineType({
  name: 'cta',
  type: 'document',
  title: 'CTA',
  fields: [
    defineField({
      name: 'internalTitle',
      type: 'string',
      title: 'Internal Title',
      description: 'Used for CMS purposes only',
    }),
    defineField({
      name: 'label',
      type: 'string',
      title: 'Label',
      description: 'The text displayed on the CTA button',
    }),
    defineField({
      name: 'linkType',
      type: 'string',
      title: 'Link Type',
      description: 'Choose whether the link is an external URL or an internal document',
      options: {
        list: [
          {title: 'External URL', value: 'url'},
          {title: 'Internal Document', value: 'internal'},
        ],
        layout: 'radio', // Display as radio buttons
      },
    }),
    defineField({
      name: 'url',
      type: 'url',
      title: 'URL',
      description: 'The external URL to link to',
      hidden: ({parent}) => parent.linkType !== 'url', // Conditionally hide based on linkType
    }),
    defineField({
      name: 'internalLink',
      type: 'reference',
      title: 'Internal Document',
      description: 'Select the document to link to',
      to: [{type: 'cta'}], // Specify the types of documents that can be linked
      hidden: ({parent}) => parent.linkType !== 'internal', // Conditionally hide based on linkType
    }),
  ],
  preview: {
    select: {
      title: 'internalTitle',
    },
  },
})
