import "./modalContents.scss";
import RemoveSymbolsModalContent from "./ModalContents/RemoveSymbolsModalContent";
import SpoonToGramModalContent from "./ModalContents/SpoonToGramModalContent";
import ClassifyItemsModalContent from "./ModalContents/ClassifyItemsModalContent";
import DefaultModalContent from "./ModalContents/DefaultModalContent";

export const modalContents = {
  removeSymbols: {
    modalId: "removeSymbols",
    title: "記号の消去",
    content: <RemoveSymbolsModalContent />,
  },
  spoonToGram: {
    modalId: "spoonToGram",
    title: "大さじ・小さじ→グラムの変換",
    content: <SpoonToGramModalContent />,
  },
  classifyItems: {
    modalId: "classifyItems",
    title: "リストの分割",
    content: <ClassifyItemsModalContent />,
  },
  default: {
    modalId: "default",
    title: "エラー",
    content: <DefaultModalContent />,
  },
};
