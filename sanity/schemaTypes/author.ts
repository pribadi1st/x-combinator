import { UserIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

export const author = defineType({
    type: "document",
    name: "author",
    title: "Author",
    icon: UserIcon,
    fields: [
        defineField({
            name: 'id',
            type: 'number'
        }),
        defineField({
            name: 'name',
            type: 'string'
        }),
        defineField({
            name: 'username',
            type: 'string'
        }),
        defineField({
            name: 'email',
            type: 'string'
        }),
        defineField({
            name: 'avatarUrl',
            type: 'url'
        }),
        defineField({
            name: 'bio',
            type: 'text'
        })
    ],
    preview: {
        select: {
            title: 'name'
        }
    }
})