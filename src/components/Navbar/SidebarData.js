import React from "react";
import * as FaIcons from "react-icons/fa";
import * as CgIcons from "react-icons/cg";

export const SidebarData = [
  {
    title: "Notes",
    path: "/",
    icon: <CgIcons.CgNotes />,
  },

  {
    title: "Archive",
    path: "/archive",
    icon: <FaIcons.FaArchive />,
  },

  {
    title: "Trash",
    path: "/bin",
    icon: <FaIcons.FaTrashAlt />,
  },
];
