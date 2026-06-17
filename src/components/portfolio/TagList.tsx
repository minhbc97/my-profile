type TagListProps = {
  className?: string;
  items: string[];
};

export function TagList({ className = "", items }: TagListProps) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {items.map((item) => (
        <span key={item} className="tag">
          {item}
        </span>
      ))}
    </div>
  );
}
