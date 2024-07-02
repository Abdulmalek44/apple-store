import { ReactNode } from "react";

type TGridListProps<T> = {
  records: T[];
  renderitem: (record: T) => ReactNode;
  graidStyle?: string;
};
const GridList = <T extends { id?: string }>({
  records,
  renderitem,
  graidStyle,
}: TGridListProps<T>) => {
  const renderList =
    records.length > 0 &&
    records.map((record) => <div key={record.id}>{renderitem(record)}</div>);
  return (
    <div
      className={`grid  xl:grid-cols-3 md:grid-cols-2 grid-cols-1 ${graidStyle} gap-5 max-lg:mx-4 `}
    >
      {renderList}
    </div>
  );
};

export default GridList;
