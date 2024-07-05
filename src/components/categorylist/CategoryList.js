import './CategoryList.css';

const CategoryList = ({ aggregations = [], onGenero }) => {

  return (
    <div className="list-group">
      {aggregations.length > 0 ? (
        aggregations.map((agg, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto pointer" onClick={() => onGenero(agg.key)}>
              <div className="fw-bold">{agg.key}</div>
            </div>
            <span className="badge bg-primary rounded-pill pointer" onClick={() => onGenero(agg.key)}>{agg.count}</span>
          </li>
        ))
      ) : (
        <p>Cargando..</p>
      )}
    </div>
  );
}

export default CategoryList;