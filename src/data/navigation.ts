export interface NavigationLink {
  title: string;
  url: string;
  description?: string;
}

export interface NavigationCategory {
  name: string;
  links: NavigationLink[];
}

export const navigationData: NavigationCategory[] = [
  {
    name: "开发工具",
    links: [
      {
        title: "GitHub",
        url: "https://github.com",
        description: "全球最大的代码托管平台"
      },
      {
        title: "Stack Overflow",
        url: "https://stackoverflow.com",
        description: "程序员问答社区"
      },
      {
        title: "MDN Web Docs",
        url: "https://developer.mozilla.org",
        description: "Web 开发文档"
      }
    ]
  },
  {
    name: "设计资源",
    links: [
      {
        title: "Dribbble",
        url: "https://dribbble.com",
        description: "设计师作品展示平台"
      },
      {
        title: "Behance",
        url: "https://www.behance.net",
        description: "创意作品展示平台"
      }
    ]
  },
  {
    name: "学习资源",
    links: [
      {
        title: "Coursera",
        url: "https://www.coursera.org",
        description: "在线课程平台"
      },
      {
        title: "edX",
        url: "https://www.edx.org",
        description: "在线教育平台"
      }
    ]
  },
  {
    name: "社区论坛",
    links: [
      {
        title: "Linux.do",
        url: "https://linux.do",
        description: "Linux 技术社区"
      },
      {
        title: "V2EX",
        url: "https://www.v2ex.com",
        description: "创意工作者社区"
      }
    ]
  }
];
