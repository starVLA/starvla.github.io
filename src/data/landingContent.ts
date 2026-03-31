export type Locale = 'en' | 'zh';
const DOCS_BASE = 'https://starvla.github.io/docs';

export const landingContent = {
  meta: {
    title: 'starVLA | Lego-like VLM-to-VLA Development',
    description:
      'Build, train, and evaluate Vision-Language-Action models with modular frameworks, reproducible benchmarks, and production-ready deployment interfaces.',
  },
  nav: [
    { id: 'overview', en: 'Overview', zh: '概览' },
    { id: 'quick-start', en: 'Quick Start', zh: '快速开始' },
    { id: 'benchmarks', en: 'Benchmarks', zh: '基准结果' },
    { id: 'model-zoo', en: 'Model Zoo', zh: '模型库' },
    { id: 'community', en: 'Community', zh: '社区' },
  ],
  hero: {
    badge: { en: 'Open-source Robotics Foundation Stack', zh: '面向机器人基础模型的开源栈' },
    title: {
      en: 'A Lego-like Codebase for VLM to VLA Development',
      zh: '面向 VLM 到 VLA 的 Lego 式开发代码库',
    },
    subtitle: {
      en: 'Unify model frameworks, training recipes, benchmark evaluation, and deployment interfaces so teams can move from ideas to robot actions faster.',
      zh: '统一模型框架、训练流程、基准评测与部署接口，让团队更快把想法落到机器人动作。',
    },
    primaryCta: { en: 'Read Documentation', zh: '查看文档', href: DOCS_BASE },
    secondaryCta: { en: 'Explore GitHub', zh: '查看 GitHub', href: 'https://github.com/starVLA/starVLA' },
    tertiaryCta: { en: 'Hugging Face', zh: 'Hugging Face', href: 'https://huggingface.co/StarVLA' },
  },
  metrics: [
    {
      key: 'stars',
      label: { en: 'GitHub Stars', zh: 'GitHub Stars' },
      badgeUrl: 'https://img.shields.io/github/stars/starVLA/starVLA.json',
      fallback: '1.5k',
      href: 'https://github.com/starVLA/starVLA/stargazers',
    },
    {
      key: 'forks',
      label: { en: 'Forks', zh: 'Forks' },
      badgeUrl: 'https://img.shields.io/github/forks/starVLA/starVLA.json',
      fallback: '174',
      href: 'https://github.com/starVLA/starVLA/network',
    },
    {
      key: 'issues',
      label: { en: 'Open Issues', zh: 'Open Issues' },
      badgeUrl: 'https://img.shields.io/github/issues/starVLA/starVLA.json',
      fallback: '16 open',
      href: 'https://github.com/starVLA/starVLA/issues',
    },
  ],
  features: [
    {
      enTitle: 'Modular Frameworks',
      zhTitle: '模块化框架',
      enBody:
        'Qwen-FAST, Qwen-OFT, Qwen-PI, and Qwen-GR00T share the same trainer, dataloader, and deployment stack for plug-and-play experimentation.',
      zhBody:
        'Qwen-FAST、Qwen-OFT、Qwen-PI、Qwen-GR00T 共用训练、数据和部署管线，实现即插即用实验迭代。',
      icon: 'puzzle',
    },
    {
      enTitle: 'Reproducible Benchmarks',
      zhTitle: '可复现实验基准',
      enBody:
        'Run SimplerEnv, LIBERO, RoboCasa, RoboTwin, and BEHAVIOR with benchmark-specific scripts and clear environment boundaries.',
      zhBody:
        '通过基准专用脚本和清晰环境边界，复现 SimplerEnv、LIBERO、RoboCasa、RoboTwin、BEHAVIOR。',
      icon: 'chart',
    },
    {
      enTitle: 'Research to Deployment',
      zhTitle: '研究到部署闭环',
      enBody:
        'Use a unified WebSocket policy interface to bridge simulation and real-robot control without rewriting model serving logic.',
      zhBody: '使用统一 WebSocket 策略接口连接仿真与真机，无需重写模型服务逻辑。',
      icon: 'server',
    },
  ],
  quickStart: {
    title: { en: 'Quick Start', zh: '快速开始' },
    intro: {
      en: 'Choose a goal and copy the command templates. Evaluation workflows are split into two terminals to avoid dependency conflicts.',
      zh: '选择目标后复制命令模板。评测流程默认分为两个终端，以避免依赖冲突。',
    },
    goals: [
      { key: 'install', en: 'Install', zh: '安装' },
      { key: 'smoke', en: 'Smoke Test', zh: '冒烟测试' },
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
        title: { en: 'Environment Setup', zh: '环境安装' },
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
        title: { en: 'Framework Smoke Test', zh: '框架冒烟测试' },
        terminalA: [
          'conda activate starVLA',
          'python starVLA/model/framework/QwenGR00T.py',
        ].join('\n'),
      },
      evaluate: {
        title: { en: 'Benchmark Evaluation', zh: '基准评测' },
        mapping: {
          libero: {
            terminalA: 'bash examples/LIBERO/eval_files/run_policy_server.sh',
            terminalB: 'bash examples/LIBERO/eval_files/eval_libero.sh',
          },
          simplerenv: {
            terminalA: 'bash examples/SimplerEnv/eval_files/run_policy_server.sh',
            terminalB:
              'export MODEL_PATH=/path/to/checkpoints/steps_50000_pytorch_model.pt\\n' +
              'bash examples/SimplerEnv/start_simpler_env.sh ${MODEL_PATH}',
          },
          robocasa: {
            terminalA:
              'python deployment/model_server/server_policy.py --ckpt_path ${your_ckpt} --port 5678 --use_bf16',
            terminalB:
              'python examples/Robocasa_tabletop/eval_files/simulation_env.py --args.port 5678 --args.n_episodes 50 --args.pretrained_path ${your_ckpt}',
          },
          robotwin: {
            terminalA: 'bash examples/Robotwin/eval_files/run_policy_server.sh',
            terminalB: 'cd examples/Robotwin/eval_files && bash eval.sh task_name demo_clean my_test_v1 0 0',
          },
          behavior: {
            terminalA: 'bash examples/Behavior/start_server.sh',
            terminalB: 'bash examples/Behavior/start_client.sh',
          },
        },
      },
    },
  },
  benchmarkVideos: [
    {
      key: 'simplerenv',
      enTitle: 'SimplerEnv',
      zhTitle: 'SimplerEnv',
      metricEn: 'WidowX Success (Qwen-GR00T-Bridge)',
      metricZh: 'WidowX 成功率（Qwen-GR00T-Bridge）',
      value: '71.4%',
      video: '/assets/simulation_simplerenv_success_obj__0_12_0_31_n_lift_significant_57_consec_grasp_true_grasped_true_fast2x.mp4',
      source: `${DOCS_BASE}/benchmarks/simplerenv/`,
    },
    {
      key: 'robocasa',
      enTitle: 'RoboCasa',
      zhTitle: 'RoboCasa',
      metricEn: 'Average Success (Qwen3OFT)',
      metricZh: '平均成功率（Qwen3OFT）',
      value: '48.8%',
      video: '/assets/simulation_robocasa_gr1_1_fast2x.mp4',
      source: `${DOCS_BASE}/benchmarks/robocasa/`,
    },
    {
      key: 'robotwin',
      enTitle: 'RoboTwin 2.0',
      zhTitle: 'RoboTwin 2.0',
      metricEn: 'Average Hard Score (QwenOFT)',
      metricZh: 'Hard 平均分（QwenOFT）',
      value: '88.32',
      video: '/assets/simulation_robotwin_1_fast2x.mp4',
      source: `${DOCS_BASE}/benchmarks/robotwin/`,
    },
  ],
  benchmarkInfo: {
    libero: {
      enTitle: 'LIBERO',
      zhTitle: 'LIBERO',
      metricEn: 'Average Score (Qwen3-VL-OFT)',
      metricZh: '平均分（Qwen3-VL-OFT）',
      value: '96.6',
      source: `${DOCS_BASE}/benchmarks/libero/`,
    },
    behavior: {
      enTitle: 'BEHAVIOR-1K',
      zhTitle: 'BEHAVIOR-1K',
      metricEn: 'Documentation Status',
      metricZh: '文档状态',
      valueEn: 'Under Construction',
      valueZh: '文档建设中',
      source: `${DOCS_BASE}/benchmarks/behavior/`,
    },
  },
  modelZoo: [
    {
      name: 'Qwen2.5-VL-3B-Action',
      enDesc: 'Extended vocabulary with fast tokens for discrete action modeling.',
      zhDesc: '扩展 fast token 词表，用于离散动作建模。',
      link: 'https://huggingface.co/StarVLA/Qwen2.5-VL-3B-Instruct-Action',
    },
    {
      name: 'Qwen3-VL-4B-Action',
      enDesc: 'Qwen3-VL action-ready backbone for downstream VLA training.',
      zhDesc: '面向下游 VLA 训练的 Qwen3-VL 动作化骨干。',
      link: 'https://huggingface.co/StarVLA/Qwen3-VL-4B-Instruct-Action',
    },
    {
      name: 'Qwen3VL-GR00T-Bridge-RT-1',
      enDesc: 'Bridge + Fractal checkpoint for SimplerEnv-style evaluation.',
      zhDesc: '用于 SimplerEnv 评测的 Bridge + Fractal 检查点。',
      link: 'https://huggingface.co/StarVLA/Qwen3VL-GR00T-Bridge-RT-1',
    },
  ],
  community: {
    docs: DOCS_BASE,
    github: 'https://github.com/starVLA/starVLA',
    huggingFace: 'https://huggingface.co/StarVLA',
    wechatIssue: 'https://github.com/starVLA/starVLA/issues/64#issuecomment-3715403845',
    overleaf: 'https://www.overleaf.com/read/qqtwrnprctkf#d5bdce',
  },
  ecosystem: [
    {
      name: 'NeuroVLA',
      link: 'https://github.com/guoweiyu/NeuroVLA',
      enDesc: 'Brain-like embodied intelligence for fluid robotic control.',
      zhDesc: '面向灵巧机器人控制的脑启发式具身智能。',
    },
    {
      name: 'PhysBrain',
      link: 'https://zgc-embodyai.github.io/PhysBrain/',
      enDesc: 'Egocentric data bridge from VLMs to physical intelligence.',
      zhDesc: '用第一视角数据连接 VLM 与物理智能。',
    },
    {
      name: 'TwinBrainVLA',
      link: 'https://github.com/ZGC-EmbodyAI/TwinBrainVLA',
      enDesc: 'Asymmetric Mixture-of-Transformers for embodied tasks.',
      zhDesc: '用于具身任务的非对称混合 Transformer 方案。',
    },
  ],
} as const;
