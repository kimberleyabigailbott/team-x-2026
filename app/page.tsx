'use client';

import React, { useState, useEffect } from 'react';

// --- No External Icons Version (解決安裝失敗問題) ---
// 我們直接使用 SVG 畫圖，這樣就不需要安裝 lucide-react 套件了

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
);
const HeartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
);
const ZapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
);
const FlagIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" x2="4" y1="22" y2="15"/></svg>
);
const MicIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="23"/><line x1="8" x2="16" y1="23" y2="23"/></svg>
);
const SmileIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg>
);
const BrainIcon = ({size=24}: {size?: number}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></svg>
);
const MegaphoneIcon = ({size=24}: {size?: number}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>
);
const UsersIcon = ({size=24}: {size?: number}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);
const Mic2Icon = ({size=24}: {size?: number}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98l9.06-9.06"/><path d="M12 8l-4.13-4.15a2 2 0 0 0-2.82 2.82l4.15 4.13"/><path d="m14.8 5.2 3 3"/><path d="M9.8 10.2 12.5 13"/><path d="M15.8 16.2 18.5 19"/><path d="M12 8 20 16"/></svg>
);
const ArrowRightIcon = ({size=16, className}: {size?: number, className?: string}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
);
const TargetIcon = ({size=20}: {size?: number}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
);
const CheckCircleIcon = ({size=16, className}: {size?: number, className?: string}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
);

// --- Components ---

const MissionSection = () => (
  <div className="mb-20 grid grid-cols-1 md:grid-cols-3 gap-8">
    <div className="bg-gray-900/50 p-8 rounded-3xl border border-gray-800 hover:border-blue-500/50 transition-colors">
      <div className="w-12 h-12 bg-blue-900/30 rounded-full flex items-center justify-center text-blue-400 mb-6">
        <StarIcon />
      </div>
      <h3 className="text-xl font-bold text-white mb-3">賦能 (Empower)</h3>
      <p className="text-gray-400 leading-relaxed">
        為了<span className="text-white font-bold">每一位</span><span className="text-blue-400 font-bold">想要舞台</span>與<span className="text-blue-400 font-bold">渴望機會</span>的大學生。我們提供專業的培訓與實戰場域，讓才華被看見。
      </p>
    </div>

    <div className="bg-gray-900/50 p-8 rounded-3xl border border-gray-800 hover:border-pink-500/50 transition-colors">
      <div className="w-12 h-12 bg-pink-900/30 rounded-full flex items-center justify-center text-pink-400 mb-6">
        <HeartIcon />
      </div>
      <h3 className="text-xl font-bold text-white mb-3">歸屬 (Belonging)</h3>
      <p className="text-gray-400 leading-relaxed">
        為了<span className="text-white font-bold">每一位</span><span className="text-pink-400 font-bold">想要朋友</span>與<span className="text-pink-400 font-bold">尋找方向</span>的人。在這裡，沒有邊緣人，只有並肩作戰的夥伴。
      </p>
    </div>

    <div className="bg-gray-900/50 p-8 rounded-3xl border border-gray-800 hover:border-orange-500/50 transition-colors">
      <div className="w-12 h-12 bg-orange-900/30 rounded-full flex items-center justify-center text-orange-400 mb-6">
        <ZapIcon />
      </div>
      <h3 className="text-xl font-bold text-white mb-3">影響力 (Impact)</h3>
      <p className="text-gray-400 leading-relaxed">
        為了<span className="text-orange-400 font-bold">讓城市更好</span>。我們將演唱會收入轉化為社會公益行動，讓熱血不只停留在舞台上。
      </p>
    </div>
  </div>
);

