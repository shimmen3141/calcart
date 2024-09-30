import gramPerTeaspoon from "./gramPerTeaspoon";
import "./TeaspoonTable.css";

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
        {gramPerTeaspoon.map((item) => (
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
