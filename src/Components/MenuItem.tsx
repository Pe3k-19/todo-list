export const MenuItem = ({
  icon,
  label,
  isActive,
  showLabel,
  onClick,
}: {
  icon: string,
  label: string,
  isActive: boolean,
  showLabel: boolean,
  onClick: () => void,
}) => (
  <div
    className={`flex my-1 px-3 items-center h-[35px] ${isActive && "bg-gray-100"} cursor-pointer rounded`}
    onClick={onClick}
  >
    <div className="w-[32px] px-1">
      <img src={icon} />
    </div>
    {showLabel ? (
      <span className="pl-2">
        {label}
      </span>
    ) : null}
  </div>
);