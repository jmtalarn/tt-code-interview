import "./styles.css";

const List = ({ items, columns = 1, striped = false }) => {
	const drawColumn = (columnItems) => {
		return columnItems.map((item, index) => (
			<div key={`${item.label}_${index}`} className="item">
				<div className="">{item.label}</div>
				<div>
					<strong>{item.value}</strong>
				</div>
			</div>
		));
	};

	const splitIntoArrays = (items, columns) => {
		if (columns === 1) return [items];
		else {
			const length = Math.ceil(items.length / 2);

			return [items.slice(0, length), items.slice(length)];
		}
	};

	return (
		<div className={`list${striped ? " striped" : ""}`}>
			{splitIntoArrays(items, columns).map((col, index) => (
				<div key={`col_${index}`}>{drawColumn(col)}</div>
			))}
		</div>
	);
};

export default List;
