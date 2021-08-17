import React from 'react'
import { Box, Checkbox, GridRow, Icon, Inline, Text } from '@island.is/island-ui/core'
import { ActiveStepComponentProps } from '../ActiveStep'
import { CheckboxController } from '@cmp'

export const DataConsent = ({ options, form }: ActiveStepComponentProps) => (
  <Box>
    <Text variant="h2" marginBottom={3}>
      Gagnaöflun
    </Text>

      <Box display="flex">
        <Box marginRight={2}><Icon color="blue400" type="outline" size="large" icon="download" /></Box>
        <Text variant="h4" marginBottom={6}>Eftirfarandi gögn verða sótt rafrænt</Text>
      </Box>

    <Text variant="h5" color="blue400">
      Persónuupplýsingar úr Þjóðskrá
    </Text>
    <Text marginBottom={4}>
      Til þess að auðvelda fyrir sækjum við persónuupplýsingar úr Þjóðskrá til
      þess að fylla út umsóknina
    </Text>

    <Text variant="h5" color="blue400">
      Netfang og símanúmer úr þínum stillingum
    </Text>
    <Text marginBottom={4}>
      Sótt eru gögn um menntun, símanúmer og tölvupóstfang af Mínum síðum
      Ísland.is
    </Text>

    <Text variant="h5" color="blue400">
      Tekjuupplýsingar frá Ríkisskattstjóra
    </Text>
    <Text marginBottom={4}>
      Sóttar eru staðgreiðsluupplýsingar til upplýsinga um laun síðustu 12
      mánuði
    </Text>

    <Text variant="h5" color="blue400">
      Elli- og örorkulífeyrisgreiðslur frá Tryggingastofnun og almennum
      lífeyrissjóðum
    </Text>
    <Text marginBottom={4}>
      Sóttar eru upplýsingar um greiðslur frá Tryggingastofnun og almennum
      lífeyrissjóðum til grundvallar útreikningi á bótarétti
    </Text>

    <Text variant="h5" color="blue400">
      Ökuskírteinaskrá
    </Text>
    <Text marginBottom={7}>Sóttar eru upplýsingar um ökuréttindi</Text>

    <Box marginBottom={7}>
      <CheckboxController
        id="consentCheck"
        label="Ég hef kynnt mér ofangreint"
        labelVariant="default"
        backgroundColor="blue"
        large
        control={form.control}
        rules={{
          required: 'Vinsamlegast farðu yfir upplýsingarnar og hakaðu við',
        }}
      />
    </Box>
  </Box>
)
