import "./Wrappers.css"
import Chat from "../ChatComp/Chat"
import Settings from "../SettingsComp/Settings"
import Clock from "../Clock/Clock"
import { useState } from "react"

const WrapWhatsComp = () => {
    const [interfaceColor, setInterfaceColor] = useState<string>("Light")
    const [clocksDisplay, setClockDisplay] = useState<string>("12-hours")
    const [messageShortcutSetting, setMessageShortcutSetting] = useState<string>("on")
    const [language, setLanguage] = useState("En")

    const [active, setActive] = useState("chat")

    const handleChange = (tab:string) =>  {
        setActive(tab)
    }

    return (
        <>
            <div className="wrappers_main_container">
                <header className="wrappersHeader">
                    <button className ="btnChatSett" onClick={()=> handleChange("chat")}>Chat</button>
                    <button className ="btnChatSett" onClick={()=> handleChange("settings")}>Settings</button>
                    <Clock clocksDisplay={clocksDisplay}/>
                </header>
                <div>
                    {
                        active === "chat" && 
                        <Chat
                            interfaceColor={interfaceColor}
                            messageShortcutSetting={messageShortcutSetting}
                        /> 
                    }
                    {
                        active === "settings" && 
                        <Settings
                            interfaceColor={interfaceColor}
                            setInterfaceColor={setInterfaceColor}
                            clocksDisplay={clocksDisplay}
                            setClockDisplay={setClockDisplay}
                            messageShortcutSetting={messageShortcutSetting}
                            setMessageShortcutSetting={setMessageShortcutSetting}
                            language={language}
                            setLanguage={setLanguage}
                        />
                    }
                </div>
            </div>  
        </>
    )
}

export default WrapWhatsComp