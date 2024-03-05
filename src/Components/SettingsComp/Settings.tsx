import { ChangeEvent, Dispatch, SetStateAction } from "react";
import "./settings.css";

interface SettingsProps {
  interfaceColor: string;
  setInterfaceColor: Dispatch<SetStateAction<string>>;
  clocksDisplay: string;
  setClockDisplay: Dispatch<SetStateAction<string>>;
  messageShortcutSetting: string;
  setMessageShortcutSetting: Dispatch<SetStateAction<string>>;
  language: string;
  setLanguage:Dispatch<SetStateAction<string>>;
}

const Settings: React.FC<SettingsProps> = ({
  interfaceColor,
  setInterfaceColor,
  clocksDisplay,
  setClockDisplay,
  messageShortcutSetting,
  setMessageShortcutSetting,
  language,
  setLanguage
}) => {
  const handleInterfaceColorChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInterfaceColor(e.target.value);
  };
  const handleHoursDisplay = (e:ChangeEvent<HTMLInputElement>) => {
    setClockDisplay(e.target.value)
  } 
  const handleMessageShortcutSetting = (e: ChangeEvent<HTMLInputElement>) => {
    setMessageShortcutSetting(e.target.value);
  };

// languages
  const handleLanguageChange = (e:any) => {
    setLanguage(e.target.value)
  }

  // All settings Reset

  const handleResetSettings = () => {
    setInterfaceColor("Light")
    setClockDisplay("12-hours")
    setMessageShortcutSetting("on")
    setLanguage("En")
  }

  return (
    <div className={interfaceColor === "Light" ? "settings_container" : "dark_settings_container"}>
      {/* User Name */}

      <div>
        <p>{language === "Ge" ? "მომხმარებლის სახელი" : "User name"} </p> 
        <input type="text" />
      </div>

      {/* Interface color */}
      <div>
        <p>Interface color</p>
        <form className="d-flex">
          <div>
            <input
              type="radio"
              id="Light"
              name="interfaceColor"
              value="Light"
              checked={interfaceColor === "Light"}
              onChange={handleInterfaceColorChange}
            />
            <label htmlFor="Light">Light</label>
          </div>
          <div className="common_Class">
            <input
              type="radio"
              id="Dark"
              name="interfaceclor"
              value="Dark"
              checked={interfaceColor === "Dark"}
              onChange={handleInterfaceColorChange}
            />
            <label htmlFor="Dark">Dark</label>
          </div>
        </form>
      </div>

      {/* Clock display */}
      <div>
        <p>Clock display</p>
        <form className="d-flex">
          <div>
              <input
                type="radio"
                id="12-hours"
                name="hoursDisplay"
                value="12-hours"
                checked={clocksDisplay === "12-hours"}
                onChange={handleHoursDisplay}
              />
              <label htmlFor="12-hours">12 Hours</label>
            </div>
            <div className="common_Class">
              <input
                type="radio"
                id="24-hours"
                name="hoursDisplay"
                value="24-hours"
                checked={clocksDisplay === "24-hours"}
                onChange={handleHoursDisplay}
              />
              <label htmlFor="24-hours">24 Hours</label>
            </div>
        </form>
      </div>

      {/* Message shortcut Settings */}
      <div>
        <p>Send messages on CTRL+ENTER</p>
        <form className="d-flex">
          <div>
            <input
              type="radio"
              id="on"
              name="messageShortcutSetting"
              value="on"
              checked={messageShortcutSetting === "on"}
              onChange={handleMessageShortcutSetting}
            />
            <label htmlFor="on">On</label>
          </div>
          <div className="common_Class">
            <input
              type="radio"
              id="off"
              name="messageShortcutSetting"
              value="off"
              checked={messageShortcutSetting === "off"}
              onChange={handleMessageShortcutSetting}
            />
            <label htmlFor="off">Off</label>
          </div>
        </form>
      </div>

      {/* language Settings */}
      <div>
        <select value={language} onChange={handleLanguageChange}>
          <option value="En">English</option>
          <option value="Ge">ქართული</option>
        </select>
      </div>
      <button onClick={handleResetSettings}>Reset settings to defaults</button>
    </div>
  );
};

export default Settings;
