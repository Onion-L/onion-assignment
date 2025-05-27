import * as React from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarTrigger, SidebarProvider } from "./components/ui/sidebar";
import CustomTitleBar from "@/components/custom-title-bar";

function App(): React.ReactNode {
  return (
    <div>
      <CustomTitleBar />
      <SidebarProvider>
        <AppSidebar />
        <main className="pl-3">
          <div className="h-[40px] flex items-center">
            <SidebarTrigger />
          </div>
          <h1>Hello World</h1>
        </main>
      </SidebarProvider>
    </div>
  )
}

export default App;

