import { seasoningList } from "data";
import "./TeaspoonGramsTable.scss";

const TeaspoonGramsTable = () => {
  return (
    <table className="striped-table">
      <thead>
        <tr>
          <th>調味料</th>
          <th>小さじ1のグラム数</th>
        </tr>
      </thead>
      <tbody>
        {seasoningList.map((item) => (
          <tr key={item.name}>
            <td>{item.name}</td>
            <td>{item.grams} g</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TeaspoonGramsTable;
