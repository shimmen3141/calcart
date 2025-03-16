import RemoveSymbolsModalContent from "../components/ModalContents/RemoveSymbolsModalContent";
import SpoonToGramModalContent from "../components/ModalContents/SpoonToGramModalContent";
import ClassifyItemsModalContent from "../components/ModalContents/ClassifyItemsModalContent";
import DefaultModalContent from "../components/ModalContents/DefaultModalContent";

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
