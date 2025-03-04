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

import { useContext } from 'react';
import Image from 'next/image';
import GlobalDataContext from '@lib/global-context';
import { DATE, SITE_DESCRIPTION, SITE_TITLE } from '@lib/constants';
import RichText from '@components/RichText';
import styles from './styles.module.scss';
import classnames from 'classnames/bind';

const cn = classnames.bind(styles);

export default function Hero() {
  const ctx = useContext(GlobalDataContext);

  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <Image
          loading="eager"
          width={550}
          height={250}
          src="/logo-cinsis.svg"
          alt="Cinsis 2021 logo"
        />
      </div>

      <div className={styles.headingWrapper}>
        <RichText className={cn(styles.hero)} text={ctx?.edito?.homeTitle ?? SITE_TITLE} />
        <RichText
          className={cn(styles.description)}
          text={ctx?.edito?.homeSubtitle ?? SITE_DESCRIPTION}
        />
      </div>
      <div className={styles.info}>
        <p>OCTUBRE 28, 29 Y 30</p>
        <div className={styles.descriptionSeparator} />
        <p>
          <strong>Online</strong>
        </p>
      </div>
    </div>
  );
}
