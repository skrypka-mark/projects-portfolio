<script setup>
import { h } from 'vue';
import Navbar from '@/components/Navbar';
import ThemeSwitcher from '@/components/ThemeSwitcher';

import LanguageIcon from '@/components/icons/LanguageIcon';
import GithubIcon from '@/components/icons/GithubIcon';
import LinkedinIcon from '@/components/icons/LinkedinIcon';

const navigationNavbarLinks = [
    { link: `/portfolio`, label: `Portfolio` },
    { link: `/about`, label: `About us` }
];
const iconsNavbarList = [
    { label: 'Theme', icon: () => h(ThemeSwitcher, { checked: true }) },
    { label: 'Github', icon: GithubIcon, href: 'https://github.com/skrypka-mark' },
    { label: 'Linkedin', icon: LinkedinIcon, href: 'https://www.linkedin.com/in/mark-skrypka-a19b051bb/' }
];
</script>

<template>
    <!-- <Teleport to='body'> -->
        <header :class='$style.header'>
            <Navbar :links=navigationNavbarLinks :stroke=true />
            <Navbar :class='$style[`icons-navbar`]'>
                <ul :class='$style[`icons-navbar__list`]'>
                    <li :class='$style[`icons-navbar__item`]'>
                        <LanguageIcon />
                    </li>
                </ul>
                <div :class='$style.separator' />
                <ul :class='$style[`icons-navbar__list`]'>
                    <li
                        :class='$style[`icons-navbar__item`]'
                        :key=label
                        v-for='{ label, icon, href } in iconsNavbarList'
                    >
                        <a :href=href target='_blank' v-if=!!href>
                            <component :is=icon />
                        </a>
                        <component :is=icon v-else />
                    </li>
                </ul>
            </Navbar>
        </header>
    <!-- </Teleport> -->
</template>

<style lang='scss' module src='./styles.module.scss' />
