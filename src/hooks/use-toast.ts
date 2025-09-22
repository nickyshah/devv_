export function useToast() {
  return {
    toast: ({ title, description }: { title: string; description?: string }) => {
      // Minimal mock: log and alert
      console.log(title, description || "");
      if (typeof window !== "undefined") {
        try { alert(`${title}\n${description || ""}`); } catch {}
      }
    },
  };
}
