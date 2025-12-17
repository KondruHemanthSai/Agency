import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Link, useLocation } from "react-router-dom"
import { LucideIcon, Menu } from "lucide-react"
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

    if (isMobile) {
        return (
            <div className="fixed top-0 left-0 right-0 z-50 px-4 py-4 bg-background/80 backdrop-blur-lg border-b border-border flex items-center justify-between transition-all duration-300">
                <Link to="/" className="flex items-center">
                    {/* Simplified/Smaller Logo for Mobile */}
                    <img
                        src="/assets/logo.svg"
                        alt="Logo"
                        className="h-8 w-auto object-contain" // Smaller logo for mobile
                    />
                </Link>

                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="text-foreground hover:bg-muted">
                            <Menu className="h-6 w-6" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[80vw] sm:w-[350px] border-l border-border bg-background/95 backdrop-blur-xl">
                        <SheetHeader className="text-left mb-8">
                            <img
                                src="/assets/logo.svg"
                                alt="Logo"
                                className="h-10 w-auto object-contain self-start"
                            />
                        </SheetHeader>
                        <div className="flex flex-col gap-2">
                            {items.map((item) => {
                                const Icon = item.icon
                                const isActive = activeTab === item.name
                                return (
                                    <Link
                                        key={item.name}
                                        to={item.url}
                                        onClick={() => setIsOpen(false)}
                                        className={cn(
                                            "flex items-center gap-4 px-4 py-3 rounded-xl text-lg font-medium transition-colors",
                                            isActive
                                                ? "bg-primary/10 text-primary"
                                                : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                        )}
                                    >
                                        <Icon size={20} />
                                        {item.name}
                                    </Link>
                                )
                            })}
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        )
    }

    return (
        <div
            className={cn(
                "fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:block",
                className,
            )}
        >
            <div className="flex items-center gap-3 bg-background/5 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
                {items.map((item, index) => {
                    const Icon = item.icon
                    const isActive = activeTab === item.name
                    const isMiddle = logo && index === Math.ceil(items.length / 2)

                    return (
                        <React.Fragment key={item.name}>
                            {isMiddle && (
                                <div className="px-2">
                                    <img src={logo} alt="Logo" className="h-12 w-auto object-contain drop-shadow-sm hover:scale-110 transition-transform duration-200" />
                                </div>
                            )}
                            <Link
                                to={item.url}
                                onClick={() => setActiveTab(item.name)}
                                className={cn(
                                    "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                                    "text-foreground/80 hover:text-primary",
                                    isActive && "bg-muted text-primary",
                                )}
                            >
                                <span className="hidden md:inline">{item.name}</span>
                                <span className="md:hidden">
                                    <Icon size={18} strokeWidth={2.5} />
                                </span>
                                {isActive && (
                                    <motion.div
                                        layoutId="lamp"
                                        className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                                        initial={false}
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 30,
                                        }}
                                    >
                                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                                            <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                                            <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                                            <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                                        </div>
                                    </motion.div>
                                )}
                            </Link>
                        </React.Fragment>
                    )
                })}
            </div>
        </div>
    )
}
