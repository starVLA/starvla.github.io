export type Locale = 'en' | 'zh';
export interface Bi {
  en: string;
  zh: string;
}

const DOCS_BASE = 'https://starvla.github.io/docs';
const GITHUB_URL = 'https://github.com/starVLA/starVLA';
const GITHUB_REPO = 'starVLA/starVLA';
const GITHUB_REPO_API = `https://api.github.com/repos/${GITHUB_REPO}`;
const HF_URL = 'https://huggingface.co/StarVLA';
const ARXIV_URL = 'https://arxiv.org/abs/2604.05014';

export const landingContent = {
  meta: {
    title: 'StarVLA | A Lego-like Codebase for Vision-Language-Action Models',
    description:
      'StarVLA is an open-source, Lego-like codebase for building, training and evaluating Vision-Language-Action (VLA) models. Swap backbones, action heads, training recipes and benchmarks independently.',
  },
  links: {
    docs: DOCS_BASE,
    github: GITHUB_URL,
    githubApi: GITHUB_REPO_API,
    huggingFace: HF_URL,
    arxiv: ARXIV_URL,
    paperPage: '/papers/starvla/',
    wechat: 'https://github.com/starVLA/starVLA/issues/64#issuecomment-3715403845',
    devLog: 'https://github.com/starVLA/starVLA/issues/64#issue-3727060165',
    contributorsGroup: 'https://github.com/starVLA/starVLA/issues/393',
    issues: 'https://github.com/starVLA/starVLA/issues',
    guideline: 'https://github.com/starVLA/starVLA/blob/main/docs/starVLA_guideline.md',
    integrateDataset: 'https://github.com/starVLA/starVLA/blob/main/docs/integrate_your_dataset.md',
    legoDesign: `${DOCS_BASE}/design/lego-like/`,
    evalProtocol: `${DOCS_BASE}/design/eval-protocol/`,
    license: 'https://github.com/starVLA/starVLA/blob/main/LICENSE',
  },
  nav: [
    { id: 'architecture', en: 'Architecture', zh: '架构' },
    { id: 'research', en: 'Research', zh: '研究' },
    { id: 'benchmarks', en: 'Benchmarks', zh: '基准' },
    { id: 'quick-start', en: 'Quick Start', zh: '快速开始' },
    { id: 'community', en: 'Community', zh: '社区' },
  ],
  hero: {
    eyebrow: { en: 'Open source · MIT License · arXiv 2604.05014', zh: '开源 · MIT 协议 · arXiv 2604.05014' },
    title: {
      en: 'A Lego-like Codebase for Vision-Language-Action Models',
      zh: '乐高式的视觉-语言-动作模型开发代码库',
    },
    subtitle: {
      en: 'Swap backbones, action heads, training recipes and benchmarks independently. One shared infrastructure to build, train and evaluate VLA policies — in simulation and on real robots.',
      zh: '骨干网络、动作头、训练策略与评测基准各自独立、随意替换。用同一套基础设施构建、训练并评测 VLA 策略——覆盖仿真与真机。',
    },
    ctas: [
      { key: 'github', en: 'View on GitHub', zh: '查看 GitHub', href: GITHUB_URL, icon: 'ti ti-brand-github', primary: true },
      { key: 'paper', en: 'Technical Report', zh: '技术报告', href: ARXIV_URL, icon: 'ti ti-file-text' },
      { key: 'docs', en: 'Documentation', zh: '文档', href: DOCS_BASE, icon: 'ti ti-book-2' },
      { key: 'hf', en: 'Hugging Face', zh: 'Hugging Face', href: HF_URL, icon: 'ti ti-box' },
    ],
    install: 'git clone https://github.com/starVLA/starVLA.git && cd starVLA && pip install -e .',
  },
  stats: [
    { key: 'stars', value: '3.9k', label: { en: 'GitHub stars', zh: 'GitHub Stars' }, live: 'stargazers_count', href: `${GITHUB_URL}/stargazers` },
    { key: 'policies', value: '27', label: { en: 'Policy implementations', zh: '策略实现' } },
    { key: 'benchmarks', value: '13', label: { en: 'Simulation benchmarks', zh: '仿真基准' } },
    { key: 'embodiments', value: '10', label: { en: 'Robot embodiments', zh: '机器人本体' } },
    { key: 'checkpoints', value: '41+', label: { en: 'Checkpoint repos', zh: '模型检查点仓库' }, href: HF_URL },
    { key: 'forks', value: '519', label: { en: 'Forks', zh: 'Forks' }, live: 'forks_count', href: `${GITHUB_URL}/network` },
  ],
  // Interactive "compose your VLA" builder shown in the hero.
  composer: {
    title: { en: 'Compose your VLA', zh: '组合你的 VLA' },
    hint: {
      en: 'Pick one brick per layer. Every combination shares the same trainer, dataloader and policy server.',
      zh: '每层选一块积木。所有组合共用同一套训练器、数据加载与策略服务。',
    },
    layers: [
      {
        key: 'backbone',
        label: { en: 'Backbone', zh: '骨干网络' },
        tone: 'blue',
        options: [
          { key: 'qwen3vl', name: 'Qwen3-VL', id: 'Qwen/Qwen3-VL-4B-Instruct', prefix: 'Qwen' },
          { key: 'qwen35', name: 'Qwen3.5', id: 'Qwen/Qwen3.5-4B', prefix: 'Qwen' },
          { key: 'internvl', name: 'InternVL', id: 'OpenGVLab/InternVL3-2B', prefix: 'InternVL' },
          { key: 'florence', name: 'Florence-2', id: 'microsoft/Florence-2-large', prefix: 'Florence' },
          { key: 'cosmos', name: 'Cosmos-Predict2', id: 'nvidia/Cosmos-Predict2-2B', prefix: 'Cosmos', world: true },
          { key: 'wan', name: 'Wan2.2', id: 'Wan-AI/Wan2.2-TI2V-5B', prefix: 'Wan', world: true },
        ],
      },
      {
        key: 'head',
        label: { en: 'Action head', zh: '动作头' },
        tone: 'green',
        options: [
          { key: 'fast', name: 'FAST', desc: { en: 'autoregressive tokens', zh: '自回归离散 token' }, suffix: 'FAST' },
          { key: 'oft', name: 'OFT', desc: { en: 'parallel regression', zh: '并行回归' }, suffix: 'OFT' },
          { key: 'pi', name: 'π (Flow)', desc: { en: 'flow matching', zh: '流匹配' }, suffix: 'PI' },
          { key: 'groot', name: 'GR00T', desc: { en: 'dual-system', zh: '双系统' }, suffix: 'GR00T' },
        ],
      },
      {
        key: 'recipe',
        label: { en: 'Training recipe', zh: '训练策略' },
        tone: 'amber',
        options: [
          { key: 'sft', name: 'SFT', id: 'sft' },
          { key: 'cotrain', name: 'Multimodal co-training', id: 'cotrain_vlm' },
          { key: 'xemb', name: 'Cross-embodiment', id: 'cross_embodiment' },
          { key: 'rl', name: 'RL (RLinf)', id: 'rl_post_training' },
        ],
      },
      {
        key: 'benchmark',
        label: { en: 'Benchmark', zh: '评测基准' },
        tone: 'purple',
        options: [
          { key: 'libero', name: 'LIBERO', id: 'libero', dir: 'simBenchmarks/LIBERO' },
          { key: 'simpler', name: 'SimplerEnv', id: 'simplerenv', dir: 'simBenchmarks/SimplerEnv' },
          { key: 'robotwin', name: 'RoboTwin 2.0', id: 'robotwin', dir: 'simBenchmarks/Robotwin' },
          { key: 'robocasa', name: 'RoboCasa', id: 'robocasa', dir: 'simBenchmarks/Robocasa_tabletop' },
          { key: 'behavior', name: 'BEHAVIOR-1K', id: 'behavior', dir: 'simBenchmarks/Behavior' },
          { key: 'calvin', name: 'CALVIN', id: 'calvin', dir: 'simBenchmarks/calvin' },
          { key: 'domino', name: 'DOMINO', id: 'domino', dir: 'simBenchmarks/DOMINO' },
          { key: 'real', name: 'Franka (real)', id: 'franka', dir: 'realRobots/Franka' },
        ],
      },
    ],
    footnote: {
      en: 'Illustrative config. Supported recipes and exact entry points are listed in the docs.',
      zh: '示意性配置，实际支持的组合与入口脚本请以文档为准。',
    },
  },
  architecture: {
    title: { en: 'Four plug-and-play layers', zh: '四层即插即用' },
    lead: {
      en: 'Each functional component follows a top-down separation with high cohesion and low coupling. Swap a brick, keep the rest — a new framework variant is usually just a different backbone or action head.',
      zh: '每个功能组件都遵循自顶向下、高内聚低耦合的划分。换一块积木、复用其余部分——新的框架变体往往只是换个骨干或动作头。',
    },
    layers: [
      {
        index: '01',
        tone: 'blue',
        icon: 'ti ti-brain',
        title: { en: 'Backbone network', zh: '骨干网络' },
        body: {
          en: 'VLM backbones (Qwen3-VL, Qwen3.5, InternVL, Florence-2) and world-model backbones (Cosmos-Predict2, Wan2.2) behind one interface.',
          zh: 'VLM 骨干（Qwen3-VL、Qwen3.5、InternVL、Florence-2）与世界模型骨干（Cosmos-Predict2、Wan2.2）共用同一接口。',
        },
        chips: ['Qwen3-VL', 'Qwen3.5', 'InternVL', 'Florence-2', 'Cosmos', 'Wan2.2'],
      },
      {
        index: '02',
        tone: 'green',
        icon: 'ti ti-robot',
        title: { en: 'Action head', zh: '动作头' },
        body: {
          en: 'Autoregressive FAST tokens, parallel OFT regression, flow-matching π experts and GR00T-style dual-system inference.',
          zh: '自回归 FAST token、并行 OFT 回归、流匹配 π 专家以及 GR00T 式双系统推理。',
        },
        chips: ['FAST', 'OFT', 'π / Flow', 'GR00T'],
      },
      {
        index: '03',
        tone: 'amber',
        icon: 'ti ti-school',
        title: { en: 'Training strategy', zh: '训练策略' },
        body: {
          en: 'SFT, multimodal co-training, cross-embodiment training and RL post-training — paradigm-agnostic, applied uniformly to every framework.',
          zh: 'SFT、多模态联合训练、跨本体训练与 RL 后训练——与范式无关，统一适用于所有框架。',
        },
        chips: ['SFT', 'Co-training', 'Cross-embodiment', 'RL'],
      },
      {
        index: '04',
        tone: 'purple',
        icon: 'ti ti-chart-bar',
        title: { en: 'Benchmark evaluation', zh: '基准评测' },
        body: {
          en: 'A WebSocket policy server decouples model execution from simulator dependencies. The same interface drives simulation and real robots.',
          zh: 'WebSocket 策略服务将模型执行与仿真器依赖解耦，同一接口同时驱动仿真与真机。',
        },
        chips: ['LIBERO', 'SimplerEnv', 'RoboTwin', 'RoboCasa', 'BEHAVIOR', 'Real robots'],
      },
    ],
    figure: {
      src: '/assets/starvla-overview.webp',
      alt: 'Overview of the StarVLA framework: backbone network, action head, training strategy and benchmark evaluation layers.',
      caption: {
        en: 'StarVLA organises VLA research as a composable stack. Each axis is decoupled, so a new variant typically reduces to swapping one layer while reusing the rest.',
        zh: 'StarVLA 将 VLA 研究组织为可组合的栈：各层相互解耦，新变体通常只需替换一层并复用其余部分。',
      },
    },
    principles: {
      title: { en: 'Design principles', zh: '设计原则' },
      items: [
        {
          icon: 'ti ti-layout-grid',
          title: { en: 'Top-down separation', zh: '自顶向下划分' },
          body: { en: 'Model, data, trainer, config and evaluation live in independent modules you can debug on their own.', zh: '模型、数据、训练器、配置与评测位于相互独立的模块中，可单独调试。' },
        },
        {
          icon: 'ti ti-code',
          title: { en: 'Two shared entry points', zh: '两个共享入口' },
          body: { en: 'A framework only needs forward(...) → loss and predict_action(...) → actions; everything else is reused.', zh: '一个框架只需实现 forward(...) → loss 与 predict_action(...) → actions，其余全部复用。' },
        },
        {
          icon: 'ti ti-file-settings',
          title: { en: 'Config-driven experiments', zh: '配置驱动实验' },
          body: { en: 'YAML settings with CLI overrides and saved snapshots, so every run is reproducible.', zh: 'YAML 配置 + CLI 覆盖 + 快照保存，每次实验都可复现。' },
        },
        {
          icon: 'ti ti-plug-connected',
          title: { en: 'Isolated environments', zh: '环境隔离' },
          body: { en: 'Model dependencies stay in the policy server; simulator dependencies stay in the client.', zh: '模型依赖留在策略服务端，仿真器依赖留在客户端。' },
        },
      ],
    },
    variants: {
      src: '/assets/starvla-variants.webp',
      alt: 'StarVLA-FAST, StarVLA-OFT, StarVLA-GR00T and StarVLA-π variant architectures.',
      caption: {
        en: 'Four reference frameworks share the same data interface and infrastructure — only the action head differs.',
        zh: '四个参考框架共享同一数据接口与基础设施——区别仅在动作头。',
      },
    },
  },
  research: {
    title: { en: 'Research built on StarVLA', zh: '基于 StarVLA 的研究' },
    lead: {
      en: 'StarVLA is the official implementation of the following work from our team, and the substrate for a growing set of community projects.',
      zh: 'StarVLA 是以下团队工作的官方实现，也是越来越多社区项目的基础。',
    },
    papers: [
      {
        tag: { en: 'Codebase & infrastructure', zh: '代码库与基础设施' },
        title: 'StarVLA: A Lego-like Codebase for Vision-Language-Action Model Developing',
        venue: 'Technical report · arXiv 2604.05014 · 2026',
        summary: {
          en: 'A modular backbone–action-head architecture, reusable training strategies and a unified evaluation interface spanning LIBERO, SimplerEnv, RoboTwin 2.0, RoboCasa-GR1 and BEHAVIOR-1K.',
          zh: '模块化的骨干-动作头架构、可复用的训练策略，以及覆盖 LIBERO、SimplerEnv、RoboTwin 2.0、RoboCasa-GR1 与 BEHAVIOR-1K 的统一评测接口。',
        },
        links: [
          { label: 'arXiv', href: ARXIV_URL },
          { label: 'Code', href: GITHUB_URL },
          { label: 'Paper page', href: '/papers/starvla/' },
        ],
        featured: true,
      },
      {
        tag: { en: 'Evaluation', zh: '评测' },
        title: 'StarVLA-α: Reducing Complexity in Vision-Language-Action Systems',
        venue: 'ECCV 2026 · arXiv 2604.11757',
        summary: {
          en: 'Systematically strips VLA systems down to what actually matters, with controlled comparisons across action heads, backbones and recipes.',
          zh: '系统性地剖析 VLA 系统中真正重要的部分，对动作头、骨干与训练策略进行受控对比。',
        },
        links: [
          { label: 'arXiv', href: 'https://arxiv.org/abs/2604.11757' },
          { label: 'Code', href: 'https://github.com/starVLA/starVLA-alpha' },
        ],
      },
      {
        tag: { en: 'Pre-training', zh: '预训练' },
        title: 'VLAct: Beyond Data Scaling — Representation-Centric Continued Pre-training for VLA Models',
        venue: 'arXiv 2608.27550 · 2026',
        summary: {
          en: 'Representation-centric continued pre-training that yields reusable VLA backbones. Drop-in replacement for any Qwen3-VL-4B StarVLA recipe.',
          zh: '以表征为中心的继续预训练，产出可复用的 VLA 骨干；可直接替换任何 Qwen3-VL-4B StarVLA 配方。',
        },
        links: [
          { label: 'arXiv', href: 'https://arxiv.org/abs/2608.27550' },
          { label: 'Project', href: 'https://starvla.github.io/VLAct/' },
          { label: 'Code', href: 'https://github.com/starVLA/VLAct' },
          { label: 'Models', href: 'https://huggingface.co/collections/StarVLA/vlact-6a903c2e0c176179da425c96' },
        ],
      },
    ],
  },
  benchmarks: {
    title: { en: 'Simple recipes, strong baselines', zh: '简单配方，强力基线' },
    lead: {
      en: 'Fully reproducible single-benchmark recipes with minimal data engineering already match or surpass prior methods. Numbers are from the official docs and repository, with sources linked.',
      zh: '极少数据工程、完全可复现的单基准配方已能匹敌或超越既有方法。数字来自官方文档与仓库，并附来源链接。',
    },
    videos: [
      {
        key: 'simplerenv',
        title: 'SimplerEnv',
        metric: { en: 'WidowX success · StarVLA-GR00T', zh: 'WidowX 成功率 · StarVLA-GR00T' },
        value: '71.4%',
        videos: ['/assets/simplerenv-1.mp4', '/assets/simplerenv-2.mp4', '/assets/simplerenv-3.mp4'],
        source: `${DOCS_BASE}/benchmarks/simplerenv/`,
      },
      {
        key: 'robocasa',
        title: 'RoboCasa-GR1',
        metric: { en: 'Average success · StarVLA-OFT', zh: '平均成功率 · StarVLA-OFT' },
        value: '48.8%',
        videos: ['/assets/robocasa-1.mp4', '/assets/robocasa-2.mp4', '/assets/robocasa-3.mp4'],
        source: `${DOCS_BASE}/benchmarks/robocasa/`,
      },
      {
        key: 'robotwin',
        title: 'RoboTwin 2.0',
        metric: { en: 'Average hard score · StarVLA-OFT', zh: 'Hard 平均分 · StarVLA-OFT' },
        value: '88.3',
        videos: ['/assets/robotwin-1.mp4', '/assets/robotwin-2.mp4', '/assets/robotwin-3.mp4'],
        source: `${DOCS_BASE}/benchmarks/robotwin/`,
      },
    ],
    comparison: {
      title: { en: 'StarVLA vs. π₀.₅ across benchmarks', zh: 'StarVLA 与 π₀.₅ 的跨基准对比' },
      note: {
        en: 'Success rate (%). Specialist models are trained per benchmark; the Generalist is jointly trained across all benchmarks and is shown as a reference upper bound. For comparisons under similar compute, focus on Specialist.',
        zh: '成功率（%）。Specialist 逐基准训练；Generalist 在全部基准上联合训练，仅作为上限参考。同等算力下的对比请以 Specialist 为准。',
      },
      series: [
        { key: 'specialist', label: { en: 'StarVLA Specialist', zh: 'StarVLA 专家模型' } },
        { key: 'generalist', label: { en: 'StarVLA Generalist', zh: 'StarVLA 通用模型' } },
        { key: 'previous', label: { en: 'π₀.₅', zh: 'π₀.₅' } },
      ],
      rows: [
        { benchmark: 'LIBERO', specialist: 98.8, generalist: 97.8, previous: 96.9 },
        { benchmark: 'LIBERO-Plus', specialist: 77.8, generalist: 79.7, previous: null },
        { benchmark: 'SimplerEnv WidowX', specialist: 64.6, generalist: 70.2, previous: 46.9 },
        { benchmark: 'SimplerEnv Google VA', specialist: 70.2, generalist: 73.8, previous: 68.4 },
        { benchmark: 'SimplerEnv Google VM', specialist: 76.0, generalist: 79.3, previous: 72.7 },
        { benchmark: 'RoboTwin Clean*', specialist: 88.2, generalist: 88.7, previous: 82.7 },
        { benchmark: 'RoboTwin Random*', specialist: 88.3, generalist: 87.8, previous: 76.8 },
        { benchmark: 'RoboCasa-GR1', specialist: 53.8, generalist: 57.3, previous: 37.0 },
        { benchmark: 'RoboChallenge', specialist: 30.0, generalist: null, previous: 17.7 },
      ],
      footnote: { en: '* RoboTwin 2.0 hard setting.', zh: '* RoboTwin 2.0 困难设置。' },
    },
    supported: {
      title: { en: 'Integrated benchmarks', zh: '已集成基准' },
      items: [
        { name: 'LIBERO', done: true },
        { name: 'LIBERO-Plus', done: true },
        { name: 'SimplerEnv', done: true },
        { name: 'RoboTwin 2.0', done: true },
        { name: 'RoboCasa-GR1', done: true },
        { name: 'RoboCasa365', done: true },
        { name: 'BEHAVIOR-1K', done: true },
        { name: 'CALVIN', done: true },
        { name: 'DOMINO', done: true },
        { name: 'RoboDojo', done: true },
        { name: 'VLA-Arena', done: true },
        { name: 'MetaWorld', done: true },
        { name: 'VLN-CE', done: true },
        { name: 'Franka (real)', done: true },
        { name: 'RoboChallenge (real)', done: true },
        { name: 'Unitree G1 (real)', done: true },
        { name: 'SO101', done: false },
        { name: 'RLBench', done: false },
      ],
      embodiments: ['Single-arm', 'Bimanual', 'Humanoid', 'Mobile manipulation', 'Navigation'],
      reports: [
        { icon: 'ti ti-gauge', label: { en: 'Training efficiency report', zh: '训练效率报告' }, href: 'https://github.com/starVLA/starVLA/issues/158' },
        { icon: 'ti ti-chart-line', label: { en: 'Training curves', zh: '训练曲线' }, href: 'https://github.com/starVLA/starVLA/issues/68' },
        { icon: 'ti ti-book', label: { en: 'Benchmark docs & protocols', zh: '基准文档与评测协议' }, href: `${DOCS_BASE}/benchmarks/` },
      ],
    },
  },
  quickStart: {
    title: { en: 'From zero to a running policy', zh: '从零到跑起来' },
    intro: {
      en: 'Pick a goal and copy the commands. Evaluation always runs in two terminals: the policy server keeps model dependencies isolated from the simulator.',
      zh: '选择目标并复制命令。评测始终使用两个终端：策略服务将模型依赖与仿真器隔离。',
    },
    goals: [
      { key: 'install', en: 'Install', zh: '安装' },
      { key: 'smoke', en: 'Smoke test', zh: '冒烟测试' },
      { key: 'evaluate', en: 'Evaluate', zh: '评测' },
    ],
    benchmarks: [
      { key: 'libero', en: 'LIBERO', zh: 'LIBERO' },
      { key: 'simplerenv', en: 'SimplerEnv', zh: 'SimplerEnv' },
      { key: 'robocasa', en: 'RoboCasa', zh: 'RoboCasa' },
      { key: 'robotwin', en: 'RoboTwin', zh: 'RoboTwin' },
      { key: 'behavior', en: 'BEHAVIOR-1K', zh: 'BEHAVIOR-1K' },
    ],
    presets: {
      install: {
        terminalA: [
          'git clone https://github.com/starVLA/starVLA',
          'cd starVLA',
          'conda create -n starVLA python=3.10 -y',
          'conda activate starVLA',
          'pip install -r requirements.txt',
          'pip install flash-attn --no-build-isolation',
          'pip install -e .',
        ].join('\n'),
      },
      smoke: {
        terminalA: ['conda activate starVLA', 'python starVLA/model/framework/VLM4A/QwenGR00T.py'].join('\n'),
      },
      evaluate: {
        mapping: {
          libero: {
            terminalA: 'bash examples/simBenchmarks/LIBERO/eval_files/run_policy_server.sh',
            terminalB: 'bash examples/simBenchmarks/LIBERO/eval_files/eval_libero.sh',
          },
          simplerenv: {
            terminalA: 'bash examples/simBenchmarks/SimplerEnv/eval_files/run_policy_server.sh',
            terminalB:
              'export MODEL_PATH=/path/to/checkpoints/steps_50000_pytorch_model.pt\n' +
              'bash examples/simBenchmarks/SimplerEnv/start_simpler_env.sh ${MODEL_PATH}',
          },
          robocasa: {
            terminalA:
              'python deployment/model_server/server_policy.py \\\n  --ckpt_path ${your_ckpt} --port 5678 --use_bf16',
            terminalB:
              'python examples/simBenchmarks/Robocasa_tabletop/eval_files/simulation_env.py \\\n  --args.port 5678 --args.n_episodes 50 --args.pretrained_path ${your_ckpt}',
          },
          robotwin: {
            terminalA: 'bash examples/simBenchmarks/Robotwin/eval_files/run_policy_server.sh',
            terminalB:
              'bash examples/simBenchmarks/Robotwin/eval_files/start_eval.sh \\\n  -m demo_clean -n my_run -c /path/to/checkpoint.pt adjust_bottle',
          },
          behavior: {
            terminalA: 'bash examples/simBenchmarks/Behavior/start_server.sh',
            terminalB: 'bash examples/simBenchmarks/Behavior/start_client.sh',
          },
        },
      },
    },
    guides: [
      {
        icon: 'ti ti-route',
        title: { en: 'Step-by-step guide', zh: '新手指南' },
        desc: { en: 'Install → train → evaluate on LIBERO.', zh: '从安装、训练到 LIBERO 评测的完整流程。' },
        href: 'https://github.com/starVLA/starVLA/blob/main/docs/starVLA_guideline.md',
      },
      {
        icon: 'ti ti-database-plus',
        title: { en: 'Integrate your dataset', zh: '接入你的数据集' },
        desc: { en: 'Bring your own robot / dataset into StarVLA.', zh: '将自己的机器人或数据集接入 StarVLA。' },
        href: 'https://github.com/starVLA/starVLA/blob/main/docs/integrate_your_dataset.md',
      },
      {
        icon: 'ti ti-puzzle',
        title: { en: 'Lego-like design', zh: '乐高式设计' },
        desc: { en: 'Top-down modular principles for extending the framework.', zh: '用于扩展框架的自顶向下模块化原则。' },
        href: `${DOCS_BASE}/design/lego-like/`,
      },
      {
        icon: 'ti ti-plug-connected',
        title: { en: 'Evaluation protocol', zh: '评测协议' },
        desc: { en: 'The unified policy client–server interface.', zh: '统一的策略客户端-服务端接口。' },
        href: `${DOCS_BASE}/design/eval-protocol/`,
      },
    ],
  },
  modelZoo: {
    title: { en: 'Model zoo', zh: '模型库' },
    lead: {
      en: 'Published backbones and checkpoints to reproduce or extend StarVLA experiments.',
      zh: '已发布的骨干与检查点，可直接复现或扩展 StarVLA 实验。',
    },
    items: [
      {
        name: 'VLAct_Qwen3_Pretrain',
        kind: { en: 'Pre-trained backbone', zh: '预训练骨干' },
        desc: { en: 'Representation-centric continued pre-training on Qwen3-VL-4B. Set it as base_vlm in any recipe.', zh: '基于 Qwen3-VL-4B 的表征中心继续预训练，可作为任意配方的 base_vlm。' },
        link: 'https://huggingface.co/StarVLA/VLAct_Qwen3_Pretrain',
      },
      {
        name: 'Qwen3-VL-4B-Instruct-Action',
        kind: { en: 'Action-ready backbone', zh: '动作化骨干' },
        desc: { en: 'Qwen3-VL with an extended FAST action vocabulary.', zh: '扩展了 FAST 动作词表的 Qwen3-VL。' },
        link: 'https://huggingface.co/StarVLA/Qwen3-VL-4B-Instruct-Action',
      },
      {
        name: 'Qwen2.5-VL-3B-Instruct-Action',
        kind: { en: 'Action-ready backbone', zh: '动作化骨干' },
        desc: { en: 'Extended vocabulary with fast tokens for discrete action modeling.', zh: '扩展 fast token 词表，用于离散动作建模。' },
        link: 'https://huggingface.co/StarVLA/Qwen2.5-VL-3B-Instruct-Action',
      },
      {
        name: 'Qwen3VL-GR00T-Bridge-RT-1',
        kind: { en: 'Checkpoint', zh: '检查点' },
        desc: { en: 'Bridge + Fractal checkpoint for SimplerEnv-style evaluation.', zh: '用于 SimplerEnv 评测的 Bridge + Fractal 检查点。' },
        link: 'https://huggingface.co/StarVLA/Qwen3VL-GR00T-Bridge-RT-1',
      },
      {
        name: 'world-model-to-vla',
        kind: { en: 'Collection', zh: '模型合集' },
        desc: { en: 'WM4A checkpoints: Cosmos-Predict2 / Wan2.2 backbones for action prediction.', zh: 'WM4A 检查点：以 Cosmos-Predict2 / Wan2.2 为骨干的动作预测模型。' },
        link: 'https://huggingface.co/collections/StarVLA/world-model-to-vla',
      },
    ],
  },
  news: {
    title: { en: "What's new", zh: '最新动态' },
    items: [
      { date: '2026-09', en: 'RoboCasa365 (PandaOmron) integration with a consolidated data / training / evaluation guide; best local result StarVLA-PI at 40.64%.', zh: 'RoboCasa365（PandaOmron）集成：数据/训练/评测一体化指南，本地最佳结果 StarVLA-PI 40.64%。', href: 'https://github.com/starVLA/starVLA/tree/main/examples/simBenchmarks/Robocasa_365' },
      { date: '2026-08', en: 'VLAct released: representation-centric continued pre-training for reusable VLA backbones.', zh: 'VLAct 发布：面向可复用 VLA 骨干的表征中心继续预训练。', href: 'https://starvla.github.io/VLAct/' },
      { date: '2026-08', en: 'RoboDojo supported through XPolicyLab.', zh: '通过 XPolicyLab 支持 RoboDojo。', href: 'https://github.com/starVLA/starVLA/tree/main/examples/simBenchmarks/RoboDojo' },
      { date: '2026-05', en: 'Qwen-series VLA training on Ascend NPU.', zh: '支持在昇腾 NPU 上训练 Qwen 系列 VLA。', href: 'https://github.com/starVLA/starVLA/pull/336' },
      { date: '2026-05', en: 'Agent skills: GitHub Copilot can autonomously integrate new benchmarks into StarVLA.', zh: 'Agent skills：GitHub Copilot 可自主将新基准集成进 StarVLA。', href: 'https://github.com/starVLA/starVLA/tree/main/docs/agent_skills' },
      { date: '2026-04', en: 'DOMINO dynamic-manipulation benchmark, RL post-training via RLinf, and WM4A world-model backbones.', zh: 'DOMINO 动态操作基准、基于 RLinf 的 RL 后训练，以及 WM4A 世界模型骨干。', href: 'https://github.com/starVLA/starVLA/blob/main/docs/WM4A.md' },
      { date: '2026-03', en: 'Qwen3.5 backbones (0.8B–9B) and complete Franka real-robot examples.', zh: 'Qwen3.5 骨干（0.8B–9B）与完整的 Franka 真机示例。', href: 'https://github.com/starVLA/starVLA/pull/172' },
    ],
    more: { en: 'Full timeline in the README', zh: '完整时间线见 README' },
  },
  ecosystem: {
    title: { en: 'Ecosystem', zh: '生态' },
    lead: {
      en: 'Projects that build on StarVLA or extend it with training, evaluation and deployment tooling.',
      zh: '基于 StarVLA 构建、或为其补充训练/评测/部署工具的项目。',
    },
    items: [
      { name: 'RLinf', desc: { en: 'RL post-training for StarVLA policies.', zh: '为 StarVLA 策略提供 RL 后训练。' }, link: 'https://rlinf.readthedocs.io/en/latest/rst_source/examples/embodied/starvla.html' },
      { name: 'vla-evaluation-harness', desc: { en: 'AllenAI Docker environments and accelerated large-scale evaluation.', zh: 'AllenAI 提供的 Docker 环境与大规模评测加速。' }, link: 'https://github.com/allenai/vla-evaluation-harness' },
      { name: 'NeuroVLA', desc: { en: 'Brain-like embodied intelligence for fluid robotic control.', zh: '面向灵巧机器人控制的脑启发式具身智能。' }, link: 'https://github.com/guoweiyu/NeuroVLA' },
      { name: 'PhysBrain', desc: { en: 'Egocentric data bridge from multimodal perception to physical intelligence.', zh: '用第一视角数据连接多模态感知与物理智能。' }, link: 'https://zgc-embodyai.github.io/PhysBrain/' },
      { name: 'TwinBrainVLA', desc: { en: 'Asymmetric Mixture-of-Transformers for embodied tasks.', zh: '用于具身任务的非对称混合 Transformer 方案。' }, link: 'https://github.com/ZGC-EmbodyAI/TwinBrainVLA' },
      { name: 'ABot-M0', desc: { en: 'Pre-trained Qwen3-VL-4B weights reloadable into StarVLA frameworks.', zh: '可直接载入 StarVLA 框架的 Qwen3-VL-4B 预训练权重。' }, link: 'https://github.com/amap-cvlab/ABot-Manipulation' },
    ],
  },
  community: {
    title: { en: 'Join the community', zh: '加入社区' },
    lead: {
      en: 'StarVLA is maintained by an open community of researchers and engineers. Issues, PRs and new benchmark integrations are always welcome.',
      zh: 'StarVLA 由开放的研究者与工程师社区维护，欢迎提交 Issue、PR 与新的基准集成。',
    },
    cards: [
      { icon: 'ti ti-brand-github', title: 'GitHub', desc: { en: 'Source, issues and pull requests.', zh: '源码、Issue 与 PR。' }, href: GITHUB_URL },
      { icon: 'ti ti-brand-wechat', title: 'WeChat', desc: { en: 'Chinese discussion group (via issue thread).', zh: '中文交流群（通过 issue 链接加入）。' }, href: 'https://github.com/starVLA/starVLA/issues/64#issuecomment-3715403845' },
      { icon: 'ti ti-users-group', title: { en: 'Contributors group', zh: '贡献者小组' }, desc: { en: 'Coordinate releases and the contributor list.', zh: '协调版本发布与贡献者名单。' }, href: 'https://github.com/starVLA/starVLA/issues/393' },
      { icon: 'ti ti-notebook', title: { en: 'Daily dev log', zh: '每日开发日志' }, desc: { en: 'Follow what lands in starVLA_dev.', zh: '跟进 starVLA_dev 分支的最新进展。' }, href: 'https://github.com/starVLA/starVLA/issues/64#issue-3727060165' },
    ],
  },
  citation: {
    title: { en: 'Citation', zh: '引用' },
    lead: {
      en: 'If StarVLA helps your research, please cite the technical report.',
      zh: '如果 StarVLA 对你的研究有帮助，请引用技术报告。',
    },
    bibtex: `@article{community2026starvla,
  title={StarVLA: A Lego-like Codebase for Vision-Language-Action Model Developing},
  author={{StarVLA Community}},
  journal={arXiv preprint arXiv:2604.05014},
  year={2026},
  eprint={2604.05014},
  archivePrefix={arXiv},
  primaryClass={cs.RO}
}`,
  },
} as const;
