export const normalizeGovernmentName = (governmentName: string | undefined): string => {
  if (!governmentName) {
    return 'Não especificado';
  }

  const lowerCaseName = governmentName.toLowerCase();

  if (lowerCaseName.includes('lula') || lowerCaseName.includes('dilma')) {
    return 'Lula/Dilma';
  }
  if (lowerCaseName.includes('fernando henrique') || lowerCaseName.includes('fhc')) {
    return 'FHC';
  }
  if (lowerCaseName.includes('collor')) {
    return 'Collor';
  }
  if (lowerCaseName.includes('sarney')) {
    return 'Sarney';
  }
  if (lowerCaseName.includes('itamar franco')) {
    return 'Itamar Franco';
  }
  if (lowerCaseName.includes('joão figueiredo')) {
    return 'Figueiredo';
  }
  // Add more specific mappings if needed for other governments
  
  return governmentName; // Return original if no specific mapping found
};