<script setup>
import { getFullImagePath } from '@/utils/getFullImagePath';

const developers = [
	{
		name: 'Mark Skrypka',
		employment: 'Front-end developer',
		image: 'images/developer-avatars/Mark.png',
		contactInfo: {
			telegram: '@infy0',
			phone: '+380992462363',
			email: 'divineript@gmail.com'
		},
		details: {
			frames: [
				'ReactJS',
				'NuxtJS',
				'NodeJS',
				'Vue3'
			],
			languages: [
				'JavaScript',
				'HTML5',
				'SCSS / SASS',
				'CSS3'
			],
			more: [
				'GitHub',
				'GitLab',
				'Trello',
				'Figma',
				'Linkedin'
			],
			skills: [
				'',
				'',
				'',
				''
			]
		}
	},
	{
		name: 'Aleksey Samarskiy',
		employment: 'UI | UX designer',
		image: 'images/developer-avatars/Aleksey.png',
		contactInfo: {
			telegram: '@simpleeuser',
			phone: '+380633734830',
			email: 'divineript@gmail.com'
		},
		details: {
			frames: [
				'ReactJS',
				'Vue3'
			],
			languages: [
				'JavaScript',
				'HTML5',
				'SCSS / SASS',
				'CSS3'
			],
			more: [
				'GitHub',
				'GitLab',
				'Trello',
				'Figma'
			],
			skills: [
				'UX design',
				'UI design',
				'Mobile first',
				'Adaptation',
				'Animation',
				'Geometric',
				'Design mobile app'
			]
		}
	}
];
</script>

<template>
	<div :class='$style[`about-page`]'>
		<template :key=developer.name v-for='(developer, index) in developers'>
			<div :class='$style[`about-developer`]'>
				<div :class='$style[`image-container`]'>
					<img :src='getFullImagePath(developer.image)' alt='avatar'>
				</div>

				<div :class='$style[`contact-info-container`]'>
					<h3 :class='$style[`developer-name`]'>
						{{ developer.name }}
					</h3>

					<p :class='$style[`employment-branch`]'>
						{{ developer.employment }}
					</p>

					<div :class='$style[`contact-info`]'>
						<ul>
							<li :key=name :class='$style[`title-list`]' v-for='(_, name) in developer.contactInfo'>
								{{ name }}
							</li>
						</ul>
						<ul>
							<li :key=contact :class='$style.info' v-for='contact in developer.contactInfo'>
								{{ contact }}
							</li>
						</ul>
					</div>
				</div>

				<div :class='$style[`global-info-container`]'>
					<div :key=detailName v-for='(detail, detailName) in developer.details'>
						<h4 :class='$style[`title-global-list-info`]'>
							{{ detailName }}
						</h4>

						<ul :class='$style[`info-list`]'>
							<li :key=detailItem v-for='detailItem in detail'>
								{{ detailItem }}
							</li>
						</ul> 
					</div>
				</div>
			</div>

			<hr v-if='index !== developers.length - 1' />
		</template>
	</div>
</template>

<style lang='scss' module>
.about-page {
	display: flex;
	justify-content: space-between;

	max-width: 1030px;
	margin: 45px 45px 0 45px;
}

.about-developer {
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	width: 436px;
}

.contact-info-container {
	width: 50%;
}

.developer-name {
	font-size: 16px;
	font-weight: 600;
	color: white;
}

.emloyment-branch {
	font-size: 14px;
	font-weight: 300;
}

.contact-info {
	display: flex;
	justify-content: space-between;
	margin-top: 40px;
}

.title-list {
	text-transform: capitalize;
	font-size: 12px;
	font-weight: 500;
	color: white;

	&::after {
		content: ':';
	}
}

.info {
	font-size: 12px;
	font-weight: 300;
}

.global-info-container {
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;

	width: 100%;
	margin-top: 48px;
	border: 1px solid rgba(0, 0, 0, 0.2);
	border-radius: 5px;
}

.global-info-container div {
	width: 50%;
	padding: 15px;
}

.title-global-list-info {
	margin-bottom: 25px;
	text-transform: capitalize;
	font-size: 16px;
	font-weight: 600;
	color: white;
}

.info-list {
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
}

.info-list li {
	font-size: 14px;
	font-weight: 300;
}
</style>
