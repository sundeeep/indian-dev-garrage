"use client";

import {Terminal as XTerminal} from "@xterm/xterm";
import { useEffect, useRef } from "react";
import '@xterm/xterm/css/xterm.css';

const IDGTerminal = () => {

    const terminalRef = useRef();
    const isRendered = useRef(false);

    useEffect(()=>{
      
      if(isRendered.current) return;
      isRendered.current = true;

        const term = new XTerminal({
            rows: 20
        });
        term.open(terminalRef.current);

        term.onData((data)=>{
            console.log(data);
        })

    },[])

  return (
    <div ref={terminalRef} id="terminal" />
  )
}

export default IDGTerminal;