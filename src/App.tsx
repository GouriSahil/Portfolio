import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CustomCursor from "./components/CustomCursor";

const queryClient = new QueryClient();

const App = () => {
  const [showBoot, setShowBoot] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const hasSeenBoot = sessionStorage.getItem("sg_boot_seen");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (hasSeenBoot || motionQuery.matches) {
      return;
    }

    setShowBoot(true);

    const timeout = window.setTimeout(() => {
      setShowBoot(false);
      sessionStorage.setItem("sg_boot_seen", "1");
    }, 1500);

    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <CustomCursor />
        <div className="relative">
          {showBoot && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--bg-base)] text-[var(--text-primary)]">
              <div className="space-y-1 text-sm md:text-base">
                <div>initializing portfolio...</div>
                <div>loading modules.............. done</div>
                <div>welcome, recruiter.</div>
              </div>
            </div>
          )}
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
