import { MODAL_CONFIG } from "modules";

export const SETTINGS_CONFIG = {
  removeSymbols: {
    settingId: "removeSymbols",
    label: "記号の消去",
    defaultToggle: true,
    relatedModalId: MODAL_CONFIG.removeSymbols.modalId,
  },
  spoonToGram: {
    settingId: "spoonToGram",
    label: "大さじ・小さじ→グラムの変換",
    defaultToggle: true,
    relatedModalId: MODAL_CONFIG.spoonToGram.modalId,
  },
  classifyItems: {
    settingId: "classifyItems",
    label: "リストの分割",
    defaultToggle: true,
    relatedModalId: MODAL_CONFIG.classifyItems.modalId,
  },
  default: {
    settingId: "default",
    label: "エラー",
    defaultToggle: false,
    relatedModalId: MODAL_CONFIG.default.modalId,
  },
};
