/*
 * MIT License
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * Adapted from https://github.com/facebook/docusaurus/blob/6151a414285db975e620ffcf5972eef044070ad6/website/src/components/TeamProfileCards/index.tsx
 */

import React, {type ReactNode} from 'react';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

type ProfileProps = {
  className?: string;
  name: string;
  children: ReactNode;
  githubUrl?: string;
  twitterUrl?: string;
  websiteUrl?: string;
};

function TeamProfileCard({
  className,
  name,
  children,
  githubUrl,
  twitterUrl,
  websiteUrl,
  localAvatar,
}: ProfileProps) {
  return (
    <div className={className}>
      <div className="card card--full-height">
        <div className="card__header">
          <div className="avatar avatar--vertical">
            <img
              className="avatar__photo avatar__photo--xl"
              src={localAvatar ? `img/${name}.png` : `${githubUrl}.png`}
              alt={`${name}'s avatar`}
            />
            <div className="avatar__intro">
              <Heading as="h3" className="avatar__name">
                {name}
              </Heading>
            </div>
          </div>
        </div>
        <div className="card__body">{children}</div>
        <div className="card__footer">
          <div className="button-group button-group--block">
            {githubUrl && (
              <Link className="button button--secondary" href={githubUrl}>
                GitHub
              </Link>
            )}
            {twitterUrl && (
              <Link className="button button--secondary" href={twitterUrl}>
                X/Twitter
              </Link>
            )}
            {websiteUrl && (
              <Link className="button button--secondary" href={websiteUrl}>
                Website
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function TeamProfileCardCol(props: ProfileProps) {
  return (
    <TeamProfileCard {...props} className="col col--6 margin-bottom--lg" />
  );
}

export function ActiveTeamRow(): JSX.Element {
  return (
    <div className="row">
      <TeamProfileCardCol
        name="Giuliano Losa"
        githubUrl="https://github.com/nano-o"
        twitterUrl="https://twitter.com/giuliano_losa"
        websiteUrl="https://www.losa.fr">
        Distributed computing and formal methods
      </TeamProfileCardCol>
      <TeamProfileCardCol
        name="Iftach Haitner"
        localAvatar="true"
        websiteUrl="https://iftachh.github.io/MyHomepage/">
        Cryptography and Computational Complexity
      </TeamProfileCardCol>
      <TeamProfileCardCol
        name="David Mazières"
        localAvatar="true"
        githubUrl="https://github.com/stanford-scs"
        twitterUrl="https://twitter.com/dmazieres"
        websiteUrl="https://www.scs.stanford.edu/~dm/">
        Chief Scientist at the SDF
      </TeamProfileCardCol>
    </div>
  );
}

export function Consultants(): JSX.Element {
  return (
    <div className="row">
      <TeamProfileCardCol
        name="Eli Gafni"
        localAvatar="true"
        websiteUrl="https://samueli.ucla.edu/people/eliezer-gafni">
        Theory of distributed computing
      </TeamProfileCardCol>
    </div>
  );
}

export function Alumni(): JSX.Element {
  return (
    <div className="row">
      <TeamProfileCardCol
        name="Joseph Tafese"
        githubUrl="https://github.com/jetafese">
        Research Intern in formal verification of Rust code
      </TeamProfileCardCol>
      <TeamProfileCardCol
        name="Patrick Redmond"
        localAvatar="true"
        githubUrl="https://github.com/plredmond"
        websiteUrl="https://curious.software/plr/">
        Research Intern in formal methods for distributed systems assurance
      </TeamProfileCardCol>
      <TeamProfileCardCol
        name="Yunqi Zhang"
        localAvatar="true"
        githubUrl="https://github.com/yunqizhang99"
        websiteUrl="https://yunqiz.com/">
        Research Intern on overlay networks
      </TeamProfileCardCol>
      <TeamProfileCardCol
        name="George Pîrlea"
        githubUrl="https://github.com/dranov"
        twitterUrl="https://twitter.com/GeorgePirlea"
        websiteUrl="https://pirlea.net/">
        Research intern in formal methods for smart contracts assurance
      </TeamProfileCardCol>
      <TeamProfileCardCol
        name="Mohsen Lesani"
        localAvatar="true"
        websiteUrl="https://mohsenlesani.github.io/">
        Consultant in reliability and security of software systems
      </TeamProfileCardCol>
    </div>
  );
}
