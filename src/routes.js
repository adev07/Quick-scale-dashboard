import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/tables";
import RTLDefault from "views/rtl/default";
import GenAI from  "../src/components/icons/images/GenAi.png"
import SubTheme from "../src/components/icons/images/Subtheme.png";
import dashboard from "../src/components/icons/images/material-symbols-light_dashboard (1).svg";
import Documents from "../src/components/icons/images/Documents.png";
import settings from "../src/components/icons/images/Setting.png";
import logout from "../src/components/icons/images/Logout.png"
// Auth Imports
import SignIn from "views/auth/SignIn";

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
} from "react-icons/md";

const routes = [
  {
    name: "Generative AI Theme",
    layout: "/admin",
    path: "/generative-ai-theme",
    icon: <img src={GenAI} className="h-6 w-6 object-cover" alt="" />,
    component: "",
  },
  {
    name: "Sub-Theme",
    layout: "/admin",
    path: "sub-theme",
    icon: <img src={SubTheme} className="h-4 w-4 object-cover pb-[2px]" alt="" />,
    component: "",
  },
  {
    name: "Dashboard",
    layout: "/admin",
    path: "default",
    icon: <img src={dashboard} className="h-6 w-6 object-cover" alt="" />,
    component: <MainDashboard />,
  },
  {
    name: "Top Repositories",
    layout: "/admin",
    path: "/top-repos",
    icon: <img src={Documents} className="h-6 w-6 object-cover" alt="" />,
    component: <NFTMarketplace />,
    secondary: true,
  },
  {
    name: "Settings",
    layout: "/admin",
    icon: <img src={settings} className="h-6 w-6 object-cover" alt="" />,
    path: "settings",
    component: "",
  },
  {
    name: "Logout",
    layout: "/admin",
    path: "logout",
    icon: <img src={logout} className="h-6 w-6 object-cover" alt="" />,
    component: "",
  }
];
export default routes;