const RoadmapSection = () => (
  <div className="mb-24 relative">
    <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-1 bg-gray-800 -translate-x-1/2 md:translate-x-0"></div>
    
    <div className="space-y-12">
      {/* Phase 1 */}
      <div className="relative flex flex-col md:flex-row items-center justify-between">
        {/* FIX: Added pl-12 for mobile to avoid overlap with icon, md:pl-0 resets it for desktop */}
        <div className="md:w-[45%] mb-4 md:mb-0 md:text-right pr-0 md:pr-12 pl-12 md:pl-0">
          <h3 className="text-2xl font-bold text-white">Phase 1: 籌備與號召</h3>
          <p className="text-blue-400 font-bold mb-2">NOW - 2026.05</p>
          <p className="text-gray-400 text-sm">核心團隊建置、企劃定案、校園巡迴跑透透。累積聲量，尋找志同道合的夥伴。</p>
        </div>
        <div className="absolute left-[15px] md:left-1/2 w-8 h-8 bg-blue-600 rounded-full border-4 border-black z-10 -translate-x-1/2 flex items-center justify-center">
          <FlagIcon />
        </div>
        <div className="md:w-[45%] pl-12 md:pl-12"></div>
      </div>

      {/* Phase 2 */}
      <div className="relative flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-[45%] mb-4 md:mb-0 md:text-right pr-0 md:pr-12 order-1 md:order-1"></div>
        <div className="absolute left-[15px] md:left-1/2 w-8 h-8 bg-orange-500 rounded-full border-4 border-black z-10 -translate-x-1/2 flex items-center justify-center">
          <MicIcon />
        </div>
        <div className="md:w-[45%] pl-12 md:pl-12 order-2 md:order-2">
          <h3 className="text-2xl font-bold text-white">Phase 2: Team X 演唱會</h3>
          <p className="text-orange-400 font-bold mb-2">2026.06.28 (D-Day)</p>
          <p className="text-gray-400 text-sm">決戰日。展現訓練成果，引爆話題，創造屬於大學生的集體記憶。</p>
        </div>
      </div>

      {/* Phase 3 */}
      <div className="relative flex flex-col md:flex-row items-center justify-between">
        {/* FIX: Added pl-12 for mobile to avoid overlap with icon, md:pl-0 resets it for desktop */}
        <div className="md:w-[45%] mb-4 md:mb-0 md:text-right pr-0 md:pr-12 pl-12 md:pl-0">
          <h3 className="text-2xl font-bold text-white">Phase 3: 城市行動</h3>
          <p className="text-pink-400 font-bold mb-2">2026.07 - 12</p>
          <p className="text-gray-400 text-sm">影響力延續。運用演唱會盈餘啟動公益計畫，帶領志工實際改善城市問題。</p>
        </div>
        <div className="absolute left-[15px] md:left-1/2 w-8 h-8 bg-pink-600 rounded-full border-4 border-black z-10 -translate-x-1/2 flex items-center justify-center">
          <SmileIcon />
        </div>
        <div className="md:w-[45%] pl-12 md:pl-12"></div>
      </div>
    </div>
  </div>
);

