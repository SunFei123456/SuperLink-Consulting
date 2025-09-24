// 多语言翻译配置
const translations = {
    zh: {
        // 全局通用
        knowMore: '了解详细',
        nav: {
            home: '首页',
            about: '关于我们',
            'target-clients': '服务对象',
            services: '核心服务',
            guide: '香港落地指南',
            hrservice: '管家服务',
            team: '专家团队',
            advantages: '竞争优势',
            contact: '立即咨询'
        },
        hero: {
            badge: '极致链接 SuperLink Consulting',
            title: '内地企业落地香港<br />一站式人力资源服务专家',
            subtitle: '专注助力内地科创企业高效拓展香港市场，提供跨境招聘、薪酬合规、团队管理等一站式人力资源解决方案',
            btnPrimary: '立即咨询',
            btnDesc: '一键咨询，获取落地香港实战手册!',
            stats: {
                experienceLabel: '人力资源专家为您服务',
                service: '7×24h',
                concept: '省心 | 省事 | 省钱',
            }
        },
        about: {
            badge: '关于我们',
            title: '极致链接 SuperLink Consulting',
            subtitle: '专注助力内地科创企业高效拓展香港市场<br> 团队成员横跨深港<br>20年以上内地科技企业人力资源管理经验',
            founderName: '郑楠',
            founderTitle: '创始人 & CEO',
            careerTitle: '职业身份与经历',
            feature1Title: '专注服务科创企业',
            feature1Desc: '深刻理解科创企业的业务和人才需求，快速匹配香港人才市场，精准对接人才和商机',
            feature1Tag: '省心',
            feature2Title: '高效的香港本地人力资源支持团队',
            feature2Desc: '7×24小时快速响应科创企业的人才招聘，合规雇佣和劳动关系管理等事宜',
            feature2Tag: '省事',
            feature3Title: '极致性价比的收费',
            feature3Desc: '科创企业在人才服务上更加需要关注效能，我们承诺提供极致性价比的收费，帮助企业降低成本',
            feature3Tag: '省钱'
        },
        targetClients: {
            badge: '目标客户',
            title: '专注服务科创企业',
            subtitle: '深度理解科创企业的业务特点和人才需求，提供精准匹配的人力资源服务',
            scaleTitle: '规模',
            scaleDesc: '员工 0-200人的企业',
            needsTitle: '需求痛点',
            needsDesc: '香港本地没有人力资源,但需要开展业务,需要高性价比的做好人才招募,公司管理体系的搭建',
            industryTitle: '行业',
            industryDesc: '科技企业:机器人,AI,消费电子,新材料,生物医药各类专业服务公司'
        },
        services: {
            badge: '核心服务',
            title: '一站式人力资源管家服务',
            subtitle: '从人才诊断到团队优化的全周期人力资源解决方案',
            service1: {
                title: '精准诊断',
                subtitle: '锚定团队缺口与战略目标',
                desc1: '深度调研企业的业务模式、技术路线及文化基因，识别核心岗位能力画像',
                desc2: '建立对标香港市场的人才画像，帮助客户撰写招聘说明书，助力高效的打通人才招聘渠道'
            },
            service2: {
                title: '敏捷执行',
                subtitle: '全周期人才管理闭环',
                desc1: '招聘：通过行业人脉网络与数字化渠道，精准触达人才',
                desc2: '培养：设计定制化能力提升方案，结合实战项目加速人才融入',
                desc3: '留存：构建激励体系（长短期目标达成与薪酬/股份的挂钩机制，识别核心员工，重点培养，降低关键岗位流失风险'
            },
            service3: {
                title: '专业支持',
                subtitle: '建立远程雇佣体系',
                desc1: '支持跨境员工招聘、远程办公政策设计与合规支持',
                desc2: '具备跨境服务能力（如外籍员工签证支持）助力企业布局亚洲市场'
            },
            // pricingTitle: '服务价格',
            // pricing1Title: '半托管服务',
            // pricing1Price: '10万港币/年',
            // pricing1Desc: '不包含人才招募服务',
            // pricing2Title: '全托管服务',
            // pricing2Price: '20万港币/年',
            // pricing2Desc: '包含人才招募服务'
        },
        contact: {
            badge: '立即咨询',
            title: '填写信息，让我们做你的香港人力管家',
            company: {
                title: '公司名称',
                desc: '执一人力资源咨询有限公司 SuperLink Consulting Ltd'
            },
            email: {
                title: '邮箱联系',
                desc: 'aisuperlink@gmail.com'
            },
            phone: {
                title: '电话咨询',
                desc: '00852 65245118'
            },
            address: {
                title: '公司地址',
                desc: '香港九龙弥敦道750号始创中心1501'
            },
            form: {
                title: '联系我们',
                name: '您的姓名',
                email: '邮箱地址',
                company: '公司名称',
                types: {
                    default: '选择企业类型',
                    ai: '人工智能',
                    robotics: '机器人',
                    biotech: '生物医药',
                    fintech: '金融科技',
                    materials: '新材料',
                    electronics: '消费电子',
                    other: '其他'
                },
                message: '您的需求和问题',
                submit: '获取咨询'
            }
        },
        // About页面创始人信息
        founder: {
            name: "郑楠",
            title: "创始人 & CEO",
            sectionTitle: "职业身份与经历",
            item1: {
                title: "执一管理咨询创始人",
                desc: "2023年创立执一咨询，专注为科技创业者提供人力资源服务"
            },
            item2: {
                title: "人力资源资深专家",
                desc: "深耕行业近20年，曾效力于IBM、百度、腾讯等企业，参与和见证两家创业公司成功上市"
            },
            item3: {
                title: "科创企业人力资源陪跑导师",
                desc: "曾深度参与普渡科技、云鲸智能等科技公司初创期人才搭建，陪伴公司从初创到千人规模"
            },
            item4: {
                title: "人力资源领域KOL",
                desc: "\"大湾区猎头一姐\"账号主理人，全网10万+高质量高购买力粉丝，香港人才办公室特邀嘉宾"
            },
            feature1: {
                title: "专注服务科创企业",
                desc: "深刻理解科创企业的业务和人才需求，快速匹配香港人才市场，精准对接人才和商机"
            },
            feature2: {
                title: "高效的香港本地人力资源支持团队",
                desc: "7×24小时快速响应科创企业的人才招聘，合规雇佣和劳动关系管理等事宜；在多家知名港资企业、中资企业任职10年以上的专业人力资源顾问团队"
            },
            feature3: {
                title: "极致性价比的收费",
                desc: "科创企业在人才服务上更加需要关注效能，我们承诺提供极致性价比的收费，帮助企业降低成本"
            }
        },
        // 香港落地指南
        guide: {
            badge: "香港落地指南",
            title: "解决落地困难，降低合规风险",
            subtitle: "全面的香港落地指导，帮助内地企业顺利拓展香港市场",
            risksTitle: "主要风险与困难",
            risk1: {
                title: "违规违法风险",
                desc: "在香港开公司和雇佣员工主要需遵守《公司条例》和《雇佣条例》，包括注册资本、董事要求、强积金供款等，在某些专业领域的业务，需要申请执照",
                tooltip: {
                    trigger: "专业领域",
                    title: "需要申请牌照的行业（按监管严格程度排序）",
                    items: [
                        "金融服务业（证监会1-10号牌照、放债人牌照等）",
                        "餐饮业（食肆牌照、酒牌等）",
                        "教育行业（学校注册证明书）",
                        "旅游业（旅行代理商牌照）",
                        "职业介绍所（劳工处牌照）",
                        "通讯行业（电讯牌照）",
                        "医疗及健康服务（医生执业证书）",
                        "贸易公司（进出口许可证）",
                        "零售业务（中药材/动物寄养牌照）",
                        "活动管理（公众娱乐/彩票牌照）",
                        "专业服务（律师/会计师执照）"
                    ],
                    suffix: "的业务，需要申请执照"
                }
            },
            risk2: {
                title: "人才招聘难",
                desc: "香港人才招聘渠道不明确<br> 如何精准表达公司业务<br> 如何雇佣香港人"
            },
            risk3: {
                title: "管理成本高",
                desc: "员工管理规则不清晰 <br> 离职是否需要竞业限制金<br> 是否需要付加班费<br> 汰换成本高"
            },
            complianceTitle: "实战合规指南",
            compliance1: {
                title: "强积金(MPF)供款",
                desc: "雇主必为18-65岁雇员供款；雇员月收入≥HK$7,100需自供。雇主/雇员各缴5%，基数范围HK$7,100-HK$30,000。当月第10个工作日前完成，逾期补缴+5%-10%罚款"
            },
            compliance2: {
                title: "劳工保险",
                desc: "根据《雇员补偿条例》，未投保雇主最高面临HK$10万罚款+监禁2年。员工因工受伤/患职业病可直接起诉，索赔范围包括医疗费、伤残赔偿、护理费"
            },
            compliance3: {
                title: "员工离职流程",
                desc: "需书面辞职信，确认通知期。7天内支付最后工资，包括薪金、未用年假折算、法定假日补偿。办理强积金停供，并向税务局提交IR56F表格"
            },
            compliance4: {
                title: "招聘合规要点",
                desc: "禁用年龄/性别/种族歧视表述。面试时避免询问婚姻/生育计划等敏感问题。必查学历验证、工作履历；特殊岗位需查SFC牌照、无犯罪记录"
            }
        },
        // 专家团队
        team: {
            badge: "专家团队",
            title: "香港本地人力专家介绍",
            subtitle: "横跨深港的资深人力资源和法律金融专家",
            expert1: {
                name: "KY Lee",
                intro: "KY 在香港金融和金融科技企业任职超过13年，先后服务过投资银行及亚洲金融科技初创企业，同时非常理解内地企业的需求",
                qualificationTitle: "专业资格",
                qualifications: [
                    "NLP Certified Practitioner",
                    "Australia University HR Management Bachelor",
                    "Certificate of HK Employment Ordinance",
                    "Certificate of Effective Recruitment & Selection Interview Techniques",
                    "Executive Diploma of Organisational Training & Development"
                ],
                experienceTitle: "工作经验",
                experiences: [
                    "前投资银行及零售银行人力资源部经理，管理及执行人力资源策略",
                    "由投资银行经理至亚洲金融科技初创企业的资深人力资源主管，超过10年以上不同国家招聘经验，曾为主要面试官之一，对香港大小型机构面试要求熟悉以及专业招聘市场分析",
                    "本地慈善团体执行副主席，执行多项社区公益会务及活动",
                    "超过10年国际及本地人才招聘经验，对各行各业人入职需求熟悉"
                ]
            },
            expert2: {
                name: "Anthony . Z",
                intro: "资深法律与金融专家，私募/VC、并购、加密资产领域法律顾问，先后服务过投资银行及亚洲金融科技初创企业",
                qualificationTitle: "核心专长",
                qualifications: [
                    "加密资产与区块链合规、私募/VC、并购(M&A)、跨境交易",
                    "法律架构设计 | 财务建模 | 尽职调查 | 团队搭建与管理 | 复杂谈判",
                    "全周期服务能力：从初创融资(VC)到企业并购(M&A)的全链条法律支持",
                    "推动亚洲大型企业重组案例，树立行业先例，覆盖新加坡、中国等多法域项目，精通跨域法律风险管控"
                ],
                experienceTitle: "工作经验",
                experiences: [
                    "从零组建并领导 20 人专业团队，统筹法律、合规、反洗钱及内部审计职能",
                    "主导新加坡法院批准的 15 亿美元加密资产重组方案（行业标杆案例）",
                    "国际顶级律所并购与跨境交易经验，服务全球客户",
                    "专注私募股权(PE/VC)与并购交易法律支持"
                ]
            }
        },
        // 竞争优势
        advantages: {
            badge: "竞争优势",
            title: "为什么选择SuperLink",
            subtitle: "专业、高效、合规的一站式人力资源服务优势",
            advantage1: {
                title: "本地交付",
                desc: "核心团队汇聚香港本地人力资源专家，拥有实战验证的初创企业成长方法论。凭借丰富行业经验，全程护航企业从初创到规模化发展。"
            },
            advantage2: {
                title: "合规",
                desc: "合规团队提供全球法规动态更新与风险预警，配套专业指导与可执行方案，提升企业合规水平。"
            },
            advantage3: {
                title: "效率",
                desc: "Superlink 深度整合薪酬、绩效、合规管理功能，通过7*24小时服务，提升效率，降低风险。"
            },
            comparisonTitle: "竞争优势对比",
            comparisonTable: {
                headers: ["服务类型", "我方定价", "市场高端定价", "市场低端定价", "竞争优势", "客户价值"],
                rows: {
                    registration: {
                        service: "公司注册服务",
                        ourPrice: "<strong> 8,000 港币 </strong> 含注册费+公司秘书费+地址费(有效期1年) 无隐性收费",
                        highEndPrice: "<strong> 10,000+ </strong> <br> 港币含审计预沟通等增值项，但对初创企业非必需。",
                        lowEndPrice: "<strong> 5,000-7,000 港币 </strong> <br> 仅含注册费, 后续需补缴秘书费(2,000-3,000港币) + 地址费",
                        advantage: "比高端低 20%+, 比低端高 14%-60%, 专注做好服务、做深服务体验",
                        value: "节省 30% 精力 (无需比价采购秘书/地址服务), 总成本降低 6%。"
                    },
                    accounting: {
                        service: "会计服务",
                        ourPrice: "<strong>10,000 港币/年</strong> 财务报表编制 + 税务申报 + 年度审计协助",
                        highEndPrice: "<strong> 15,000+ 港币/年</strong> <br> 含财务分析 + 战略咨询 但中小企业使用率不足 20%。",
                        lowEndPrice: "<strong>8,000-16,000 港币/年</strong> <br> 仅申报税务, 无报表编制, 审计需额外付费 3,000+港币",
                        advantage: "比高端低 33%, 比低端高 25%-67%, 确保客户安心",
                        value: "覆盖 90% 常规需求, 避免为闲置功能付费。"
                    }
                }
            },
            priceComparisonTitle: "服务价格对比",
            priceTable: {
                headers: ["项目", "最低配置成本", "我们的建议服务价格 (港币)", "市场常见服务价格 (港币)"],
                otherFees: "其他费用",
                rows: {
                    registration: {
                        item: "注册费用",
                        minConfig: "无实体办公，使用虚拟地址",
                        ourPrice: "$8000 (包含注册、秘书、地址)",
                        marketPrice: "$5000-$10000"
                    },
                    office: {
                        item: "办公场所租金",
                        minConfig: "共享办公室",
                        ourPrice: "$180,000 - $220,000/年",
                        marketPrice: "$200,000 - $260,000/年"
                    },
                    hr: {
                        item: "人力资源成本",
                        minConfig: "无员工, 仅创始人",
                        ourPrice: "$600,000 - $900,000 (3-5员工)",
                        marketPrice: "$1,080,000 - $1,800,000 (3-5员工)"
                    },
                    accounting: {
                        item: "会计与审计费用",
                        minConfig: "基础会计服务",
                        ourPrice: "$10000/年",
                        marketPrice: "$6000-$15000/年"
                    },
                    secretary: {
                        item: "公司秘书费",
                        minConfig: "必须聘请",
                        ourPrice: "$8,000 - $13,500/年",
                        marketPrice: "$15,000 - $20,000/年"
                    },
                    trademark: {
                        item: "商标注册费用",
                        minConfig: "选择性支出",
                        ourPrice: "$8000",
                        marketPrice: "$5000-$10000"
                    },
                    legal: {
                        item: "法务咨询费用",
                        minConfig: "按需选择",
                        ourPrice: "$5000/次",
                        marketPrice: "$2000-$8000/次"
                    },
                    server: {
                        item: "服务器租赁费用",
                        minConfig: "基础服务器",
                        ourPrice: "$1000/月",
                        marketPrice: "$500-$2000/月"
                    }
                }
            },
            housekeeperTitle: "管家服务价格说明",
            housekeeperTable: {
                headers: ["服务类型", "定价", "服务模式", "具体说明"],
                semiManagedTitle: "HR管家服务 - 半托管",
                fullyManagedTitle: "HR管家服务 - 全托管",
                rows: {
                    semiManaged: {
                        service: "HR管家服务",
                        price: "100,000 港币/年",
                        model: "半托管",
                        description: "不需要人才招募服务"
                    },
                    fullyManaged: {
                        service: "HR管家服务",
                        price: "200,000 港币/年",
                        model: "全托管",
                        description: "包含人才招募服务"
                    }
                }
            }
        },
        footer: {
            description: '极致链接，专注助力内地科创企业高效拓展香港市场',
            services: {
                title: '核心服务',
                recruitment: '人才招聘',
                compliance: '薪酬合规',
                management: '团队管理',
                remote: '远程雇佣'
            },
            about: {
                title: '关于我们',
                company: '公司介绍',
                team: '专家团队',
                contact: '联系我们'
            },
            resources: {
                title: '实用资源',
                guide: '香港落地指南',
                practical: '实战指南',
                handbook: '合规手册下载',
                advantages: '服务优势',
                clients: '适用企业'
            },
            copyright: '© 2025 SuperLink Consulting. 版权所有'
        }
        // 这里可以继续添加其他部分的翻译
    },
    en: {
        // Global common
        knowMore: 'Learn More',
        nav: {
            home: 'Home',
            about: 'About Us',
            'target-clients': 'Target Clients',
            services: 'Services',
            guide: 'Landing Guide',
            hrservice: 'Guide',
            team: 'Team',
            advantages: 'Advantages',
            contact: 'Contact'
        },
        hero: {
            badge: 'SuperLink Consulting',
            title: 'Services for Mainland Enterprises Establishing in Hong Kong',
            subtitle: 'We focus on helping mainland tech startups efficiently expand into the Hong Kong market, providing one-stop HR solutions including cross-border recruitment, payroll compliance, and team management.',
            btnPrimary: 'Contact Now',
            btnDesc: 'One-click consultation to get the Hong Kong landing practical guide!',
            stats: {
                experienceLabel: 'Human resources experts are at your service.',
                service: '7×24h',
                concept: 'Worry-free | Hassle-free | Cost-effective',
            }
        },
        about: {
            badge: 'About Us',
            title: 'SuperLink Consulting',
            subtitle: 'Focused on helping mainland tech companies efficiently expand into Hong Kong market, <br> with team members spanning Shenzhen and Hong Kong, <br> having 20 years of HR management experience in mainland tech companies',
            founderName: 'Zheng Nan',
            founderTitle: 'Founder & CEO',
            careerTitle: 'Professional Identity & Experience',
            feature1Title: 'Focus on Tech Companies',
            feature1Desc: 'Deep understanding of tech companies\' business and talent needs, quickly matching Hong Kong talent market, precisely connecting talents and opportunities',
            feature1Tag: 'Worry-free',
            feature2Title: 'Efficient Hong Kong Local HR Support Team',
            feature2Desc: '7×24h quick response to tech companies\' talent recruitment, compliant employment and labor relations management',
            feature2Tag: 'Hassle-free',
            feature3Title: 'Ultimate Cost Performance',
            feature3Desc: 'Tech companies need to focus on efficiency in talent services, we promise ultimate cost performance to help companies reduce costs',
            feature3Tag: 'Cost-effective'
        },
        targetClients: {
            badge: 'Target Clients',
            title: 'Focus on Tech Companies',
            subtitle: 'Deep understanding of tech companies\' business characteristics and talent needs, providing precisely matched HR services',
            scaleTitle: 'Scale',
            scaleDesc: 'Companies with 0-200 employees',
            needsTitle: 'Pain Points',
            needsDesc: 'No local HR in Hong Kong but need to develop business, need cost-effective talent recruitment and company management system building.',
            industryTitle: 'Industry',
            industryDesc: 'Tech companies: robotics, AI, consumer electronics, new materials, biotech, and various professional service companies'
        },
        services: {
            badge: 'Core Services',
            title: 'One-Stop HR Butler Service',
            subtitle: 'Full-cycle HR solutions from talent diagnosis to team optimization',
            service1: {
                title: 'Precise Diagnosis',
                subtitle: 'Anchoring Team Gaps and Strategic Goals',
                desc1: 'Deep research into the company\'s business model, technical roadmap and cultural genes, identifying core position competency profiles.',
                desc2: 'Establish talent profiles benchmarked against Hong Kong market, help clients write recruitment specifications, and facilitate efficient talent recruitment channels'
            },
            service2: {
                title: 'Agile Execution',
                subtitle: 'Full-cycle Talent Management Loop',
                desc1: 'Recruitment: Precisely reach talents through industry network and digital channels',
                desc2: 'Development: Design customized capability enhancement plans, combine practical projects to accelerate talent integration.',
                desc3: 'Retention: Build incentive systems (linking short and long-term goal achievement with compensation/equity mechanisms, identify core employees, focus on development, reduce key position turnover risks.'
            },
            service3: {
                title: 'Professional Support',
                subtitle: 'Establish Remote Employment System',
                desc1: 'Support cross-border employee recruitment, remote work policy design and compliance support.',
                desc2: 'With cross-border service capabilities (such as foreign employee visa support) to help companies expand into Asian markets.'
            },
            // pricingTitle: 'Service Pricing',
            // pricing1Title: 'Semi-Managed Service',
            // pricing1Price: 'HK$100K/year',
            // pricing1Desc: 'Excluding talent recruitment services',
            // pricing2Title: 'Fully-Managed Service',
            // pricing2Price: 'HK$200K/year',
            // pricing2Desc: 'Including talent recruitment services'
        },
        contact: {
            badge: 'Contact Now',
            title: 'Fill in the information and let us be your human resource manager in Hong Kong.',
            company: {
                title: 'Company Name',
                desc: 'SuperLink Consulting Executive HR Consulting Ltd.'
            },
            email: {
                title: 'Email Contact',
                desc: 'aisuperlink@gmail.com'
            },
            phone: {
                title: 'Phone Consultation',
                desc: '00852 65245118'
            },
            address: {
                title: 'Company Address',
                desc: 'Room 1501, Pioneer Centre, 750 Nathan Road, Kowloon, Hong Kong'
            },
            form: {
                title: 'Contact Us',
                name: 'Your Name',
                email: 'Email Address',
                company: 'Company Name',
                types: {
                    default: 'Select Company Type',
                    ai: 'Artificial Intelligence',
                    robotics: 'Robotics',
                    biotech: 'Biotechnology',
                    fintech: 'Fintech',
                    materials: 'New Materials',
                    electronics: 'Consumer Electronics',
                    other: 'Other'
                },
                message: 'Your Needs and Questions',
                submit: 'Get Consultation'
            }
        },
        // About page founder information
        founder: {
            name: "Zheng Nan",
            title: "Founder & CEO",
            sectionTitle: "Professional Identity & Experience",
            item1: {
                title: "Founder of Zhiyi Management Consulting",
                desc: "Founded Zhiyi Consulting in 2023, focusing on providing HR services for tech entrepreneurs"
            },
            item2: {
                title: "Senior HR Expert",
                desc: "Deep in the industry for nearly 20 years, having worked at IBM, Baidu, Tencent and other companies, participated in and witnessed two startups' successful IPOs"
            },
            item3: {
                title: "HR Mentor for Tech Companies",
                desc: "Deeply involved in talent building for tech companies like Pudu Technology and Narwal Robotics, accompanying companies from startup to scale of thousands"
            },
            item4: {
                title: "KOL in HR Field",
                desc: "Owner of \"Greater Bay Area Headhunter Queen\" account, with 100K+ high-quality high-purchasing-power fans, invited guest of Hong Kong Talent Office"
            },
            feature1: {
                title: "Focus on Tech Companies",
                desc: "Deep understanding of tech companies' business and talent needs, quickly matching Hong Kong talent market, precisely connecting talents and opportunities"
            },
            feature2: {
                title: "Efficient Hong Kong Local HR Support Team",
                desc: "7×24h quick response to tech companies' talent recruitment, compliant employment and labor relations management; professional HR consultant team with 10+ years experience in renowned HK and mainland companies"
            },
            feature3: {
                title: "Ultimate Cost Performance",
                desc: "Tech companies need to focus on efficiency in talent services, we promise ultimate cost performance to help companies reduce costs"
            }
        },
        // Hong Kong Landing Guide
        guide: {
            badge: "Hong Kong Landing Guide",
            title: "Solve Landing Difficulties, Reduce Compliance Risks",
            subtitle: "Comprehensive Hong Kong landing guidance to help mainland companies smoothly expand into Hong Kong market",
            risksTitle: "Major Risks and Difficulties",
            risk1: {
                title: "Compliance and Legal Risks",
                desc: "Operating companies and employing staff in Hong Kong must comply with Companies Ordinance and Employment Ordinance, including registration capital, director requirements, MPF contributions, etc. Business in certain professional fields requires licenses",
                tooltip: {
                    trigger: "professional fields",
                    title: "Industries Requiring Licenses (Ordered by Regulatory Strictness)",
                    items: [
                        "Financial Services (SFC Licenses 1-10, Money Lender Licenses, etc.)",
                        "Food & Beverage (Restaurant License, Liquor License, etc.)",
                        "Education (School Registration Certificate)",
                        "Tourism (Travel Agent License)",
                        "Employment Agency (Labour Department License)",
                        "Telecommunications (Telecom License)",
                        "Medical & Health Services (Medical Practice Certificate)",
                        "Trading Companies (Import/Export Permits)",
                        "Retail Business (Chinese Medicine/Animal Boarding Licenses)",
                        "Event Management (Public Entertainment/Lottery Licenses)",
                        "Professional Services (Lawyer/Accountant Licenses)"
                    ],
                    suffix: " business requires licenses"
                }
            },
            risk2: {
                title: "Talent Recruitment Difficulties",
                desc: "Unclear Hong Kong talent recruitment channels; how to accurately express company business; how to employ Hong Kong people."
            },
            risk3: {
                title: "High Management Costs",
                desc: "Unclear employee management rules; whether non-compete payments needed for resignations; whether overtime pay required; high replacement costs."
            },
            complianceTitle: "Practical Compliance Guide",
            compliance1: {
                title: "Mandatory Provident Fund (MPF) Contributions",
                desc: "Employers must contribute for employees aged 18-65; employees with monthly income ≥HK$7,100 must self-contribute. Employer/employee each contribute 5%, with contribution base HK$7,100-HK$30,000. Complete by 10th working day of the month, late payment incurs 5%-10% penalty."
            },
            compliance2: {
                title: "Labor Insurance",
                desc: "Under Employees' Compensation Ordinance, uninsured employers face maximum HK$100K fine + 2 years imprisonment. Employees injured at work/suffering occupational diseases can sue directly, claiming medical fees, disability compensation, nursing fees."
            },
            compliance3: {
                title: "Employee Resignation Process",
                desc: "Requires written resignation letter, confirm notice period. Pay final salary within 7 days, including wages, unused annual leave conversion, statutory holiday compensation. Handle MPF termination and submit IR56F form to Inland Revenue Department."
            },
            compliance4: {
                title: "Recruitment Compliance Points",
                desc: "Prohibit age/gender/race discrimination language. Avoid asking sensitive questions about marriage/childbirth plans during interviews. Must verify education, work history; special positions require SFC license, criminal record checks."
            }
        },
        // Expert Team
        team: {
            badge: "Expert Team",
            title: "Hong Kong Local HR Experts Introduction",
            subtitle: "Senior HR and legal finance experts spanning Shenzhen and Hong Kong",
            expert1: {
                name: "KY Lee",
                intro: "KY has worked in Hong Kong finance and fintech companies for over 13 years, serving investment banks and Asian fintech startups, while deeply understanding mainland companies' needs",
                qualificationTitle: "Professional Qualifications",
                qualifications: [
                    "NLP Certified Practitioner",
                    "Australia University HR Management Bachelor",
                    "Certificate of HK Employment Ordinance",
                    "Certificate of Effective Recruitment & Selection Interview Techniques",
                    "Executive Diploma of Organisational Training & Development"
                ],
                experienceTitle: "Work Experience",
                experiences: [
                    "Former HR manager in investment banking and retail banking, managing and implementing HR strategies.",
                    "From an investment banking manager to a senior HR manager at an Asian fintech startup, he has over 10 years of recruitment experience in different countries. He was once one of the main interviewers and is familiar with the interview requirements of large and small institutions in Hong Kong and provides professional recruitment market analysis.",
                    "Executive Vice Chairman of a local charity group, responsible for organizing a number of community charity events and activities.",
                    "With over 10 years of experience in international and local talent recruitment, he is familiar with the employment needs of people from all walks of life."
                ]
            },
            expert2: {
                name: "Anthony . Z",
                intro: "Senior legal and finance expert, legal advisor in private equity/VC, M&A, crypto assets, having served investment banks and Asian fintech startups",
                qualificationTitle: "Core Expertise",
                qualifications: [
                    "Crypto assets & blockchain compliance, private equity/VC, M&A, cross-border transactions",
                    "Legal structure design | Financial modeling | Due diligence | Team building & management | Complex negotiations",
                    "Full-cycle service capabilities: full-chain legal support from startup financing (VC) to corporate mergers and acquisitions (M&A).",
                    "Promoted large-scale corporate restructuring cases in Asia, set industry precedents, covered projects in multiple jurisdictions including Singapore and China, and was proficient in cross-domain legal risk management."
                ],
                experienceTitle: "Work Experience",
                experiences: [
                    "Build and lead a 20-person professional team from scratch, coordinating legal, compliance, anti-money laundering and internal audit functions.",
                    "Led the $1.5 billion crypto asset restructuring plan approved by the Singapore court (an industry benchmark case).",
                    "Top international law firms with experience in mergers and acquisitions and cross-border transactions, serving global clients.",
                    "Focus on legal support for private equity (PE/VC) and M&A transactions."
                ]
            }
        },
        // Competitive Advantages
        advantages: {
            badge: "Competitive Advantages",
            title: "Why Choose SuperLink",
            subtitle: "Professional, efficient, compliant one-stop HR service advantages",
            advantage1: {
                title: "Local Delivery",
                desc: "Core team gathers Hong Kong local HR experts with battle-tested startup growth methodologies. With rich industry experience, fully supporting companies from startup to scale development."
            },
            advantage2: {
                title: "Compliance",
                desc: "Compliance team provides global regulatory updates and risk alerts, with professional guidance and actionable solutions to enhance corporate compliance."
            },
            advantage3: {
                title: "Efficiency",
                desc: "Superlink deeply integrates compensation, performance, and compliance management functions, providing 7*24h service to improve efficiency and reduce risks."
            },
            comparisonTitle: "Competitive Advantage Comparison",
            comparisonTable: {
                headers: ["Service Type", "Our Pricing", "Market High-end Pricing", "Market Low-end Pricing", "Competitive Advantage", "Customer Value"],
                rows: {
                    registration: {
                        service: "Company Registration Service",
                        ourPrice: "<strong>HK$8,000</strong> including registration fee + company secretary fee + address fee (valid for 1 year) No hidden charges",
                        highEndPrice: "<strong> HK$10,000+ </strong> <br> including audit pre-communication and other value-added items, but not necessary for startups.",
                        lowEndPrice: "<strong> HK$5,000-7,000 </strong>  <br>  only including registration fee, subsequent payment of secretary fee (HK$2,000-3,000) + address fee required",
                        advantage: "20%+ lower than high-end, 14%-60% higher than low-end, focus on good service and deep service experience",
                        value: "Save 30% effort (no need to compare prices for secretary/address services), total cost reduced by 6%."
                    },
                    accounting: {
                        service: "Accounting Service",
                        ourPrice: "<strong>HK$10,000/year </strong> Financial statement preparation + tax filing + annual audit assistance",
                        highEndPrice: "<strong>HK$15,000+/year </strong> <br> including financial analysis + strategic consulting but SME usage rate less than 20%.",
                        lowEndPrice: "<strong> HK$8,000-16,000/year </strong>  <br>  only tax filing, no statement preparation, audit requires additional fee HK$3,000+",
                        advantage: "33% lower than high-end, 25%-67% higher than low-end, ensuring customer peace of mind",
                        value: "Covers 90% regular needs, avoid paying for idle functions."
                    }
                }
            },
            priceComparisonTitle: "Service Price Comparison",
            priceTable: {
                headers: ["Item", "Minimum Configuration Cost", "Our Recommended Service Price (HKD)", "Market Common Service Price (HKD)"],
                otherFees: "Other Fees",
                rows: {
                    registration: {
                        item: "Registration Fee",
                        minConfig: "No physical office, using virtual address",
                        ourPrice: "$8000 (including registration, secretary, address)",
                        marketPrice: "$5000-$10000"
                    },
                    office: {
                        item: "Office Rent",
                        minConfig: "Co-working space",
                        ourPrice: "$180,000 - $220,000/year",
                        marketPrice: "$200,000 - $260,000/year"
                    },
                    hr: {
                        item: "Human Resources Cost",
                        minConfig: "No employees, founder only",
                        ourPrice: "$600,000 - $900,000 (3-5 employees)",
                        marketPrice: "$1,080,000 - $1,800,000 (3-5 employees)"
                    },
                    accounting: {
                        item: "Accounting & Audit Fees",
                        minConfig: "Basic accounting services",
                        ourPrice: "$10000/year",
                        marketPrice: "$6000-$15000/year"
                    },
                    secretary: {
                        item: "Company Secretary Fee",
                        minConfig: "Must hire",
                        ourPrice: "$8,000 - $13,500/year",
                        marketPrice: "$15,000 - $20,000/year"
                    },
                    trademark: {
                        item: "Trademark Registration Fee",
                        minConfig: "Optional expense",
                        ourPrice: "$8000",
                        marketPrice: "$5000-$10000"
                    },
                    legal: {
                        item: "Legal Consultation Fee",
                        minConfig: "On-demand selection",
                        ourPrice: "$5000/time",
                        marketPrice: "$2000-$8000/time"
                    },
                    server: {
                        item: "Server Rental Fee",
                        minConfig: "Basic server",
                        ourPrice: "$1000/month",
                        marketPrice: "$500-$2000/month"
                    }
                }
            },
            housekeeperTitle: "Butler Service Pricing",
            housekeeperTable: {
                headers: ["Service Type", "Pricing", "Service Model", "Description"],
                semiManagedTitle: "HR Butler Service - Semi-managed",
                fullyManagedTitle: "HR Butler Service - Fully-managed",
                rows: {
                    semiManaged: {
                        service: "HR Butler Service",
                        price: "HK$100,000/year",
                        model: "Semi-managed",
                        description: "Does not require talent recruitment services"
                    },
                    fullyManaged: {
                        service: "HR Butler Service",
                        price: "HK$200,000/year",
                        model: "Fully-managed",
                        description: "Including talent recruitment services"
                    }
                }
            }
        },
        footer: {
            description: 'SuperLink, focused on helping mainland tech companies efficiently expand into Hong Kong market',
            services: {
                title: 'Core Services',
                recruitment: 'Talent Recruitment',
                compliance: 'Payroll Compliance',
                management: 'Team Management',
                remote: 'Remote Employment'
            },
            about: {
                title: 'About Us',
                company: 'Company Introduction',
                team: 'Expert Team',
                contact: 'Contact Us'
            },
            resources: {
                title: 'Practical Resources',
                guide: 'Hong Kong Landing Guide',
                practical: 'Practical Guide',
                handbook: 'Compliance Manual Download',
                advantages: 'Service Advantages',
                clients: 'Applicable Enterprises'
            },
            copyright: '© 2025 SuperLink Consulting. All rights reserved'
        }
        
    }
};