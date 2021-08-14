/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_ORIGIN as string;
export const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_ORIGIN || new URL(SITE_URL).origin;
export const TWITTER_USER_NAME = 'IngSisUnimag';
export const BRAND_NAME = 'Cinsis';
export const SITE_NAME_MULTILINE = ['Cinsis', '2021'];
export const SITE_NAME = 'Cinsis 2021';
export const SITE_TITLE = `The first ${BRAND_NAME} Global User Conference`;
export const SITE_DESCRIPTION =
  'An interactive online experience by the community, free for everyone.';
export const DATE = 'Octubre 28, 2021';
export const SHORT_DATE = 'Oct 28 - 8:00am EST';
export const FULL_DATE = 'Oct 28nd 8am Pacific Time (GMT-5)';
export const COOKIE = 'user-id';
export const EDITO = {
  homepage: {
    metaTitle: 'Cinsis 2021 - Home',
    metaDescription:
      '3 días de Conferencias Internacionales de Innovación en Ingeniería de Sistemas que se desarrollan los días 28, 29 y 30 de octubre.'
  },
  jobs: {
    title: 'Career Fair',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    metaTitle: 'Speaker Page',
    metaDescription:
      'A 1 day conference taking place on April 22nd, 2021 from 8 am to 3 pm PST for the Strapi Community to learn, contribute, and collaborate on the future of the leading open source Headless CMS.'
  },
  sponsors: {
    title: 'Expo',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    metaTitle: 'Speaker Page',
    metaDescription:
      'A 1 day conference taking place on April 22nd, 2021 from 8 am to 3 pm PST for the Strapi Community to learn, contribute, and collaborate on the future of the leading open source Headless CMS.'
  },
  schedule: {
    title: 'Schedule',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    metaTitle: 'Speaker Page',
    metaDescription:
      'A 1 day conference taking place on April 22nd, 2021 from 8 am to 3 pm PST for the Strapi Community to learn, contribute, and collaborate on the future of the leading open source Headless CMS.'
  },
  speakers: {
    title: 'Speakers',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    metaTitle: 'Speaker Page',
    metaDescription:
      'A 1 day conference taking place on April 22nd, 2021 from 8 am to 3 pm PST for the Strapi Community to learn, contribute, and collaborate on the future of the leading open source Headless CMS.'
  },
  stages: {
    metaTitle: 'Speaker Page',
    metaDescription:
      'A 1 day conference taking place on April 22nd, 2021 from 8 am to 3 pm PST for the Strapi Community to learn, contribute, and collaborate on the future of the leading open source Headless CMS.'
  },
  ticket: {
    title: 'Speakers',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    metaTitle: 'Speaker Page',
    metaDescription:
      'A 1 day conference taking place on April 22nd, 2021 from 8 am to 3 pm PST for the Strapi Community to learn, contribute, and collaborate on the future of the leading open source Headless CMS.'
  },
  default: {
    title: 'Cinsis 2021',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    metaTitle: 'StrapiConf - user conference for the Strapi community',
    metaDescription:
      'A 1 day conference taking place on April 22nd, 2021 from 8 am to 3 pm PST for the Strapi Community to learn, contribute, and collaborate on the future of the leading open source Headless CMS.'
  }
};

// Remove process.env.NEXT_PUBLIC_... below and replace them with
// strings containing your own privacy policy URL and copyright holder name
export const LEGAL_URL = process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL;
export const COPYRIGHT_HOLDER = `Copyright © ${new Date().getFullYear()} Strapi. All rights reserved.`;
export const CODE_OF_CONDUCT =
  'https://www.notion.so/vercel/Code-of-Conduct-Example-7ddd8d0e9c354bb597a0faed87310a78';
export const REPO = 'https://github.com/vercel/virtual-event-starter-kit';
export const SAMPLE_TICKET_NUMBER = 1234;

export type TicketGenerationState = 'default' | 'loading';
