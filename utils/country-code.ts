export const countryCodes = [
  { code: '+63', country: 'Philippines', flag: 'PH', format: 'Format: 9XX-XXX-XXXX' },
  { code: '+1', country: 'United States', flag: 'US', format: 'Format: (XXX) XXX-XXXX' },
  { code: '+1', country: 'Canada', flag: 'CA', format: 'Format: (XXX) XXX-XXXX' },
  { code: '+44', country: 'United Kingdom', flag: 'GB', format: 'Format: XXXX XXX XXXX' },
  { code: '+61', country: 'Australia', flag: 'AU', format: 'Format: XXX XXX XXX' },
  { code: '+65', country: 'Singapore', flag: 'SG', format: 'Format: XXXX XXXX' },
  { code: '+60', country: 'Malaysia', flag: 'MY', format: 'Format: XX-XXX XXXX' },
  { code: '+66', country: 'Thailand', flag: 'TH', format: 'Format: XX-XXX-XXXX' },
  { code: '+84', country: 'Vietnam', flag: 'VN', format: 'Format: XXX XXX XXXX' },
  { code: '+62', country: 'Indonesia', flag: 'ID', format: 'Format: XXX-XXX-XXXX' },
  { code: '+81', country: 'Japan', flag: 'JP', format: 'Format: XXX-XXXX-XXXX' },
  { code: '+82', country: 'South Korea', flag: 'KR', format: 'Format: XXX-XXXX-XXXX' },
  { code: '+86', country: 'China', flag: 'CN', format: 'Format: XXX XXXX XXXX' },
  { code: '+91', country: 'India', flag: 'IN', format: 'Format: XXXXX XXXXX' },
  { code: '+971', country: 'UAE', flag: 'AE', format: 'Format: XX XXX XXXX' },
  { code: '+966', country: 'Saudi Arabia', flag: 'SA', format: 'Format: XX XXX XXXX' },
  { code: '+49', country: 'Germany', flag: 'DE', format: 'Format: XXX XXXXXXX' },
  { code: '+33', country: 'France', flag: 'FR', format: 'Format: XX XX XX XX XX' },
  { code: '+39', country: 'Italy', flag: 'IT', format: 'Format: XXX XXX XXXX' },
  { code: '+34', country: 'Spain', flag: 'ES', format: 'Format: XXX XXX XXX' },
  { code: '+55', country: 'Brazil', flag: 'BR', format: 'Format: (XX) XXXXX-XXXX' },
  { code: '+52', country: 'Mexico', flag: 'MX', format: 'Format: XX XXXX XXXX' },
  { code: '+7', country: 'Russia', flag: 'RU', format: 'Format: XXX XXX-XX-XX' },
  { code: '+27', country: 'South Africa', flag: 'ZA', format: 'Format: XX XXX XXXX' }
]

// Get country code based on selected country
export const getCountryCode = (countryName: string) => {
  const country = countryCodes.find(c => c.country === countryName)
  return country ? country.code : '+63'
}

// Get phone format based on selected country
export const getPhoneFormat = (countryName: string) => {
  const country = countryCodes.find(c => c.country === countryName)
  return country ? country.format : 'Format: Enter phone number'
}
