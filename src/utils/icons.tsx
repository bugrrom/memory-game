import {
  FcDebian,
  FcCloseUpMode,
  FcAssistant,
  FcAutomatic,
  FcBinoculars,
  FcBiohazard,
  FcDepartment,
  FcLock,
  FcOpenedFolder,
  FcSupport,
  FcVideoCall,
  FcSearch,
  FcPaid,
  FcPuzzle,
  FcReddit,
  FcLibrary,
  FcFlashOn,
  FcDislike,
} from "react-icons/fc";
import React from "react";

const icons = {
  FcDebian,
  FcCloseUpMode,
  FcAssistant,
  FcAutomatic,
  FcBinoculars,
  FcBiohazard,
  FcDepartment,
  FcLock,
  FcOpenedFolder,
  FcSupport,
  FcVideoCall,
  FcSearch,
  FcPaid,
  FcPuzzle,
  FcReddit,
  FcLibrary,
  FcFlashOn,
  FcDislike,
};

export const Icon = (icon: { name: string; open: boolean }, size = "50%") => {
  //@ts-ignore
  const IconTag = icons[icon.name];
  return <IconTag size={size} />;
};
