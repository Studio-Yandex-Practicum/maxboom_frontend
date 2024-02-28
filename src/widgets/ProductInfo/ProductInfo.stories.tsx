import { StoryObj, Meta } from '@storybook/react'

import { ProductInfo } from './ProductInfo'

export default { component: ProductInfo }

const Metadata = {
  title: 'widgets/ProductInfo',
  component: ProductInfo,
  parameters: {
    description: 'Описание'
  }
} as Meta<typeof ProductInfo>

type Story = StoryObj<typeof Metadata>

export const Default: Story = {
  args: {
    description: `Диск 3M Trizact Foam Disc P5000, 150 ммКомплект по фото. Забавно, но в сети запрос примеры текстов
        копирайтеров почти неразлучен с хвостами типа лучшие.Топ-20 лучших продающих статей, 50 лучших текстов
        для лендинга и т.д. Посыл прост: если вы копирайтеры, делайте так же, и Welcome To Top. А если
        заказчики, то теперь вам ясно, что такое успешный копирайтинг. И никаких проблем? Как бы не так.
        Проблема в том, что познание хорошего не работает без познания плохого. Слепое равнение на топов
        гарантировано загонит копирайтера-новичка в творческий тупик. А клиента превратит в маньяка, не
        способного объяснить, что ему не нравится. Конечно, контент контенту рознь. К примеру, не надо быть
        копирайтером, дабы понять, что с этим текстом что-то не так:`
  }
}
