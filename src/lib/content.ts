/**
 * 全站内容数据：功能特色、影视分类、常见问题、用户评价、更新日志
 */

export type Feature = {
  icon: string;
  title: string;
  summary: string;
  detail: string;
};

export const FEATURES: Feature[] = [
  {
    icon: 'Clapperboard',
    title: '海量影视聚合',
    summary: '电影、剧集、综艺、动漫一站搜齐',
    detail:
      '聚合多家主流视频站点资源，院线大片、热门剧集、王牌综艺、番剧动漫每日持续更新，热门榜单实时同步，找片不再来回切换 App。',
  },
  {
    icon: 'Sparkles',
    title: '高清蓝光秒播',
    summary: '1080P 蓝光画质，即点即看',
    detail:
      '支持 480P 标清到 1080P 蓝光多档清晰度自由切换，智能线路调度与预加载技术让片头几乎零等待，弱网环境也能稳定播放。',
  },
  {
    icon: 'Search',
    title: '智能全网搜索',
    summary: '一次搜索，全网结果',
    detail:
      '输入片名、演员、导演甚至一句剧情关键词，即可跨线路检索全部资源，支持模糊匹配、拼音搜索与搜索联想，老片冷门片也能找到。',
  },
  {
    icon: 'Bookmark',
    title: '追剧收藏同步',
    summary: '更新自动提醒，进度云端续播',
    detail:
      '一键收藏正在追的剧集，更新后第一时间推送提醒；观看进度自动记录，手机上没看完，换设备登录也能从上次位置继续播放。',
  },
  {
    icon: 'Download',
    title: '离线缓存下载',
    summary: 'Wi-Fi 下载，出门无网也看',
    detail:
      '支持多任务后台缓存与清晰度选择，地铁、飞机、出差路上无网络也能流畅看片，缓存文件加密存储，省心省流量。',
  },
  {
    icon: 'Cast',
    title: '电视投屏观看',
    summary: '小屏投大屏，全家一起看',
    detail:
      '内置 DLNA / 投屏功能，一键投放到智能电视、电视盒子与投影仪，支持锁屏遥控、音量调节，客厅秒变私人影院。',
  },
  {
    icon: 'Gauge',
    title: '轻量极速省流',
    summary: '安装包小巧，运行内存占用低',
    detail:
      '安装包不足 30MB，低配安卓机也能流畅运行；自研播放器内核启动快、耗电低，并提供流量节省模式，移动网络下观看更安心。',
  },
  {
    icon: 'ShieldCheck',
    title: '安全绿色纯净',
    summary: '无恶意插件，权限透明可控',
    detail:
      '安装包经过多重安全检测，不偷跑流量、不私自扣费；索取权限均有明确用途说明，支持随时在系统设置中收回，用得放心。',
  },
];

export type Category = {
  slug: string;
  name: string;
  enName: string;
  icon: string;
  count: string;
  description: string;
  tags: string[];
  hotTitles: string[];
  gradient: string;
};

export const CATEGORIES: Category[] = [
  {
    slug: 'movie',
    name: '电影',
    enName: 'Movies',
    icon: 'Film',
    count: '38,000+ 部',
    description:
      '好莱坞大片、国产佳作、港片经典、日韩电影、印度神片、欧洲文艺片全覆盖，动作、喜剧、爱情、科幻、悬疑、恐怖、战争等题材一应俱全，新片上线快人一步。',
    tags: ['动作片', '喜剧片', '爱情片', '科幻片', '恐怖片', '悬疑片', '战争片', '纪录片', '动画电影'],
    hotTitles: ['热门院线大片', '豆瓣高分经典', 'IMDb Top250', '年度票房榜'],
    gradient: 'linear-gradient(135deg,#ff3cdf55,#f63b2255)',
  },
  {
    slug: 'tv',
    name: '电视剧',
    enName: 'TV Series',
    icon: 'MonitorPlay',
    count: '16,000+ 部',
    description:
      '国产剧、美剧、英剧、日剧、韩剧、泰剧实时跟播，都市、古装、悬疑、甜宠、仙侠、职场、家庭题材丰富，独播剧与卫视热剧同步更新，追剧零等待。',
    tags: ['国产剧', '美剧', '韩剧', '日剧', '英剧', '泰剧', '古装剧', '悬疑剧', '甜宠剧'],
    hotTitles: ['本周热播榜', '卫视黄金档', 'Netflix 热剧', '经典老剧回顾'],
    gradient: 'linear-gradient(135deg,#ffa41b55,#ff3cdf55)',
  },
  {
    slug: 'variety',
    name: '综艺',
    enName: 'Variety',
    icon: 'Mic2',
    count: '9,500+ 部',
    description:
      '音乐选秀、搞笑真人秀、脱口秀、慢综艺、推理探案、情感观察类节目齐全，湖南卫视、浙江卫视、爱奇艺、腾讯视频热门综艺一网打尽，下饭必备。',
    tags: ['真人秀', '脱口秀', '音乐综艺', '搞笑综艺', '推理综艺', '美食综艺', '旅行综艺'],
    hotTitles: ['周末强档综艺', '年度选秀现场', '爆笑名场面', '慢生活治愈系'],
    gradient: 'linear-gradient(135deg,#ffce2e55,#f63b2255)',
  },
  {
    slug: 'anime',
    name: '动漫',
    enName: 'Anime',
    icon: 'Sparkle',
    count: '22,000+ 部',
    description:
      '日本新番、国漫精品、欧美动画同步更新，热血、恋爱、异世界、治愈、机战、少儿题材全覆盖，支持原声与多语字幕，二次元爱好者追番神器。',
    tags: ['日本新番', '国产动漫', '热血番', '恋爱番', '异世界', '治愈系', '少儿动画', '剧场版'],
    hotTitles: ['本季新番速报', '经典长篇连载', '国漫崛起榜', '剧场版合集'],
    gradient: 'linear-gradient(135deg,#ff6b3d55,#ff3cdf55)',
  },
];

