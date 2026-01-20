import { cn } from '../../lib/utils';

interface ToggleProps {
    enabled: boolean;
    setEnabled: (enabled: boolean) => void;
    labelLeft?: string;
    labelRight?: string;
}

export function Toggle({ enabled, setEnabled, labelLeft, labelRight }: ToggleProps) {
    return (
        <div className="flex items-center justify-center space-x-4">
            {labelLeft && <span className={cn("text-sm font-medium", !enabled ? "text-slate-900" : "text-slate-500")}>{labelLeft}</span>}
            <button
                type="button"
                className={cn(
                    "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                    enabled ? "bg-primary" : "bg-slate-200"
                )}
                role="switch"
                aria-checked={enabled}
                onClick={() => setEnabled(!enabled)}
            >
                <span
                    aria-hidden="true"
                    className={cn(
                        "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
                        enabled ? "translate-x-5" : "translate-x-0"
                    )}
                />
            </button>
            {labelRight && <span className={cn("text-sm font-medium", enabled ? "text-slate-900" : "text-slate-500")}>{labelRight}</span>}
        </div>
    );
}
