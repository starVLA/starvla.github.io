import type { Bi } from './landingContent';

export interface BlogPost {
  slug: string;
  href: string;
  title: Bi;
  summary: Bi;
  author: string;
  project: string;
  cover: string;
  coverAlt: string;
  language: 'en' | 'zh';
  /** Confirmed publication date in YYYY-MM-DD format; omit for a local preview. */
  publishedAt?: string;
}

const posts: BlogPost[] = [
  {
    slug: 'starRoboEval',
    href: '/blogs/starRoboEval/',
    title: {
      en: 'What Does GPT-6-Astra Score When Nothing Is Tailored to a Benchmark?',
      zh: '不针对评测基准定制，GPT-6-Astra 能取得怎样的成绩？',
    },
    summary: {
      en: 'One generic policy across 14 embodied benchmarks. We present the service boundary, evaluation results, and cost of direct robot control with GPT-6-Astra.',
      zh: '用同一套通用策略评测 14 个具身基准，介绍服务边界、评测结果，以及 GPT-6-Astra 直接控制机器人的开销。',
    },
    author: 'StarVLA Community',
    project: 'starRoboEval',
    cover: '/blogs/starRoboEval/cover.svg',
    coverAlt: 'starRoboEval connects one native policy to 14 robot benchmarks.',
    language: 'en',
  },
];

// The Blogs page lists dated posts first, followed by undated previews.
export const blogs = [...posts].sort((a, b) => (b.publishedAt ?? '').localeCompare(a.publishedAt ?? ''));
