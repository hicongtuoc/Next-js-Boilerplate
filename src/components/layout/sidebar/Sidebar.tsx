'use client';

import './sidebar.scss';

import {
    IconCaretDown,
    IconMenuChat,
    IconMenuDashboard,
    IconMenuNotes,
    IconMenuScrumboard,
    IconMenuTodo,
    IconMinus,
} from '@/components/icons';

function getNavConfig() {
    const navConfig = [
        {
            icon: <IconMenuDashboard />,
            icon_right: <IconCaretDown />,
            url: '/dashboard',
            activeUrl: ['/home'],
            label: 'Dashboard',
            id: 'dashboard',
            children: [
                {
                    url: '/dashboard/home',
                    activeUrl: ['/home'],
                    label: 'Dashboard 1',
                    icon: <IconMinus />,
                },
                {
                    url: '/dashboard/home',
                    activeUrl: ['/home'],
                    label: 'Dashboard 2',
                    icon: <IconMinus />,
                },
                {
                    url: '/dashboard/home',
                    activeUrl: ['/home'],
                    label: 'Dashboard 3',
                    icon: <IconMinus />,
                },
            ],
        },
        {
            no_link: true,
            icon: <IconMinus />,
            label: 'Apps',
        },
        {
            icon: <IconMenuChat />,
            url: '/chat',
            activeUrl: ['/chat'],
            label: 'Chat',
        },
        {
            icon: <IconMenuTodo />,
            url: '/todo-list',
            activeUrl: ['/todo-list'],
            label: 'Todo List',
        },
        {
            icon: <IconMenuScrumboard />,
            url: '/scrumboard',
            activeUrl: ['/scrumboard'],
            label: 'Scrumboard',
        },
        {
            icon: <IconMenuNotes />,
            url: '/note',
            activeUrl: ['/note'],
            label: 'Note',
        },
    ];
    return navConfig;
}

export function Sidebar() {
    console.log('LOG getNavConfig', getNavConfig());
    return (
        <aside className="sidebar fixed inset-y-0 z-50 h-full min-h-screen w-[260px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] transition-all duration-300">
            long
        </aside>
    );
    // const pathname = usePathname();
    // const navConfig = useMemo(() => getNavConfig(), []);
    // const [currentMenu, setCurrentMenu] = useState<string>('');
    // const toggleMenu = (value: string) => {
    //     setCurrentMenu((oldValue) => {
    //         return oldValue === value ? '' : value;
    //     });
    // };
    // return (
    //     <aside className="ft-sidebar">
    //         <div className="flex items-center justify-between px-4 py-3">
    //             <Link href="/" className="main-logo flex shrink-0 items-center">
    //                 <img
    //                     className="ml-[5px] w-8 flex-none"
    //                     src="/assets/images/logo.svg"
    //                     alt="logo"
    //                 />
    //                 <span className="dark:text-white-light align-middle text-2xl font-semibold lg:inline ltr:ml-1.5 rtl:mr-1.5">
    //                     FOTUSOFT
    //                 </span>
    //             </Link>
    //             <button
    //                 type="button"
    //                 className="collapse-icon dark:text-white-light dark:hover:bg-dark-light/10 flex h-8 w-8 items-center rounded-full transition duration-300 hover:bg-gray-500/10 rtl:rotate-180"
    //             >
    //                 <IconCaretsDown className="m-auto rotate-90" />
    //             </button>
    //         </div>
    //         <div className="px-4 py-3">
    //             {navConfig.map((item, index) => {
    //                 const firstPath = `/${pathname.split('/')[2]}`;
    //                 if (item.no_link) {
    //                     return (
    //                         <h2 key={index} className="menu-header">
    //                             <span>{item.label}</span>
    //                         </h2>
    //                     );
    //                 }
    //                 if (item.children) {
    //                     return (
    //                         <div key={index}>
    //                             <div
    //                                 onKeyDown={() => toggleMenu(item.id)}
    //                                 className="menu-item"
    //                                 onClick={() => toggleMenu(item.id)}
    //                             >
    //                                 <div className="flex w-full items-center justify-between">
    //                                     <div className="flex items-center">
    //                                         {item.icon}
    //                                         <span className="menu-item_label">
    //                                             {item.label}
    //                                         </span>
    //                                     </div>
    //                                     <div
    //                                         className={
    //                                             currentMenu !== 'dashboard'
    //                                                 ? '-rotate-90 rtl:rotate-90'
    //                                                 : ''
    //                                         }
    //                                     >
    //                                         {item.icon_right}
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                             <AnimateHeight
    //                                 duration={300}
    //                                 height={
    //                                     currentMenu === item.id ? 'auto' : 0
    //                                 }
    //                             >
    //                                 {item.children.map((child, index2) => {
    //                                     return (
    //                                         <Link
    //                                             key={index2}
    //                                             href={child.url as string}
    //                                             className="menu-item item-children"
    //                                         >
    //                                             {child.icon}
    //                                             <span className="menu-item_label">
    //                                                 {child.label}
    //                                             </span>
    //                                             {/* <div className="flex items-center">
    // 												<span className="menu-item_label">{child.label}</span>
    // 											</div> */}
    //                                         </Link>
    //                                     );
    //                                 })}
    //                             </AnimateHeight>
    //                         </div>
    //                     );
    //                 }
    //                 return (
    //                     <Link
    //                         href={item.url as string}
    //                         key={index}
    //                         className={clsx('menu-item', {
    //                             active: item.activeUrl?.includes(firstPath),
    //                         })}
    //                     >
    //                         <div className="flex items-center">
    //                             <div className="flex items-center">
    //                                 {item.icon}
    //                                 <span className="menu-item_label dark:text-white">
    //                                     {item.label}
    //                                 </span>
    //                             </div>
    //                         </div>
    //                     </Link>
    //                 );
    //             })}
    //         </div>
    //     </aside>
    // );
}
