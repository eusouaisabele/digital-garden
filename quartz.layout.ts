import { QuartzLayout } from "./quartz/cfg"

import {
  Component,
  PageTitle,
  Content,
  Spacer,
  Explorer,
  Darkmode,
  Search,
  Backlinks,
  RecentNotes,
} from "./quartz/components"

export const sharedPageComponents: QuartzLayout = {
  head: [],
  header: [PageTitle()],
  beforeBody: [],
  left: [
    Explorer({
      title: "Explore",
      folderClickBehavior: "collapse",
      useSavedState: true,
    }),
  ],
  right: [
    RecentNotes({
      title: "Recent Notes",
    }),
    Backlinks(),
  ],
  afterBody: [],
  footer: [],
}
