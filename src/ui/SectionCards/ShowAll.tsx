interface showAllProps {
  title?: string;
  showAll?: boolean;
  spanClassName?: boolean;
  onToggleExpand?: () => void;
  handleToggleShowAll?: (e: React.MouseEvent) => void;
}

const ShowAll: React.FC<showAllProps> = ({
  spanClassName,
  showAll,
  title = `Ver ${showAll ? `menos` : `mais`}`,
  onToggleExpand,
  handleToggleShowAll }) => {
  const handleClick = handleToggleShowAll ?? onToggleExpand;
  let className: string;
  const titleShowLess: string = `Ver menos`;
  let titleShowMore: string;
  if (spanClassName) {
    titleShowMore = `Ver mais`;
    className = `cursor-pointer underline text-lg ml-1 underline-offset-2 hover:opacity-70`
  } else {
    titleShowMore = `Ver todos`;
    className = `px-8 py-2 text-2xl font-bold bg-rosa-claro text-white rounded-xl border-2 border-white
    shadow-2xl drop-shadow-2xl hover:contrast-125 hover:scale-105`;
  }
  return (
    <button
      type="button"
      title={`${title}`}
      className={className}
      onClick={handleClick}
      aria-label={showAll ? `${titleShowLess}` : `${titleShowMore}`}
    >
      {showAll ? `${titleShowLess}` : `${titleShowMore}`}
    </button>
  );
};

export default ShowAll;