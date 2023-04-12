<script setup>
import { h } from 'vue';
import Navbar from '@/components/Navbar';
import ThemeSwitcher from '@/components/ThemeSwitcher';

import LanguageIcon from '@/components/icons/LanguageIcon';
import GithubIcon from '@/components/icons/GithubIcon';
import LinkedinIcon from '@/components/icons/LinkedinIcon';

const iconsNavbarList = [
    { label: 'Theme', icon: () => h(ThemeSwitcher, { checked: true }) },
    { label: 'Github', icon: GithubIcon },
    { label: 'Linkedin', icon: LinkedinIcon }
];
</script>

<template>
    <Teleport to='body'>
        <header :class='$style.header'>
            <Navbar :links='[{ link: `/portfolio`, label: `Portfolio` }, { link: `/about`, label: `About us` }]' :stroke=true />
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
                        v-for='{ label, icon } in iconsNavbarList'
                    >
                        <component :is=icon />
                    </li>
                </ul>
            </Navbar>
        </header>
    </Teleport>
</template>

<style lang='scss' module src='./styles.module.scss' />
