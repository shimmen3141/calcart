import teaspoonGramsList from "./teaspoonGramsList";
import "./TeaspoonTable.scss";

const TeaspoonTable = () => {
  return (
    <table className="striped-table">
      <thead>
        <tr>
          <th>調味料</th>
          <th>小さじ1のグラム数</th>
        </tr>
      </thead>
      <tbody>
        {teaspoonGramsList.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.grams} g</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TeaspoonTable;