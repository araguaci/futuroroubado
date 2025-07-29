import { toast as shadcnToast } from "@/components/ui/use-toast";

export const showSuccessToast = (title: string, description?: string) => {
  shadcnToast({
    title: title,
    description: description,
    variant: "default", // ou "success" se houver um variant customizado
  });
};

export const showErrorToast = (title: string, description?: string) => {
  shadcnToast({
    title: title,
    description: description,
    variant: "destructive",
  });
};

export const showInfoToast = (title: string, description?: string) => {
  shadcnToast({
    title: title,
    description: description,
  });
};

export const showWarningToast = (title: string, description?: string) => {
  shadcnToast({
    title: title,
    description: description,
    // Você pode adicionar um variant customizado para warning se desejar
  });
};

// Exemplo de como usar um toast com ação
export const showActionToast = (title: string, description: string, actionLabel: string, onActionClick: () => void) => {
  shadcnToast({
    title: title,
    description: description,
    action: {
      label: actionLabel,
      onClick: onActionClick,
    },
  });
};