import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'position',
      title: 'Position',
      type: 'string',
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
    }),
    defineField({
      name: 'date_range',
      title: 'Date Range',
      type: 'string',
    }),
    defineField({
      name: 'tasks',
      title: 'Tasks',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'text',
        },
      ],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
})
