import tsParser from '@typescript-eslint/parser';
import prettierConfig from 'eslint-config-prettier';
import prettier from 'eslint-plugin-prettier';

export default [
  {
    files: ['**/*.{js,jsx,ts,tsx}'], // Altere as extensões conforme necessário
    plugins: {
      prettier,
    },
    languageOptions: {
      parser: tsParser,
    },
    rules: {
      'object-curly-spacing': [
        'error',
        'always', // ou 'never'
        { imports: false }, // Não aplica a regra em imports
      ],
      ...prettierConfig.rules, // Regras do Prettier
      'prettier/prettier': 'error', // Erros de formatação como erros do ESLint
    },
  },
];
