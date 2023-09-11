# Style guide

1. Настроить IDE на перенос строки (вконце любого файл должна быть пустая строка)
2. Названия компонентов, файлов и папок компонентов указывать в CamelCase
3. Собственные типы у props компонентов пишем как export type Props = {}, импортированные как type TSomeName = {}
4. Деструктуризацию props делаем в компоненте: <br/>
export type Props = {} <br/>
const Test: FC\<Props> = props => { <br/>
const {firstProps, secondProps, ...rest} = props <br/>
}
5. К props компонентов пишем документацию в стиле jsDoc
6. svg файлы можно делать React компонентами. Можно будет управлять стилями.
