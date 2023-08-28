'use client'
import React from "react";

import {VisuallyHidden} from "@nextui-org/react";
import {useSwitch, SwitchProps} from "@nextui-org/switch";

import {SunIcon} from "./SunIcon";
import {MoonIcon} from "./MoonIcon";

const ThemeSwitch = (props: SwitchProps) => {
  const {
    Component, 
    slots, 
    isSelected, 
    getBaseProps, 
    getInputProps, 
    getWrapperProps
  } = useSwitch(props);

  return (
    <div className="flex flex-col gap-2">
      <Component {...getBaseProps()}>
          <VisuallyHidden>
            <input {...getInputProps()} />
          </VisuallyHidden>
          <div
            {...getWrapperProps()}
            className={slots.wrapper({
              class: [
                "w-8 h-8",
                "flex items-center justify-center",
                "rounded-lg bg-default-100 hover:bg-default-200",
              ],
            })}
          >
            {isSelected ? <SunIcon/> : <MoonIcon/>}
          </div>
      </Component>
    </div>
  )
}


export default function App() {
  return <ThemeSwitch/>
}
