export const languages = {
  zh: "中文",
} as const;

export const defaultLang = "zh" as const;

export type Lang = keyof typeof languages;

export const ui = {
  zh: {
    // Navigation
    "nav.posts": "文章",
    "nav.tags": "导航",
    "nav.about": "关于",
    "nav.archives": "归档",
    "nav.search": "搜索",
    "nav.skipToContent": "跳转到内容",
    "nav.home": "首页",
    "nav.goBack": "返回",
    "nav.searchDesc": "搜索文章...",
    "nav.archivesDesc": "所有归档文章",
    
    // Months
    "month.1": "一月",
    "month.2": "二月",
    "month.3": "三月",
    "month.4": "四月",
    "month.5": "五月",
    "month.6": "六月",
    "month.7": "七月",
    "month.8": "八月",
    "month.9": "九月",
    "month.10": "十月",
    "month.11": "十一月",
    "month.12": "十二月",
    
    // Home page hero
    "hero.greeting": "你好",
    "hero.description": "这是一个简洁、响应式、无障碍且对 SEO 友好的 Astro 博客主题。支持明暗模式切换，可自定义配色方案。",
    "hero.cta": "阅读博客文章或查看",
    "hero.socialLinks": "社交链接：",
    
    // Sections
    "section.featured": "精选文章",
    "section.recentPosts": "最新文章",
    "button.allPosts": "所有文章",
    
    // Post details
    "post.previous": "上一篇",
    "post.next": "下一篇",
    "post.shareOn": "分享到：",
    "post.backToTop": "返回顶部",
    "post.updated": "更新于：",
    "post.editPage": "编辑页面",
    
    // Pages
    "page.posts": "文章",
    "page.postsDesc": "所有发布的文章",
    "page.tags": "导航",
    "page.tagsDesc": "收藏的网址导航",
    "page.tagPrefix": "标签：",
    "page.tagDesc": "包含「{tag}」标签的所有文章",
    "page.about": "关于",
    "page.pageNum": "第 {num} 页",
    
    // Footer
    "footer.copyright": "版权所有 © {year}",
    "footer.allRights": "保留所有权利",
    
    // 404 Page
    "error.pageNotFound": "页面未找到",
    "error.goHome": "返回首页",
    
    // Theme
    "theme.toggle": "切换明暗模式",
    
    // Language
    "lang.switch": "切换语言",
  },
} as const;

export type TranslationKey = keyof typeof ui[typeof defaultLang];

export function useTranslations(lang: Lang) {
  return function t(key: TranslationKey): string {
    return ui[lang]?.[key] || ui[defaultLang][key];
  };
}

/**
 * Get the alternate language path for the current URL
 */
export function getAlternatePath(currentPath: string, targetLang: Lang): string {
  const pathParts = currentPath.split("/").filter(p => p);
  
  // Check if the first part is a language code
  if (pathParts[0] === "zh" || pathParts[0] === "en") {
    pathParts[0] = targetLang;
  } else {
    // Prepend language if not present
    pathParts.unshift(targetLang);
  }
  
  return "/" + pathParts.join("/") + (currentPath.endsWith("/") ? "/" : "");
}
