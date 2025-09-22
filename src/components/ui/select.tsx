import * as React from "react";

type SelectCtx = {
  placeholder?: string;
  onValueChange?: (value: string) => void;
};
const Ctx = React.createContext<SelectCtx>({});

export const Select: React.FC<{ onValueChange?: (value: string) => void; children: React.ReactNode }> = ({ onValueChange, children }) => {
  // Extract options from SelectContent children (SelectItem)
  let placeholder: string | undefined = undefined;
  const items: Array<{ value: string; label: string }> = [];

  React.Children.forEach(children as any, (child: any) => {
    if (!child) return;
    if (child.type?.displayName === "SelectTrigger") {
      const sv = React.Children.toArray(child.props.children).find((c: any) => c.type?.displayName === "SelectValue");
      placeholder = sv?.props?.placeholder;
    }
    if (child.type?.displayName === "SelectContent") {
      React.Children.forEach(child.props.children, (grand: any) => {
        if (grand?.type?.displayName === "SelectItem") {
          items.push({ value: grand.props.value, label: grand.props.children });
        }
      });
    }
  });

  return (
    <Ctx.Provider value={{ placeholder, onValueChange }}>
      <select
        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground"
        defaultValue=""
        onChange={(e) => onValueChange?.(e.target.value)}
      >
        <option value="" disabled>{placeholder || "Select"}</option>
        {items.map((it) => (
          <option key={it.value} value={it.value}>{it.label}</option>
        ))}
      </select>
    </Ctx.Provider>
  );
};

export const SelectTrigger: React.FC<{ className?: string; children?: React.ReactNode }> = ({ children }) => {
  // Render nothing; native select is rendered by <Select/>
  return null;
};
SelectTrigger.displayName = "SelectTrigger";

export const SelectValue: React.FC<{ placeholder?: string }> = () => null;
SelectValue.displayName = "SelectValue";

export const SelectContent: React.FC<{ children?: React.ReactNode }> = ({ children }) => <>{children}</>;
SelectContent.displayName = "SelectContent";

export const SelectItem: React.FC<{ value: string; children: React.ReactNode }> = () => null;
SelectItem.displayName = "SelectItem";

export default Select;
