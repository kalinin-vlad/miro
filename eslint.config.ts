import antfu from '@antfu/eslint-config'
import pluginReact from 'eslint-plugin-react'

export default antfu({
  react: true,
  typescript: true,
  jsonc: false,
  jsx: true,
  ignores: ['build/**/*'],
  plugins: { pluginReact },
  rules: {
    'pluginReact/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          minProperties: 2,
          multiline: true,
          consistent: true,
        },
        ObjectPattern: {
          minProperties: 4,
          multiline: true,
          consistent: true,
        },
        ImportDeclaration: {
          minProperties: 4,
          multiline: true,
          consistent: true,
        },
        ExportDeclaration: {
          minProperties: 4,
          multiline: true,
          consistent: true,
        },
      },
    ],
    'antfu/top-level-function': 'off',
    'func-style': ['error', 'expression', { allowArrowFunctions: true }],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
    ],
    'perfectionist/sort-imports': [
      'error',
      {
        type: 'line-length',
        groups: [
          'type-import',
          ['value-builtin', 'value-external'],
          'type-internal',
          'value-internal',
          'named-type-import',
          ['type-parent', 'type-sibling', 'type-index'],
          ['value-parent', 'value-sibling', 'value-index'],
          'ts-equals-import',
          'unknown',
        ],
      },
    ],
  },
})
