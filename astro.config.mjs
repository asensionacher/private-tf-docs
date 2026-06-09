// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';
import remarkGfm from 'remark-gfm';
import catppuccin from '@catppuccin/starlight';

// https://astro.build/config
export default defineConfig({
    //site: 'https://afaescolabernatdesclot.org/private-tf-docs',
    integrations: [
        starlight({
            title: 'Private TF',
            social: [
                { icon: 'github', label: 'GitHub - platform', href: 'https://github.com/asensionacher/private-tf-platform' },
                { icon: 'github', label: 'GitHub - runners', href: 'https://github.com/asensionacher/private-tf-runners' }
            ],
            plugins: [
                catppuccin(),
            ],
            sidebar: [
                {
                    label: 'Guides',
                    items: [
                        { label: 'Platform Setup', slug: 'guides/platform' },
                        { label: 'Runners Setup', slug: 'guides/runners' },
                        { label: 'Integration', slug: 'guides/integration' },
                    ],
                },
            ],
        }),
        mdx({
            remarkPlugins: [remarkGfm],
        }),
    ],
});