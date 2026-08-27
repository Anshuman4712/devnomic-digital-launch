import { useState, type ChangeEvent } from "react";
import { ArrowDown, ArrowUp, ImagePlus, Pencil, Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export type Field = {
  key: string;
  label: string;
  type: "text" | "textarea" | "image" | "number" | "switch" | "select";
  options?: string[];
};

type Item = { id: string } & Record<string, unknown>;

export function ImageField({
  value,
  label,
  onChange,
}: {
  value: string;
  label: string;
  onChange: (v: string) => void;
}) {
  const onFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => onChange(String(reader.result));
    reader.readAsDataURL(file);
  };

  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <div className="flex items-center gap-3">
        {value ? (
          <img src={value} alt="" className="size-14 rounded-xl border border-border object-cover" />
        ) : (
          <span className="flex size-14 items-center justify-center rounded-xl border border-dashed border-border text-muted-foreground">
            <ImagePlus className="size-4" />
          </span>
        )}
        <div className="flex-1 space-y-2">
          <Input value={value} onChange={(e) => onChange(e.target.value)} placeholder="Image URL" />
          <input
            type="file"
            accept="image/*"
            onChange={onFile}
            className="block w-full text-xs text-muted-foreground file:mr-3 file:rounded-full file:border-0 file:bg-secondary file:px-3 file:py-1.5 file:text-xs"
          />
        </div>
      </div>
    </div>
  );
}

export function EntityManager<T extends Item>({
  title,
  description,
  items,
  fields,
  makeEmpty,
  onChange,
  titleKey = "title",
  imageKey,
}: {
  title: string;
  description?: string;
  items: T[];
  fields: Field[];
  makeEmpty: () => T;
  onChange: (items: T[]) => void;
  titleKey?: string;
  imageKey?: string;
}) {
  const [draft, setDraft] = useState<T | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [pendingDelete, setPendingDelete] = useState<string | null>(null);

  const save = () => {
    if (!draft) return;
    onChange(isNew ? [...items, draft] : items.map((i) => (i.id === draft.id ? draft : i)));
    setDraft(null);
    toast.success(isNew ? "Item added" : "Changes saved");
  };

  const remove = (id: string) => {
    onChange(items.filter((i) => i.id !== id));
    setPendingDelete(null);
    toast.success("Item deleted");
  };

  const move = (index: number, dir: -1 | 1) => {
    const next = [...items];
    const target = index + dir;
    if (target < 0 || target >= next.length) return;
    const a = next[index]!;
    const b = next[target]!;
    next[index] = b;
    next[target] = a;
    onChange(next);
  };

  const set = (key: string, value: unknown) =>
    setDraft((d) => (d ? ({ ...d, [key]: value } as T) : d));

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">{title}</h1>
          {description ? <p className="mt-1 text-sm text-muted-foreground">{description}</p> : null}
        </div>
        <Button
          className="rounded-full"
          onClick={() => {
            setDraft(makeEmpty());
            setIsNew(true);
          }}
        >
          <Plus className="size-4" /> Add new
        </Button>
      </div>

      <div className="mt-6 grid gap-3">
        {items.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-border p-10 text-center text-sm text-muted-foreground">
            Nothing here yet — add your first item.
          </p>
        ) : null}
        {items.map((item, i) => (
          <div
            key={item.id}
            className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-soft"
          >
            {imageKey && item[imageKey] ? (
              <img
                src={String(item[imageKey])}
                alt=""
                className="size-11 shrink-0 rounded-xl object-cover"
              />
            ) : null}
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold">{String(item[titleKey] ?? "Untitled")}</p>
              <p className="truncate text-xs text-muted-foreground">
                {String(item[fields[1]?.key ?? ""] ?? "")}
              </p>
            </div>
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" onClick={() => move(i, -1)} aria-label="Move up">
                <ArrowUp className="size-4" />
              </Button>
              <Button variant="ghost" size="icon" onClick={() => move(i, 1)} aria-label="Move down">
                <ArrowDown className="size-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Edit"
                onClick={() => {
                  setDraft({ ...item });
                  setIsNew(false);
                }}
              >
                <Pencil className="size-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Delete"
                onClick={() => setPendingDelete(item.id)}
              >
                <Trash2 className="size-4 text-destructive" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={!!draft} onOpenChange={(o) => !o && setDraft(null)}>
        <DialogContent className="max-h-[85vh] overflow-y-auto rounded-3xl sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>{isNew ? `New ${title.replace(/s$/, "")}` : "Edit item"}</DialogTitle>
          </DialogHeader>
          {draft ? (
            <div className="space-y-4">
              {fields.map((f) => {
                const value = draft[f.key];
                if (f.type === "image")
                  return (
                    <ImageField
                      key={f.key}
                      label={f.label}
                      value={String(value ?? "")}
                      onChange={(v) => set(f.key, v)}
                    />
                  );
                if (f.type === "switch")
                  return (
                    <div key={f.key} className="flex items-center justify-between">
                      <Label>{f.label}</Label>
                      <Switch checked={Boolean(value)} onCheckedChange={(v) => set(f.key, v)} />
                    </div>
                  );
                if (f.type === "select")
                  return (
                    <div key={f.key} className="space-y-2">
                      <Label>{f.label}</Label>
                      <Select value={String(value ?? "")} onValueChange={(v) => set(f.key, v)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          {(f.options ?? []).map((o) => (
                            <SelectItem key={o} value={o}>
                              {o}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  );
                if (f.type === "textarea")
                  return (
                    <div key={f.key} className="space-y-2">
                      <Label>{f.label}</Label>
                      <Textarea
                        rows={3}
                        value={String(value ?? "")}
                        onChange={(e) => set(f.key, e.target.value)}
                      />
                    </div>
                  );
                return (
                  <div key={f.key} className="space-y-2">
                    <Label>{f.label}</Label>
                    <Input
                      type={f.type === "number" ? "number" : "text"}
                      value={String(value ?? "")}
                      onChange={(e) =>
                        set(f.key, f.type === "number" ? Number(e.target.value) : e.target.value)
                      }
                    />
                  </div>
                );
              })}
            </div>
          ) : null}
          <DialogFooter>
            <Button variant="outline" className="rounded-full" onClick={() => setDraft(null)}>
              Cancel
            </Button>
            <Button className="rounded-full" onClick={save}>
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <AlertDialog open={!!pendingDelete} onOpenChange={(o) => !o && setPendingDelete(null)}>
        <AlertDialogContent className="rounded-3xl">
          <AlertDialogHeader>
            <AlertDialogTitle>Delete this item?</AlertDialogTitle>
            <AlertDialogDescription>
              This removes it from the live website immediately. This can't be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="rounded-full">Cancel</AlertDialogCancel>
            <AlertDialogAction
              className="rounded-full"
              onClick={() => pendingDelete && remove(pendingDelete)}
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