// Added explicit 'any' types for props to bypass strict TS check for this quick deployment
const DepartmentCard = ({ id, title, icon: Icon, color, isSelected, onClick, slogan }: any) => (
  <button
    id={`dept-card-${id}`} // Added ID for scroll targeting
    onClick={() => onClick(id)}
    className={`relative group p-6 border-2 transition-all duration-300 w-full text-left flex flex-col justify-between overflow-hidden min-h-[160px] lg:min-h-full
      ${isSelected 
        ? `bg-gray-900 border-${color}-500 shadow-[0_0_30px_rgba(var(--${color}-rgb),0.4)] scale-100 lg:scale-105 z-10 rounded-t-2xl rounded-b-none lg:rounded-2xl` 
        : 'bg-gray-800/50 border-gray-700 hover:border-gray-500 hover:bg-gray-800 rounded-2xl'
      }`}
  >
    <div className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity`}>
      <Icon size={100} />
    </div>
    
    <div>
      <div className={`flex items-center lg:block`}>
        <div className={`p-3 rounded-xl inline-block lg:mb-4 mr-4 lg:mr-0 ${isSelected ? `bg-${color}-500 text-white` : 'bg-gray-700 text-gray-300'}`}>
          <Icon size={32} />
        </div>
        <div>
           <h3 className="text-xl lg:text-2xl font-bold mb-1 text-white">{title}</h3>
           <p className={`text-xs lg:text-sm font-medium tracking-wider uppercase text-${color}-400`}>{slogan}</p>
        </div>
      </div>
    </div>

    <div className={`mt-4 lg:mt-6 flex items-center text-sm font-medium ${isSelected ? 'text-white' : 'text-gray-400'}`}>
      <span className="lg:hidden">{isSelected ? '收起詳情' : '查看詳情'}</span>
      <span className="hidden lg:inline">查看詳情</span>
      <ArrowRightIcon size={16} className={`ml-2 transition-transform ${isSelected ? '-rotate-90 lg:rotate-0' : 'rotate-90'}`} />
    </div>
  </button>
);

const DetailView = ({ department, isMobile = false }: any) => {
  if (!department) return null;

  return (
    <div className={`${
      isMobile 
        ? `bg-black/60 border-x-2 border-b-2 border-${department.color}-500/30 border-t border-t-${department.color}-500 rounded-b-2xl mx-0 mb-6 p-6 shadow-inner relative z-0 mt-[-2px]` 
        : 'mt-8 bg-gray-900 rounded-3xl p-8 border border-gray-700 shadow-2xl animate-fade-in-up'
    }`}>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Column: Vision & Traits */}
        <div className="md:w-1/3 space-y-6">
          <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-bold bg-${department.color}-900/50 text-${department.color}-400 border border-${department.color}-500/30`}>
            {department.roleDefinition}
          </div>
          
          <div>
            <h2 className={`font-bold text-white mb-2 ${isMobile ? 'text-2xl' : 'text-3xl'}`}>{department.title}</h2>
            <p className="text-gray-400 text-lg leading-relaxed">{department.description}</p>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700">
            <h4 className="text-white font-bold mb-4 flex items-center">
              <StarIcon />
              <span className="ml-2">這組適合誰？</span>
            </h4>
            <ul className="space-y-3">
              {department.traits.map((trait: string, idx: number) => (
                <li key={idx} className="flex items-start text-gray-300 text-sm">
                  <span className={`w-2 h-2 mt-1.5 rounded-full bg-${department.color}-500 mr-3 shrink-0`} />
                  {trait}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: Tasks & Career */}
        <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Key Tasks */}
          <div className="bg-gray-800 p-6 rounded-2xl border-l-4 border-gray-600">
            <h4 className="text-white font-bold mb-4 flex items-center text-lg">
              <TargetIcon />
              <span className="ml-2">核心任務 (MindMap 重點)</span>
            </h4>
            <div className="space-y-4">
              {department.tasks.map((taskGroup: any, idx: number) => (
                <div key={idx}>
                  <p className="text-white font-medium text-sm mb-1">{taskGroup.title}</p>
                  <ul className="pl-4 border-l border-gray-600 space-y-1">
                    {taskGroup.items.map((item: string, i: number) => (
                      <li key={i} className="text-gray-400 text-sm">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Career Growth */}
          <div className={`bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border-l-4 border-${department.color}-500`}>
             <h4 className="text-white font-bold mb-4 flex items-center text-lg">
              <UsersIcon />
              <span className="ml-2">你在這裡能帶走的能力</span>
            </h4>
             <ul className="space-y-3">
              {department.careerSkills.map((skill: string, idx: number) => (
                <li key={idx} className="flex items-center text-gray-300">
                  <CheckCircleIcon className={`text-${department.color}-500 mr-2`} />
                  {skill}
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-gray-700">
              <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">未來職涯對標</p>
              <p className="text-white mt-1 font-medium">{department.careerPath}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [selectedDept, setSelectedDept] = useState<string | null>('strategy');

  const handleDeptClick = (id: string) => {
    // Detect mobile view based on window width
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;
    
    if (selectedDept === id) {
      // If clicking the same department: Toggle off (collapse) on mobile
      if (isMobile) {
        setSelectedDept(null);
      }
    } else {
      // Clicking a new department: Select it
      setSelectedDept(id);
      
      // FIX: Scroll to the clicked card if on mobile
      if (isMobile) {
        // Use setTimeout to wait for the DOM to update (collapse old, expand new)
        setTimeout(() => {
          const element = document.getElementById(`dept-card-${id}`);
          if (element) {
            // Scroll element to the top of the viewport smoothly
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    }
  };

  const departments = [
    {
      id: 'strategy',
      title: '統籌管理部',
      icon: BrainIcon,
      color: 'blue',
      slogan: 'The Brain 團隊大腦',
      roleDefinition: '運籌帷幄 x 資源整合',
      description: '負責確保這艘船走在正確的方向和進度上。將社會公益議題轉化為實際行動，控管資源讓夢想落地。',
      traits: [
        '邏輯清晰，喜歡從混亂中理出頭緒',
        '對數字敏感，或是想要學習控管預算',
        '喜歡站在制高點看事情，協調不同部門',
        '對社會議題有想法，想做「有意義」的事'
      ],
      tasks: [
        { title: '總體企劃', items: ['2026 KPI 設定 (核心價值/社會影響力)', '年度排程與組織圖繪製'] },
        { title: '專案管理 (PM)', items: ['進度追蹤與會議主持', '利害關係人經營', '財務管理'] },
        { title: '社會影響力', items: ['發想演唱會如何回饋城市', '公益合作洽談'] }
      ],
      careerSkills: ['專案管理 (PMP)', '商業策略思維', '財務預算控管', '跨部門溝通協調'],
      careerPath: '專案經理 (PM)、管理顧問、創業家、營運長 (COO)'
    },
    {
      id: 'marketing',
      title: '品牌行銷部',
      icon: MegaphoneIcon,
      color: 'purple',
      slogan: 'The Face 團隊門面',
      roleDefinition: '聲量製造 x 視覺美學',
      description: '負責在空軍戰場創造聲量，建立 Team X 的「酷」形象。用文字、影像和設計，吸引大學生的目光。',
      traits: [
        'Threads/IG 重度使用者，懂網路梗',
        '有美感，對設計、排版、影像有堅持',
        '喜歡寫作，或是腦洞很大的創意人',
        '想知道如何讓一張票從滯銷變秒殺'
      ],
      tasks: [
        { title: '社群企劃 (空軍)', items: ['Threads/IG 經營與對標分析', 'Reels 腳本/拍攝/剪輯', '小編互動營運'] },
        { title: '品牌視覺', items: ['CIS 設計、風格設定', '海報/門票/周邊/LED視覺'] },
        { title: '口碑佈局', items: ['Dcard/校板討論操作', '官網與售票系統架設'] }
      ],
      careerSkills: ['社群媒體行銷', '內容創作 (Content Marketing)', '平面/UI設計', '數據分析與SEO'],
      careerPath: '行銷經理、社群小編、品牌設計師、廣告創意總監'
    },
    {
      id: 'pr',
      title: '公關人力部',
      icon: UsersIcon,
      color: 'pink',
      slogan: 'The Heart 團隊心臟',
      roleDefinition: '連結人心 x 團隊凝聚',
      description: '負責陸軍實體作戰。把人帶進來，也把人留下來。創造歸屬感，讓每個參與者都覺得這裡是家。',
      traits: [
        'E人屬性，喜歡交朋友、不怕生',
        '心思細膩，會注意到別人的情緒需求',
        '想要磨練「說服人」的能力',
        '喜歡辦趴、聚餐，讓大家玩在一起'
      ],
      tasks: [
        { title: '實體開發 (陸軍)', items: ['跑校園/社團/學生會邀約', '各類才藝教室拜訪'] },
        { title: '小活動運作', items: ['題材發想 (桌遊/聚餐/工作坊)', '新朋友關係維繫'] },
        { title: '人力資源 (HR)', items: ['志工招募與培訓', '現場人力調度 (接待/維安/醫療)'] }
      ],
      careerSkills: ['業務開發 (Sales)', '人力資源管理 (HR)', '公關溝通 (PR)', '團隊領導力'],
      careerPath: '業務經理、人資主管、公關經理、活動企劃'
    },
    {
      id: 'production',
      title: '展演製作部',
      icon: Mic2Icon,
      color: 'orange',
      slogan: 'The Soul 團隊靈魂',
      roleDefinition: '舞台呈現 x 專業技術',
      description: '6/28 當天的造夢者。負責所有台上發生的事，以及台邊支持的技術。讓素人變明星的推手。',
      traits: [
        '有音樂、舞蹈、戲劇等才藝專長',
        '對燈光、音響、視訊技術有興趣',
        '細節控，追求完美的演出呈現',
        '想要親手打造一場演唱會的人'
      ],
      tasks: [
        { title: '導演組', items: ['節目流程編排', '演出氛圍設計'] },
        { title: '幕前演出', items: ['樂團/舞蹈/主持 訓練與排練'] },
        { title: '幕後技術', items: ['燈控、音控、影像執行', '造型設計與舞台監督'] }
      ],
      careerSkills: ['舞台監督', '活動硬體技術', '表演藝術指導', '危機處理能力'],
      careerPath: '演唱會製作人、舞台監督、演藝經紀、專業技術人員'
    }
  ];

  const currentDept = departments.find(d => d.id === selectedDept);

  return (
    <div className="min-h-screen bg-black text-gray-100 font-sans selection:bg-blue-500 selection:text-white pb-20">
      {/* Dynamic Background Accents */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className={`absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-${currentDept?.color || 'blue'}-600/20 blur-[120px] transition-colors duration-1000 rounded-full mix-blend-screen`}></div>
        <div className={`absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-${currentDept?.color || 'blue'}-900/10 blur-[100px] transition-colors duration-1000 rounded-full`}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-12">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="inline-block px-3 py-1 mb-4 border border-gray-700 rounded-full bg-gray-900/50 backdrop-blur-md">
            <span className="text-blue-400 font-bold tracking-widest text-xs">TEAM X 2026 PLAN</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            FIND YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">STAGE</span>.
            <br />
            BUILD OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">CITY</span>.
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            我們不只辦一場 6/28 的演唱會，我們在發動一場改變城市的社會公益行動。
            <br />
            這是一場屬於大學生的戰役，你的位置在哪裡？
          </p>
        </header>

        {/* Mission Section (NEW) */}
        <div className="mb-12">
           <h2 className="text-2xl font-bold text-white text-center mb-10 tracking-wider">OUR MISSION</h2>
           <MissionSection />
        </div>

        {/* Roadmap Section (NEW) */}
        <div className="mb-12">
           <h2 className="text-2xl font-bold text-white text-center mb-10 tracking-wider">ROADMAP 2026</h2>
           <RoadmapSection />
        </div>

        {/* Department Section - Adjusted for Mobile Accordion / Desktop Grid */}
        <div className="mb-10">
           <h2 className="text-2xl font-bold text-white text-center mb-10 tracking-wider">JOIN THE TEAM</h2>
           
           {/* Responsive Container: Flex col on mobile, Grid on desktop */}
           <div className="flex flex-col lg:grid lg:grid-cols-4 gap-4 lg:h-[320px]">
            {departments.map((dept) => (
              <React.Fragment key={dept.id}>
                {/* The Card */}
                <DepartmentCard
                  {...dept}
                  isSelected={selectedDept === dept.id}
                  onClick={handleDeptClick}
                />
                
                {/* Mobile Only: Detail View right after the selected card */}
                {selectedDept === dept.id && (
                  <div className="lg:hidden animate-fade-in-up">
                    <DetailView department={dept} isMobile={true} />
                  </div>
                )}
              </React.Fragment>
            ))}
           </div>
        </div>

        {/* Desktop Only: Detail View Area at the bottom */}
        <div className="hidden lg:block">
          <DetailView department={currentDept} isMobile={false} />
        </div>

        {/* Footer / CTA */}
        <div className="mt-20 text-center border-t border-gray-800 pt-10">
          <h3 className="text-2xl font-bold text-white mb-4">準備好加入戰隊了嗎？</h3>
          <p className="text-gray-500 mb-8">選擇一個你最有熱情的領域，讓我們一起在 2026 創造歷史。</p>
          <a 
            href="https://forms.gle/cX9Fzp3UAZtoBeg56"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black font-bold py-4 px-10 rounded-full hover:bg-gray-200 transition-transform active:scale-95 text-lg shadow-xl shadow-white/10"
          >
            填寫核心幹部意願表
          </a>
        </div>
      </div>

      {/* CSS specific styles */}
      <style>{`
        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease-out forwards;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        /* Tailwind color safelist workaround for dynamic classes */
        .border-blue-500 { border-color: #3b82f6; }
        .border-purple-500 { border-color: #a855f7; }
        .border-pink-500 { border-color: #ec4899; }
        .border-orange-500 { border-color: #f97316; }
        
        .text-blue-400 { color: #60a5fa; }
        .text-purple-400 { color: #c084fc; }
        .text-pink-400 { color: #f472b6; }
        .text-orange-400 { color: #fb923c; }

        .text-blue-500 { color: #3b82f6; }
        .text-purple-500 { color: #a855f7; }
        .text-pink-500 { color: #ec4899; }
        .text-orange-500 { color: #f97316; }

        .bg-blue-500 { background-color: #3b82f6; }
        .bg-purple-500 { background-color: #a855f7; }
        .bg-pink-500 { background-color: #ec4899; }
        .bg-orange-500 { background-color: #f97316; }

        .bg-blue-600 { background-color: #2563eb; }
        .bg-purple-600 { background-color: #9333ea; }
        .bg-pink-600 { background-color: #db2777; }
        .bg-orange-600 { background-color: #ea580c; }
      `}</style>
    </div>
  );
}