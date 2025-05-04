import { defineField, defineType, isSlug } from "sanity";

export const idea = defineType({
    type: "document",
    name: "idea",
    title: "Idea",
    fields: [
        defineField({
            name: "id",
            type: "number"
        }),
        defineField({
            name: 'title',
            type: 'string'
        }),
        defineField({
            name: "slug",
            type: "slug",
            options: {
                source: "title",
                slugify: (input: string) => input
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .slice(0, 200)
            },
        }),
        defineField({
            name: 'author',
            type: 'reference',
            to: { type: 'author' }
        }),
        defineField({
            name: "views",
            type: "number"
        }),
        defineField({
            name: "description",
            type: "text"
        }),
        defineField({
            name: "category",
            type: "string",
            validation: (Rule) => Rule.min(1).max(20).required().error("Please enter category")
        }),
        defineField({
            name: "image",
            type: "url",
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: "pitch",
            type: "markdown"
        }),
    ]
})