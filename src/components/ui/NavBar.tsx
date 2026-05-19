import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link, useLocation } from "react-router-dom"
import { LucideIcon, Menu, Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

interface NavItem {
    name: string
    url: string
    icon: LucideIcon
}

interface NavBarProps {
    items: NavItem[]
    className?: string
    logo?: string
}

export function NavBar({ items, className, logo }: NavBarProps) {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState(items[0].name)
    const [isMobile, setIsMobile] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    // Sync active tab with current location
    useEffect(() => {
        const currentItem = items.find(item => item.url === location.pathname)
        if (currentItem) {
            setActiveTab(currentItem.name)
        }
    }, [location.pathname, items])

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
        }

        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    if (isMobile) {
        return (
            <div className="absolute top-0 left-0 right-0 z-50 px-4 py-3 flex items-center justify-between">
                <Link to="/" className="flex items-center">
                    <img
                        src="/logo.png"
                        alt="Buildoholics Logo"
                        className="h-[28px] w-auto object-contain"
                    />
                </Link>

                <div className="flex items-center gap-3">
                    <a
                        href="https://cal.com/buildoholics"
                        className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#4F8EF7] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#3A7AE8] transition-colors cta-glow"
                    >
                        <Phone size={12} />
                        Book a Call
                    </a>
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-foreground hover:bg-white/5">
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[80vw] sm:w-[350px] border-l border-white/5 bg-[#0a0a0a]/98 backdrop-blur-xl">
                            <SheetHeader className="text-left mb-8">
                                <img
                                    src="/logo.png"
                                    alt="Logo"
                                    className="h-[28px] w-auto object-contain self-start"
                                />
                            </SheetHeader>
                            <div className="flex flex-col gap-1">
                                {items.map((item) => {
                                    const Icon = item.icon
                                    const isActive = activeTab === item.name
                                    return (
                                        <Link
                                            key={item.name}
                                            to={item.url}
                                            onClick={() => setIsOpen(false)}
                                            className={cn(
                                                "flex items-center gap-4 px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-300",
                                                isActive
                                                    ? "bg-[#4F8EF7]/10 text-[#4F8EF7]"
                                                    : "text-[#999] hover:bg-white/5 hover:text-white"
                                            )}
                                        >
                                            <Icon size={18} />
                                            {item.name}
                                        </Link>
                                    )
                                })}
                            </div>
                            <div className="mt-8 pt-6 border-t border-white/5">
                                <a
                                    href="https://cal.com/buildoholics"
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-full bg-[#4F8EF7] text-white font-semibold text-sm uppercase tracking-wider hover:bg-[#3A7AE8] transition-colors"
                                >
                                    <Phone size={14} />
                                    Book a Free Call
                                </a>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        )
    }

    return (
        <div
            className={cn(
                "absolute top-0 left-0 right-0 z-50 hidden md:flex items-center justify-between px-6 lg:px-10 py-4",
                className,
            )}
        >
            {/* Logo — left */}
            <Link to="/" className="flex items-center pointer-events-auto">
                <img
                    src="/logo.png"
                    alt="Buildoholics Logo"
                    className="h-[28px] w-auto object-contain"
                />
            </Link>

            {/* Nav items — center */}
            <nav className="flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] backdrop-blur-md py-1.5 px-2 rounded-full">
                {items.map((item) => {
                    const isActive = activeTab === item.name
                    return (
                        <Link
                            key={item.name}
                            to={item.url}
                            onClick={() => setActiveTab(item.name)}
                            className={cn(
                                "relative cursor-pointer text-[13px] font-medium px-5 py-2 rounded-full transition-colors duration-300",
                                isActive
                                    ? "text-white"
                                    : "text-[#999] hover:text-white",
                            )}
                        >
                            <span>{item.name}</span>
                            {isActive && (
                                <motion.div
                                    layoutId="nav-indicator"
                                    className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#4F8EF7]"
                                    initial={false}
                                    transition={{
                                        type: "spring",
                                        stiffness: 400,
                                        damping: 30,
                                    }}
                                />
                            )}
                        </Link>
                    )
                })}
            </nav>

            {/* Book a Call — right, sticky */}
            <a
                href="https://cal.com/buildoholics"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#4F8EF7] text-white text-[13px] font-semibold uppercase tracking-wider hover:bg-[#3A7AE8] transition-all duration-300 cta-glow"
            >
                <Phone size={14} />
                Book a Call
            </a>
        </div>
    )
}
