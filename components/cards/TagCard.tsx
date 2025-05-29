import ROUTES from "@/constants/routes";
import { getDeviconClassName } from "@/lib/utils";
import Link from "next/link";
import { Badge } from "../ui/badge";

interface TagCardProps {
  _id: string;
  name: string;
  questions?: number;
  showCount?: boolean;
  compact?: boolean;
  remove?: boolean;
  isButton?: boolean;
  handleRemove?: () => void;
}

const TagCard = ({
  _id,
  name,
  questions,
  showCount,
  compact,
  remove,
  isButton,
  handleRemove,
}: TagCardProps) => {
  const iconClass = getDeviconClassName(name);

  return (
    <Link href={ROUTES.TAGS(_id)} className="flex justify-between gap-2">
      <Badge className="subtle-medium background-light800_dark300 text-dark400_light500 rounded-md px-4 py-2 uppercase">
        <div className="flex-center space-x-2">
          <i className={`${iconClass} text-sm`} aria-hidden="true"></i>
          <span>{name}</span>
        </div>
      </Badge>

      {showCount && <p className="small-medium text-dark500_light700">{questions}</p>}
    </Link>
  );
};
export default TagCard;
