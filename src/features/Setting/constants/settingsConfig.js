import { MODAL_CONFIG } from "modules";

export const SETTINGS_CONFIG = {
  removeSymbols: {
    settingId: "removeSymbols",
    labelText: "記号を消去",
    defaultToggle: true,
    relatedModalId: MODAL_CONFIG.removeSymbols.modalId,
  },
  spoonToGram: {
    settingId: "spoonToGram",
    labelText: "大さじ・小さじをグラムの変換",
    defaultToggle: true,
    relatedModalId: MODAL_CONFIG.spoonToGram.modalId,
  },
  classifyItems: {
    settingId: "classifyItems",
    labelText: "リストを分割",
    defaultToggle: true,
    relatedModalId: MODAL_CONFIG.classifyItems.modalId,
  },
};
