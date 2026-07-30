import { useEffect } from 'react';

export function useSEO({ title, description }: { title: string; description: string }) {
  useEffect(() => {
    // Update the document title for the browser tab
    document.title = title;

    // Update the meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
  }, [title, description]);
}
