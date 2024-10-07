import { Modal } from "../index";
import TeaspoonTable from "./TeaspoonTable";

const SpoonToGramModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen("spoonToGram")}
      onClose={() => onClose("spoonToGram")}
      title="大さじ・小さじ → g の変換について"
    >
      <div className="modal-content">
        <p>
          ・オンにすると、材料名をもとに分量の「大さじ・小さじ」表記をグラムに変換します。
        </p>
        <div className="border">
          (例1)
          <br />
          しょうゆ 大さじ1　→　しょうゆ 18g
          <br />
          サラダ油 小さじ2　→　サラダ油 8g
        </div>
        <p>・表記揺れにも対応しています。</p>
        <div className="border">
          (例2)
          <br />
          ケチャップ 大匙 2　→　ケチャップ 36g
          <br />
          マヨネーズ こさじ３　→　マヨネーズ 12g
          <br />
          中濃ソース お お 匙 2 杯　→　中濃ソース 36g
        </div>
        <p>
          ・詳しい変換の対応は以下の表をご確認ください。
          <br />
          ※表に含まれていない調味料は変換されません。
        </p>
        <TeaspoonTable />
      </div>
    </Modal>
  );
};

export default SpoonToGramModal;
