import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    defineField({
      name: 'skils',
      title: 'Skils',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'text',
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
})
