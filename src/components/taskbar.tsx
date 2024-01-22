"use client"; // This is a client component

import Image from "next/image";
import React, { useState } from 'react'
import StartButton from "./startButton";

interface WindowState {
    [key: string]: string;
  }
  
  interface TaskbarProps {
    windows: string[];
    windowState: WindowState;
    onWindowClick: (windowId: keyof WindowState) => void;
  }

export default function Taskbar({windows, windowState, onWindowClick}:TaskbarProps) {
    return(
        <div className="taskbar">
            <StartButton/>
            <div className="taskbar--taskarea">
                {
                    windows.map((windowId) => (
                        <div 
                            key={windowId} 
                            className={`taskbar--window ${windowId}`} 
                            id={windowId}
                            onClick={() => onWindowClick(windowId)}
                        >
                            {windowId}
                        </div>
                ))}
            </div>
            <div className="taskbar--clock">10:08 PM</div>
        </div>
    )
}