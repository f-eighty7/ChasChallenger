import style from './GameSettingsPopup.module.css'
import { GameSettingsPopupProps } from '../types/types';

export function GameSettingsPopup(props: GameSettingsPopupProps) {
  return props.trigger ? (
    <div className={style.popup}>
      <div className={style["popup-inner"]}>
        <button
          className={style["close-button"]}
          onClick={() => props.setTrigger(false)}
        >
          Close
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}