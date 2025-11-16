import type { FC } from "react";

interface Props {
  searches: string[];
  onLabelClicked: (search: string) => void;
}

export const PreviousSearches: FC<Props> = ({ searches, onLabelClicked }) => {
  return (
    <div className="previous-searches">
      <h2>{searches}</h2>

      <ul className="previous-searches-list">
        {searches.map((search) => (
          <li onClick={()=> onLabelClicked(search)} key={search}>{search}</li>
        ))}
      </ul>
    </div>
  );
};
