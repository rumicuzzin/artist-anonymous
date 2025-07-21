import Select from 'react-select';

const countryOptions = [
  { value: 'CN', label: 'China' },
  { value: 'IN', label: 'India' },
  { value: 'US', label: 'United States' },
  { value: 'ID', label: 'Indonesia' },
  { value: 'PK', label: 'Pakistan' },
  { value: 'BR', label: 'Brazil' },
  { value: 'NG', label: 'Nigeria' },
  { value: 'BD', label: 'Bangladesh' },
  { value: 'RU', label: 'Russia' },
  { value: 'MX', label: 'Mexico' },
  { value: 'JP', label: 'Japan' },
  { value: 'ET', label: 'Ethiopia' },
  { value: 'PH', label: 'Philippines' },
  { value: 'EG', label: 'Egypt' },
  { value: 'VN', label: 'Vietnam' },
  { value: 'CD', label: 'Democratic Republic of Congo' },
  { value: 'TR', label: 'Turkey' },
  { value: 'IR', label: 'Iran' },
  { value: 'DE', label: 'Germany' },
  { value: 'TH', label: 'Thailand' },
  { value: 'GB', label: 'United Kingdom' },
  { value: 'FR', label: 'France' },
  { value: 'IT', label: 'Italy' },
  { value: 'TZ', label: 'Tanzania' },
  { value: 'ZA', label: 'South Africa' },
  { value: 'MM', label: 'Myanmar' },
  { value: 'KR', label: 'South Korea' },
  { value: 'CO', label: 'Colombia' },
  { value: 'KE', label: 'Kenya' },
  { value: 'ES', label: 'Spain' },
  { value: 'UG', label: 'Uganda' },
  { value: 'AR', label: 'Argentina' },
  { value: 'DZ', label: 'Algeria' },
  { value: 'SD', label: 'Sudan' },
  { value: 'UA', label: 'Ukraine' },
  { value: 'IQ', label: 'Iraq' },
  { value: 'AF', label: 'Afghanistan' },
  { value: 'PL', label: 'Poland' },
  { value: 'CA', label: 'Canada' },
  { value: 'MA', label: 'Morocco' },
  { value: 'SA', label: 'Saudi Arabia' },
  { value: 'UZ', label: 'Uzbekistan' },
  { value: 'PE', label: 'Peru' },
  { value: 'AO', label: 'Angola' },
  { value: 'MY', label: 'Malaysia' },
  { value: 'MZ', label: 'Mozambique' },
  { value: 'GH', label: 'Ghana' },
  { value: 'YE', label: 'Yemen' },
  { value: 'NP', label: 'Nepal' },
  { value: 'VE', label: 'Venezuela' },
  { value: 'MG', label: 'Madagascar' },
  { value: 'CM', label: 'Cameroon' },
  { value: 'CI', label: 'Ivory Coast' },
  { value: 'AU', label: 'Australia' },
  { value: 'NE', label: 'Niger' },
  { value: 'LK', label: 'Sri Lanka' },
  { value: 'BF', label: 'Burkina Faso' },
  { value: 'ML', label: 'Mali' },
  { value: 'RO', label: 'Romania' },
  { value: 'MW', label: 'Malawi' },
  { value: 'CL', label: 'Chile' },
  { value: 'KZ', label: 'Kazakhstan' },
  { value: 'ZM', label: 'Zambia' },
  { value: 'GT', label: 'Guatemala' },
  { value: 'EC', label: 'Ecuador' },
  { value: 'SN', label: 'Senegal' },
  { value: 'NL', label: 'Netherlands' },
  { value: 'SY', label: 'Syria' },
  { value: 'KH', label: 'Cambodia' },
  { value: 'JO', label: 'Jordan' },
  { value: 'AZ', label: 'Azerbaijan' },
  { value: 'BE', label: 'Belgium' },
  { value: 'CZ', label: 'Czech Republic' },
  { value: 'GR', label: 'Greece' },
  { value: 'PT', label: 'Portugal' },
  { value: 'CU', label: 'Cuba' },
  { value: 'SO', label: 'Somalia' },
  { value: 'DO', label: 'Dominican Republic' },
  { value: 'BO', label: 'Bolivia' },
  { value: 'TN', label: 'Tunisia' },
  { value: 'BJ', label: 'Benin' },
  { value: 'HT', label: 'Haiti' },
  { value: 'BW', label: 'Botswana' },
  { value: 'RW', label: 'Rwanda' },
  { value: 'GN', label: 'Guinea' },
  { value: 'ZW', label: 'Zimbabwe' },
  { value: 'PY', label: 'Paraguay' },
  { value: 'LA', label: 'Laos' },
  { value: 'BG', label: 'Bulgaria' },
  { value: 'SL', label: 'Sierra Leone' },
  { value: 'LB', label: 'Lebanon' },
  { value: 'LY', label: 'Libya' },
  { value: 'LR', label: 'Liberia' },
  { value: 'CR', label: 'Costa Rica' },
  { value: 'IE', label: 'Ireland' },
  { value: 'CF', label: 'Central African Republic' },
  { value: 'NZ', label: 'New Zealand' },
  { value: 'MR', label: 'Mauritania' },
  { value: 'PA', label: 'Panama' },
  { value: 'KW', label: 'Kuwait' },
  { value: 'HR', label: 'Croatia' },
  { value: 'MD', label: 'Moldova' },
  { value: 'GE', label: 'Georgia' },
  { value: 'ER', label: 'Eritrea' },
  { value: 'UY', label: 'Uruguay' },
  { value: 'MN', label: 'Mongolia' },
  { value: 'AM', label: 'Armenia' }
];

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: '#1f2937',
    borderColor: state.isFocused ? '#4ade80' : '#22c55e',
    boxShadow: 'none',
    padding: '4px',
    minHeight: '48px',
    '&:hover': {
      borderColor: '#4ade80'
    }
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: '#1f2937',
    border: '1px solid #22c55e',
    borderRadius: '8px',
    maxHeight: '200px'
  }),
  menuList: (provided) => ({
    ...provided,
    maxHeight: '200px',
    '&::-webkit-scrollbar': {
      width: '8px'
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: '#374151'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#22c55e',
      borderRadius: '4px'
    }
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#22c55e' : state.isFocused ? '#374151' : '#1f2937',
    color: state.isSelected ? '#000000' : '#4ade80',
    padding: '12px 16px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#374151',
      color: '#4ade80'
    }
  }),
  placeholder: (provided) => ({
    ...provided,
    color: '#6b7280',
    fontSize: '16px'
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#4ade80',
    fontSize: '16px'
  }),
  input: (provided) => ({
    ...provided,
    color: '#4ade80',
    fontSize: '16px'
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    backgroundColor: '#22c55e'
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: '#22c55e',
    '&:hover': {
      color: '#4ade80'
    }
  })
};

// This is the country select componenet 
const CountrySelect = ({ value, onChange }) => {
  return (
    <Select
      options={countryOptions}
      styles={customStyles}
      isSearchable={true}
      className="w-full"
      value={value}
      onChange={onChange}
      noOptionsMessage={() => "No countries found"}
    />
  );
};

export default CountrySelect;