export type Faq = {
  question: string;
  answer: string;
  category: string;
};

export const FAQ_CATEGORIES = ['下载安装', '播放使用', '账号数据', '安全合规'];

export const FAQS: Faq[] = [
  {
    category: '下载安装',
    question: '麻花影视 App 在哪里下载？',
    answer:
      '请通过本官网"安卓下载"页面提供的官方安装包链接下载，文件托管于正规对象存储服务。我们目前仅提供 Android 安卓版（APK 安装包），请勿在来历不明的第三方站点下载，以免安装被篡改的版本。',
  },
  {
    category: '下载安装',
    question: '安装时提示"未知来源应用"怎么办？',
    answer:
      '由于应用未上架部分手机厂商应用商店，安卓系统会默认拦截非商店来源的安装包。在系统弹窗中点击"允许此来源"，或进入「设置 - 安全/应用管理 - 安装未知应用」，为浏览器开启安装权限后重新点击安装即可，该权限可在安装完成后随时关闭。',
  },
  {
    category: '下载安装',
    question: '安装包为什么下载失败或安装包解析出错？',
    answer:
      '通常由网络中断导致下载不完整引起。请删除已下载的文件，在稳定的 Wi-Fi 网络环境下重新下载；若提示"解析包错误"，请确认手机系统版本不低于 Android 5.0，并尝试清理存储空间后重新安装。',
  },
  {
    category: '播放使用',
    question: '麻花影视看视频收费吗？',
    answer:
      '麻花影视定位为免费影视聚合工具，基础的搜索、播放与收藏功能均可免费使用。播放过程中不收取任何费用，也不会通过短信等方式扣费；如运营商网络观看会产生正常移动数据流量，建议在 Wi-Fi 环境下使用或提前离线缓存。',
  },
  {
    category: '播放使用',
    question: '点击播放一直加载或无法播放怎么办？',
    answer:
      '个别线路可能因片源方调整而暂时失效，可在播放器内切换其他播放线路，或切换 Wi-Fi/移动网络后重试；同时支持在设置中切换解码模式（硬解/软解）。若全部分辨率与线路均无法播放，欢迎通过 App 内反馈入口上报片名，我们会尽快修复。',
  },
  {
    category: '播放使用',
    question: '如何把视频投到电视上观看？',
    answer:
      '请确保手机与智能电视/电视盒子连接在同一个 Wi-Fi 网络下，在播放页点击右上角投屏按钮，选择搜索到的电视设备即可。若搜索不到设备，可检查电视是否开启 DLNA/Miracast 功能，或重启路由器后重试。',
  },
  {
    category: '账号数据',
    question: '需要注册登录才能使用吗？',
    answer:
      '搜索与播放在游客状态下即可直接使用。登录账号（支持手机号等方式）后可使用收藏、追剧提醒、观看进度多端同步、云端续播等功能。我们不会向无关第三方共享您的个人信息，详见隐私政策。',
  },
  {
    category: '账号数据',
    question: '收藏和观看记录会丢失吗？',
    answer:
      '未登录状态下数据保存在本机，卸载应用或清理数据会导致记录丢失；登录账号后收藏与播放进度会同步到云端，换机重装登录同一账号即可恢复。建议长期追剧的用户登录后使用。',
  },
  {
    category: '安全合规',
    question: '麻花影视安全吗，会不会窃取隐私或扣费？',
    answer:
      '官方安装包经过安全检测，不包含恶意扣费代码与木马插件，申请的每一项系统权限都服务于具体功能（如存储权限用于离线缓存）。请务必从本官网下载安装，第三方修改版的安全风险无法保证。',
  },
  {
    category: '安全合规',
    question: 'App 里的视频内容有版权吗？',
    answer:
      '麻花影视是影视资源聚合与导航工具，本身不生产、不上传、不存储影视内容，播放数据均来自公开网络的第三方站点。我们尊重知识产权，如权利人认为站内链接指向的内容侵犯其合法权益，可通过官网"版权声明"页面的渠道提交权属证明，我们将在核实后及时处理相关链接。',
  },
];

