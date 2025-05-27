import * as React from 'react'
import { Calendar, Home, Inbox, Search, Settings } from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from '@/components/ui/sidebar'

export function AppSidebar(): React.ReactNode {
  // Menu items.
  const items = [
    {
      title: 'Home',
      url: '#',
      icon: Home
    },
    {
      title: 'Inbox',
      url: '#',
      icon: Inbox
    },
    {
      title: 'Calendar',
      url: '#',
      icon: Calendar
    },
    {
      title: 'Search',
      url: '#',
      icon: Search
    },
    {
      title: 'Settings',
      url: '#',
      icon: Settings
    }
  ]
  return (
    <Sidebar>
      <SidebarHeader>
        <h2 className='text-center font-bold'>Onion Assignment</h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          {/* <SidebarGroupLabel>Application</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
