# Часы

## Настройки для  Husky и Lint-staged

1. Прописать в консоли: `npx husky init`
2. Прописать в папке .husky файлы с Git-хуками:  
2.1. Создать файл "pre-commit"  
2.2. Для файла "pre-commit" прописать команду: `npx lint-staged --concurrent false`
