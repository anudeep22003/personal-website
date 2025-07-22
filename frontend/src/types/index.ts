export interface TocItem {
  id: string;
  label: string;
}

export interface TableOfContentsProps {
  items: TocItem[];
  activeSection: string;
  onSectionClick: (id: string) => void;
  className?: string;
}

export interface ContentSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}