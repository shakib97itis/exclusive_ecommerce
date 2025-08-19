import { Link } from "react-router";

export default function Breadcrumb({
  items,
  separator,
  className = "",
  maxVisible = 5,
  truncateLabel = true,
  renderItem,
}) {
  if (!items || items.length === 0) return null;

  const DEFAULT_SEPARATOR = "/";

  separator = separator || DEFAULT_SEPARATOR;

  const lastIndex = items.length - 1;
  const shouldCollapse = items.length > maxVisible;
  const visibleItems = shouldCollapse
    ? [items[0], ...items.slice(items.length - (maxVisible - 1))]
    : items;
  const collapsedSlotIndex = shouldCollapse ? 1 : -1;

  return (
    <nav className={`text-sm ${className}`} aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 overflow-hidden">
        {visibleItems.map((item, idx) => {
          const isLast = shouldCollapse
            ? idx === visibleItems.length - 1
            : items.indexOf(item) === lastIndex;

          /**
           * TODO: Fix this.
           */
          if (idx === collapsedSlotIndex) {
            return (
              <li key="crumb-collapsed" className="relative flex items-center">
                <span className="text-slate-400">{separator}</span>
                <details className="relative ml-2">
                  <summary className="flex cursor-pointer list-none items-center gap-2 rounded-md px-2 py-1 select-none hover:bg-slate-50">
                    <span className="text-slate-500">•••</span>
                  </summary>
                  <div className="ring-opacity-5 absolute left-0 z-50 mt-2 w-56 rounded-md bg-red-200 shadow-lg ring-1 ring-black">
                    <ul className="py-1">
                      {items
                        .slice(1, items.length - (maxVisible - 2))
                        .map((midItem, midIdx) => (
                          <li key={`mid-${midIdx}`}>
                            {midItem.href ? (
                              <Link
                                to={midItem.href}
                                className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50"
                              >
                                {midItem.label}
                              </Link>
                            ) : (
                              <button
                                type="button"
                                className="block w-full px-4 py-2 text-left text-sm text-slate-600 hover:bg-slate-50"
                              >
                                {midItem.label}
                              </button>
                            )}
                          </li>
                        ))}
                    </ul>
                  </div>
                </details>
              </li>
            );
          }

          const originalIndex = items.indexOf(item);
          const isOriginalLast = originalIndex === lastIndex;
          return (
            <li key={`crumb-${idx}`} className="flex items-center">
              {idx !== 0 && <span className="text-slate-400">{separator}</span>}
              <span className="ml-2">
                {renderItem
                  ? renderItem(
                      item,
                      originalIndex,
                      isOriginalLast,
                      truncateLabel,
                    )
                  : DefaultRender(
                      item,
                      originalIndex,
                      isOriginalLast,
                      truncateLabel,
                      isLast,
                    )}
              </span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

/* Example usage with React Router:
<Breadcrumb
  items={[
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Electronics', href: '/products/electronics' },
    { label: 'Cameras', href: '/products/electronics/cameras' },
    { label: 'Canon EOS R5' }
  ]}
  maxVisible={4}
/>
*/

function DefaultRender(item, index, isLast, truncateLabel = true) {
  const content = (
    <span
      className={`flex items-center gap-2 ${truncateLabel ? "truncate" : ""}`}
    >
      {item.icon && <span className="flex items-center">{item.icon}</span>}
      <span
        className={`title-14-regular text-text-2/50 ${isLast ? "" : "hover:text-text-2/80"}`}
      >
        {item.label}
      </span>
    </span>
  );

  if (item.href)
    return (
      <Link
        to={item.href}
        aria-label={item.ariaLabel}
        className="inline-flex items-center underline-offset-2 hover:underline"
      >
        {content}
      </Link>
    );

  return (
    <button
      type="button"
      aria-label={item.ariaLabel}
      className="inline-flex cursor-pointer items-center underline-offset-2 hover:underline"
    >
      {content}
    </button>
  );
}