export type Review = {
  name: string;
  role: string;
  rating: number;
  content: string;
};

export const REVIEWS: Review[] = [
  {
    name: '阿杰',
    role: '通勤上班族',
    rating: 5,
    content:
      '每天地铁单程四十分钟，提前在家 Wi-Fi 缓存两集剧，路上完全不卡。搜片特别全，好多冷门老剧别的软件找不到，这里一搜就有。',
  },
  {
    name: '小鹿不乱撞',
    role: '追剧达人',
    rating: 5,
    content:
      '同时追四五部剧，更新提醒太实用了，再也不用自己挨个软件查。投屏到电视也很稳，周末窝沙发看大片，画质真的清晰。',
  },
  {
    name: '老张',
    role: '数码爱好者',
    rating: 4,
    content:
      '包体很小，几年前的旧安卓装上照样流畅，没有乱七八糟的推送。线路偶尔会失效，手动切一条就行，整体瑕不掩瑜。',
  },
  {
    name: '一碗车仔面',
    role: '综艺爱好者',
    rating: 5,
    content:
      '各大平台的综艺在一个 App 里就能看完，不用为了一个节目开一堆会员。界面干净，广告很少，下饭神器实至名归。',
  },
  {
    name: '林同学',
    role: '二次元番迷',
    rating: 5,
    content:
      '新番更新速度很快，字幕组版本齐全，收藏之后更新有提醒。用了大半年没见过偷跑流量，对学生党很友好。',
  },
  {
    name: '陈先生',
    role: '经常出差的销售',
    rating: 5,
    content:
      '飞机高铁上全靠它，离线缓存稳定，进度还能云端续播。最看重的是干净，不弹窗不扣费，给同事也推荐了。',
  },
];

export type ChangelogEntry = {
  version: string;
  date: string;
  items: { type: 'new' | 'improve' | 'fix'; text: string }[];
};

export const CHANGELOG: ChangelogEntry[] = [
  {
    version: 'v5.0.3',
    date: '2025-09-18',
    items: [
      { type: 'new', text: '新增首页个性化推荐，根据观看偏好智能选片' },
      { type: 'new', text: '播放器支持倍速播放（0.75x - 3.0x）与长按快进' },
      { type: 'improve', text: '优化投屏连接成功率，支持更多品牌电视与盒子' },
      { type: 'fix', text: '修复部分机型离线缓存偶发中断的问题' },
    ],
  },
  {
    version: 'v5.0.0',
    date: '2025-08-06',
    items: [
      { type: 'new', text: '界面全新改版，首页信息更聚焦、操作路径更短' },
      { type: 'improve', text: '升级播放内核，首帧加载速度提升约 40%' },
      { type: 'new', text: '支持观看进度云端同步与多端续播' },
      { type: 'fix', text: '修复部分横屏视频手势调节不灵敏的问题' },
    ],
  },
  {
    version: 'v4.9.2',
    date: '2025-06-21',
    items: [
      { type: 'improve', text: '搜索支持拼音、演员名与剧情关键词联想' },
      { type: 'improve', text: '弱网环境下自动降档流畅播放' },
      { type: 'fix', text: '修复追剧更新提醒偶发延迟的问题' },
    ],
  },
];

export const STATS: { value: string; label: string }[] = [
  { value: '8600万+', label: '累计下载用户' },
  { value: '86,000+', label: '收录影视资源' },
  { value: '365天', label: '每日持续更新' },
  { value: '99.6%', label: '播放可用率' },
];
