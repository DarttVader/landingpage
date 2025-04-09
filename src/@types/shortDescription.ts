export const shortDescription = (description: string | undefined): string => {
  return description && description.length > 70 ? description.slice(0, 70) : description || '';
};