export interface ButtonProps {
  color: string;
  text: string;
  onPress: (e: EventTarget) => void;
  isSubmitting?: boolean;
  icon: Element;
  iconRight?: boolean;
  full?: boolean;
}

export interface StyleButtonProps {
  color: string;
}

export interface StyleTextProps {
  color: string;
}
