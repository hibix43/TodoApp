export interface StyledProps {
  className?: string;
}

export type Todo = {
  id: string;
  title: string;
  checked: boolean;
};

export type TabContent = {
  index: number;
  title: string;
  content: React.ReactNode;
};
