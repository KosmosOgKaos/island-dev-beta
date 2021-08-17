import React from 'react'
import {
  Box,
  Text,
  ContentBlock,
  AlertMessage,
  BulletList,
  Bullet,
} from '@island.is/island-ui/core'

export const FinalView = () => (
  
  <Box>
    <Text variant="h2" marginBottom={5}>
      Umsókn þín er móttekin og verður tekin fyrir
    </Text>
    <ContentBlock>
      <AlertMessage
        type="success"
        title="Umsókn móttekin"
      />
    </ContentBlock>
    <Box padding="gutter">
      <BulletList type={'ul'}>
        <Bullet>
          Aðili frá Vinnumálastofnun mun fara yfir umsókn þína. Þetta getur tekið allt að tvo daga.
        </Bullet>
        <Bullet>
          Þú getur fylgst með stöðu umsóknar á Mínar síður og í appinu.
        </Bullet>
        <Bullet>
          Þú getur alltaf farið inn og breytt umsókn þinni í gegnum Mínar síður.
        </Bullet>
      </BulletList>
    </Box>
    <img src="https://images.ctfassets.net/8k0h54kbe6bj/2G5Ik3g9DwwKdtBkrgiGdI/8ad11e93b86e2256493ae0960164f4d1/work-life-event.svg" alt="Vinnulif" />
  </Box>
)
